import Input from "./Input";

export default function InputWithLabel({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-500 font-bold" htmlFor={label}>{label}</label>
      <Input onChange={onChange} placeholder={placeholder}/>
    </div>
  );
}