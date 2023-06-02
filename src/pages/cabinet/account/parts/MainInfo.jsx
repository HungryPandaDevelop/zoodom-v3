import PhotoProfile from 'pages/cabinet/account/parts/PhotoProfile';

const MainInfo = ({ userInfo }) => {

  return (
    <>

      <div className="col-2">
        <PhotoProfile userInfo={userInfo} />
      </div>
      <div className="col-10">
        <div className="account-item col-6"> <b>Имя аккаунта</b>
          <div>{userInfo.accountName ? userInfo.accountName : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Фамилия</b>
          <div>{userInfo.accountName ? userInfo.family : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Имя</b>
          <div>{userInfo.accountName ? userInfo.name : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Отчество</b>
          <div>{userInfo.accountName ? userInfo.secondName : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Email</b>
          <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Телефоны</b>
          <div>{userInfo.phoneCompany ? (
            <div key={userInfo.phoneCompany}>
              <a href={`tel:+7${userInfo.phoneCompany}`}>{userInfo.phoneCompany}</a>
            </div>
          ) : '-/-'}
          </div>
        </div>

      </div>


    </>
  )
}

export default MainInfo
