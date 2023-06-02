export const choiseCurrentAnimal = (animal)=>{

  let animalChoise = ''

  if (animal === 'Собаки') {
    animalChoise =  'щенка';
  } else   if (animal === 'Коты') {
    animalChoise = 'котёнка'
  };

  return animalChoise;

}