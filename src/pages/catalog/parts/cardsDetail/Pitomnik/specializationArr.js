export const specializationArr = (breeds)=>{

  let arrAnimal = [];

  let arrBreeds = [[],[]];

  breeds.map(item => {
    if (!arrAnimal.includes(item.animal)) {
      arrAnimal.push(item.animal);
    };
  });
  arrAnimal.map((item, index) => {
    breeds.map(item => {
      if (item.animal === arrAnimal[index]) {
        arrBreeds[index].push(item.breed);
      };
    });
    let chars = arrBreeds[index];
    let uniqueChars = [...new Set(chars)];
    arrBreeds[index] = uniqueChars;
  });

  return [arrAnimal, arrBreeds];
}