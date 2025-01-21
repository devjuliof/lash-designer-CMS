import 'reflect-metadata'; // importing the reflect-metada to use reflection typescript api

export function CompleteQuestion(
  questionDescription: string,
): PropertyDecorator {
  // using PropertyDecorator type that indicates that the decorator will be applied in a propertie of a class
  return (target: object, propertyKey: string | symbol) => {
    // this function will be executed when decorator is applied
    // target argument is the class where decorator was applied
    // propertyKey is the property that decorator was applied
    if (!Reflect.hasMetadata('questions', target)) {
      // verify is has metadata named as questions
      Reflect.defineMetadata('questions', [], target); // if not has metada define empty array as the metadata and name as questions
    }
    const questions = Reflect.getMetadata('questions', target); // take the metadata array
    questions.push({ propertyKey, questionDescription }); // add the question description in questions array
    Reflect.defineMetadata('questions', questions, target); // define metadata passing the questions array
  };
}
