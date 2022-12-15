import { useEffect } from "react";
import { isLogin } from '../../utils/isLogin';
import { useNavigate } from "react-router-dom/dist";

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      isLogin() ? navigate('/home') : navigate('/login')
    }, 1500);
  }, []);


  return (
    <>
      <div className='splash'>
        <h1>
          <img src='CAMPERZ_LIGHT' alt='CAMPERZ' />
        </h1>
      </div>
    </>
  );
}
