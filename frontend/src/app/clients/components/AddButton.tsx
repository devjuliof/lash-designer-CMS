export default function AddButton({ 
  onClick 
}: { 
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="bg-violet-400 text-white rounded-2xl w-16 h-14 text-4xl transition-transform duration-500 ease-in-out">
      {'+'}
    </button>
  );
}
