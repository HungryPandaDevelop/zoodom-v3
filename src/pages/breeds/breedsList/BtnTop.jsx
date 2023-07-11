

const BtnTop = () => {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='top-btn' onClick={goToTop}>

    </div>
  )
}

export default BtnTop
