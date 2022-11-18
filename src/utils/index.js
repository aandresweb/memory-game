export const duplicateAndShuffle = (array) => {
  let duplicated = [...array, ...array];

  let shuffle = duplicated
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffle;
};
