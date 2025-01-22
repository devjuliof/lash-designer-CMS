import React from "react";

export enum IsChecked {
  YES = 1,
  NOT = 0,
}

interface SelectInputProps {
  text: string;
  onChange: (value: IsChecked) => void; 
  value: IsChecked | undefined;
}

export default function SelectInput({ text, onChange, value }: SelectInputProps) {
  const [isChecked, setIsChecked] = React.useState<IsChecked | undefined>(value);

  const handleChange = (newValue: IsChecked) => {
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <>
      <label htmlFor={text}>{text}</label>
      <div className="flex gap-4">
        <div>
          <input
            checked={isChecked === IsChecked.YES}
            name={text}
            id={`${text}-id-1`}
            type="radio"
            onChange={() => handleChange(IsChecked.YES)}
          />
          <label htmlFor={`${text}-id-1`}>Sim</label>
        </div>
        <div>
          <input
            checked={isChecked === IsChecked.NOT}
            name={text}
            id={`${text}-id-2`}
            type="radio"
            onChange={() => handleChange(IsChecked.NOT)}
          />
          <label htmlFor={`${text}-id-2`}>Não</label>
        </div>
      </div>
    </>
  );
}