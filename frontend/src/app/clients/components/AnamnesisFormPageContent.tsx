'use client';

import React from "react";
import { AnamnesisForm } from "../interfaces/anamnesis-form.interface";
import Header from "./Header";
import SelectInput from "./SelectInput";
import StringInput from "./StringInput";
import NumberInput from "./NumberInput";
import { QuestionForm } from "../interfaces/question-form";

interface AnamnesisFormPageContentProps {
  questionsData: QuestionForm[],
}

export default function AnamnesisFormPageContent({ questionsData }: AnamnesisFormPageContentProps) {
  const [anamnesisForm, setAnamnesisForm] = React.useState(questionsData);

  return (
    <>
      <Header linkHref={"/clients"} text={"Ficha de anamnese"} />
      {anamnesisForm.map((questionObject) => (
        <React.Fragment key={questionObject.id}>
          { questionObject.type === 'string' && <StringInput text={questionObject.questionDescription} onChange={() => {}} />}
          { questionObject.type === 'boolean' && <SelectInput text={questionObject.questionDescription} onChange={() => {}} />}
          { questionObject.type === 'number' && <NumberInput text={questionObject.questionDescription} onChange={() => {}} />}
        </React.Fragment>
      ))}
    </>
  );
}