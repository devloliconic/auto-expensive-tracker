import React from 'react';

import { useProtectedRoute } from '@/utils/hooks/useProtectedRoute';

const HomePage = () => {
  useProtectedRoute();
  return <div>home page</div>;
};

export default HomePage;
