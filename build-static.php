<?php
use Illuminate\Http\Request;

require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

if (method_exists($kernel, 'bootstrap')) {
    $kernel->bootstrap();
}

$siteUrl = 'https://devtools-hub.pages.dev';

$routes = [
    '/', '/tools', '/about', '/contact', '/privacy', '/terms',
    '/tools/json-formatter', '/tools/json-validator', '/tools/base64',
    '/tools/url-encoder', '/tools/url-decoder', '/tools/uuid-generator',
    '/tools/timestamp', '/tools/text-case', '/tools/color-converter',
    '/tools/password-generator',
];

$dist = __DIR__ . '/dist';

function rrmdir(string $dir): void {
    if (!is_dir($dir)) return;
    foreach (scandir($dir) as $f) {
        if ($f === '.' || $f === '..') continue;
        $p = "$dir/$f";
        is_dir($p) ? rrmdir($p) : unlink($p);
    }
    rmdir($dir);
}

function rcopy(string $src, string $dst): void {
    if (!file_exists($src)) return;
    if (is_file($src)) {
        @mkdir(dirname($dst), 0777, true);
        copy($src, $dst);
        return;
    }
    @mkdir($dst, 0777, true);
    foreach (scandir($src) as $f) {
        if ($f === '.' || $f === '..') continue;
        rcopy("$src/$f", "$dst/$f");
    }
}

rrmdir($dist);
mkdir($dist, 0777, true);

$appUrl = function_exists('config') ? rtrim((string)config('app.url', ''), '/') : '';
foreach ($routes as $path) {
    $request = Request::create($siteUrl . $path, 'GET');
    $response = $kernel->handle($request);

    if ($response->getStatusCode() !== 200) {
        echo "FAILED $path (status {$response->getStatusCode()})
";
        $kernel->terminate($request, $response);
        continue;
    }

    $html = $response->getContent();
    foreach (array_filter([$appUrl, 'http://localhost:8000', 'http://127.0.0.1:8000', 'http://localhost']) as $old) {
        if ($old) {
            $html = str_replace($old, $siteUrl, $html);
        }
    }

    $file = $path === '/' ? "$dist/index.html" : "$dist" . $path . "/index.html";
    @mkdir(dirname($file), 0777, true);
    file_put_contents($file, $html);
    echo "OK $path
";

    $kernel->terminate($request, $response);
}

foreach (['css', 'js', 'favicon.svg', 'robots.txt', 'sitemap.xml'] as $item) {
    rcopy(__DIR__ . "/public/$item", "$dist/$item");
}

if (file_exists("$dist/index.html")) {
    copy("$dist/index.html", "$dist/404.html");
}

echo "
Done. Deploy the 'dist' folder to Cloudflare Pages.
";
