import { Field } from 'redux-form';

import { useState, useEffect, useRef } from 'react';


import { connect } from 'react-redux';

import RenderInputSelect from '../../fields/RenderInputSelect';

import RenderInputFileDropZone from '../../fields/RenderInputFileDropZone';
import RenderInputSwitch from '../../fields/RenderInputSwitch';
import RenderInputFile from '../../fields/RenderInputFile';
import RenderInputTextarea from '../../fields/RenderInputTextarea';
import RenderInputText from '../../fields/RenderInputText';
import RenderInputCheckbox from '../../fields/RenderInputCheckbox';
import RenderInputDate from '../../fields/RenderInputDate'; // дата

import SerfDog from '../../extraFields/RenderInputBreedsChoise/SerfDog';
import SerfCat from '../../extraFields/RenderInputBreedsChoise/SerfCat';


import ListPopup from './ListPopup';

import { openClosePopup } from './renderList';

import { uploadBreeds } from 'components/forms/extraFields/RenderInputBreedsChoise/uploadBreeds';
import RenderInputMulty from 'components/forms/fields/RenderInputMulty';

const TempateInput = (props) => {




  const {
    input,
    nameMain,
  } = props;



  const [currentAnimal, setCurrentAnimal] = useState();

  const [breedsName, setBreedsName] = useState('Выберете породу');

  const [сhoiseNameFiltering, setСhoiseNameFiltering] = useState('');

  const [currentList, setCurrentList] = useState([]);

  const [newListSelect, setNewListSelect] = useState([]);



  const [cityPopupState, setCityPopupState] = useState(false);

  const [loading, setLoading] = useState(true)

  const wrapperRef = useRef(null);

  const inputRef = useRef(null);

  const optionsAnimal = [
    { label: "Собаки", value: "sobak" },
    { label: "Коты", value: "koshki" },
  ]


  useEffect(() => {

    if (currentAnimal) {
      // setLoading(true);
      uploadBreeds(currentAnimal.value).then(res => {

        setNewListSelect(res);

        setCurrentList(res);

        // setLoading(false);
      });
    }



  }, [currentAnimal]);

  useEffect(() => {

    input.value && setBreedsName(input.value);
    // openClosePopup(setCityPopupState); // vremenno
  }, [input.value])

  const choiseOnClick = (e) => {

    setCurrentList(newListSelect);

    setCityPopupState(false);

    setBreedsName(e.currentTarget.getAttribute('option'));
    input.onChange(e.currentTarget.getAttribute('option'));

  }

  const onSearchCity = (e) => {

    setСhoiseNameFiltering(e.target.value);

    const dataSearch = newListSelect.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setCurrentList(dataSearch)

  }



  return (
    <div className="main-grid">
      <div className="col-6">
        <RenderInputSelect
          name={`${nameMain}.animal`}
          placeholder={'Животное'}
          options={optionsAnimal}
          setCurrentAnimal={setCurrentAnimal}
        />
      </div>

      <div className="col-6 search-field-input">

        <div
          className={`custom-select ${cityPopupState ? 'active' : ''}`}
        >
          <div
            className="custom-select-name"
            onClick={() => { setCityPopupState(true) }}
          >{breedsName}
          </div>
          <i></i>
          {cityPopupState && (
            <ListPopup
              wrapperRef={wrapperRef}
              setCityPopupState={setCityPopupState}
              inputRef={inputRef}
              сhoiseNameFiltering={сhoiseNameFiltering}
              onSearchCity={onSearchCity}
              currentList={currentList}
              choiseOnClick={choiseOnClick}
            />
          )}

        </div>
      </div>

      <div className="col-12 breeds-cabibinet-field-item">
        <div className="main-grid">
          <div className="col-12">
            <h3>Родители - производители</h3>
          </div>

          <div className="col-4">
            <RenderInputSelect
              name={`${nameMain}.gender`}
              placeholder={'Пол'}
              options={[
                { label: "Мама", value: "w" },
                { label: "Папа", value: "m" },
              ]}
            />
          </div>

          <div className="col-8">
            <div className="breds-input-cabinet-item input-animate-label">
              <RenderInputText
                obj={{ name: `${nameMain}.name`, label: 'Кличка' }}
              />
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-8">
            <div className="breds-input-cabinet-item input-animate-label">
              <RenderInputDate
                name={`${nameMain}.date_berth`}
                label='Дата рождения'
              />
            </div>
          </div>
          <div className="col-12">
            <div className="breds-input-cabinet-item">
              <RenderInputTextarea
                obj={{
                  name: nameMain + '.opisaone',
                  label: 'Описание',
                  labelSecond: 'Длина текста не должна превышать 3000 символов, включая пробелы.'
                }}
              /></div>
          </div>

          <div className="col-4  col-lg-12">
            <div className="breds-input-cabinet-item">
              <RenderInputSwitch
                name={`${nameMain}.smotr`}
                label="Племенной смотр:"
                options={[{ name: "Есть", value: "on" }, { name: "Нет", value: "off" }]}
              />
            </div>
          </div>
          <div className="col-4 col-sm-6 col-lg-6">
            <div className="breds-input-cabinet-item">
              <RenderInputMulty
                type="multy"
                mainname={`${nameMain}.sert_patel`}
                label="Сертификат на пателлу:	"
                numBool={true}
                allFields={[
                  {
                    type: "title",
                    name: 'pl',
                    label: "PL",
                    wrapClass: "col-4 account-item item-title",
                  },
                  {
                    type: "text",
                    name: 'PLa',
                    wrapClass: "col-4 account-item input-animate-label",
                  },
                  {
                    type: "text",
                    name: 'PLb',
                    wrapClass: "col-4 account-item input-animate-label",
                  }
                ]}
              />
            </div>
          </div>
          <div className="col-4 col-sm-6 col-lg-6">
            <div className="breds-input-cabinet-item">
              <RenderInputMulty
                type="multy"
                mainname={`${nameMain}.sert_disp`}
                label="Сертификат на дисплазию:"
                numBool={true}
                allFields={[
                  {
                    type: "title",
                    name: '.pl',
                    label: "HD",
                    wrapClass: "col-4 account-item item-title",
                  },
                  {
                    type: "text",
                    name: 'HDa',
                    wrapClass: "col-4 account-item input-animate-label",
                  },
                  {
                    type: "text",
                    name: 'HDb',
                    wrapClass: "col-4 account-item input-animate-label",
                  }
                ]}
              />
            </div>
          </div>

          <div className="col-12 ">
            <div className="breds-input-cabinet-item">
              <RenderInputFile
                name={`${nameMain}.sertifikate`}
                label={'Загрузите фотографию родословной'}
                labelSecond={'Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. '}
                typeAccept={'.png, .jpg, .jpeg'}
                maxSize={5242880}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="breds-input-cabinet-item">
              <RenderInputTextarea
                obj={{
                  name: `${nameMain}.tituli`,
                  label: 'Перечислите титулы (через запятую)',
                  labelSecond: 'Длина текста не должна превышать 300 символов, включая пробелы.'
                }}
              />
            </div>
          </div>
          {/* {currentAnimal?.value === 'sobak' && <SerfDog nameMain={nameMain} />}
          {currentAnimal?.value === 'koshki' && <SerfCat nameMain={nameMain} />} */}
          <div className="col-12 ">
            <h3>Дрессировка</h3>
          </div>
          <div className="col-12 breds-input-cabinet-item">
            <RenderInputCheckbox
              label="Спортивное направление:"
              name={`${nameMain}.sport_napravlenia`}
              numBool={true}
              options={[
                { label: "Аттестация прикладных собак", value: "Аттестация прикладных собак" },
                { label: "Розыскная служба", value: "Розыскная служба" },
                { label: "Общий курс дрессировки", value: "Общий курс дрессировки" },
                { label: "Служба связи и подноска легких грузов", value: "Служба связи и подноска легких грузов" },
                { label: "Защитно-караульная служба", value: "Защитно-караульная служба" },
                { label: "Поисково-спасательная служба", value: "Поисково-спасательная служба" },
                { label: "Караульная служба", value: "Караульная служба" },
                { label: "Русский ринг и Большой ринг", value: "Русский ринг и Большой ринг" },
              ]}
            />
          </div>

          <div className="col-12 breds-input-cabinet-item">
            <RenderInputCheckbox
              name={`${nameMain}.vidi_slugb`}
              label="Российские виды служб (не получившие спортивного направления):"
              numBool={true}
              options={[
                { label: "Конвойная служба", value: "Конвойная служба" },
                { label: "Разведка", value: "Разведка" },
                { label: "Патрульно-постовая, патрульно-дозорная служба", value: "Патрульно-постовая, патрульно-дозорная служба" },
                { label: "Рудорозыскная и газорозыскная служба", value: "Рудорозыскная и газорозыскная служба" },
                { label: "Сторожевая служба", value: "Сторожевая служба" },
                { label: "Поиск наркотиков", value: "Поиск наркотиков" },
                { label: "Минно-розыскная служба", value: "Минно-розыскная служба" },
                { label: "Пастушья служба", value: "Пастушья служба" },
              ]}
            />
          </div>
          <div className="col-12 breds-input-cabinet-item">
            <RenderInputCheckbox
              name={`${nameMain}.soc_slujb`}
              label="Социальные виды служб:"
              numBool={true}
              options={[
                { label: "Собака-поводырь", value: "Собака-поводырь" },
                { label: "Собаки-пожарные", value: "Собаки-пожарные" },
                { label: "Спасение на водах", value: "Спасение на водах" },
                { label: "Канис-терапия", value: "Канис-терапия" },
              ]}
            />
          </div>
          <div className="col-12 breds-input-cabinet-item">
            <RenderInputCheckbox
              name={`${nameMain}.sport_vidi`}
              label="Спортивные виды дрессировки::"
              numBool={true}
              options={[
                { label: "Аджилити", value: "Аджилити" },
                { label: "Фристаил(танцы с собаками)", value: "Фристаил(танцы с собаками)" },
                { label: "Гонки на собачьих упряжках", value: "Гонки на собачьих упряжках" },
                { label: "Флайбол", value: "Флайбол" },
                { label: "Вейтпуллинг (перетаскивание тяжестей)", value: "Вейтпуллинг (перетаскивание тяжестей)" },
                { label: "Фрисби", value: "Фрисби" },
                { label: "Фасттрек", value: "Фасттрек" },
                { label: "Рейсинг", value: "Рейсинг" },
                { label: "Хендлинг", value: "Хендлинг" },
                { label: "Пастушья служба", value: "Пастушья служба" },
                { label: "Дрессировка собак охотничьих пород", value: "Дрессировка собак охотничьих пород" },
                { label: "Курсинг", value: "Курсинг" },
              ]}
            />
          </div>

          <div className="col-12 breeds-dropzone">
            <div className="breds-input-cabinet-item">
              <RenderInputFileDropZone
                name={`${nameMain}.photoParents`}
                label={'Загрузите фото родителя'}
                labelSecond={'Вы можете загрузить до 10 файлов. Вес каждого файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png. Рекомендуемый формат вертикальный - 2:1 (Ширина 1920px, Высота 960px).'}
                typeAccept={'.png, .jpg, .jpeg'}
                maxSize={5242880}
              />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}



const RenderInputSelectSearchUploadList = ({ name, nameMain, nameSecond, nameThree }) => {

  return <Field
    name={name}
    nameMain={nameMain}
    nameSecond={nameSecond}
    nameThree={nameThree}
    component={TempateInput}
  />;
}

const mapStateToProps = (state) => {

  return {
    russianCities: state.russianCities
  }
}

export default connect(mapStateToProps)(RenderInputSelectSearchUploadList);