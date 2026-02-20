export const isEven = (value: number): boolean => {
  if (!Number.isFinite(value)) {
    throw new Error("O valor precisa ser um número finito.");
  }

  return value % 2 === 0;
};
