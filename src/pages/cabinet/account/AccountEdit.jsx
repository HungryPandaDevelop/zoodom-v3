import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { saveInfo } from 'store/asyncActions/saveInfo';

import ActionFn from 'store/actions';

const AccountEdit = ({
  ActionFn,
  uid,
  userInfo,
  dataForm,
  fields,
}) => {

  const [waitAnsw, setWaitAnsw] = useState(false);
  const navigate = useNavigate();


  /* сохранение данных пользователя */
  const onSubmitIn = () => {

    setWaitAnsw(true);
    saveInfo(dataForm.values, uid, 'users').then(() => {
      ActionFn('SET_INFO_ACCOUNT', dataForm.values);
      setWaitAnsw(false);
      navigate('/cabinet/', { replace: true });
    });


  }



  /* сохранение данных пользователя */



  return (
    <>

      <TemplateAccount title="Учетная запись" >

        <RenderFormAccount
          objFields={fields}
          orderFields={fields.order}
          btnSaveText="Сохранить изменения"
          initialValues={userInfo}
          onSubmitIn={onSubmitIn}
          waitAnsw={waitAnsw}
          wrapClass="main-grid"
        />

      </TemplateAccount>

    </>
  )
}

const mapStateToProps = (state) => {


  return {
    fields: state.fieldsAccount,
    dataForm: state.form.singleInput,
    userInfo: state.accountInfo,
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AccountEdit);