import { Keyboard } from "./keyboard";
import { layout, specialKeys } from "./shared";

export class KeyboardPressController {
  constructor(sendToInput) {
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this._handleShiftUp = this._handleShiftUp.bind(this);

    const paramsFromLocalStorage = JSON.parse(localStorage.getItem('params'));
    this.isShiftKey = false;
    this.isCapsKey = false;
    this.lang = paramsFromLocalStorage ? paramsFromLocalStorage.lang : 'en';
    this.keyboardKeys = this.getKeyboardKeys();
    this.keyboard = new Keyboard(this.keyboardKeys, this.handleMouseDown);
    this.sendToInput = sendToInput;

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this._handleKeyUp);
    window.addEventListener('beforeunload', () => localStorage.setItem('params', JSON.stringify({'lang': this.lang, caps: this.isCapsKey})));
  }

  handleMouseDown(code){
    const event = new KeyboardEvent('keydown', {
      code: code,
      shiftKey: this.isShiftKey,
    });

    this.handleKeyDown(event);
    document.addEventListener('mouseup', () => this.handleMouseUp(code));
  }

  handleMouseUp(code){
    const event = new KeyboardEvent('keydown', {
      code: code
    });
    this._handleKeyUp(event);
  }

  _handleKeyUp(e) {
    if (e.code.includes('Shift')) {
      this._handleShiftUp();
    }

    if (e.code === 'CapsLock' && this.isCapsKey) return;

    this.keyboard.makeInactive(e.code);
  }

  handleKeyDown(e) {
    const keyCodes = Array.from(Object.keys(layout));
    if (!keyCodes.includes(e.code)) return;

    this.keyboard.makeActive(e.code);

    const saveDefaultKeyCodes = ['Backspace', 'Enter', 'Delete'];

    if (saveDefaultKeyCodes.includes(e.code)) return;

    e.preventDefault();

    if(!specialKeys.includes(e.code) || (e.code.includes('Arrow') || e.code === 'Tab')) this.sendToInput(this.keyboardKeys[e.code]);

    this._handleSpecKeyDown(e);
  }

  _handleSpecKeyDown(e) {
    let isParamsChanged = false;

    if (e.code === 'CapsLock') {
      this.isCapsKey = !this.isCapsKey;
      isParamsChanged = true;
    }

    if (e.code.includes('Shift')) {
      this.isShiftKey = true;
      isParamsChanged = true;
    }

    if (e.ctrlKey && e.altKey) {
      this.lang = this.lang === 'en' ? 'ru' : 'en';
      isParamsChanged = true;
    }

    if (isParamsChanged) {
      this.keyboard.updateKeyboardValues(this.getKeyboardKeys());
    }
  }

  _handleShiftUp() {
    this.isShiftKey = false;
    this.keyboard.updateKeyboardValues(this.getKeyboardKeys());
  }

  getKeyboardKeys() {
    this.keyboardKeys = {};

    for (let code in layout) {
      const value = layout[code][this._makeParams()];

      this.keyboardKeys[code] = this.isCapsKey && !specialKeys.includes(code)
        ? value.toUpperCase()
        : value;
    }

    return this.keyboardKeys;
  }

  _makeParams() {
    const shiftSuffix = this.isShiftKey ? 'Shift' : '';
    return this.lang + shiftSuffix;
  }
}