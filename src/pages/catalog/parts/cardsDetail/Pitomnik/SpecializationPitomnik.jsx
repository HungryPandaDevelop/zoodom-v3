
const SpecializationPitomnik = ({ typePitomnik }) => {


  const outType = (index) => {

    let length = typePitomnik[1][index].length - 1;

    return typePitomnik[1][index].map((el, i) => (
      <span key={i}>
        {el} {length !== i ? '/' : ''}
      </span>
    ))
  }

  return (
    <>
      <h3>Специализация:</h3>
      {typePitomnik[0]?.map((item, index) => (
        <span key={index}><b>{item}</b>
          {outType(index)}
        </span>
      ))}
    </>
  )
}

export default SpecializationPitomnik
