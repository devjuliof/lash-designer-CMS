import { ClientsService } from "../../services/clientsService";
import ClientForm from "../../components/ClientForm";
import backArrow from "../../assets/back-arrow.svg";
import React from "react";
import Header from "../../components/Header";

interface ProfilePageProps {
  params: Promise<{ id: string }>,
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;
  const clientId = Number(id);

  const client = await ClientsService.getClientById(clientId);

  return (
    <>
      <Header linkHref={"/clients"} text={"Cliente"}/>
      <section className="p-6 flex flex-col gap-6">
        <ClientForm originalClient={client} />
      </section>
    </>
  );
}
