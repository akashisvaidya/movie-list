const alphabets = "qwertyuiopasdfghjklzxcvbnm";
export const randomCharGenerator = () => {
  return alphabets[Math.round(Math.random() * alphabets.length)];
};
