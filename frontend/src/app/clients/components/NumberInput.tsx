import Input from "@/app/shared/components/Input";

interface NumberInputProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function NumberInput({ text, onChange }: NumberInputProps) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <Input onChange={onChange} type="number"/>
    </>
  );
}