'use client';

import MenuMobile from "@/app/shared/components/MenuMobile";
import { useRouter } from "next/navigation";
import { ClientInterface } from "../interfaces/client.interface";
import AddButton from "./AddButton";
import ClientProfile from "./ClientProfile";
import PaginationFooter from "./PaginationFooter";
import RegisterClientModal from "./RegisterClientModal";
import SearchInput from "./SearchInput";
import { ClientsService } from "../services/clientsService";
import React from "react";
import { useDebounce } from "../hooks/useDebounce"

export default function ClientsPageContent({ initialClients }: { initialClients: ClientInterface[] }) {
  const router = useRouter();

  const [isFocused, setIsFocused] = React.useState(false);
  const [clients, setClients] = React.useState<ClientInterface[]>(initialClients);
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const debouncedSearch = useDebounce(inputSearch, 300);

  React.useEffect(() => {
    (async () => {
      if (!debouncedSearch) {
        const results = await ClientsService.getAllClients();
        setClients(results.data);
      }

      if (debouncedSearch) {
        const results = await ClientsService.getSearchClientsByName(debouncedSearch);
        setClients(results.data);
      }
    })()
  }, [debouncedSearch]);

  async function deleteClient(id: number) {
    await ClientsService.deleteClient(id);

    const updatedClients = await ClientsService.getAllClients();

    setClients(updatedClients.data);
  }

  function handleProfileClick(id: number) {
    router.push(`/clients/profile/${id}`);
  }

  function handleFormClick(id: number) {
    router.push(`/clients/anamnesis-form/${id}`);
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className={`transition-opacity duration-500 ease-in-out ${isFocused ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MenuMobile />
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out ${isFocused ? "translate-y-[-2.5rem]" : ""
        } flex-grow`}
      >
        <div className="flex gap-4 px-2 items-center">
          <SearchInput
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            setInputSearch={setInputSearch}
          />
          <AddButton onClick={() => setIsModalOpen((prev) => !prev)} />
        </div>

        <section className="px-2 mt-6 flex flex-col gap-4">

          {clients && clients.map((client: ClientInterface) => (
            <ClientProfile
              key={client.id}
              name={client.name}
              onClickForm={() => handleFormClick(client.id)}
              onClickProfile={() => handleProfileClick(client.id)}
              onClickTrash={() => deleteClient(client.id)}
            />
          ))}
        </section>
      </div>

      <div className="w-full px-2 flex justify-center mb-6">
        <PaginationFooter />
      </div>

      {isModalOpen && <RegisterClientModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}