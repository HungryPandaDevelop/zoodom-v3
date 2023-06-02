import { useState } from 'react';


import { connect } from 'react-redux';
import ActionFn from 'store/actions';



const Search = ({ ActionFn, }) => {



  const [headSearch, setHeadSearch] = useState('');
  const [showBtnEmpty, setShowBtnEmpty] = useState(false);

  const [stateMobleSearch, setStateMobileSearch] = useState(false);

  const onHeadSearch = (e) => {
    setHeadSearch(e.target.value);
    if (e.target.value.length > 1) {
      setShowBtnEmpty(true);
    } else {
      setShowBtnEmpty(false);
    }
  }
  const onEmptySearch = () => {
    setHeadSearch('');
    ActionFn('SEARCH_NAME_LISTING', '');
    setShowBtnEmpty(false);
  };
  const onSearch = (e) => {
    ActionFn('SEARCH_NAME_LISTING', headSearch);
  }

  const onShowMobileSearch = () => {
    setStateMobileSearch(!stateMobleSearch);
  }

  return (
    <div className="main-full">
      <div className="stub"></div>
      <h1>
        Search
      </h1>
      <div className={`btn-header-loop ${stateMobleSearch && 'active'}`} onClick={onShowMobileSearch}></div>
      <div className={`search-header ${stateMobleSearch && 'search-header-mobile'}`}>
        <div className="search-container">

          <div className="input-container">
            <input
              className="input-decorate"
              type="text"
              value={headSearch}
              placeholder="Профессия, должность или компания"
              onChange={(e) => { onHeadSearch(e) }}
            />
            {showBtnEmpty && <div
              className="search-reset-btn"
              onClick={onEmptySearch}
            ></div>}
          </div>
          <div className="btn btn--orange" onClick={onSearch}>Поиск</div>
        </div>

      </div>
    </div>
  )
}

export default connect(null,
  {
    ActionFn
  })(Search);