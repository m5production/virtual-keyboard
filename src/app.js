import { InputController } from './components/input-controller';
import { makeLangSwitchShortcutMsg } from './components/langShortcut';
import { makeOsTypeMsg } from './components/os-type-msg';
import { CSSCLASS, createElement } from './components/shared';

const contentWrapper = createElement('div', CSSCLASS.contentWrapper);
const inputController = new InputController();
const osTypeMsg = makeOsTypeMsg();
const langSwitchMsg = makeLangSwitchShortcutMsg();
contentWrapper.append(inputController.textarea.node, inputController.keyboardNode, osTypeMsg, langSwitchMsg);

document.body.append(contentWrapper);

inputController.textarea.node.focus();