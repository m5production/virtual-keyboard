import { CSSCLASS, createElement } from "./shared";

export class Textarea{
  constructor(){
    this.node = createElement('textarea', CSSCLASS.textArea);
    this._isFocused = true;
    
    this._toggleFocusState = this._toggleFocusState.bind(this);

    this.node.addEventListener('focus', this._toggleFocusState)
    this.node.addEventListener('blur', this._toggleFocusState)
  }

  get isFocused(){
    return this._isFocused;
  }

  _toggleFocusState(){
    this._isFocused = !this._isFocused;
  }

  addChar(char){
    this.node.value += char;
  }
}