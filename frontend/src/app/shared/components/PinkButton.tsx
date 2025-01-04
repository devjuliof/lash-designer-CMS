type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PinkButton({text, onClick}: ButtonProps) {
  return <button className="bg-pink-600 text-white px-12 py-3 rounded-md font-bold" onClick={onClick}>{text}</button>
}