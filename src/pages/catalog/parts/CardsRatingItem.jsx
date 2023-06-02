import { rewRating } from 'pages/catalog/parts/cardsDetail/rewRating';
import { useState } from 'react';

const CardsRatingItem = ({ idEl }) => {

  const [totalGrade, setTotalGrade] = useState()
  const [gradeLength, setGradeLength] = useState(0);
  useState(() => {

    rewRating(idEl).then(res => {

      // setTotalGrade(Math.floor(res[0], -1));
      setTotalGrade(res[0].toFixed(1));
      setGradeLength(res[1]);
    });

  }, [])

  if (gradeLength === 0) {
    return false;
  }

  return (
    <>
      <div className="cards-raiting"> <i> </i><span>{totalGrade}</span><em>| {gradeLength} отзывов</em></div>
    </>
  )
}

export default CardsRatingItem;
