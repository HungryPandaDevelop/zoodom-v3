
import { Link } from 'react-router-dom';
import { onDeleteCollection } from 'store/asyncActions/getListing';


const CardItemLike = ({
  like,
  setUpdate,
  update
}) => {





  return (
    <>
      < td >
        <div className="cards-cabinet-item main-full">
          <div className="cards-account-topic">
            <Link to={`/catalog/${like.userInfo.typeCabinet}/${like.idCards}`}>{like.card_name}</Link>
          </div>
        </div>
      </td >
      <td>
        <div className="btn-container">

          <div onClick={() => { onDeleteCollection('hidden', like.id); setUpdate(!update); }} className="table-btn table-btn--delete"></div>
        </div>
      </td>
    </>
  )
}

export default CardItemLike;

