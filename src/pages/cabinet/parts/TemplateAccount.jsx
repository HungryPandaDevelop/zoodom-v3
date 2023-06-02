import CabinetSidebar from 'pages/cabinet/parts/CabinetSidebar';
// import Breadcrumbs from 'pages/parts/Breadcrumbs';

const TemplateAccount = ({ title, children, addWrapClass }) => {
  return (
    <div className='account-page'>
      <div className="stub"></div>
      {/* <Breadcrumbs /> */}
      <div className="content">
        <div className="main-grid">
          <div className="col-3 col-sm-12">
            <CabinetSidebar />
          </div>
          <div className="col-9 col-sm-12">
            <h2>{title}</h2>
            <div className={`cabinet-account shadow-container ${addWrapClass}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="stub"></div>
    </div>
  )
}

TemplateAccount.defaultProps = {
  title: 'Templage Cabinet Page'
}

export default TemplateAccount;

