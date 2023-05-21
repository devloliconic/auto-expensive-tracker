export const findObjectInsideArray = <T extends object>(attribute: keyof T, value: unknown, array: T[]) => {
  return array.find((it) => it[attribute] === value);
};
