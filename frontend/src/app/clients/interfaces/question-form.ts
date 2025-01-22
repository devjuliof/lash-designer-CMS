export interface QuestionForm {
  id: number,
  questionPropertie: string;
  questionDescription: string;
  type: 'string' | 'boolean' | 'number';
  value: string | boolean | number;
}