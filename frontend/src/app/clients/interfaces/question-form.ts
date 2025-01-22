import { IsChecked } from "../components/SelectInput";

export interface QuestionForm {
  id: number,
  questionPropertie: string;
  questionDescription: string;
  type: 'string' | 'boolean' | 'number';
  value: IsChecked | string | number | undefined;
}