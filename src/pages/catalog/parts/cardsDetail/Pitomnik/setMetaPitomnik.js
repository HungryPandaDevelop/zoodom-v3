import { choiseCurrentAnimal } from 'pages/catalog/parts/cardsDetail/Pitomnik/currentAnimal';


export const setMetaPitomnik = (listing, typePitomnik) => {


  const getNameCat = (typePitomnik) => {
    let tempName = [];
    typePitomnik[0]?.map((item) => {
      {
        tempName.push(choiseCurrentAnimal(item));
      }
    });
    return tempName;
  }

  const title = `${'Питомник'} ${listing.card_name} ${typePitomnik[1]?.join(', ')}| Зооника`;
  const description = `${'Питомник'} ${listing.card_name} ${listing.card_city}  купить продажа ${getNameCat(typePitomnik)} ${typePitomnik[1]?.join(', ')}`;
  const keywords = `продажа породистых ${getNameCat(typePitomnik)} ${typePitomnik[1]?.join(', ')} из питомника ${listing.card_name}`;

  return { title, description, keywords }
}

