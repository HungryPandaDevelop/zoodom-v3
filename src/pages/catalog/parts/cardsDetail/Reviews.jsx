import RenderFormReviews from 'components/forms/RenderFormReviews';
import ReviewsItem from 'pages/catalog/parts/cardsDetail/ReviewsItem';

import axios from "axios";
import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// import { addRews } from 'store/asyncActions/addCards';
// import { getListing } from 'store/asyncActions/getListing';


import defaultCardsImg from 'front-end/images/icons/avatar-black.svg';

const Reviews = ({
  uid,
  checkingStatus,
  dataForm,
  userInfo,
  fields,
  elementId,
  title,
  titleCategory,
  nameCategory,
  ActionFn,

}) => {


  const [statusName, setStatusName] = useState(false);



  const siteWp = 'https://zoo-base.sait.website/';

  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [refreshDoc, setRefreshDoc] = useState(false);
  const [tempValue, setTempValue] = useState({});

  useEffect(() => {
    // console.log('dataForm', dataForm)
    let isMounted = true;


    const fio = userInfo.name + ' ' + userInfo.family + ' ' + userInfo.secondName;

    userInfo.uid && ActionFn('HIDDEN_VALUE', { hiddenValue: { 'statusName': statusName, 'fio': fio, 'category': titleCategory } });

    axios.get(`${siteWp}/wp-json/comments/list?listingRef=${elementId}`).then(res => {

      if (isMounted) {
        setListings(res.data);

        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [refreshDoc, userInfo, statusName]);


  const onSubmitIn = () => {
    console.log('sub', dataForm)
    const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;

    const addUserInfo = {
      ...dataForm.values,
      accountName: userInfo.accountName,
      imgsAccount: imgCards,
      uid: userInfo.uid,
      listingRef: elementId
    };
    if (!dataForm.syncErrors) {


      console.log('syncErrors check')
      axios.post(`${siteWp}/wp-json/comments/add`, addUserInfo, {}).then(res => {
        setRefreshDoc(!refreshDoc);
        toast.success('Отзыв опубликован');

        setTimeout(() => {
          setTempValue({
            dignity: ' ',
            limitations: ' ',
            reviews: ' ',
          });
        }, 3000);

      }).catch(err => {
        console.log('err', err);
      });

    }

  }


  const showHideForm = (thisListing) => {
    let chectUId = true;

    if (chectUId) {
      return (
        checkingStatus ? 'Loading account...' : (
          <>

            <h2>Оставить отзыв о {titleCategory[0]} {title}</h2>
            <h3>Оцените {titleCategory[1]}</h3>
            <RenderFormReviews
              btnSaveText="Оставить отзыв"
              objFields={fields}
              orderFields={fields.order}
              onSubmitIn={onSubmitIn}
              sending={true}
              initialValues={tempValue}
              btnClass='btn-save btn--orange'
              formClassAdd="form-default rew-default-container"
              userInfo={userInfo}
              uid={uid}
              outsideValue={`Поделитесь впечатлениями о ${titleCategory[2]}`}
              statusName={statusName}
              setStatusName={setStatusName}
            />
            <div className="rew-hint-send">
              Перед отправкой ознакомьтесь с <Link to="/rule-public">правилами публикации</Link>
            </div>
          </>

        )
      )
    }
    else {
      return (<h2>Вы уже оставили отзыв</h2>);
    }

  }



  return (
    <>
      <div className="reviews-detail">
        <div className="main-grid ">

          {loading ? 'Загрузка...' : listings.length === 0 ? '' : (
            <div className="col-6 col-sm-12">
              <h2>Отзывы о {titleCategory[0]} {title}</h2>
              <div className="reviews-list">
                {listings.map((item, index) => (
                  <ReviewsItem
                    key={index}
                    item={item}
                    defaultCardsImg={defaultCardsImg}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="col-6  col-sm-12 rew-default-container">
            {listings && showHideForm(listings)}

          </div>
        </div>

      </div>


    </>
  )
}


const mapStateToProps = (state) => {

  const fields = state.fieldsReviews;
  const formReducer = state.form && state.form.singleInput;
  return {
    fields: fields,
    dataForm: formReducer,
    userInfo: state.accountInfo,
    uid: state.accountInfo.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps, { ActionFn })(Reviews);