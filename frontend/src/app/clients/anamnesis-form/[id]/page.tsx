import React from "react";
import { ClientsService } from "../../services/clientsService";
import AnamnesisFormPageContent from "../../components/AnamnesisFormPageContent";

interface AnamnesisFormPageProps {
  params: Promise<{ id: string }>,
}

export default async function AnamnesisFormPage({ params }: AnamnesisFormPageProps) {
  const { id } = await params;
  const clientId = Number(id);

  const formData = await ClientsService.getClientAnamnesisFormByClientId(clientId);

  return (
    <AnamnesisFormPageContent formData={formData}/>
  );
}