import { createElement, specialKeys, CSSCLASS } from "./shared";

export class Keyboard {
  constructor(keyboardKeys, handleMouseClick) {
    this.handleMouseClick = handleMouseClick;
    this.node = createElement('div', CSSCLASS.keyboard);
    this.keyCodes = Array.from(Object.keys(keyboardKeys));
    this.keyboardKeys = keyboardKeys;
    this.keyNodes = {};

    this._makeKeyboard();
  }

  _makeKeyboard() {
    const rowLengths = [14, 15, 13, 13, 9];

    for (let curRowIdx = 0, currRowFirstIndex = 0; curRowIdx < rowLengths.length; curRowIdx++) {
      const nextRowFirstIndex = currRowFirstIndex + rowLengths[curRowIdx];
      const curRowCodes = this.keyCodes.slice(currRowFirstIndex, nextRowFirstIndex);
      this._makeRow(curRowCodes);
      currRowFirstIndex = nextRowFirstIndex;
    }
  }

  _makeRow(row) {
    const rowNode = createElement('div', CSSCLASS.keyboardRow);

    row.forEach(elem => {
      const key = this._makeKey(elem);
      rowNode.append(key);
    })

    this.node.append(rowNode);
  }

  _makeKey(keyCode) {
    const keyNode = createElement('div', CSSCLASS.keyboardKey);
    keyNode.addEventListener('mousedown', () => this.handleMouseClick(keyCode));

    if (!this.keyNodes[keyCode]) {
      this.keyNodes[keyCode] = {
        node: keyNode,
        active: false
      };
    }

    keyNode.classList.add(CSSCLASS.keyboardKey);
    if (specialKeys.includes(keyCode)) keyNode.classList.add(CSSCLASS.noLetterKey);
    if (this.keyNodes[keyCode].active) keyNode.classList.add(CSSCLASS.active);
    keyNode.textContent = this.returnKeyValue(keyCode);

    return keyNode;
  }

  makeActive(keyCode) {
    if (!this.keyCodes.includes(keyCode)) return;
    this.keyNodes[keyCode].node.classList.add(CSSCLASS.active);
  }

  makeInactive(keyCode) {
    if (!this.keyCodes.includes(keyCode)) return;
    this.keyNodes[keyCode].node.classList.remove(CSSCLASS.active);
  }

  returnKeyValue(keyCode) {
    return this.keyboardKeys[keyCode];
  }

  updateKeyboardValues(keyboardKeys) {
    this.keyboardKeys = keyboardKeys;
    this._rerenderKeyValues();
  }

  _rerenderKeyValues() {
    this.keyCodes.forEach(code => {
      this.keyNodes[code].node.textContent = this.keyboardKeys[code]
    });
  }
}