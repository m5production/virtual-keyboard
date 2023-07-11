export function createElement(type, cssClass) {
  const elem = document.createElement(type);
  elem.classList.add(cssClass);
  return elem;
}

export function getOsType() {
  const navPlatform = navigator.platform.toLowerCase();
  const osType = navPlatform.indexOf('win') !== -1
    ? 'Windows'
    : navPlatform.indexOf('mac') !== -1
      ? 'Mac'
      : null;

  if (!osType) throw new Error('Unknown system');

  return osType;
}

export const CSSCLASS = {
  contentWrapper: 'content-wrapper',
  textArea: 'textarea-user-input',
  keyboard: 'keyboard',
  keyboardRow: 'keyboard--row',
  keyboardKey: 'keyboard--key',
  noLetterKey: 'no-letter-key',
  osTypeMsg: 'os-type-msg',
  langSwitchShortcut: 'lang-switch-shortcut',
  active: 'active'
}

export const layout = {
  Backquote: { en: '`', ru: 'ё', enShift: '~', ruShift: 'Ё' },
  Digit1: { en: '1', ru: '1', enShift: '!', ruShift: '!' },
  Digit2: { en: '2', ru: '2', enShift: '@', ruShift: '"' },
  Digit3: { en: '3', ru: '3', enShift: '#', ruShift: '№' },
  Digit4: { en: '4', ru: '4', enShift: '$', ruShift: ';' },
  Digit5: { en: '5', ru: '5', enShift: '%', ruShift: '%' },
  Digit6: { en: '6', ru: '6', enShift: '^', ruShift: ':' },
  Digit7: { en: '7', ru: '7', enShift: '&', ruShift: '?' },
  Digit8: { en: '8', ru: '8', enShift: '*', ruShift: '*' },
  Digit9: { en: '9', ru: '9', enShift: '(', ruShift: '(' },
  Digit0: { en: '0', ru: '0', enShift: ')', ruShift: ')' },
  Minus: { en: '-', ru: '-', enShift: '_', ruShift: '_' },
  Equal: { en: '=', ru: '=', enShift: '+', ruShift: '+' },
  Backspace: { en: 'Backspace', ru: 'Backspace', enShift: 'Backspace', ruShift: 'Backspace' },
  Tab: { en: 'Tab', ru: 'Tab', enShift: 'Tab', ruShift: 'Tab' },
  KeyQ: { en: 'q', ru: 'й', enShift: 'Q', ruShift: 'Й' },
  KeyW: { en: 'w', ru: 'ц', enShift: 'W', ruShift: 'Ц' },
  KeyE: { en: 'e', ru: 'у', enShift: 'E', ruShift: 'У' },
  KeyR: { en: 'r', ru: 'к', enShift: 'R', ruShift: 'К' },
  KeyT: { en: 't', ru: 'е', enShift: 'T', ruShift: 'Е' },
  KeyY: { en: 'y', ru: 'н', enShift: 'Y', ruShift: 'Н' },
  KeyU: { en: 'u', ru: 'г', enShift: 'U', ruShift: 'Г' },
  KeyI: { en: 'i', ru: 'ш', enShift: 'I', ruShift: 'Ш' },
  KeyO: { en: 'o', ru: 'щ', enShift: 'O', ruShift: 'Щ' },
  KeyP: { en: 'p', ru: 'з', enShift: 'P', ruShift: 'З' },
  BracketLeft: { en: '[', ru: 'х', enShift: '{', ruShift: 'Х' },
  BracketRight: { en: ']', ru: 'ъ', enShift: '}', ruShift: 'Ъ' },
  Backslash: { en: '\\', ru: '\\', enShift: '|', ruShift: '/' },
  Delete: { en: 'Del', ru: 'Del', enShift: 'Del', ruShift: 'Del' },
  CapsLock: { en: 'Caps', ru: 'Caps', enShift: 'Caps', ruShift: 'Caps' },
  KeyA: { en: 'a', ru: 'ф', enShift: 'A', ruShift: 'Ф' },
  KeyS: { en: 's', ru: 'ы', enShift: 'S', ruShift: 'Ы' },
  KeyD: { en: 'd', ru: 'в', enShift: 'D', ruShift: 'В' },
  KeyF: { en: 'f', ru: 'а', enShift: 'F', ruShift: 'А' },
  KeyG: { en: 'g', ru: 'п', enShift: 'G', ruShift: 'П' },
  KeyH: { en: 'h', ru: 'р', enShift: 'H', ruShift: 'Р' },
  KeyJ: { en: 'j', ru: 'о', enShift: 'J', ruShift: 'О' },
  KeyK: { en: 'k', ru: 'л', enShift: 'K', ruShift: 'Л' },
  KeyL: { en: 'l', ru: 'д', enShift: 'L', ruShift: 'Д' },
  Semicolon: { en: ';', ru: 'ж', enShift: ':', ruShift: 'Ж' },
  Quote: { en: "'", ru: 'э', enShift: "\"", ruShift: 'Э' },
  Enter: { en: 'Enter', ru: 'Enter', enShift: 'Enter', ruShift: 'Enter' },
  ShiftLeft: { en: 'Shift', ru: 'Shift', enShift: 'Shift', ruShift: 'Shift' },
  KeyZ: { en: 'z', ru: 'я', enShift: 'Z', ruShift: 'Я' },
  KeyX: { en: 'x', ru: 'ч', enShift: 'X', ruShift: 'Ч' },
  KeyC: { en: 'c', ru: 'с', enShift: 'C', ruShift: 'С' },
  KeyV: { en: 'v', ru: 'м', enShift: 'V', ruShift: 'М' },
  KeyB: { en: 'b', ru: 'и', enShift: 'B', ruShift: 'И' },
  KeyN: { en: 'n', ru: 'т', enShift: 'N', ruShift: 'Т' },
  KeyM: { en: 'm', ru: 'ь', enShift: 'M', ruShift: 'Ь' },
  Comma: { en: ',', ru: 'б', enShift: '<', ruShift: 'Б' },
  Period: { en: '.', ru: 'ю', enShift: '>', ruShift: 'Ю' },
  Slash: { en: '/', ru: '.', enShift: '?', ruShift: ',' },
  ArrowUp: { en: '↑', ru: '↑', enShift: '↑', ruShift: '↑' },
  ShiftRight: { en: 'Shift', ru: 'Shift', enShift: 'Shift', ruShift: 'Shift' },
  ControlLeft: { en: 'Ctrl', ru: 'Ctrl', enShift: 'Ctrl', ruShift: 'Ctrl' },
  MetaLeft: { en: 'Win', ru: 'Win', enShift: 'Win', ruShift: 'Win' },
  AltLeft: { en: 'Alt', ru: 'Alt', enShift: 'Alt', ruShift: 'Alt' },
  Space: { en: '', ru: '', enShift: '', ruShift: '' },
  AltRight: { en: 'Alt', ru: 'Alt', enShift: 'Alt', ruShift: 'Alt' },
  ArrowLeft: { en: '←', ru: '←', enShift: '←', ruShift: '←' },
  ArrowDown: { en: '↓', ru: '↓', enShift: '↓', ruShift: '↓' },
  ArrowRight: { en: '→', ru: '→', enShift: '→', ruShift: '→' },
  ControlRight: { en: 'Ctrl', ru: 'Ctrl', enShift: 'Ctrl', ruShift: 'Ctrl' }
}

export const specialKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];