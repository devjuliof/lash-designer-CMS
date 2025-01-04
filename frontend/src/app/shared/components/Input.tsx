type InputProps = {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({onChange}: InputProps) {
  return <input className="w-full h-12 px-2 rounded-xl border border-gray-400 outline-none" onChange={onChange}></input>
}