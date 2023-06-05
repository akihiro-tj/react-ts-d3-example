export const calcArea = (radius: number) => {
  return radius * radius * Math.PI;
};

export const calcRadius = (area: number) => {
  return Math.sqrt(area / Math.PI);
};
