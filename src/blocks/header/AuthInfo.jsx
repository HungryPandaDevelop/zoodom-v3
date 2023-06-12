import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { WpAuth } from 'components/cabinet/WpAuth';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

const AuthInfo = ({ ActionFn, uid, accountInfo, checkingStatus }) => {

  useEffect(() => {
    console.log('userInfo', accountInfo)
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getSingleListing('users', auth.currentUser.uid).then(res => {
          WpAuth().then(answ => {
            //   // console.log(answ.token)
            ActionFn('SET_INFO_ACCOUNT', { ...res, token: answ.token, checkingStatus: false });
          });
          // ActionFn('SET_INFO_ACCOUNT', { ...res, checkingStatus: false });
        });


      }
      else {
        ActionFn('SET_INFO_ACCOUNT', { uid: false, checkingStatus: false });
      }

    });

  }, [uid]);

  return (
    <>
      {/* <div>AuthInfo: {checkingStatus ? 'Loading...' : (uid ? 'Logged: ' + uid : 'No Logged')}</div> */}
    </>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    uid: state.accountInfo.uid,
    checkingStatus: state.accountInfo.checkingStatus,
    accountInfo: state.accountInfo

  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AuthInfo);