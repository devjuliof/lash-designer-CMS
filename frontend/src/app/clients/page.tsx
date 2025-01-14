'use client';

import React from "react";
import MenuMobile from "../shared/components/MenuMobile";
import SearchInput from "./components/SearchInput";
import ClientProfile from "./components/ClientProfile";
import { ClientsService } from "./services/clientsService";
import { ClientInterface } from "./interfaces/client.interface";
import PaginationFooter from "./components/PaginationFooter";
import RegisterClientModal from "./components/RegisterClientModal";
import AddButton from "./components/AddButton";

export default function ClientsPage() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [clients, setClients] = React.useState<ClientInterface | undefined>();
  const [inputSearch, setInputSearch] = React.useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const debounceTimer = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    (async() => {
      if (!inputSearch) {
        const results = await ClientsService.getAllClients();
        setClients(results.data);
      }
    })()

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      if (inputSearch) {
        const results = await ClientsService.getSearchClientsByName(inputSearch);
        setClients(results.data);
      }
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [inputSearch]);
  
  async function deleteClient(id: number) {
    await ClientsService.deleteClient(id);

    updateClientsPage()
  }

  async function updateClientsPage() {
    const results = await ClientsService.getAllClients();
    setClients(results.data);
  }

  return (
    <div className="relative min-h-screen flex flex-col">
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
        } flex-grow`}
      >
        <div className="flex gap-4 px-2 items-center">
          <SearchInput isFocused={isFocused} setIsFocused={setIsFocused} setInputSearch={setInputSearch}/>
          <AddButton onClick={() => setIsModalOpen((prev) => !prev)}/>
        </div>
  
        <section className="px-2 mt-6 flex flex-col gap-4">
          {clients &&
            clients.map((client: ClientInterface) => (
              <ClientProfile key={client.id} name={client.name} onClickForm={() => {}} onClickProfile={() => {}} onClickTrash={() => deleteClient(client.id)} />
            ))}
        </section>
      </div>
  
      <div className="w-full px-2 flex justify-center mb-6">
        <PaginationFooter />
      </div>

    {isModalOpen && <RegisterClientModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>}
    </div>
  );  
}
