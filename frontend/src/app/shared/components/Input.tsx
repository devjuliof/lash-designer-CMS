type InputProps = {
  value?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string | undefined;
}

export default function Input({ value, onChange, placeholder, type }: InputProps) {
  return <input value={value} type={type || 'text'} className="w-full h-12 px-2 rounded-xl border border-gray-400 outline-none" placeholder={placeholder} onChange={onChange}></input>
}