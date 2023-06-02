
const SpecializationPitomnik = ({ typePitomnik }) => {


  return (
    <div className="cards-char-type">
      <h3>Специализация:</h3>
      <ul className='ln'>
        {typePitomnik[0]?.map((item, index) => (
          <li key={index}><b>{item}</b>:
            {typePitomnik[1][index].map((el, i) => (
              <div key={i}>
                {el}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpecializationPitomnik
