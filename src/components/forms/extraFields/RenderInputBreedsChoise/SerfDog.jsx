import RenderInputSwitch from '../../fields/RenderInputSwitch'; // поле переключателя

const SerfDog = ({ nameMain }) => {
  return (
    <>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.good_work`}
            label={'Сертификат по рабочим качествам собаки'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.otsutstvie_disiplazii`}
            label={'Сертификат на отсутствие дисплазии (HD)'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.otsutstvie_patelli`}
            label={'Сертификат на отсутствие пателлы (PL)'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.svidetelstvo_otbora`}
            label={'Свидетельство о прохождении племенного отбора (Керунга)'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.titul_interchempiona`}
            label={'Титул интерчемпиона'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.sertifikat_porodi`}
            label={'Сертификат породы'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
    </>
  )
}

export default SerfDog
