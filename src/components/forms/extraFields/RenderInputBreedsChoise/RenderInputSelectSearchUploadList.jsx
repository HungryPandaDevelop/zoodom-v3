import { Field } from 'redux-form';

import { useState, useEffect, useRef } from 'react';


import { connect } from 'react-redux';

import RenderInputSelect from '../../fields/RenderInputSelect';

import RenderInputFileDropZone from '../../fields/RenderInputFileDropZone';
import RenderInputFile from '../../fields/RenderInputFile';
import RenderInputTextarea from '../../fields/RenderInputTextarea';
import RenderInputText from '../../fields/RenderInputText';
import RenderInputDate from '../../fields/RenderInputDate'; // дата

import SerfDog from '../../extraFields/RenderInputBreedsChoise/SerfDog';
import SerfCat from '../../extraFields/RenderInputBreedsChoise/SerfCat';


import ListPopup from './ListPopup';

import { openClosePopup } from './renderList';

import { uploadBreeds } from 'components/forms/extraFields/RenderInputBreedsChoise/uploadBreeds';

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
      setLoading(true);
      uploadBreeds(currentAnimal.value).then(res => {



        setNewListSelect(res);

        setCurrentList(res);

        setLoading(false);
      });
    }



  }, [currentAnimal]);

  useEffect(() => {

    setBreedsName(input.value);
    openClosePopup(setCityPopupState); // vremenno
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

      <div className="col-6 custom-select">
        <div
          className="custom-select-name"
          onClick={() => { setCityPopupState(true) }}
        >
          {loading ? 'Loading...' : breedsName}
        </div>
        <i className={`search-field-arrow ${cityPopupState ? 'active' : ''}`}></i>
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
          {currentAnimal?.value === 'sobak' && <SerfDog nameMain={nameMain} />}
          {currentAnimal?.value === 'koshki' && <SerfCat nameMain={nameMain} />}



          <div className="col-12">
            <div className="breds-input-cabinet-item">
              <RenderInputTextarea
                obj={{
                  name: nameMain + '.diplomi',
                  label: 'Дипломы',
                  labelSecond: 'Длина текста не должна превышать 300 символов, включая пробелы.'
                }}
              /></div>
          </div>
          <div className="col-12">
            <div className="breds-input-cabinet-item">
              <RenderInputTextarea
                obj={{
                  name: `${nameMain}.ychastie_vistavki`,
                  label: 'Участие в выставках',
                  labelSecond: 'Длина текста не должна превышать 300 символов, включая пробелы.'
                }}
              /></div>
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