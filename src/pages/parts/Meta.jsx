import MetaTags from 'react-meta-tags';

import { Helmet } from "react-helmet";
// import { Helmet } from 'react-helmet-async';


const Meta = ({ title, description, keywords }) => {


  return (
    <>
      {/* <MetaTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </MetaTags> */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </>
  )
}


export default Meta;