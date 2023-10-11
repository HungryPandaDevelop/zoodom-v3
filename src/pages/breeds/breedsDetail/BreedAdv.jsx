import ico1 from 'front-end/images/adv/sobaka-naznachenie.svg';
import ico2 from 'front-end/images/adv/sobaka-stoimost.svg';
import ico3 from 'front-end/images/adv/sobaka-dlitelnost_zhizni.svg';
import ico4 from 'front-end/images/adv/sobaka-potomstvo.svg';
import ico5 from 'front-end/images/adv/sobaka-rost.svg';
import ico6 from 'front-end/images/adv/sobaka-ves.svg';


import ico7 from 'front-end/images/adv/sobaka-linka.svg';
import ico8 from 'front-end/images/adv/sobaka-soderzhanie.svg';

import ico50 from 'front-end/images/adv/strana-proishogdeniya-sobaki.svg';
import ico9 from 'front-end/images/adv/razmer-sobaki.svg';


import ico32 from 'front-end/images/adv/dlitelnost-zhizni-koshka.svg';
import ico33 from 'front-end/images/adv/potomstvo-koshka.svg';
import ico34 from 'front-end/images/adv/razmer-koshka.svg';

const BreedAdv = ({ listings, breedsCategory }) => {

  const renderItemFromTo = (id, title, ico, partsText) => {
    return (
      <>
        {
          (listings[id] && (listings[id].num_1 || listings[id].num_2)) && (
            <>
              <div className="breed-adv-item">
                <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
                <div className="breed-adv-item-info">
                  <h3>{title}</h3>
                  <h4>
                    {listings[id].num_1 && (<>от {listings[id].num_1} </>)}
                    {listings[id].num_2 && (<>до {listings[id].num_2} {partsText}</>)}
                  </h4>
                </div>
              </div>
            </>
          )
        }
      </>
    )
  }

  const renderItemFromToFamale = (id, title, ico, partsText) => {
    return (
      <>
        {
          (listings[id] && listings[id].devochka.num_1) && (
            <>
              <div className="breed-adv-item">
                <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
                <div className="breed-adv-item-info">
                  <h3>{title}</h3>
                  <h4>
                    Мальчик  от {listings[id].malchik.num_1 + ' '}
                    до {listings[id].malchik.num_2} {partsText}
                  </h4>
                  <h4>
                    Девочка от {listings[id].devochka.num_1 + ' '}
                    до {listings[id].devochka.num_2} {partsText}
                  </h4>


                </div>
              </div>
            </>
          )
        }

      </>
    )
  }

  const renderItem = (id, title, ico) => {

    return (<>
      {

        listings[id]?.length > 0 && (
          <div className="breed-adv-item">
            <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
            <div className="breed-adv-item-info">
              <h3>{title}</h3>
              <h4>{listings[id]}</h4>
            </div>
          </div>
        )}</>);
  }
  const renderItemArr = (id, title, ico) => {

    return (<>
      {
        listings[id]?.length > 0 && (
          <div className="breed-adv-item">
            <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
            <div className="breed-adv-item-info">
              <h3>{title}</h3>
              {listings[id].map((item, index) => (<h4 key={index}>{item.label}</h4>))}
            </div>
          </div>
        )}</>);
  }
  const renderItemObj = (id, title, ico) => {

    return (
      <>
        {
          listings[id]?.label && (
            <div className="breed-adv-item">
              <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
              <div className="breed-adv-item-info">
                <h3>{title}</h3>
                <h4>{listings[id].label}</h4>
              </div>
            </div>
          )
        }
      </>);
  }

  return (
    <div className="breed-adv">
      {breedsCategory === 'koshki' ? (renderItemObj('razmer_koshka', 'Размер', ico34)) : (renderItemObj('razmer', 'Размер', ico9))}


      {renderItemFromTo('stoimost_shhenka', 'Стоимость щенка', ico2, 'тыс. руб.')}
      {renderItemFromTo('stoimost_kotenka', 'Стоимость котенка', ico2, 'тыс. руб.')}

      {renderItemFromTo('dlitelnost_zhizni', 'Длительность жизни', ico3, 'лет')}
      {renderItemFromTo('dlitelnost_zhizni_koshka', 'Длительность жизни', ico32, 'лет')}

      {renderItemFromTo('potomstvo', 'Потомство', ico4, 'щенков')}
      {renderItemFromTo('potomstvo_koshka', 'Потомство', ico33, 'котят')}

      {renderItem('linka', 'Линька', ico7)}
      {renderItemObj('strana', 'Страна происхождения', ico50)}
      {renderItemFromToFamale('rost_v_holke', 'Рост в холке', ico5, 'см.')}
      {renderItemFromToFamale('ves', 'Вес', ico6, 'кг.')}
      {breedsCategory !== 'koshki' && (renderItemArr('naznachenie', 'Назначение', ico1))}
      {/* {renderItemArr('naznachenie', 'Назначение', ico1)} */}
















      {breedsCategory !== 'koshki' && (renderItemArr('soderzhanie', 'Содержание', ico8))}
      {/* {renderItemArr('soderzhanie', 'Содержание', ico8)} */}

      {breedsCategory !== 'koshki' && (renderItem('osobennosti_porody', 'Особенности породы', ico3))}




      {/* <div className="btn-container">
        <a href="#" className="btn btn--blue">Купить щенка {listings.title}</a>
      </div> */}


    </div>
  )
}

export default BreedAdv
