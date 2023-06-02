import CardsListDefault from 'pages/cabinet/parts/cardsDefault/CardsListDefault';
import { useParams } from 'react-router-dom';
import generateTitle from 'pages/cabinet/cards/js/generateTitle';

const Pages = () => {

  const params = useParams();

  let titleForm = generateTitle(params.rubricId, ['Частные услуги', 'Мои компании', 'Мои специалисты', 'Мои Объявления']);
  let addBtnText = generateTitle(params.rubricId, ['Создать услугу', 'Добавить компанию', 'Добавить специалиста', 'Добавить объявления',]);

  return (
    <>
      <CardsListDefault
        nameList={params.rubricId}
        whatshow={['card_name']}
        whatshowName={['Название']}
        titleForm={titleForm}
        addBtnText={addBtnText}
      />
    </>
  )
}

export default Pages;