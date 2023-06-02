
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


import MainInfo from 'pages/cabinet/account/parts/MainInfo';

import BtnContainer from 'pages/cabinet/account/parts/BtnContainer';



const Account = ({ userInfo }) => {


  const navigate = useNavigate();

  useEffect(() => {

    if (!userInfo.accountName || userInfo.accountName.length === 0) {
      navigate('/cabinet/account-edit', { replace: true });
    }


  }, []);


  return (
    <>
      <TemplateAccount title="Учетная запись" >


        <div className="main-grid ">
          <MainInfo userInfo={userInfo} />


          <BtnContainer />
        </div>



      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    userInfo: state.accountInfo,
  }
}

export default connect(mapStateToProps)(Account);