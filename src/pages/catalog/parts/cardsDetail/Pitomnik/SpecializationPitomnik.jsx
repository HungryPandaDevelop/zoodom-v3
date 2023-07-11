
const SpecializationPitomnik = ({ typePitomnik }) => {

  console.log('typePitomnik', typePitomnik)

  return (
    <>
      <h3>Специализация:</h3>
      {typePitomnik[0]?.map((item, index) => (
        <span key={index}><b>{item}</b>
          {typePitomnik[1][index].map((el, i) => (
            <span key={i}>
              {el} / {' '}
            </span>
          ))}
        </span>
      ))}
    </>
  )
}

export default SpecializationPitomnik
