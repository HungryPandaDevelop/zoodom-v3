

const filterMain = (listingSearch, data)=>{

  // if (listingSearch.name) {
  //   data = data.filter(item => item.data.card_name.indexOf(listingSearch.name) >= 0);
  // }
  
  data = data.filter(item => item.data.card_name.indexOf(listingSearch.name) >= 0);

  return data;
}

export default filterMain;