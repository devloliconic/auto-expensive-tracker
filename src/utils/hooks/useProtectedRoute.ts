import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useProtectedRoute = () => {
  const navigate = useNavigate();
  const userHasVinId = !!localStorage.getItem('USER_VIN');
  useEffect(() => {
    if (!userHasVinId) {
      navigate('/login');
    }
  }, [navigate, userHasVinId]);
};
