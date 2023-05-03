import React from 'react';

import Layout from '@/components/Layout';
import { useProtectedRoute } from '@/utils/hooks/useProtectedRoute';

const HomePage = () => {
  useProtectedRoute();
  return (
    <Layout>
      <div>home page</div>
    </Layout>
  );
};

export default HomePage;
