import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';
import Meta from 'pages/parts/Meta';
import BreedAdv from 'pages/breeds/breedsDetail/BreedAdv';
import BreedFeatures from 'pages/breeds/breedsDetail/BreedFeatures';

import CardsGallery from 'pages/catalog/parts/cardsDetail/CardsGallery';

import Breadcrumbs from 'pages/parts/Breadcrumbs';

import Traits from 'pages/breeds/breedsDetail/Traits';
import PageNav from 'pages/breeds/breedsDetail/PageNav';

import { currentNameCategory } from 'pages/catalog/parts/cardsDetail/Pitomnik/currentNameCategory';

const Breeds = () => {

  const siteWp = 'https://zoo-base.sait.website/';

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nameCategory, setNameCategory] = useState([[], []]);

  const params = useParams();


  useEffect(() => {

    axios.get(`${siteWp}/wp-json/breeds/detail?slug=${params.breedsID}`).then(res => {
      // console.log('1', res.data[0])
      setListings(res.data[0]);
      setLoading(false);

    });

    setNameCategory(currentNameCategory('animal'))


  }, [])




  if (loading) {
    return <>Loading</>
  }

  return (
    <>
      <Meta
        title={listings.titleSeo}
        description={listings.desriptionSeo}
        keywords={listings.keywordsSeo}
      />

      <div className='content'>
        <div className="stub"></div>
        <Breadcrumbs
          detailTitle={listings.title}
        />
        <>
          <div className="main-full">
            <h1 dangerouslySetInnerHTML={{ __html: listings.title }}></h1>
          </div>

          <div className="main-grid ">

            <div className="col-9 col-xxl-8 col-lg-7 col-md-8 col-xs-12">
              <div className="cards-gallery breed-gallery">
                <CardsGallery getImages={listings.images} typeOut='wordpress' />
              </div>


              <div className=" breed-description" id="point-1">

                <div dangerouslySetInnerHTML={{ __html: listings.pervyj_abzac }}></div>
                <div id="point-2" dangerouslySetInnerHTML={{ __html: listings.pervyj_abzac_second }}></div>
                {listings && listings.otlichitelnye_cherty && (
                  <div id="point-3">
                    <Traits listings={listings} breedsCategory={params.breedsCategory} />
                  </div>
                )}


                <BreedFeatures listings={listings} />

                <div id="point-4" dangerouslySetInnerHTML={{ __html: listings.vtoroj_blok_teksta }}></div>


                {listings.interesnyj_fakt_1.title && (<div className="breed-description-roof-content">

                  <h2>
                    {listings.interesnyj_fakt_3.img ? <img src={listings.interesnyj_fakt_1.img} alt="" /> : ''}
                    <span>{listings.interesnyj_fakt_1.title}</span></h2>
                  <div className="breed-description-text">
                    <div dangerouslySetInnerHTML={{ __html: listings.interesnyj_fakt_1.content }}></div>
                  </div>
                </div>)}

                <div id="point-5" dangerouslySetInnerHTML={{ __html: listings.tretij_blok_teksta }}></div>
                {listings.interesnyj_fakt_2.title && (<div className="breed-description-roof-content">
                  <h2>
                    {listings.interesnyj_fakt_2.img ? <img src={listings.interesnyj_fakt_2.img} alt="" /> : ''}
                    <span>{listings.interesnyj_fakt_2.title}</span></h2>
                  <div className="breed-description-text">

                    <div dangerouslySetInnerHTML={{ __html: listings.interesnyj_fakt_2.content }}></div>
                  </div>
                </div>)}
                {listings.interesnyj_fakt_3 && (
                  <>
                    <div id="point-6" dangerouslySetInnerHTML={{ __html: listings.chetvertyj_blok_teksta }}></div>
                  </>
                )}


                {listings.interesnyj_fakt_3.title && (<div className="breed-description-roof-content">

                  <h2>
                    {listings.interesnyj_fakt_3.img ? <img src={listings.interesnyj_fakt_3.img} alt="" /> : ''}
                    <span>{listings.interesnyj_fakt_3.title}</span></h2>
                  <div className="breed-description-text">

                    <div dangerouslySetInnerHTML={{ __html: listings.interesnyj_fakt_3.content }}></div>
                  </div>
                </div>)}

                <div id="point-7" dangerouslySetInnerHTML={{ __html: listings.pyatyj_blok_teksta }}></div>
                <div id="point-8" dangerouslySetInnerHTML={{ __html: listings.shestoy_blok_teksta }}></div>

              </div>
            </div>

            <div className="col-3 col-xxl-4 col-lg-5 col-md-4 col-xs-12 breed-adv-box hidden-xs">
              {/* {console.log('listings', listings)} */}
              <BreedAdv listings={listings} />

              <PageNav breedsCategory={params.breedsCategory} />
            </div>

          </div>

        </>

        <>
          <Reviews
            title={listings.title}
            elementId={listings.id}
            nameCategory={nameCategory}
            titleCategory={['Породе', 'Породу', 'Породе']}
          />
          <div className="stub"></div>
        </>

      </div>
    </>

  )
}

export default Breeds
