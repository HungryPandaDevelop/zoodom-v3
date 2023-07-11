export const renderList = (listParam, choiseOnClick) => {

  return (listParam.length > 0) ? listParam.map((item, index) => (
    <div
      key={index}
      option={item.name}
      onClick={(e)=>{choiseOnClick(e)}}
      className="search-list-item"
    >
      {item.name}</div>
  )) : (<li>Список пуст</li>);
};

export const openClosePopup = (setCityPopupState)=>{
  const hideByBodyClick = (e) => {
    if (e.target.className !== 'search-input input-decorate' && e.target.className !== 'search-name') {
      setCityPopupState(false)
    }

  };
  const hideByBodyByKey = (e) => {
    if (e.key === 'Escape') { setCityPopupState(false); }
  };
  document.addEventListener('keydown', hideByBodyByKey);
  document.body.addEventListener('click', hideByBodyClick);
  return () => {
    document.body.removeEventListener('click', hideByBodyByKey)
    document.body.removeEventListener('keydown', hideByBodyClick)
  };
}