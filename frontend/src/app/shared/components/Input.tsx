type InputProps = {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
  return <input value={value} className="w-full h-12 px-2 rounded-xl border border-gray-400 outline-none" placeholder={placeholder} onChange={onChange}></input>
}