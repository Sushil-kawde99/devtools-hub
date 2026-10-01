/* DevTools Hub � Client-Side Tool Logic */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCopyButtons();
  initToolsDirectoryFilter();
  initJsonFormatter();
  initJsonValidator();
  initBase64Tool();
  initUrlEncoder();
  initUrlDecoder();
  initUuidGenerator();
  initTimestampConverter();
  initTextCaseConverter();
  initColorConverter();
  initPasswordGenerator();
  initContactForm();
});

/* 1. Navbar Mobile Drawer */
function initNavbar() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      menuBtn.textContent = drawer.classList.contains('open') ? '?' : '?';
    });
  }
}

/* 2. Global Copy Button Handling */
function initCopyButtons() {
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.copy-trigger-btn');
    if (!btn) return;

    const targetId = btn.getAttribute('data-target');
    let textToCopy = '';

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
          textToCopy = el.value;
        } else {
          textToCopy = el.textContent;
        }
      }
    }

    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);
      const originalText = btn.textContent;
      btn.textContent = '? Copied';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    } catch (err) {
      console.error('Clipboard copy failed: ', err);
    }
  });
}

/* 3. Tools Directory Search & Category Filter */
function initToolsDirectoryFilter() {
  const searchInput = document.getElementById('toolSearchInput');
  const categoryBtns = document.querySelectorAll('.category-filter-btn');
  const grid = document.getElementById('toolsListGrid');
  const noMsg = document.getElementById('noToolsFoundMsg');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (!grid) return;

  let currentCategory = 'All';
  let currentSearch = '';

  function filterTools() {
    const cards = grid.querySelectorAll('.tool-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const tags = card.getAttribute('data-tags') || '';
      const text = card.textContent.toLowerCase();

      const matchesCat = currentCategory === 'All' || cat === currentCategory;
      const matchesSearch = !currentSearch || text.includes(currentSearch) || tags.toLowerCase().includes(currentSearch);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noMsg) {
      noMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      filterTools();
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.replace('btn-primary', 'btn-secondary'));
      btn.classList.replace('btn-secondary', 'btn-primary');
      currentCategory = btn.getAttribute('data-category');
      filterTools();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      currentCategory = 'All';
      categoryBtns.forEach(b => {
        if (b.getAttribute('data-category') === 'All') {
          b.classList.replace('btn-secondary', 'btn-primary');
        } else {
          b.classList.replace('btn-primary', 'btn-secondary');
        }
      });
      filterTools();
    });
  }
}

/* 4. JSON Formatter */
function initJsonFormatter() {
  const input = document.getElementById('jsonInputTextarea');
  const output = document.getElementById('jsonOutputPre');
  const errorBox = document.getElementById('jsonFormatterError');
  const errorMsg = document.getElementById('jsonFormatterErrorMsg');
  const btnPrettify = document.getElementById('btnJsonPrettify');
  const btnMinify = document.getElementById('btnJsonMinify');
  const btnValidate = document.getElementById('btnJsonValidate');
  const btnClear = document.getElementById('btnJsonClear');
  const btnDownload = document.getElementById('btnJsonDownload');
  const inputCount = document.getElementById('jsonInputCharCount');
  const outputCount = document.getElementById('jsonOutputCharCount');

  if (!input || !output) return;

  function updateCounts() {
    if (inputCount) inputCount.textContent = 'Chars: ' + input.value.length;
    if (outputCount) outputCount.textContent = 'Chars: ' + (output.textContent.startsWith('//') ? '0' : output.textContent.length);
  }

  input.addEventListener('input', updateCounts);
  updateCounts();

  function hideError() {
    if (errorBox) errorBox.style.display = 'none';
  }

  function showError(msg) {
    if (errorBox && errorMsg) {
      errorMsg.textContent = msg;
      errorBox.style.display = 'flex';
    }
  }

  if (btnPrettify) {
    btnPrettify.addEventListener('click', () => {
      hideError();
      if (!input.value.trim()) { output.textContent = ''; updateCounts(); return; }
      try {
        const parsed = JSON.parse(input.value);
        output.textContent = JSON.stringify(parsed, null, 2);
      } catch (err) {
        showError(err.message);
        output.textContent = '';
      }
      updateCounts();
    });
  }

  if (btnMinify) {
    btnMinify.addEventListener('click', () => {
      hideError();
      if (!input.value.trim()) { output.textContent = ''; updateCounts(); return; }
      try {
        const parsed = JSON.parse(input.value);
        output.textContent = JSON.stringify(parsed);
      } catch (err) {
        showError(err.message);
        output.textContent = '';
      }
      updateCounts();
    });
  }

  if (btnValidate) {
    btnValidate.addEventListener('click', () => {
      hideError();
      if (!input.value.trim()) return;
      try {
        JSON.parse(input.value);
        alert('? Valid JSON structure!');
      } catch (err) {
        showError(err.message);
      }
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      input.value = '';
      output.textContent = '// Formatted or minified output will appear here...';
      hideError();
      updateCounts();
    });
  }

  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const text = output.textContent;
      if (!text || text.startsWith('//')) return;
      const blob = new Blob([text], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'formatted-data.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}

/* 5. JSON Validator */
function initJsonValidator() {
  const input = document.getElementById('jsonValidateInput');
  const btnValidate = document.getElementById('btnValidateJsonSyntax');
  const btnClear = document.getElementById('btnValidateJsonClear');
  const alertSuccess = document.getElementById('jsonValidSuccessAlert');
  const alertError = document.getElementById('jsonValidErrorAlert');
  const errMsg = document.getElementById('jsonValidErrMsg');
  const count = document.getElementById('jsonValidateCharCount');

  if (!input) return;

  input.addEventListener('input', () => {
    if (count) count.textContent = 'Chars: ' + input.value.length;
    if (alertSuccess) alertSuccess.style.display = 'none';
    if (alertError) alertError.style.display = 'none';
  });

  if (btnValidate) {
    btnValidate.addEventListener('click', () => {
      if (alertSuccess) alertSuccess.style.display = 'none';
      if (alertError) alertError.style.display = 'none';

      if (!input.value.trim()) return;

      try {
        JSON.parse(input.value);
        if (alertSuccess) alertSuccess.style.display = 'flex';
      } catch (err) {
        if (alertError && errMsg) {
          errMsg.textContent = err.message;
          alertError.style.display = 'flex';
        }
      }
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      input.value = '';
      if (count) count.textContent = 'Chars: 0';
      if (alertSuccess) alertSuccess.style.display = 'none';
      if (alertError) alertError.style.display = 'none';
    });
  }
}

/* 6. Base64 Encoder / Decoder */
function initBase64Tool() {
  const btnEncode = document.getElementById('btnBase64ModeEncode');
  const btnDecode = document.getElementById('btnBase64ModeDecode');
  const input = document.getElementById('base64InputTextarea');
  const output = document.getElementById('base64OutputPre');
  const label = document.getElementById('base64InputLabel');
  const btnProcess = document.getElementById('btnBase64Process');
  const btnClear = document.getElementById('btnBase64Clear');
  const alertBox = document.getElementById('base64Alert');
  const inCount = document.getElementById('base64InputCharCount');
  const outCount = document.getElementById('base64OutputCharCount');

  if (!input || !output) return;

  let mode = 'encode';

  function updateCounts() {
    if (inCount) inCount.textContent = 'Chars: ' + input.value.length;
    if (outCount) outCount.textContent = 'Chars: ' + (output.textContent.startsWith('//') ? '0' : output.textContent.length);
  }

  input.addEventListener('input', updateCounts);

  if (btnEncode && btnDecode) {
    btnEncode.addEventListener('click', () => {
      mode = 'encode';
      btnEncode.classList.replace('btn-secondary', 'btn-primary');
      btnDecode.classList.replace('btn-primary', 'btn-secondary');
      if (label) label.textContent = 'Plain Text Input';
      if (btnProcess) btnProcess.textContent = 'Encode ?';
      input.placeholder = 'Type text to encode...';
      output.textContent = '// Base64 output will appear here...';
      if (alertBox) alertBox.style.display = 'none';
      updateCounts();
    });

    btnDecode.addEventListener('click', () => {
      mode = 'decode';
      btnDecode.classList.replace('btn-secondary', 'btn-primary');
      btnEncode.classList.replace('btn-primary', 'btn-secondary');
      if (label) label.textContent = 'Base64 Input';
      if (btnProcess) btnProcess.textContent = 'Decode ?';
      input.placeholder = 'Paste Base64 string to decode...';
      output.textContent = '// Decoded text will appear here...';
      if (alertBox) alertBox.style.display = 'none';
      updateCounts();
    });
  }

  if (btnProcess) {
    btnProcess.addEventListener('click', () => {
      if (alertBox) alertBox.style.display = 'none';
      if (!input.value.trim()) {
        output.textContent = '';
        updateCounts();
        return;
      }

      try {
        if (mode === 'encode') {
          output.textContent = btoa(unescape(encodeURIComponent(input.value)));
        } else {
          output.textContent = decodeURIComponent(escape(atob(input.value.trim())));
        }
      } catch (err) {
        if (alertBox) {
          alertBox.textContent = mode === 'encode' ? '?? Error encoding text.' : '?? Invalid Base64 string format.';
          alertBox.style.display = 'flex';
        }
        output.textContent = '';
      }
      updateCounts();
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      input.value = '';
      output.textContent = (mode === 'encode' ? '// Base64 output will appear here...' : '// Decoded text will appear here...');
      if (alertBox) alertBox.style.display = 'none';
      updateCounts();
    });
  }
}

/* 7. URL Encoder */
function initUrlEncoder() {
  const input = document.getElementById('urlEncodeInput');
  const output = document.getElementById('urlEncodeOutputPre');
  const btnProcess = document.getElementById('btnProcessUrlEncode');
  const btnClear = document.getElementById('btnUrlEncodeClear');
  const alertBox = document.getElementById('urlEncodeAlert');
  const inCount = document.getElementById('urlEncodeInputCount');
  const outCount = document.getElementById('urlEncodeOutputCount');

  if (!input || !output) return;

  function updateCounts() {
    if (inCount) inCount.textContent = 'Chars: ' + input.value.length;
    if (outCount) outCount.textContent = 'Chars: ' + (output.textContent.startsWith('//') ? '0' : output.textContent.length);
  }

  input.addEventListener('input', updateCounts);

  if (btnProcess) {
    btnProcess.addEventListener('click', () => {
      if (alertBox) alertBox.style.display = 'none';
      if (!input.value.trim()) { output.textContent = ''; updateCounts(); return; }
      try {
        output.textContent = encodeURIComponent(input.value);
      } catch (err) {
        if (alertBox) { alertBox.textContent = '?? Failed to encode URL.'; alertBox.style.display = 'flex'; }
      }
      updateCounts();
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      input.value = '';
      output.textContent = '// Encoded URL string will appear here...';
      if (alertBox) alertBox.style.display = 'none';
      updateCounts();
    });
  }
}

/* 8. URL Decoder */
function initUrlDecoder() {
  const input = document.getElementById('urlDecodeInput');
  const output = document.getElementById('urlDecodeOutputPre');
  const btnProcess = document.getElementById('btnProcessUrlDecode');
  const btnClear = document.getElementById('btnUrlDecodeClear');
  const alertBox = document.getElementById('urlDecodeAlert');
  const inCount = document.getElementById('urlDecodeInputCount');
  const outCount = document.getElementById('urlDecodeOutputCount');

  if (!input || !output) return;

  function updateCounts() {
    if (inCount) inCount.textContent = 'Chars: ' + input.value.length;
    if (outCount) outCount.textContent = 'Chars: ' + (output.textContent.startsWith('//') ? '0' : output.textContent.length);
  }

  input.addEventListener('input', updateCounts);

  if (btnProcess) {
    btnProcess.addEventListener('click', () => {
      if (alertBox) alertBox.style.display = 'none';
      if (!input.value.trim()) { output.textContent = ''; updateCounts(); return; }
      try {
        output.textContent = decodeURIComponent(input.value);
      } catch (err) {
        if (alertBox) { alertBox.textContent = '?? Invalid percent-encoded URI string format.'; alertBox.style.display = 'flex'; }
        output.textContent = '';
      }
      updateCounts();
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      input.value = '';
      output.textContent = '// Decoded text will appear here...';
      if (alertBox) alertBox.style.display = 'none';
      updateCounts();
    });
  }
}

/* 9. UUID Generator */
function initUuidGenerator() {
  const countSelect = document.getElementById('uuidCountSelect');
  const upperCheck = document.getElementById('uuidUppercaseCheck');
  const btnRegen = document.getElementById('btnRegenerateUuid');
  const listHeader = document.getElementById('uuidListHeader');
  const container = document.getElementById('uuidListContainer');
  const btnCopyAll = document.getElementById('btnCopyAllUuids');

  if (!container) return;

  function generateV4UUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  function renderUuids() {
    const count = parseInt(countSelect ? countSelect.value : '5', 10);
    const isUpper = upperCheck ? upperCheck.checked : false;
    const list = [];

    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      let id = generateV4UUID();
      if (isUpper) id = id.toUpperCase();
      list.push(id);

      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; justify-content: space-between; background: #FFFFFF; padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.95rem;';
      
      const span = document.createElement('span');
      span.id = 'uuid-item-' + i;
      span.textContent = id;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-secondary btn-sm copy-trigger-btn';
      btn.setAttribute('data-target', 'uuid-item-' + i);
      btn.textContent = '?? Copy';

      row.appendChild(span);
      row.appendChild(btn);
      container.appendChild(row);
    }

    if (listHeader) listHeader.textContent = 'Generated List (' + list.length + ')';

    if (btnCopyAll) {
      btnCopyAll.onclick = async () => {
        const text = list.join('
');
        try {
          await navigator.clipboard.writeText(text);
          const orig = btnCopyAll.textContent;
          btnCopyAll.textContent = '? Copied All';
          setTimeout(() => btnCopyAll.textContent = orig, 2000);
        } catch (err) {}
      };
    }
  }

  if (countSelect) countSelect.addEventListener('change', renderUuids);
  if (upperCheck) upperCheck.addEventListener('change', renderUuids);
  if (btnRegen) btnRegen.addEventListener('click', renderUuids);

  renderUuids();
}

/* 10. Timestamp Converter */
function initTimestampConverter() {
  const liveDisplay = document.getElementById('liveCurrentTimestampDisplay');
  const unixInput = document.getElementById('unixToDateInput');
  const resUtc = document.getElementById('resUtcFormat');
  const resLocal = document.getElementById('resLocalFormat');
  const resIso = document.getElementById('resIsoFormat');
  const dateInput = document.getElementById('dateToUnixInput');
  const resSeconds = document.getElementById('resUnixSeconds');
  const resMs = document.getElementById('resUnixMs');

  if (!liveDisplay) return;

  function updateLiveClock() {
    liveDisplay.textContent = Math.floor(Date.now() / 1000).toString();
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  if (unixInput) {
    unixInput.value = Math.floor(Date.now() / 1000).toString();

    function convertUnixToDate() {
      if (!unixInput.value.trim()) {
        if (resUtc) resUtc.textContent = '-';
        if (resLocal) resLocal.textContent = '-';
        if (resIso) resIso.textContent = '-';
        return;
      }
      let val = Number(unixInput.value.trim());
      if (isNaN(val)) return;
      if (val > 100000000000) val = Math.floor(val / 1000);

      const d = new Date(val * 1000);
      if (isNaN(d.getTime())) return;

      if (resUtc) resUtc.textContent = d.toUTCString();
      if (resLocal) resLocal.textContent = d.toLocaleString();
      if (resIso) resIso.textContent = d.toISOString();
    }

    unixInput.addEventListener('input', convertUnixToDate);
    convertUnixToDate();
  }

  if (dateInput) {
    const now = new Date();
    dateInput.value = now.toISOString().slice(0, 16);

    function convertDateToUnix() {
      if (!dateInput.value) return;
      const d = new Date(dateInput.value);
      if (isNaN(d.getTime())) return;

      const ms = d.getTime();
      const sec = Math.floor(ms / 1000);

      if (resSeconds) resSeconds.textContent = sec.toString();
      if (resMs) resMs.textContent = ms.toString();
    }

    dateInput.addEventListener('input', convertDateToUnix);
    convertDateToUnix();
  }
}

/* 11. Text Case Converter */
function initTextCaseConverter() {
  const input = document.getElementById('textCaseInput');
  const wordCount = document.getElementById('textCaseWordCount');
  const charCount = document.getElementById('textCaseCharCount');
  const lineCount = document.getElementById('textCaseLineCount');

  if (!input) return;

  function updateStats() {
    const val = input.value;
    const chars = val.length;
    const words = val.trim() ? val.trim().split(/s+/).length : 0;
    const lines = val ? val.split('
').length : 0;

    if (wordCount) wordCount.textContent = 'Words: ' + words;
    if (charCount) charCount.textContent = 'Chars: ' + chars;
    if (lineCount) lineCount.textContent = 'Lines: ' + lines;
  }

  input.addEventListener('input', updateStats);
  updateStats();

  const bindCaseBtn = (id, fn) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        input.value = fn(input.value);
        updateStats();
      });
    }
  };

  bindCaseBtn('btnCaseUpper', txt => txt.toUpperCase());
  bindCaseBtn('btnCaseLower', txt => txt.toLowerCase());
  bindCaseBtn('btnCaseTitle', txt => txt.toLowerCase().replace(/(?:^|s|-)w/g, m => m.toUpperCase()));
  bindCaseBtn('btnCaseSentence', txt => txt.toLowerCase().replace(/(^s*w|[.!?]s*w)/g, c => c.toUpperCase()));
  bindCaseBtn('btnCaseCamel', txt => {
    const words = txt.trim().replace(/[^a-zA-Z0-9s]/g, '').split(/s+/);
    if (!words.length || !words[0]) return '';
    return words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  });
  bindCaseBtn('btnCasePascal', txt => {
    const words = txt.trim().replace(/[^a-zA-Z0-9s]/g, '').split(/s+/);
    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  });
  bindCaseBtn('btnCaseSnake', txt => {
    const words = txt.trim().replace(/[^a-zA-Z0-9s]/g, '').split(/s+/);
    return words.map(w => w.toLowerCase()).join('_');
  });
  bindCaseBtn('btnCaseKebab', txt => {
    const words = txt.trim().replace(/[^a-zA-Z0-9s]/g, '').split(/s+/);
    return words.map(w => w.toLowerCase()).join('-');
  });

  const clearBtn = document.getElementById('btnCaseClear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      updateStats();
    });
  }
}

/* 12. Color Converter */
function initColorConverter() {
  const picker = document.getElementById('colorNativePicker');
  const hexInput = document.getElementById('colorHexInput');
  const preview = document.getElementById('colorPreviewBox');
  const disHex = document.getElementById('colorDisplayHex');
  const disRgb = document.getElementById('colorDisplayRgb');
  const disHsl = document.getElementById('colorDisplayHsl');

  if (!hexInput) return;

  function hexToRgb(hex) {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    if (cleanHex.length !== 6) return null;
    const num = parseInt(cleanHex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function updateColor(hex) {
    const rgb = hexToRgb(hex);
    const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

    if (preview) {
      preview.style.background = rgb ? hex : '#E2E8F0';
      preview.textContent = rgb ? hex.toUpperCase() : 'Invalid Color';
    }

    if (disHex) disHex.textContent = rgb ? hex.toUpperCase() : 'Invalid';
    if (disRgb) disRgb.textContent = rgb ? 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')' : 'Invalid';
    if (disHsl) disHsl.textContent = hsl ? 'hsl(' + hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%)' : 'Invalid';
  }

  if (picker) {
    picker.addEventListener('input', (e) => {
      const val = e.target.value.toUpperCase();
      hexInput.value = val;
      updateColor(val);
    });
  }

  hexInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (picker && val.startsWith('#') && val.length === 7) picker.value = val;
    updateColor(val);
  });

  updateColor(hexInput.value);
}

/* 13. Password Generator */
function initPasswordGenerator() {
  const range = document.getElementById('pwdLengthRange');
  const lenDisplay = document.getElementById('pwdLengthValueDisplay');
  const checkUpper = document.getElementById('pwdCheckUpper');
  const checkLower = document.getElementById('pwdCheckLower');
  const checkNumbers = document.getElementById('pwdCheckNumbers');
  const checkSymbols = document.getElementById('pwdCheckSymbols');
  const btnRegen = document.getElementById('btnGeneratePassword');
  const pwdDisplay = document.getElementById('generatedPasswordDisplay');
  const strengthLabel = document.getElementById('pwdStrengthLabel');
  const strengthBar = document.getElementById('pwdStrengthBar');

  if (!pwdDisplay) return;

  function generatePassword() {
    const len = parseInt(range ? range.value : '16', 10);
    let chars = '';
    if (checkUpper && checkUpper.checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (checkLower && checkLower.checked) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (checkNumbers && checkNumbers.checked) chars += '0123456789';
    if (checkSymbols && checkSymbols.checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) {
      pwdDisplay.textContent = 'Select at least one character type';
      updateStrength('');
      return;
    }

    let result = '';
    const array = new Uint32Array(len);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(array);
      for (let i = 0; i < len; i++) {
        result += chars[array[i] % chars.length];
      }
    } else {
      for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }

    pwdDisplay.textContent = result;
    updateStrength(result);
  }

  function updateStrength(pwd) {
    if (!pwd) {
      if (strengthLabel) strengthLabel.textContent = 'None';
      if (strengthBar) { strengthBar.style.width = '0%'; strengthBar.style.background = '#CBD5E1'; }
      return;
    }

    let score = 0;
    if (pwd.length >= 12) score += 1;
    if (pwd.length >= 16) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    let label = 'Weak';
    let color = '#EF4444';
    let width = '25%';

    if (score === 3) { label = 'Medium'; color = '#F59E0B'; width = '50%'; }
    else if (score === 4) { label = 'Strong'; color = '#10B981'; width = '75%'; }
    else if (score >= 5) { label = 'Very Strong'; color = '#06B6D4'; width = '100%'; }

    if (strengthLabel) { strengthLabel.textContent = label; strengthLabel.style.color = color; }
    if (strengthBar) { strengthBar.style.width = width; strengthBar.style.background = color; }
  }

  if (range) {
    range.addEventListener('input', () => {
      if (lenDisplay) lenDisplay.textContent = range.value + ' characters';
      generatePassword();
    });
  }

  [checkUpper, checkLower, checkNumbers, checkSymbols].forEach(chk => {
    if (chk) chk.addEventListener('change', generatePassword);
  });

  if (btnRegen) btnRegen.addEventListener('click', generatePassword);

  generatePassword();
}

/* 14. Contact Form */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alert = document.getElementById('contactSuccessAlert');
  if (form && alert) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      alert.style.display = 'flex';
    });
  }
}
