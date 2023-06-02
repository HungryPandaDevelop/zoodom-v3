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
    <div
      className="search-field-popup"
      ref={wrapperRef}
    >
      <div className="filters-close-popup" onClick={() => { setCityPopupState(false) }}></div>
      <div className="search-field-container">
        <i></i>
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

      <ul className="ln">
        {renderList(currentList, choiseOnClick)}
      </ul>
    </div>
  )
}

export default ListPopup
