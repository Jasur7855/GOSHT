import {SCheckBoxLabel} from "./CheckBoxLabel.style"
interface ICheckBox{
    labelText:string
}




export const CheckBoxLabel = ( {labelText}:ICheckBox) => {
  return (
  <SCheckBoxLabel  htmlFor="">
    <input type="checkbox"/>
    {labelText}
  </SCheckBoxLabel>
  )
};