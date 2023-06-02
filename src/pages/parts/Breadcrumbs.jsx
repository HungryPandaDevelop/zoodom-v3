import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import React from "react";

const categoryById = {
  'nurseries': 'Питомники',
  'salon': 'Салоны',
  'clinics': 'Клиники',
  'Porodi sobak': 'Породы собак',
  'pitomniki': 'Породы собак',
  'Home': 'Главная'
}



const DynamicUserBreadcrumb = ({ match }) => {
  // console.log('m', match)
  return (
    <span>{categoryById[match.params.catagoryName]}</span>
  )
};

// const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;



const Breadcrumbs = ({ detailTitle, slug }) => {
  // console.log('detailTitle, slug', detailTitle, slug)
  const routes = [
    { path: "/pitomniki", breadcrumb: "Питомники" },
    { path: "/", breadcrumb: "Главная" },
    { path: "/ads", breadcrumb: "Объявления" },
    { path: "/porodi-sobak", breadcrumb: "Породы Собак" },
    { path: "/porodi-koshki", breadcrumb: "Породы Кошек" },
    { path: "/porodi-:breedsCategory/:breedsID.html", breadcrumb: detailTitle },
    { path: "/ads/:elementId", breadcrumb: 'Объявление ' + detailTitle },
    { path: "/pitomniki/:elementId", breadcrumb: 'Питомник ' + detailTitle },
    // { path: link, breadcrumb: linkText },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const countBread = breadcrumbs.length - 1;
  // console.log('breadcrumbs', breadcrumbs.length);
  return (
    <div className="main-full">
      <div className="breadcrumbs">
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <React.Fragment key={match.pathname}>
            {countBread !== index ? (
              <>
                <Link to={match.pathname}>
                  {breadcrumb}
                </Link><em>/</em>
              </>
            ) : (
              <span>
                {breadcrumb}
              </span>
            )}

          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Breadcrumbs
