'use client';

import InputWithLabel from "@/app/shared/components/InputWithLabel";
import { ClientData } from "../interfaces/client-data.interface";
import React, { ChangeEvent } from "react";
import PurpleButton from "@/app/shared/components/PurpleButton";
import { ClientsService } from "../services/clientsService";

enum InputType {
  NAME = 'name',
  EMAIL = 'email',
  ANIVERSARIO = 'aniversario',
  TELEFONE = 'telefone'
}

export default function ClientForm({ originalClient }: { originalClient: ClientData }) {
  const [client, setClient] = React.useState<ClientData>(originalClient);
  const [isDirty, setIsDirty] = React.useState<boolean>(true);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, inputType: InputType) {
    let key = '';
    if (inputType === InputType.NAME) key = InputType.NAME;
    if (inputType === InputType.EMAIL) key = InputType.EMAIL;
    if (inputType === InputType.ANIVERSARIO) key = InputType.ANIVERSARIO;
    if (inputType === InputType.TELEFONE) key = InputType.TELEFONE;

    setClient({
      ...client,
      [key]: e.target.value,
    })
  }

  function checkIfModified() {
    setIsDirty(
      client.name !== originalClient.name ||
      client.email !== originalClient.email ||
      client.aniversario !== originalClient.aniversario ||
      client.telefone !== originalClient.telefone
    );
  }

  React.useEffect(() => {
    checkIfModified();
  }, [client]);

  async function saveChanges() {
    if (!client.id) {
      return;
    }
    await ClientsService.updateClientById(client.id, client);
    // send some response to client if works or not
    setIsDirty(false);
    window.location.reload();
  }

  return (
    <>
      <InputWithLabel value={client.name} label={"Nome"} onChange={(e) => handleInputChange(e, InputType.NAME)} />
      <InputWithLabel value={client.aniversario} label={"Aniversário"} onChange={(e) => handleInputChange(e, InputType.ANIVERSARIO)} />
      <InputWithLabel value={client.telefone} label={"Telefone"} onChange={(e) => handleInputChange(e, InputType.TELEFONE)} />
      <InputWithLabel value={client.email} label={"Email"} onChange={(e) => handleInputChange(e, InputType.EMAIL)} />

      <div className="flex justify-center">
        <PurpleButton disabled={!isDirty} text={"Salvar mudanças"} onClick={() => saveChanges()} />
      </div>
    </>
  );
}