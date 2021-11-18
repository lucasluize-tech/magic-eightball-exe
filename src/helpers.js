const pickRandom = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export default pickRandom;
