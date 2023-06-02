import RenderFields from 'components/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

import ploaderImg from 'front-end/images/preloader.gif'

// --------------------------------------------------------------------

const TemplateForm = (props) => {

  const {
    objFields,
    orderFields,
    btnSaveText,
    onSubmitIn,
    waitAnsw
  } = props;

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();
    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 1000);

    errCheck && !waitAnsw && onSubmitIn();

  }



  return (
    <form
      className='form'


    >
      <RenderFields
        orderFields={orderFields}
        objFields={objFields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}
      />
      <div className='btn-container'>
        <button className="btn  btn--blue" onClick={(e) => { onSubmit(e) }}>
          {waitAnsw ? <img className='preloader' src={ploaderImg} /> : (btnSaveText)}
        </button>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'feedback',
  enableReinitialize: true,
})(TemplateForm);


