import { rewRating } from 'pages/catalog/parts/cardsDetail/rewRating';
import { useState } from 'react';

const RewRaitingDetail = ({ idEl }) => {

  const [totalGrade, setTotalGrade] = useState(0)
  const [gradeLength, setGradeLength] = useState(0);
  useState(() => {

    rewRating(idEl).then(res => {

      setTotalGrade(res[0]);
      setGradeLength(res[1]);
    });

  }, [])


  const renderStars = (grade) => {

    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<i
        key={i}
        className={`star-ico star-ico--green ${Number(grade) - 1 >= i && 'active'}`}
      ></i>)
    }

    return stars;
  }



  return (
    <div className='cards-detail-rew'>
      <div className="cards-detail-rew-starts">
        {renderStars(totalGrade)}
      </div>
      <div className="cards-detail-rew-grade">
        Всего отзывов: {gradeLength}
      </div>
    </div>
  )
}

export default RewRaitingDetail;
