
import axios from "axios";



export const rewRating = async (idEl) => {

  let allRews = [];
  let totalGrade = 0;

    const siteWp = 'https://zoo-base.sait.website/';
    try {

    await axios.get(`${siteWp}/wp-json/comments/list?listingRef=${idEl}`).then(res => {
        allRews = res.data;

        let tempGrade = 0;
        
        allRews.map(el => { tempGrade = tempGrade + Number(el.grade) });
      
        if(res.data.length === 0) { return false;}
        totalGrade = (tempGrade / res.data.length)

      
        
    });
    return [totalGrade, allRews.length];
  }
  catch(err){
    console.log(err)
  }

};



