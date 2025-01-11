import Image from "next/image";
import formIcon from '../assets/form-icon.svg';
import personIcon from '../assets/person-icon.svg';
import trashIcon from '../assets/trash-icon.svg';

interface ClientProfileProps {
  name: string;
}

export default function ClientProfile({ name }: ClientProfileProps) {
  return (
    <div className="bg-white w-full outline outline-1 outline-gray-400 h-14 rounded-2xl flex items-center px-6 justify-between">
          <p className="text-xl">{ name }</p>
          <div className="gap-4 flex">
            <button><Image src={formIcon} alt="Form Icon"/></button>
            <button><Image src={personIcon} alt="Person Icon"/></button>
            <button><Image src={trashIcon} alt="Trash Icon"/></button>
          </div>
        </div>
  );
}