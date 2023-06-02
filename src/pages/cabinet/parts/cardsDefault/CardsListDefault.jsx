import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDeleteCards } from 'store/asyncActions/getListing';

import CardsItemDefault from 'pages/cabinet/parts/cardsDefault/CardsItemDefault';

import ActionFn from 'store/actions';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


import { connect } from 'react-redux';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

const CardsListDefault = ({ uid, nameList, whatshow, whatshowName, titleForm, addBtnText }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getListing(nameList, uid, 'userRef').then(res => {
      if (isMounted) {

        res.sort((a, b) => a.card_name > b.card_name ? 1 : -1)

        setListings(res);
        // console.log(res.length, accountInfo.currentCard)

        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [nameList]);

  const [company, setCompany] = useState([]);

  useEffect(() => {

    let isMounted = true;

    getListing('company', uid, 'userRef').then(res => {
      if (isMounted) {
        let nuwOprions = [];
        res.map(item => {
          nuwOprions.push({ label: item.card_name, value: item.id });
        })
        setCompany(nuwOprions);
      };
    });

    return () => { isMounted = false };
  }, []);


  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, nameList).then(res => {
      setListings(res);
    });
    // onDeleteMessage(id);
  }


  const onEdit = (listingId) => {
    navigate(`/cabinet/${nameList}-edit/${listingId}`)
  }

  console.log('nameList', nameList)


  return (
    <>
      <TemplateAccount
        title={titleForm}
        addWrapClass='cards-account-container'
        showAddBtn={true}

      >

        <div className="add-cards-container">

          {(company.length === 0 && nameList !== 'company') ? 'Нужно создать хотя бы одну компанию' : (<Link className="btn btn--blue cabinet-add-cards ico-in ico-in--left" to={`/cabinet/${nameList}-new`}>
            <i></i>
            <span>
              {addBtnText}
            </span>
          </Link>)}
        </div>
        {loading ? <PreloaderList /> : listings.length > 0 ? (
          <>

            <table>
              <tbody>
                <tr>
                  {whatshowName.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                  <th>Обновлено</th>
                  <th>Действия</th>
                </tr>
                {
                  listings.map((listing) => (
                    <tr key={listing.id}>
                      <CardsItemDefault
                        listing={listing}
                        id={listing.id}
                        onEdit={() => onEdit(listing.id)}
                        onDelete={() => deleteItem(listings, listing.id)}
                        whatshow={whatshow}

                      />
                    </tr>
                  ))
                }
              </tbody>
            </table>

          </>
        ) : <EmptyList />}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo.info,

  }
}

export default connect(mapStateToProps, { ActionFn })(CardsListDefault);