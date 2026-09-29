<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'DevTools Hub � Free Online Developer Tools')</title>
    <meta name="description" content="@yield('meta_description', 'Fast, simple, and privacy-friendly online developer tools. Format JSON, generate UUIDs, encode Base64, convert text cases, and more � 100% free & client-side.')">
    <meta name="keywords" content="developer tools, json formatter, json validator, base64 encoder, url encoder, uuid generator, timestamp converter, text case converter, color converter, password generator">
    <meta name="author" content="Sushil K. Kawde � DevTools Hub">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://YOUR_PROJECT.vercel.app">
    <meta property="og:title" content="@yield('title', 'DevTools Hub � Free Online Developer Tools')">
    <meta property="og:description" content="@yield('meta_description', 'Fast, simple, and privacy-friendly online developer tools.')">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://YOUR_PROJECT.vercel.app">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <div class="app-wrapper">
        @include('components.navbar')

        <main class="main-content">
            @yield('content')
        </main>

        @include('components.footer')
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
