export function validateQuestions(entity: any) {
  const allProperties = Object.getOwnPropertyNames(entity); // give to us all properties of an entity (class or object)
  const decoratedProperties = Reflect.getMetadata('questions', entity) || {};

  console.log(Object.keys(decoratedProperties));
  // Lista de propriedades a serem ignoradas
  const ignoredProperties = ['constructor'];

  console.log(allProperties);

  const missingDecorations = allProperties.filter((prop) => {
    console.log('Verificando a propriedade:', prop); // Adiciona o log para ver o valor de prop

    return (
      !ignoredProperties.includes(prop) && // Ignorar propriedades na lista
      !Object.keys(decoratedProperties).includes(prop) // Verificar se a propriedade tem o decorador
    );
  });

  console.log(Object.keys(decoratedProperties).includes('alergiaCosmeticos'));

  if (missingDecorations.length > 0) {
    throw new Error(
      `As seguintes propriedades não possuem o decorator @CompleteQuestion: ${missingDecorations.join(
        ', ',
      )}`,
    );
  }
}

export function getPropertyType(target: any, propertyKey: string) {
  const type = Reflect.getMetadata('design:type', target, propertyKey);
  return type.name.toLowerCase(); // Retorna 'boolean', 'string', 'number', etc.
}
