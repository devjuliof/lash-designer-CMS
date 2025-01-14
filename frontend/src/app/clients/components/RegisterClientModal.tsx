import InputWithLabel from "@/app/shared/components/InputWithLabel";
import PurpleButton from "@/app/shared/components/PurpleButton";
import React from 'react';
import { ClientsService } from "../services/clientsService";
import { formatErrors } from "../utils/utils";

interface ClientData {
  name: string;
  aniversario: string;
  telefone: string;
  email: string;
}

export default function RegisterClientModal({ 
  isOpen, 
  closeModal 
}: {
  isOpen: true,
  closeModal: () => void;
}) {
  const [clientData, setClientData] = React.useState<ClientData>({
    name: '',
    aniversario: '',
    telefone: '',
    email: '',
  });

  const [errors, setErrors] = React.useState<string[]>([]);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof ClientData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  async function registerClient() {
    const response = await ClientsService.registerClient(clientData);
    if (response.created) {
      closeModal();
      return;
    }

    const formattedErrors = formatErrors(response.message);
    setErrors(formattedErrors);
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
      onClick={closeModal}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4">
          <InputWithLabel 
            label={'Nome'} 
            placeholder={'Cliente'} 
            onChange={handleInputChange('name')} 
          />
          <InputWithLabel 
            label={'Aniversário'} 
            placeholder="ex: AAAA-MM-DD" 
            onChange={handleInputChange('aniversario')} 
          />
          <InputWithLabel 
            label={'Telefone'} 
            placeholder="ex: +35192482843" 
            onChange={handleInputChange('telefone')}
          />
          <InputWithLabel
            label={'Email'}
            placeholder="ex: client@gmail.com"
            onChange={handleInputChange('email')}
          />
        </div>

        {errors && errors.length > 0 && (
          <div className="mt-4">
            {errors.map((error, index) => (
              <p key={index} className="text-red-400">{error}</p>
            ))}
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <PurpleButton text="Cadastrar" onClick={() => registerClient()} />
        </div>
      </div>
    </div>
  );
}
