'use client';

import React from "react";
import Header from "./Header";
import SelectInput, { IsChecked } from "./SelectInput";
import StringInput from "./StringInput";
import NumberInput from "./NumberInput";
import { QuestionForm } from "../interfaces/question-form";

interface AnamnesisFormPageContentProps {
  questionsData: QuestionForm[],
}

export default function AnamnesisFormPageContent({ questionsData }: AnamnesisFormPageContentProps) {
  const [anamnesisForm, setAnamnesisForm] = React.useState<QuestionForm[]>(questionsData);

  function handleOnChangeStringAndNumberInput(e, id) {
    setAnamnesisForm((prevState) => 
      prevState.map((questionForm) => {
        if (questionForm.id === id) {
          return {
            ...questionForm,
            value: e.target.value,
          };
        }
        return questionForm;
      })
    );
  }

  function handleOnChangeSelectInput(value, id) {
    setAnamnesisForm((prevState) => 
      prevState.map((questionForm) => {
        if (questionForm.id === id) {
          return {
            ...questionForm,
            value: value,
          };
        }
        return questionForm;
      })
    );
  }
  

  return (
    <>
      <Header linkHref={"/clients"} text={"Ficha de anamnese"} />
      {anamnesisForm.map((questionObject) => (
        <React.Fragment key={questionObject.id}>
          { questionObject.type === 'string' && (
            <StringInput 
              value={
                typeof questionObject.value === 'string'
                  ? questionObject.value : undefined
              } 
              text={questionObject.questionDescription} 
              onChange={(value) => handleOnChangeStringAndNumberInput(value, questionObject.id)} 
            />
          )}
          { questionObject.type === 'boolean' && (
            <SelectInput 
              text={questionObject.questionDescription}
              value={
                typeof questionObject.value === 'boolean'
                  ? questionObject.value === true
                    ? IsChecked.YES
                    : IsChecked.NOT
                  : undefined
              } 
              onChange={(e) => handleOnChangeSelectInput(e, questionObject.id)} 
            />
          )}
          { questionObject.type === 'number' && (
            <NumberInput 
              value={
                typeof questionObject.value === 'number'
                  ? questionObject.value : undefined
              } 
              text={questionObject.questionDescription} 
              onChange={(e) => handleOnChangeStringAndNumberInput(e, questionObject.id)} 
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}