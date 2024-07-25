export const getRandomColor = () => {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);
  return `rgba(${random1},${random2},${random3}, 1.0)`;
};
