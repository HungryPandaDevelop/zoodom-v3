
import CardsGallery from 'pages/catalog/parts/cardsDetail/CardsGallery';
import { choiseCurrentAnimal } from 'pages/catalog/parts/cardsDetail/Pitomnik/currentAnimal';
import moment from 'moment';
import Opisanie from './PitomnikInfo/Opisanie';

const PitomnikInfo = ({ listing, setOpenReserve, setReservAnimal }) => {

  let listOne = listing.registerOtherCompany && listing.registerOtherCompany.join(', ');

  let listTwo = listing.registerOtherCompanyCat && listing.registerOtherCompanyCat.join(', ');

  return (
    <div className='pitomnik-detail main-full'>
      <div className="pitomnik-description">
        <h2>
          Описание питомника:
        </h2>
        {listing.cards_description_full}
      </div>
      {listOne && (<div className="pitomnik-reg-type">
        <h3>
          Регистрации в кинологических ассоциациях:
        </h3>
        <span>{listOne}</span>
      </div>)}
      {listTwo && (
        <div className="pitomnik-reg-type">
          <h3>
            Регистрация в фелинологических организациях:
          </h3>
          <span>{listTwo}</span>
        </div>
      )}
      {listing.breeds_nurseries && (<div className="main-grid">
        <div className="col-12">
          <h2>Племенной фонд:</h2>
        </div>
        {listing.breeds_nurseries.map((item, index) => {
          const {
            breed,
            date_berth,
            gender,
            name,
            tituli,
            photoParents,
            animal,
            sertifikate,
            smotr,
            sert_disp,
            sert_patel,
            opisaone,
            soc_slujb,
            sport_napravlenia,
            sport_vidi,
            vidi_slugb
          } = item;


          let currentAnimal = choiseCurrentAnimal(animal);

          let currentDateFormat = moment(date_berth).format('D.MM.YYYY');

          let arrDressirovka = [soc_slujb, sport_napravlenia, sport_vidi, vidi_slugb];

          const setString = (arrDressirovka) => {
            let dressirovka = '';
            arrDressirovka.map(el => {
              el?.map(item => {
                dressirovka = dressirovka + item + ', ';
              });
            })
            if (dressirovka.slice(-2) === ', ') {
              dressirovka = dressirovka.slice(0, -2)
            }
            // console.log(dressirovka);
            return dressirovka;
          }




          return (
            <div key={index} className="pitomnik-breed-item col-6 col-sm-12 col-xs-12">
              <div className="pitomnik-breed-item-roof">
                <div>
                  <span className='pitomnik-breed-gender'>{gender}:</span>
                  <b className='pitomnik-breed-name'>
                    {name}
                  </b>
                </div>
                <div className='pitomnik-breed-type'>
                  <span>
                    Порода:
                  </span>
                  <b>{breed}</b>
                </div>
              </div>
              <div className="pitomnik-breeds-gallery">
                <CardsGallery getImages={photoParents} />
              </div>
              <ul className='ln pitomnik-breeds-info'>
                {date_berth && (<li>
                  <h3>
                    Дата рождения:
                  </h3>
                  <span>{currentDateFormat}</span>
                </li>)}
                {smotr === 'on' && (<li>
                  <h3>
                    Племенной смотр:
                  </h3>
                  <span>Есть</span>
                </li>)}
                {sert_disp && (<li>
                  <h3>
                    Сертификат на дисплазию:
                  </h3>
                  <span>{'HD: ' + sert_disp.HDa}  {'ED: ' + sert_disp.HDb}</span>
                </li>)}
                {sert_patel && (<li>
                  <h3>
                    Сертификат на пателлу:
                  </h3>
                  <span>PL: {sert_patel.PLa} / {sert_patel.PLb}</span>
                </li>)}

                {sertifikate && (<li>
                  <h3>
                    Родословная:
                  </h3>
                  <span>
                    <a target='_blank' href={sertifikate[0]} alt="ссылка">Ссылка</a>
                  </span>
                </li>)}

                {opisaone && (<li className='extra-line'>
                  <h4>
                    Описание
                  </h4>
                  <div>
                    <Opisanie text={opisaone} />
                  </div>
                </li>)}
                {tituli && (<li className='extra-line'>
                  <h4>
                    Титулы
                  </h4>
                  <div>
                    <Opisanie text={tituli} />
                  </div>
                </li>)}
                {(soc_slujb || sport_napravlenia || sport_vidi || vidi_slugb) && (<li className='extra-line'>
                  <h4>
                    Дрессировка
                  </h4>
                  <div>
                    <Opisanie text={setString(arrDressirovka)} />
                  </div>
                </li>)}

              </ul>
              <div className="btn-container">
                <div className="btn btn--blue" onClick={() => { setOpenReserve(true); setReservAnimal(currentAnimal); }}>
                  Заказать {currentAnimal}
                </div>
              </div>
            </div>
          )
        }
        )}

      </div>)}

    </div>
  )
}

export default PitomnikInfo;
