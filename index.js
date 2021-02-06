const sum = (fromN, toN) => {
  if (fromN < toN) {
    return fromN + sum(fromN + 1, toN);
  } else {
    return fromN;
  }
};

module.exports = sum;
