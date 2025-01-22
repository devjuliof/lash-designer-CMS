import Input from "@/app/shared/components/Input";

interface StringInputProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | undefined;
}

export default function StringInput({ text, onChange, value }: StringInputProps) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <Input value={value} onChange={onChange} />
    </>
  );
}