import RenderFields from 'components/forms/RenderFields';


import { reduxForm } from 'redux-form';

import { useState } from 'react';

import ploaderImg from 'front-end/images/preloader.gif'

import { toast } from 'react-toastify';
// --------------------------------------------------------------------

const TemplateForm = (props) => {
  //console.log(props)
  const {
    objFields,
    orderFields,
    btnSaveText,
    onSubmitIn,
    waitAnsw,
    formClassAdd
  } = props;


  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);
  const [errMessage, setErrMessage] = useState(true);


  const onSubmit = (e) => {

    e.preventDefault();
    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 10000);
    if (!errCheck) {
      toast.error(errMessage)
    }
    errCheck && !waitAnsw && onSubmitIn();

  };






  return (
    <form
      className={`form main-grid cabinet-account`}
    >
      <RenderFields
        orderFields={orderFields}
        objFields={objFields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}
        setErrMessage={setErrMessage}
      />
      <div className='col-12 btn-container'>
        <button className="btn   btn-save btn--blue ico-in ico-in--left" onClick={(e) => { onSubmit(e) }} >
          {waitAnsw ? (<img className='preloader' src={ploaderImg} alt={ploaderImg} />) : (
            <><i></i><span>{btnSaveText}</span></>
          )}
        </button>
        {/* <Link to="/cabinet/" className="btn btn--red-border ico-in ico-in--left btn-cancel "><i></i><span>Отменить</span></Link> */}
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


