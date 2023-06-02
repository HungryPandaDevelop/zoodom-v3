import axios from "axios";

export const uploadBreeds = async (curentBreeds) => {
  let allBreeds = [];
  const siteWp = 'http://zoo-base.sait.website/';

  await axios.get(`${siteWp}/wp-json/breeds/list?category=` + curentBreeds).then(res => {
    res.data.map(item => {
      allBreeds.push({ name: item.title })
    });
  });

  return allBreeds;
}