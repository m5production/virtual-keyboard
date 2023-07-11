import { CSSCLASS, createElement } from "./shared";

export function makeLangSwitchShortcutMsg(){
  const node = createElement('div', CSSCLASS.langSwitchShortcut);
  node.textContent = 'Для переключения языка одновременно нажмите левые Ctrl + Alt';
  return node;
}