export const getCounterIndex = (index: number, max: number) => {
  if (index === 0) {
    return max;
  }

  if (index === max + 1) {
    return 1;
  }

  return index;
};
