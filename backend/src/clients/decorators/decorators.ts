import 'reflect-metadata';

export function QuestionDescription(
  questionDescription: string,
): PropertyDecorator {
  return (target: object, propertyKey: string | symbol) => {
    if (!Reflect.hasMetadata('questions', target)) {
      Reflect.defineMetadata('questions', [], target);
    }
    const questions = Reflect.getMetadata('questions', target);
    questions.push({ propertyKey, questionDescription });
    Reflect.defineMetadata('questions', questions, target);
  };
}
