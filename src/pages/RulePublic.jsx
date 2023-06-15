import { useState, useEffect } from 'react';
import axios from "axios";


const Page = () => {

  const [listings, setListings] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // console.log('param', paramsUrl.get("keep"))
    // создание ссылки



    axios.get(`${siteWp}/wp-json/wp/v2/pages/9647`).then(res => {

      console.log('re', res.data.content.rendered)
      setListings(res.data);
      setLoading(false);

    });

  }, []);


  const siteWp = 'https://zoo-base.sait.website/';
  return (
    <div>
      <div className='content'>
        <div className="stub"></div>
        <div className="main-full">
          {loading ? 'Loading...' : (
            <div>
              <h1>{listings.title.rendered}</h1>
              <div dangerouslySetInnerHTML={{ __html: listings.content.rendered }} />
            </div>
          )}

        </div>
        <div className="stub"></div>
      </div>
    </div>
  )
}

export default Page
