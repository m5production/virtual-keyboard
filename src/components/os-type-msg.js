import { CSSCLASS, createElement, getOsType } from "./shared";

export function makeOsTypeMsg(){
  const msgNode = createElement('p', CSSCLASS.osTypeMsg);
  msgNode.textContent = `Клавиатура запущена в системе ${getOsType()}`;
  return msgNode;
}