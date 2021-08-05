import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FocusStyleManager } from "@blueprintjs/core";

import { InputGroup } from '@blueprintjs/core'
FocusStyleManager.onlyShowFocusOnTabs();

const elm = document.getElementById("root");

const moMacro = (action: string) => {
  return `
  /macroerror off\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /ac ${action} <mo>\n
  /micon ${action}\n
  `
}
const Page = () => {
  const [action, setAction] = useState('')

  return (
    <div>
      <InputGroup onChange={(t) => { setAction(t.target.value) }}></InputGroup>
      {moMacro(action).split("\n").map(l => <div>{l}</div>)}
    </div>
  )
}
if (elm) {
  ReactDOM.render(<Page />, elm);
}
