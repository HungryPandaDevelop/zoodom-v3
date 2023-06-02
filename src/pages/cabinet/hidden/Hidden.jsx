
import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

import CardItemLike from 'pages/cabinet/hidden/CardItemHidden';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { getListing } from 'store/asyncActions/getListing';

const Liked = ({ accountInfo }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState([]);

  const likeBtn = useRef(null);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getListing('hidden', accountInfo.uid, 'userRef').then(res => {
      if (isMounted) {
        setListings(res);
        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [update]);




  const contentPage = () => {
    return (
      <>
        {loading ? <PreloaderList /> : listings.length > 0 ? (<table>
          <thead>
            <tr className="cards-account-head">
              <th>Название</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {
              listings.map((like, index) => (
                <tr key={index} ref={likeBtn}>
                  <CardItemLike
                    like={like}
                    setUpdate={setUpdate}
                    update={update}

                  />
                </tr>
              ))
            }
          </tbody>
        </table>) : (<EmptyList />)}
      </>
    )
  }


  return (
    <>
      <TemplateAccount
        title="Спрятанное"
        addWrapClass='cards-account-container'
      >
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    accountInfo: state.accountInfo,
  }
}



export default connect(mapStateToProps)(Liked);
