import CardsNewDefault from 'pages/cabinet/parts/cardsDefault/CardsNewDefault';
import generateTitle from 'pages/cabinet/cards/js/generateTitle';
import { useParams } from 'react-router-dom';

const PagesNew = () => {

  const params = useParams();

  const word = params.rubricId;
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  const fieldsName = 'fields' + capitalized;

  let titleForm = generateTitle(params.rubricId, ['Добавить услугу', 'Добавить компанию', 'Добавить объявление']);

  return <CardsNewDefault
    nameList={params.rubricId}
    fieldsDefault={fieldsName}
    titleForm={titleForm}
  />
}



export default PagesNew;