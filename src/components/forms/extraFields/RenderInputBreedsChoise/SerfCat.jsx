import RenderInputSwitch from '../../fields/RenderInputSwitch'; // поле переключателя

const SerfCat = ({ nameMain }) => {
  return (
    <>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.sertifikat_sma`}
            label={'Сертификат на отсутствие спинальной мышечной атрофии (SMA)'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.sertifikat_hcm`}
            label={'Сертификат на отсутствие гипертрофической кардиомиопатии (HCM)'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.sertifikat_PKdef`}
            label={'Сертификат на отсутствие дифицита пируваткиназы (PKdef)'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="breds-input-cabinet-item">
          <RenderInputSwitch
            name={`${nameMain}.sertifikat_pochek`}
            label={'Сертификат на отсутствие поликистозы почек'}
            options={[{ name: "Нет", value: "off" }, { name: "Есть", value: "on" },]}
          />
        </div>
      </div>
    </>
  )
}

export default SerfCat
