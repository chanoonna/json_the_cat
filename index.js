const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return null;
  }
  if (desc.length > 3) {
    console.log(desc);
  }
});
