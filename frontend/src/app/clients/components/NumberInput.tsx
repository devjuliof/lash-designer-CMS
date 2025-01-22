import Input from "@/app/shared/components/Input";

interface NumberInputProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number | undefined;
}

export default function NumberInput({ text, onChange, value }: NumberInputProps) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <Input value={value} onChange={onChange} type="number"/>
    </>
  );
}