import CardsEditDefault from 'pages/cabinet/parts/cardsDefault/CardsEditDefault';
import generateTitle from 'pages/cabinet/cards/js/generateTitle';
import { useParams } from 'react-router-dom';

const PagesEdit = () => {
  const params = useParams();


  const word = params.rubricId;
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  const fieldsName = 'fields' + capitalized;


  let titleForm = generateTitle(params.rubricId, ['Редактировать информацию о питомнике', 'Редактировать компанию', 'Редактировать объявление']);


  return <CardsEditDefault
    nameList={params.rubricId}
    fieldsDefault={fieldsName}
    titleForm={titleForm}
  />
}


export default PagesEdit;