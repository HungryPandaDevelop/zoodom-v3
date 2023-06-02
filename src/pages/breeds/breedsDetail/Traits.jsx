import ico1 from 'front-end/images/traits/golova.svg';
import ico2 from 'front-end/images/traits/morda.svg';
import ico3 from 'front-end/images/traits/zubi.svg';
import ico4 from 'front-end/images/traits/yshi.svg';
import ico5 from 'front-end/images/traits/glaza.svg';
import ico6 from 'front-end/images/traits/tuluvisho.svg';
import ico7 from 'front-end/images/traits/lapi.svg';
import ico8 from 'front-end/images/traits/sherst.svg';
import ico9 from 'front-end/images/traits/chelusti.svg';
import ico10 from 'front-end/images/traits/hvost.svg';

import ico1cat from 'front-end/images/traitsCat/golova.svg';
import ico2cat from 'front-end/images/traitsCat/morda.svg';
import ico3cat from 'front-end/images/traitsCat/zubi.svg';
import ico4cat from 'front-end/images/traitsCat/yshi.svg';
import ico5cat from 'front-end/images/traitsCat/glaza.svg';
import ico6cat from 'front-end/images/traitsCat/tuluvisho.svg';
import ico7cat from 'front-end/images/traitsCat/lapi.svg';
import ico8cat from 'front-end/images/traitsCat/sherst.svg';
import ico9cat from 'front-end/images/traitsCat/chelusti.svg';
import ico10cat from 'front-end/images/traitsCat/hvost.svg';

const Traits = ({ listings, breedsCategory }) => {

  console.log('listings', breedsCategory);

  const nameArr = ['Голова', 'Морда', 'Зубы', 'Уши', 'Глаза', 'Туловище', 'Лапы', 'Шерсть', 'Окрас', 'Хвост'];
  const slugArr = ['golova', 'morda', 'zuby', 'ushi', 'glaza', 'korpus', 'konechnosti', 'sherst', 'okras', 'hvost'];
  const imgArr = [ico1, ico2, ico3, ico4, ico5, ico6, ico7, ico8, ico9, ico10];
  const imgArrCat = [ico1cat, ico2cat, ico3cat, ico4cat, ico5cat, ico6cat, ico7cat, ico8cat, ico9cat, ico10cat];
  const obj = listings.otlichitelnye_cherty;
  return (
    <div className='breed-traits'>
      <h2>Отличительные черты</h2>
      {nameArr.map((item, index) => {
        if (obj[slugArr[index]]) {
          return (<div className="traits-item" id={`point-3.${index + 1}`} key={index}>
            <h3>{item}</h3>

            <img src={breedsCategory === 'koshki' ? imgArrCat[index] : imgArr[index]} alt="" />
            <div className="traits-text">
              {obj[slugArr[index]]}
            </div>
          </div>)
        }
      })}

    </div>
  )
}

export default Traits
