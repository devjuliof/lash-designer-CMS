import Input from "@/app/shared/components/Input";

interface StringInputProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function StringInput({ text, onChange }: StringInputProps) {
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <Input onChange={onChange} />
    </>
  );
}