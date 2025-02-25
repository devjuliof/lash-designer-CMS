import Image from "next/image";
import formIcon from '../assets/form-icon.svg';
import personIcon from '../assets/person-icon.svg';
import trashIcon from '../assets/trash-icon.svg';
import React from "react";
import DeleteModal from "./DeleteModal";

interface ClientProfileProps {
  name: string;
  onClickForm: () => void;
  onClickProfile: () => void;
  onClickTrash: () => void;
}

export default function ClientProfile({ name, onClickForm, onClickProfile, onClickTrash }: ClientProfileProps) {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  return (
    <>
      <div className="bg-white w-full outline outline-1 outline-gray-400 h-14 rounded-2xl flex items-center px-6 justify-between">
        <p className="text-xl">{name}</p>
        <div className="gap-4 flex">
          <button onClick={onClickForm}><Image src={formIcon} alt="Form Icon" /></button>
          <button onClick={onClickProfile}><Image src={personIcon} alt="Person Icon" /></button>
          <button onClick={() => setIsOpenModal(true)}><Image src={trashIcon} alt="Trash Icon" /></button>
        </div>
      </div>

      {isOpenModal && <DeleteModal deleteFunction={() => onClickTrash()} closeModal={() => setIsOpenModal(false)} />}
    </>
  );
}