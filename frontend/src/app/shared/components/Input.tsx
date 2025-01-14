type InputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function Input({onChange, placeholder}: InputProps) {
  return <input className="w-full h-12 px-2 rounded-xl border border-gray-400 outline-none" placeholder={placeholder} onChange={onChange}></input>
}