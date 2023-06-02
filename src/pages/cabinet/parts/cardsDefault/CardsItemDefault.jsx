import CardsControlsDefault from 'pages/cabinet/parts/cardsDefault/CardsControlsDefault';
import CardsUpdate from 'pages/cabinet/parts/cards/CardsUpdate';

const CardsItemDefault = ({
  listing,
  onDelete,
  onEdit,
  id,
  whatshow
}) => {


  return (
    <>
      {whatshow.map((item, index) => {
        return (<td key={index}>{listing[item]}</td>)
      })}

      <td><CardsUpdate update={listing.timestamp} /></td>
      <td>
        <CardsControlsDefault
          id={id}
          name={listing.name}
          onEdit={onEdit}
          onDelete={onDelete}

        />
      </td>
    </>
  )
}

export default CardsItemDefault;