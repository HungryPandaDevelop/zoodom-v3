import { useState, useEffect } from 'react';

const Demo = () => {

  const [term, setTerm] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {

    if (term.length === 10) {
      const timeId = setTimeout(() => {
        console.log('search', term)
        search(term)
      }, 2000);

      return (() => {
        clearTimeout(timeId);
      });
    }

  }, [term])



  const search = (inn) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "bd8d3f0b43aeec0a40af952669c10318449b6dd1";
    var query = inn;//"7730228018";

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query: query })
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        console.log(result.suggestions[0].data)
        setCompanyInfo(result.suggestions[0].data)
        setErrMessage('');
      })
      .catch(error => {
        console.log("error",);
        setCompanyInfo({})
        setErrMessage('error');
      });
  }




  const getValue = (e) => {
    setTerm(e.target.value)

  }

  return (
    <div className='all'>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Demo</h1>
        <input type="text" className="input-decorate" onChange={(e) => getValue(e)} />

        {companyInfo.name && (<div className="showinfo">
          <h3>name</h3>
          <div>{companyInfo.name.full}</div>
          <h3>address</h3>
          <div>{companyInfo.address.value}</div>
          <h3>inn</h3>
          <div>{companyInfo.inn}</div>
          <h3>kpp</h3>
          <div>{companyInfo.kpp}</div>
        </div>)}
        {errMessage.length > 0 && 'Ошибка'}
      </div>
      <div className="stub"></div>
    </div>
  )
}

export default Demo
