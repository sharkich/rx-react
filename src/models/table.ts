export const getTable = (size: number) => {
  const line = new Array(size).fill(0).map(() => 0);
  return new Array(size).fill(null).map(() => line);
};
