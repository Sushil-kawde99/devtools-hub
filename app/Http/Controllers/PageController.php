<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        $tools = $this->getToolsData();
        $popularTools = array_values(array_filter($tools, fn($t) => $t['popular']));
        return view('pages.home', ['popularTools' => $popularTools]);
    }

    public function toolsIndex()
    {
        $tools = $this->getToolsData();
        $categories = ['All', 'JSON', 'Encoding', 'URL', 'Generator', 'Converter', 'Text', 'Security'];
        return view('pages.tools-index', ['tools' => $tools, 'categories' => $categories]);
    }

    public function about() { return view('pages.about'); }
    public function contact() { return view('pages.contact'); }
    public function privacy() { return view('pages.privacy'); }
    public function terms() { return view('pages.terms'); }

    private function getToolsData(): array
    {
        return [
            [
                'id' => 'json-formatter',
                'name' => 'JSON Formatter',
                'path' => '/tools/json-formatter',
                'icon' => '{ }',
                'category' => 'JSON',
                'description' => 'Format, prettify, minify, and validate JSON data instantly with character count and file download.',
                'popular' => true,
                'tags' => ['json', 'format', 'prettify', 'minify', 'beautify']
            ],
            [
                'id' => 'json-validator',
                'name' => 'JSON Validator',
                'path' => '/tools/json-validator',
                'icon' => '?',
                'category' => 'JSON',
                'description' => 'Validate JSON syntax and pinpoint exact syntax error lines and columns with instant status.',
                'popular' => true,
                'tags' => ['json', 'validate', 'check', 'syntax', 'error']
            ],
            [
                'id' => 'base64',
                'name' => 'Base64 Encoder / Decoder',
                'path' => '/tools/base64',
                'icon' => '??',
                'category' => 'Encoding',
                'description' => 'Encode plain text to Base64 format or decode Base64 strings back into original text locally.',
                'popular' => true,
                'tags' => ['base64', 'encode', 'decode', 'binary', 'string']
            ],
            [
                'id' => 'url-encoder',
                'name' => 'URL Encoder',
                'path' => '/tools/url-encoder',
                'icon' => '??',
                'category' => 'URL',
                'description' => 'Convert special characters and spaces into URL-safe percent-encoded format.',
                'popular' => false,
                'tags' => ['url', 'encode', 'uri', 'percent-encoding']
            ],
            [
                'id' => 'url-decoder',
                'name' => 'URL Decoder',
                'path' => '/tools/url-decoder',
                'icon' => '??',
                'category' => 'URL',
                'description' => 'Decode percent-encoded URL parameters back into human-readable text.',
                'popular' => false,
                'tags' => ['url', 'decode', 'uri', 'query-params']
            ],
            [
                'id' => 'uuid-generator',
                'name' => 'UUID Generator',
                'path' => '/tools/uuid-generator',
                'icon' => '??',
                'category' => 'Generator',
                'description' => 'Generate version 4 UUIDs (Universally Unique Identifiers) individually or in bulk.',
                'popular' => true,
                'tags' => ['uuid', 'guid', 'v4', 'random', 'generator']
            ],
            [
                'id' => 'timestamp',
                'name' => 'Timestamp Converter',
                'path' => '/tools/timestamp',
                'icon' => '??',
                'category' => 'Converter',
                'description' => 'Convert Unix epoch timestamps (seconds/milliseconds) to human-readable dates and vice versa.',
                'popular' => true,
                'tags' => ['timestamp', 'unix', 'epoch', 'date', 'converter']
            ],
            [
                'id' => 'text-case',
                'name' => 'Text Case Converter',
                'path' => '/tools/text-case',
                'icon' => '??',
                'category' => 'Text',
                'description' => 'Convert text between UPPERCASE, lowercase, camelCase, PascalCase, snake_case, kebab-case, and Title Case.',
                'popular' => false,
                'tags' => ['text', 'case', 'uppercase', 'lowercase', 'camelcase', 'snake_case']
            ],
            [
                'id' => 'color-converter',
                'name' => 'Color Converter',
                'path' => '/tools/color-converter',
                'icon' => '??',
                'category' => 'Converter',
                'description' => 'Convert color values seamlessly between HEX, RGB, and HSL with a live preview palette.',
                'popular' => true,
                'tags' => ['color', 'hex', 'rgb', 'hsl', 'converter', 'picker']
            ],
            [
                'id' => 'password-generator',
                'name' => 'Password Generator',
                'path' => '/tools/password-generator',
                'icon' => '??',
                'category' => 'Security',
                'description' => 'Generate customizable, strong, cryptographically secure passwords locally in your browser.',
                'popular' => true,
                'tags' => ['password', 'security', 'generator', 'random', 'hash']
            ]
        ];
    }
}
