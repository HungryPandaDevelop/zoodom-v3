import ico10 from 'front-end/images/adv/malopodvignaya-sobaka.svg';
import ico11 from 'front-end/images/adv/sobaka-malo-est.svg';
import ico12 from 'front-end/images/adv/sobaka-dla-allergika.svg';
import ico13 from 'front-end/images/adv/sobaka-mnogo-spit.svg';
import ico14 from 'front-end/images/adv/sobaka-drugit-s-detmi.svg';
import ico15 from 'front-end/images/adv/giperaktivnaya-sobaka.svg';
import ico16 from 'front-end/images/adv/sobaka-nyanka.svg';
import ico17 from 'front-end/images/adv/sobaka-prigodna-dka-ohoti.svg';
import ico18 from 'front-end/images/adv/legko-obuchaemaya-sobaka.svg';
import ico19 from 'front-end/images/adv/ochen-ymnaya-sobaka.svg';
import ico20 from 'front-end/images/adv/mirolubivaya-sobaka.svg';
import ico21 from 'front-end/images/adv/sobaka-otlichnii-storog.svg';
import ico22 from 'front-end/images/adv/sobaka-ne-drugit-s-detmi.svg';
import ico23 from 'front-end/images/adv/sobaka-nabiraet-lishnii-ves.svg';

import ico24 from 'front-end/images/adv/malopodvizhnaya-koshka.svg';
import ico25 from 'front-end/images/adv/legko-obuchaema-koshka.svg';
import ico26 from 'front-end/images/adv/podhodit-allergikam-koshka.svg';
import ico27 from 'front-end/images/adv/giperaktivnaya-koshka.svg';
import ico28 from 'front-end/images/adv/nabiraet-lishnij-ves-koshka.svg';
import ico29 from 'front-end/images/adv/mnogo-spit-koshka.svg';
import ico30 from 'front-end/images/adv/mirolyubiva-koshka.svg';
import ico31 from 'front-end/images/adv/malo-est-koshka.svg';



const renderItemCheckbox = (obj) => {

  return obj.value.map((item, index) => {


    let ico;
    switch (item) {
      case "type1":
        ico = ico10;
        break;
      case "type2":
        ico = ico12;
        break;
      case "type3":
        ico = ico13;
        break;
      case "type4":
        ico = ico11;
        break;
      case "type5":
        ico = ico14;
        break;
      case "type6":
        ico = ico15;
        break;
      case "type7":
        ico = ico16;
        break;
      case "type8":
        ico = ico17;
        break;
      case "type9":
        ico = ico18;
        break;
      case "type10":
        ico = ico19;
        break;
      case "type11":
        ico = ico20;
        break;
      case "type12":
        ico = ico21;
        break;
      case "type13":
        ico = ico22;
        break;
      case "type14":
        ico = ico23;
        break;
      case "type15":
        ico = ico24;
        break;
      case "type16":
        ico = ico25;
        break;
      case "type17":
        ico = ico26;
        break;
      case "type18":
        ico = ico27;
        break;
      case "type19":
        ico = ico28;
        break;
      case "type20":
        ico = ico29;
        break;
      case "type21":
        ico = ico30;
        break;
      case "type22":
        ico = ico31;
        break;
      default:
        console.log("Sorry.");
    }


    return (
      <div key={index} className="breed-adv-item">
        <div className="breed-adv-item-img">
          <img src={ico} alt="" />
        </div>
        <div className="breed-adv-item-info">
          <h4>{obj.choices[item]}</h4>
        </div>
      </div>

    )
  }
  );
}

const BreedFeatures = ({ listings }) => {
  return (

    <div className="breed-description-roof-content" >
      <h2>Особенности породы:</h2>
      {renderItemCheckbox(listings.osobennosti_porody)}
    </div>
  )
}

export default BreedFeatures
