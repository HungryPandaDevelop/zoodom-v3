import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

const Contacts = () => {
  return (
    <div>
      <Breadcrumbs titleCategory='Контакты' />
      <div className="content">
        <PageTitle title='Контакты' />
        <div className="main-full">
          <h2>985 282 65 32</h2>
        </div>
      </div>
    </div>
  )
}

export default Contacts
