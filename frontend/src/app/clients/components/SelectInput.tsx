import { ChangeEventHandler } from "react";

export default function SelectInput({ text, onChange } : { text: string, onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <div className="flex gap-4">
        <div>
          <input name={text} id={`${text}-id-1`} type="radio"></input>
          <label htmlFor={`${text}-id-1`}>Sim</label>
        </div>
        <div>
          <input name={text} id={`${text}-id-2`} type="radio"></input>
          <label htmlFor={`${text}-id-2`}>Não</label>
        </div>
      </div>
    </>
  );
}