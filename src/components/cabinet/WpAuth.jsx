import axios from "axios";

const siteWp = 'https://zoo-base.sait.website/';

const loginData = {
  username: 'redactor',
  password: '7EnuJ2Lq1HyHR@e#IDd*jcnm'
}

// /wp-json/wp/v2/media


export const WpAuth = async () => {
  try {
    const response = await axios.post(`${siteWp}/wp-json/jwt-auth/v1/token`, loginData, {});
    return response.data;

  } catch (err) {
    console.log('err', err)
  }


};