import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();
  const Logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    navigate('/login');

  }

  return { Logout }
}