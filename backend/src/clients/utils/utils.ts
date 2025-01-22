export function getPropertyType(target: any, propertyKey: string) {
  const type = Reflect.getMetadata('design:type', target, propertyKey);
  return type.name.toLowerCase();
}
