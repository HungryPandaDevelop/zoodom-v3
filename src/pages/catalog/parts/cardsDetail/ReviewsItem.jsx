import SimpleDateTime from 'react-simple-timestamp-to-date';


const renderStars = (item) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<i
      key={i}
      className={`star-ico ${Number(item.grade) - 1 >= i && 'active'}`}
    ></i>)
  }

  return stars;
}

const ReviewsItem = ({
  item,
  defaultCardsImg }) => {
  // console.log(item)
  return (
    <div className="reviews-item">
      <div className="main-grid">
        <div className="reviews-info col-1 col-md-12 col-sm-2 col-xs-12">
          {item.statusName ? (<div
            className="reviews-img img-cover"
            style={{ backgroundImage: `url(${item.imgsAccount})` }}
          >
          </div>) : (<div
            className="reviews-img img-cover"
          >
            {item.accountName.slice(0, 1)}
          </div>)}

        </div>
        <div className="reviews-body col-11 col-md-12 col-sm-10 col-xs-12">
          <div className="reviews-roof">
            {item.statusName ? (<h2>{item.fio ? item.fio : item.accountName}</h2>) : (<h2>Аноним</h2>)}
            <div className="reviews-date">
              {item.date}

            </div>
            <div className="reviews-stars-container">
              {renderStars(item)}
            </div>
          </div>
          <div className="reviews-text">
            <h4>Преимущества:</h4>
            {item.dignity}
          </div>
          <div className="reviews-text">
            <h4>Недостатки:</h4>
            {item.limitations}
          </div>
          <div className="reviews-text">
            <h4>Отзыв:</h4>
            {item.reviews}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ReviewsItem
