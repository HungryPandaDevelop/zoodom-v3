
import CardsGallery from 'pages/catalog/parts/cardsDetail/CardsGallery';
import { choiseCurrentAnimal } from 'pages/catalog/parts/cardsDetail/Pitomnik/currentAnimal';

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
            diplomi,
            gender,
            name,
            otsutstvie_disiplazii,
            otsutstvie_patelli,
            sertifikat_porodi,
            sertifikat_pochek,
            sertifikat_PKdef,
            titul_interchempiona,
            sertifikat_sma,
            tituli,
            ychastie_vistavki,
            photoParents,
            animal,
            sertifikate
          } = item;


          let currentAnimal = choiseCurrentAnimal(animal);


          return (
            <div key={index} className="pitomnik-breed-item col-6 col-sm-12 col-xs-12">
              <div className="pitomnik-breed-item-roof">
                <span className='pitomnik-breed-gender'>{gender}:</span>
                <div className='pitomnik-breed-name'>
                  {name}
                </div>
                <div className='pitomnik-breed-type'>
                  <h3>
                    Порода:
                  </h3>
                  <span>{breed}</span>
                </div>
              </div>
              <div className="pitomnik-breeds-gallery">
                <CardsGallery getImages={photoParents} />
              </div>
              <ul className='ln pitomnik-breeds-info'>
                {date_berth && (<li>
                  <h3>
                    Дата рождения
                  </h3>
                  <span>{date_berth}</span>
                </li>)}
                {diplomi && (<li>
                  <h3>
                    Дипломы
                  </h3>
                  <span>{diplomi}</span>
                </li>)}

                {otsutstvie_disiplazii && (<li>
                  <h3>
                    Сертификат на отсутствие дисплазии (HD)
                  </h3>
                  <span>Есть</span>
                </li>)}
                {otsutstvie_patelli && (<li>
                  <h3>
                    Сертификат на отсутствие пателлы (PL)
                  </h3>
                  <span>Есть</span>
                </li>)}
                {sertifikat_porodi && (<li>
                  <h3>
                    Сертификат породы
                  </h3>
                  <span>Есть</span>
                </li>)}
                {sertifikat_sma && (<li>
                  <h3>
                    Сертификат на отсутствие спинальной мышечной атрофии (SMA)
                  </h3>
                  <span>Есть</span>
                </li>)}
                {sertifikat_PKdef && (<li>
                  <h3>
                    Сертификат на отсутствие дифицита пируваткиназы (PKdef)
                  </h3>
                  <span>Есть</span>
                </li>)}
                {sertifikat_pochek && (<li>
                  <h3>
                    Сертификат на отсутствие поликистозы почек
                  </h3>
                  <span>Есть</span>
                </li>)}
                {sertifikat_pochek && (<li>
                  <h3>
                    Сертификат на отсутствие поликистозы почек
                  </h3>
                  <span>Есть</span>
                </li>)}
                {titul_interchempiona && (<li>
                  <h3>
                    Титул интерчемпиона
                  </h3>
                  <span>Есть</span>
                </li>)}
                {tituli && (<li>
                  <h3>
                    Титулы
                  </h3>
                  <span>{tituli}</span>
                </li>)}
                {ychastie_vistavki && (<li>
                  <h3>
                    Участие в выставках
                  </h3>
                  <span>{ychastie_vistavki}</span>
                </li>)}

                {sertifikate && (<li>
                  <h3>
                    Родословная
                  </h3>
                  <span>
                    <a target='_blank' href={sertifikate[0]} alt="ссылка">Ссылка</a>
                  </span>
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
