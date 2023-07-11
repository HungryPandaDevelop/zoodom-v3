import { renderList } from './renderList';

const ListPopup = ({
  wrapperRef,
  setCityPopupState,
  inputRef,
  сhoiseNameFiltering,
  onSearchCity,
  currentList,
  choiseOnClick
}) => {

  return (
    <ul
      className="ln search-field-popup"
      ref={wrapperRef}
    >
      <div className="search-field-select">
        <i className='ico-empty-search'></i>
        <input
          ref={inputRef}
          type="text"
          value={сhoiseNameFiltering}
          className="search-input input-decorate"
          onChange={onSearchCity}
          // onBlur={() => setCityPopupState(false)}
          onFocus={(event) => { setCityPopupState(true); event.target.select() }}
          placeholder="Порода"
        />
      </div>
      <div className="search-list">
        {renderList(currentList, choiseOnClick)}
      </div>
    </ul>
  )
}

export default ListPopup
