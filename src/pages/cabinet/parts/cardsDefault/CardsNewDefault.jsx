import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { addCardsDefault } from 'store/asyncActions/addCards';

import { getListing } from 'store/asyncActions/getListing';


import { toast } from 'react-toastify';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RenderFormAccount from 'components/forms/RenderFormAccount';


const VacanciesNew = ({ fields, dataForm, nameList, fieldsDefault, titleForm, accountInfo }) => {


  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getListing(nameList).then(res => {
      if (isMounted) {

        setListings(res);
        // console.log(res.length, accountInfo.currentCard)

        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [nameList]);


  const toTranslit = (text) => {
    return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
      (all, ch, space, words, i) => {
        if (space || words) {
          return space ? '-' : '';
        }
        let code = ch.charCodeAt(0),
          index = code == 1025 || code == 1105 ? 0 :
            code > 1071 ? code - 1071 : code - 1039,
          t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
            'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
            'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
            'shch', '', 'y', '', 'e', 'yu', 'ya'
          ];
        return t[index];
      });
  }
  const onSubmitIn = () => {


    let sendCheck = true;
    // const newData = { ...dataForm.values, userRef: accountInfo.uid, userInfo: accountInfo };


    const newTitle = toTranslit(dataForm.values.card_name);
    listings.map(item => {

      if (item.id === newTitle) {
        toast.error('Компания с таким название уже есть')
        sendCheck = false;
      }
    });

    const newData = {
      ...dataForm.values,
      userRef: accountInfo.uid,
      sligPost: newTitle
    };
    if (!dataForm.syncErrors && sendCheck === true) {

      addCardsDefault(newData, nameList).then(() => {
        navigate('/cabinet/' + nameList, { replace: true });
      });

    } else {
      console.log('Ошибка')
    }
  }


  if (loading === true) {
    return false;
  }


  return (
    <>
      <TemplateAccount title={titleForm} >
        <RenderFormAccount
          btnSaveText={titleForm}
          objFields={fields[fieldsDefault]}
          orderFields={fields[fieldsDefault].order}
          onSubmitIn={onSubmitIn}
          sending={true}
          cabinetBack={true}

        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    accountInfo: state.accountInfo,
    fields: state, // база полей
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(VacanciesNew);