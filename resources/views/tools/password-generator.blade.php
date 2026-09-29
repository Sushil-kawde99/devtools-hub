@extends('layouts.app')

@section('title', 'Secure Password Generator | DevTools Hub')
@section('meta_description', 'Create strong, cryptographically secure passwords locally in your browser.')

@section('content')
<x-tool-layout
  title="Secure Password Generator"
  category="Security"
  description="Create strong, cryptographically secure passwords locally in your browser."
  privacyNotice="Passwords are generated locally in your browser and are never sent to a server."
>
  <div class="two-col-grid">
    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h3 style="margin-bottom: 20px;">Customizer</h3>

      <div class="form-group">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <label class="form-label" style="margin: 0;">Password Length</label>
          <span style="font-weight: 800; color: var(--primary);" id="pwdLengthValueDisplay">16 characters</span>
        </div>
        <input 
          type="range" 
          id="pwdLengthRange"
          min="6" 
          max="64" 
          value="16" 
          style="width: 100%; cursor: pointer;"
        />
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin: 24px 0;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <input type="checkbox" id="pwdCheckUpper" checked />
          <span>Uppercase Letters (A-Z)</span>
        </label>

        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <input type="checkbox" id="pwdCheckLower" checked />
          <span>Lowercase Letters (a-z)</span>
        </label>

        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <input type="checkbox" id="pwdCheckNumbers" checked />
          <span>Numbers (0-9)</span>
        </label>

        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <input type="checkbox" id="pwdCheckSymbols" checked />
          <span>Symbols (!@#$%^&*)</span>
        </label>
      </div>

      <button class="btn btn-primary" id="btnGeneratePassword" style="width: 100%;">
        ?? Generate New Password
      </button>
    </div>

    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div class="tool-actions-bar">
          <label class="form-label">Generated Password</label>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="generatedPasswordDisplay">?? Copy</button>
        </div>

        <div id="generatedPasswordDisplay" style="background: var(--dark-navy); color: #FFFFFF; padding: 20px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 1.2rem; word-break: break-all; margin-bottom: 20px; min-height: 68px; display: flex; align-items: center;">
          Password output...
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px; font-weight: 600;">
            <span>Strength:</span>
            <span id="pwdStrengthLabel" style="color: var(--cyan);">Strong</span>
          </div>
          <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
            <div id="pwdStrengthBar" style="height: 100%; width: 75%; background: var(--cyan); transition: var(--transition);"></div>
          </div>
        </div>
      </div>

      <div class="privacy-banner" style="margin-top: 24px;">
        <span>?? Passwords are generated locally in your browser and are never sent to a server.</span>
      </div>
    </div>
  </div>
</x-tool-layout>
@endsection
