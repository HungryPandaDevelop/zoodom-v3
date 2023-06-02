
const LegalInfo = ({ userInfo }) => {
  return (
    <>
      <div className="col-2"></div>
      <div className="col-10"><h3>Реквизиты компании</h3></div>
      <div className="col-2"></div>
      <div className="account-item col-10">
        <b>Юридическое наименование организации</b>
        <div> {userInfo.legalNameCompany ? (
          <span>{userInfo.legalNameCompany.type}  {userInfo.legalNameCompany.name}</span>
        ) : '-/-'}</div>
      </div>
    </>
  )
}

export default LegalInfo
