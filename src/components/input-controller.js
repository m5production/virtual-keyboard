import { KeyboardPressController } from "./keyboard-press-controller";
import { Textarea } from "./make-textarea";

export class InputController {
  constructor() {
    this.getInputValue = this.getInputValue.bind(this)

    this.textarea = new Textarea();
    this.keyboardController = new KeyboardPressController(this.getInputValue);
    this.keyboardNode = this.keyboardController.keyboard.node;

  }

  getInputValue(value) {
    value = value === 'Tab'
      ? ' ' + ' ' + ' ' + ' '
      : value;
    
    this.textarea.addChar(value);
  }
}