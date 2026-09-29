<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ToolController extends Controller
{
    public function jsonFormatter() { return view('tools.json-formatter'); }
    public function jsonValidator() { return view('tools.json-validator'); }
    public function base64() { return view('tools.base64'); }
    public function urlEncoder() { return view('tools.url-encoder'); }
    public function urlDecoder() { return view('tools.url-decoder'); }
    public function uuidGenerator() { return view('tools.uuid-generator'); }
    public function timestamp() { return view('tools.timestamp'); }
    public function textCase() { return view('tools.text-case'); }
    public function colorConverter() { return view('tools.color-converter'); }
    public function passwordGenerator() { return view('tools.password-generator'); }
}
