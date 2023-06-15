import { useEffect } from "react"
const PageNav = ({ breedsCategory }) => {


  useEffect(() => {

  }, [])

  const movePage = (e) => {

    let getPoint = e.target.dataset.index;
    let pointOne = document.getElementById(getPoint).offsetTop;

    console.log('move', e.target.dataset.index, pointOne)
    window.scrollTo({
      top: pointOne - 90,
      behavior: 'smooth',
    });
  }

  const movePageExtraOne = (e, index) => {
    let getPoint = e.target.dataset.index;
    let parent = document.querySelector(getPoint);
    let firstChild = parent.querySelectorAll('h2');

    let point = firstChild[index].offsetTop;

    window.scrollTo({
      top: point - 90,
      behavior: 'smooth',
    });
  }

  return (
    <div className="breedsNav">
      <h2>Содержание</h2>
      <ul className="ln">
        <li><h3><span data-index="point-1" onClick={(e) => movePage(e)}>1 Описание породы</span></h3></li>
        <li><h3><span data-index="point-2" onClick={(e) => movePage(e)}>2 Внешний вид</span></h3></li>
        <li><span data-index="point-3.1" onClick={(e) => movePage(e)}>2.1 Голова </span></li>
        <li><span data-index="point-3.2" onClick={(e) => movePage(e)}>2.2 Морда  </span></li>
        <li><span data-index="point-3.3" onClick={(e) => movePage(e)}>2.3 Зубы </span></li>
        <li><span data-index="point-3.4" onClick={(e) => movePage(e)}>2.4 Уши  </span></li>
        <li><span data-index="point-3.5" onClick={(e) => movePage(e)}>2.5 Глаза  </span></li>
        <li><span data-index="point-3.6" onClick={(e) => movePage(e)}>2.6 Туловище </span></li>
        <li><span data-index="point-3.7" onClick={(e) => movePage(e)}>2.7 Лапы </span></li>
        <li><span data-index="point-3.8" onClick={(e) => movePage(e)}>2.8 Шерсть</span></li>
        <li><span data-index="point-3.9" onClick={(e) => movePage(e)}>2.9 Окрас</span></li>
        <li><span data-index="point-3.10" onClick={(e) => movePage(e)}>2.10 Хвост </span></li>
        <li><h3><span data-index="point-4" onClick={(e) => movePage(e)}>3. Характер</span></h3></li>
        <li><h3><span data-index="point-5" onClick={(e) => movePage(e)}>4. Содержание и уход</span></h3></li>
        <li><h3><span data-index="point-6" onClick={(e) => movePage(e, 3)}>5. Дрессировка и обучение</span></h3></li>
        <li><h3><span data-index="point-7" onClick={(e) => movePage(e)}>6. Как выбрать {breedsCategory === 'koshki' ? 'котенка' : 'щенка'}</span></h3></li>
        <li><h3><span data-index="point-8" onClick={(e) => movePage(e, 2)}>7. Здоровье и болезни</span></h3></li>
      </ul>
    </div>
  )
}

export default PageNav
