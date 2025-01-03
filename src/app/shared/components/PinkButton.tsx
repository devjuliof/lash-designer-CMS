type InputProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

export default function PinkButton({text, onClick}: InputProps) {
  return <button className="bg-pink-600 text-white px-12 py-3 rounded-md font-bold" onClick={onClick}>{text}</button>
}