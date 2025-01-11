'use client';

import React from "react";
import MenuMobile from "../shared/components/MenuMobile";
import SearchInput from "./components/SearchInput";
import PurpleButton from "./components/PurpleButton";
import ClientProfile from "./components/ClientProfile";
import { ClientsService } from "./services/clientsService";
import { ClientInterface } from "./interfaces/client.interface";

export default function ClientsPage() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [clients, setClients] = React.useState<ClientInterface | undefined>();

  React.useEffect(() => {
    async function fetchClients() {
      const results = await ClientsService.getAllClients();
      setClients(results.data);
    }

    fetchClients();
  }, []);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <MenuMobile />
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out ${
          isFocused ? 'translate-y-[-2.5rem]' : ''
        }`}
      >
        <div className="flex gap-4 px-2 items-center">
          <SearchInput isFocused={isFocused} setIsFocused={setIsFocused} />
          <PurpleButton text={'+'} />
        </div>

        <section className="px-2 mt-6 flex flex-col gap-4">
          {clients && clients.map((client: ClientInterface) => <ClientProfile key={client.id} name={client.name}/>)}
        </section>
      </div>
    </div>
  );
}
