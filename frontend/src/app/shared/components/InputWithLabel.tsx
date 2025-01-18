import Input from "./Input";

export default function InputWithLabel({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-500 font-bold" htmlFor={label}>{label}</label>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}