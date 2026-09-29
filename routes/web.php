<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ToolController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/tools', [PageController::class, 'toolsIndex'])->name('tools.index');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/privacy', [PageController::class, 'privacy'])->name('privacy');
Route::get('/terms', [PageController::class, 'terms'])->name('terms');

Route::get('/tools/json-formatter', [ToolController::class, 'jsonFormatter'])->name('tools.json-formatter');
Route::get('/tools/json-validator', [ToolController::class, 'jsonValidator'])->name('tools.json-validator');
Route::get('/tools/base64', [ToolController::class, 'base64'])->name('tools.base64');
Route::get('/tools/url-encoder', [ToolController::class, 'urlEncoder'])->name('tools.url-encoder');
Route::get('/tools/url-decoder', [ToolController::class, 'urlDecoder'])->name('tools.url-decoder');
Route::get('/tools/uuid-generator', [ToolController::class, 'uuidGenerator'])->name('tools.uuid-generator');
Route::get('/tools/timestamp', [ToolController::class, 'timestamp'])->name('tools.timestamp');
Route::get('/tools/text-case', [ToolController::class, 'textCase'])->name('tools.text-case');
Route::get('/tools/color-converter', [ToolController::class, 'colorConverter'])->name('tools.color-converter');
Route::get('/tools/password-generator', [ToolController::class, 'passwordGenerator'])->name('tools.password-generator');
