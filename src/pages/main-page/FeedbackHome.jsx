

import { useState } from 'react';

import { connect } from 'react-redux';
import RenderFormFeedback from 'components/forms/RenderFormFeedback';

import emailjs from '@emailjs/browser';

const FeedbackHome = ({ fields, dataForm }) => {


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

    sendMail();
  }



  return (
    <>
      <section className="feedback-home">
        <div className="main-grid">
          <div className="col-6 col-md-12 feedback-container">
            <RenderFormFeedback
              objFields={fields}
              orderFields={fields.order}
              btnSaveText="Отправить"
              btnClass="btn--green"
              onSubmitIn={onSubmitIn}
              waitAnsw={waitAnsw}
              initialValues={resetValue}
            />
            <div className={`popup-form-sends ${goodSend && 'active'}`}>
              Ваша заявка отправлена
            </div>

          </div>
        </div>
      </section>
    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    fields: state.fieldsFeedback, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(FeedbackHome);