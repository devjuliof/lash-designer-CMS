export default function PurpleButton({ text }: { text: string }) {
  return (
    <button className="bg-violet-400 text-white rounded-2xl w-16 h-14 text-4xl transition-transform duration-500 ease-in-out">
      {text}
    </button>
  );
}
