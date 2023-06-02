import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectAccount = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/cabinet/account', { replace: true });
  }, []);


  return (
    <div>
      RedirectAccount
    </div>
  )
}

export default RedirectAccount
