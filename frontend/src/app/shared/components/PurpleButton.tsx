type ButtonProps = {
  disabled?: boolean;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PurpleButton({ disabled, text, onClick }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${disabled ? "bg-purple-200 cursor-not-allowed" : ""
        } bg-purple-500 text-white px-12 py-3 rounded-md font-bold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
