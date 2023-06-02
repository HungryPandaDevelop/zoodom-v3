import { useNavigate } from 'react-router-dom';

import RenderFormAccount from 'components/forms/RenderFormAccount';


import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { registrationAccount } from 'store/actions/registrationAccount';


const Registration = (props) => {

  const navigate = useNavigate();



  const onSubmitIn = () => {
    // console.log('in sub')
    if (props.formData) {
      // console.log('in')
      registrationAccount(props.formData).then((res) => {
        if (res) {
          navigate('/cabinet/', { replace: true });
        }
        else {
          console.log('Ошибка')
        }
      });

    }
    else {
      console.log('err validate')
    }
  }

  return (
    <>
      <div className="stub"></div>
      <div className="content">

        <div className="main-full">
          <h1>Регистрация нового пользователя</h1>
        </div>
        <RenderFormAccount
          btnSaveText="Регистрация"
          objFields={props.fieldsRegistration}
          orderFields={props.fieldsRegistration.order}
          onSubmitIn={onSubmitIn}
          formClassAdd='cabinet-account auth-form'
          sending={true}
          btnClass='btn--orange'
        />

      </div>
      <div className="stub"></div>
    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsRegistration: state.fieldsRegistration, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps, { ActionFn })(Registration);
