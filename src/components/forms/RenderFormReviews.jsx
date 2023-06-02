import RenderFields from 'components/forms/RenderFields';
import RewFormFooter from 'components/forms/parts/RewFormFooter';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import { useState, useEffect } from 'react';

import ploaderImg from 'front-end/images/preloader.gif'

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  //console.log(props)
  const {
    objFields,
    orderFields,
    btnSaveText,
    onSubmitIn,
    waitAnsw,
    formClassAdd,
    userInfo,
    outsideValue,
    statusName,
    setStatusName
  } = props;

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const hideByBody = (e) => {
      if (e.target.id !== 'btn-save') {
        setShowForm(false)
      }
      if (e.key === 'Escape') { setShowForm(false); }
    }
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };
  }, []);


  const onSubmit = (e) => {

    if (userInfo.uid) {
      e.preventDefault();
      setCheckErrorSubmit(true);

      setTimeout(() => {
        setCheckErrorSubmit(false);
      }, 3000);

      errCheck && !waitAnsw && onSubmitIn();

    } else {
      setShowForm(true);
    }
  }


  return (
    <form
      className={`form main-grid ${formClassAdd}`}
    >
      <RenderFields
        orderFields={orderFields}
        objFields={objFields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}
        outsideValue={outsideValue}
      />

      <RewFormFooter
        statusName={statusName}
        setStatusName={setStatusName}
        userInfo={userInfo}
      />


      <div className='col-6 col-offset-7 col-md-12 btn-container'>
        {showForm && (<div className="popup-rew-auth">
          <h3>Для того что бы оставить отзыв нужно авторизироваться или</h3>
          <div>
            <Link to="/authorization" className="btn btn--blue">
              Войти
            </Link>
            <Link to="/registration" className="btn btn--orange">
              Регистрация
            </Link>
          </div>
        </div>)}

        <div id="btn-save" className="btn  btn-save btn--blue" onClick={(e) => { onSubmit(e) }} >
          {waitAnsw ? (<img className='preloader' src={ploaderImg} />) : (
            btnSaveText
          )}
        </div>
      </div>
    </form >
  )
}




export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


