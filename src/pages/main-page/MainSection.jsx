
import { useState, useEffect } from 'react';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import axios from "axios";
import { Link } from 'react-router-dom';
const MainSection = () => {


  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);


  const siteWp = 'https://zoo-base.sait.website/';

  useEffect(() => {
    // console.log('param', paramsUrl.get("keep"))
    // создание ссылки




    axios.get(`${siteWp}/wp-json/mainPage/get`).then(res => {
      setLoading(false);
      console.log(res.data);

      setListings(res.data.slider);
    });


  }, []);


  const settings = {
    lazyload: true,
    nav: true,
    controls: false,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 5,
    responsive: {
      420: {
        items: 1
      }
    }
  };


  const clickEvent = (slide) => {
    console.log(slide);
  };

  if (loading) { return (<>Loading...</>) }
  return (
    <>
      <div className='main-home' >
        <TinySlider className="main-home-tiny" settings={settings} onInit={clickEvent}>
          {Object.keys(listings).map((el, index) => (
            <div key={index} style={{ backgroundImage: 'url(' + listings[el].slajd + ')' }}>
              {console.log(listings[el])}
              <div className="main-full">
                <h2>
                  <i></i>
                  <span>{listings[el].tekst_1}</span>
                </h2>
                <h3 dangerouslySetInnerHTML={{ __html: listings[el].tekst_2 }}>

                </h3>
                <h4>
                  {listings[el].tekst_3}
                </h4>
                <div className="btn-container">
                  <Link to={listings[el].ssylka_knopki} className="btn " style={{ background: listings[el].cvet }}>
                    {listings[el].tekst_knopki}
                  </Link>
                </div>
                <div className="arrows-stub"></div>
              </div>

            </div>
          ))}

        </TinySlider>
      </div>
    </>
  )
}

export default MainSection;
