

import { useState } from 'react';

import { connect } from 'react-redux';
import RenderFormFeedback from 'components/forms/RenderFormFeedback';

import emailjs from '@emailjs/browser';

const FeedbackHome = ({ fields, dataForm, openReserve, setOpenReserve, reservAnimal }) => {


  const [waitAnsw, setWaitAnsw] = useState(false);
  const [goodSend, setGoodSend] = useState(false);
  const [resetValue, setResetValue] = useState({});

  const sendMail = () => {
    console.log('sending...');
    setWaitAnsw(true);
    emailjs.send('service_yew9khi', 'template_ld1qsqs', dataForm.values, '8uwo94j0rrU71YiK6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text, dataForm.values);
        setGoodSend(true);
        setWaitAnsw(false);
        setResetValue({ reset: '' })
        setTimeout(() => {
          setGoodSend(false);
        }, 1500)
      }, (error) => {
        console.log(error.text);
      });

  }

  const onSubmitIn = (term) => {
    console.log('data', dataForm.values)
    if (!dataForm.syncErrors) {
      sendMail();
    }
  }



  return (
    <>
      <div className={`popup element-show ${openReserve ? 'show' : ''}`} >
        <div className="popup-overlay popup-overlay-js"></div>
        <div className="popup-container">
          <div className="close-btn close-btn_popup close-js" onClick={() => { setOpenReserve(false) }}></div>
          <h2>Заказать {reservAnimal}</h2>
          <RenderFormFeedback
            objFields={fields}
            orderFields={fields.order}
            btnSaveText="Отправить"
            onSubmitIn={onSubmitIn}
            waitAnsw={waitAnsw}
            initialValues={resetValue}
          />
          <div className={`popup-form-sends ${goodSend ? 'active' : ''}`}>
            Ваша заявка отправлена
          </div>

        </div>

      </div >
    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.feedback;

  return {
    fields: state.fieldsFeedback, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(FeedbackHome);