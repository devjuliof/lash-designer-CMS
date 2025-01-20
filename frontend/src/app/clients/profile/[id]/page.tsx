import { ClientsService } from "../../services/clientsService";
import ClientForm from "../../components/ClientForm";
import Image from "next/image";
import backArrow from "../../assets/back-arrow.svg";
import React from "react";
import Link from "next/link";
import { connection } from 'next/server'

interface ProfilePageProps {
  params: Promise<{ id: string }>,
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  await connection();
  const { id } = await params;
  const clientId = Number(id);


  const client = await ClientsService.getClientById(clientId);

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <Link href="/clients">
          <Image src={backArrow} alt="back arrow" className="mr-2 cursor-pointer" />
        </Link>
        <h2 className="text-3xl text-center flex-grow">Cliente</h2>
        <div className="w-[24px]"></div>
      </div>
      <section className="p-6 flex flex-col gap-6">
        <ClientForm originalClient={client} />
      </section>
    </>
  );
}
