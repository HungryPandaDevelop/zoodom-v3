import RenderFormAccount from 'components/forms/RenderFormAccount';
import { useEffect } from 'react';
import { connect } from 'react-redux';

// import { authAccount } from 'actions';

import { Link } from 'react-router-dom';

import OAuth from 'components/cabinet/OAuth';

import { useNavigate } from 'react-router-dom';

import { authAccount } from 'store/actions/authAccount';

const Authorization = ({ uid, formData, fieldsAuthorization }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (uid) {
      navigate('/cabinet/', { replace: true });
    }
  }, [uid]);

  const onSubmitIn = () => {
    console.log('sub')
    if (formData) {
      authAccount(formData);

    } else {
      console.log('error')
    }
  }

  return (
    <>
      <div className="stub"></div>
      <div className="content">
        <div className="main-full">
          <h1>Авторизация</h1>
        </div>
        <RenderFormAccount
          btnSaveText="Авторизация"
          objFields={fieldsAuthorization}
          orderFields={fieldsAuthorization.order}
          onSubmitIn={onSubmitIn}
          formClassAdd='cabinet-account auth-form'
          btnClass='btn--orange'
          sending={true}
        />
        <div className="main-full">
          <div className="forgot-password">
            <Link to="/forgot-password">Восстановить пароль</Link>
          </div>

          {/* <OAuth /> */}

        </div>

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  // console.log(formReducer)

  return {
    fieldsAuthorization: state.fieldsAuthorization, // база полей
    formData: formReducer,
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps, { authAccount })(Authorization);