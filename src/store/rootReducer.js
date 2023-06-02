
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


// import fieldsDemo from 'store/reducers/base/fieldsDemo';
import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';

import fieldsAccount from 'store/reducers/base/fieldsAccount';

import fieldsCompany from 'store/reducers/base/fieldsCompany';
import fieldsServices from 'store/reducers/base/fieldsServices';
import fieldsSpecialists from 'store/reducers/base/fieldsSpecialists';
import fieldsPromo from 'store/reducers/base/fieldsPromo';

import fieldsChat from 'store/reducers/base/fieldsChat';
import fieldsReviews from 'store/reducers/base/fieldsReviews';



import fieldsFeedback from 'store/reducers/base/fieldsFeedback';
import russianCities from "store/reducers/base/russianCities";

import infoAccountReducer from "store/reducers/infoAccountReducer";

import popupReducer from "store/reducers/popupReducer";

import popupMapInfoReducer from "store/reducers/popupMapInfoReducer";


import listingSearchReducer from "store/reducers/listingSearchReducer";
import inputConnectReducer from "store/reducers/inputConnectReducer";



const rootReducer = combineReducers({
  form: formReducer,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsAccount: fieldsAccount,
  fieldsCompany: fieldsCompany,
  fieldsServices: fieldsServices,
  fieldsSpecialists: fieldsSpecialists,
  fieldsPromo: fieldsPromo,
  fieldsFeedback: fieldsFeedback,
  fieldsChat: fieldsChat,
  fieldsReviews: fieldsReviews,
  russianCities: russianCities,
  accountInfo: infoAccountReducer,
  popupReducer: popupReducer,
  popupMapInfoReducer: popupMapInfoReducer,
  listingSearchReducer: listingSearchReducer,
  inputConnectState: inputConnectReducer,
});

export default rootReducer;
