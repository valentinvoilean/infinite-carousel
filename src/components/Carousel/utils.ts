export const getCounterIndex = (index: number, max: number) => {
  const intIndex = Math.round(index);
  return intIndex === 0 ? max : intIndex === max + 1 ? 1 : intIndex;
};
