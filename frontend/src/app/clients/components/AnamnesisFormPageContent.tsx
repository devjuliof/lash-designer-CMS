'use client';

import React from "react";
import { AnamnesisForm } from "../interfaces/anamnesis-form.interface";
import Header from "./Header";

interface AnamnesisFormPageContentProps {
  formData: AnamnesisForm,
}

export default function AnamnesisFormPageContent({ formData }: AnamnesisFormPageContentProps) {
  const [anamnesisForm, setAnamnesisForm] = React.useState<AnamnesisForm>(formData);

  return (
    <>
      <Header linkHref={"/clients"} text={"Ficha de anamnese"} />
    </>
  );
}