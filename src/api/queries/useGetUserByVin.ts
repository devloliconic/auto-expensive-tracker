import { doc, getDoc } from 'firebase/firestore';

import { dataBase } from '@/utils';

export const useGetUserByVin = () => {
  const getUserByVin = async (vin: string) => {
    const docRef = doc(dataBase, 'user', vin);
    return await getDoc(docRef);
  };

  return { getUserByVin };
};
