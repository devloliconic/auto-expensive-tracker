import { collection, getDocs, query, where } from 'firebase/firestore';

import { dataBase } from '@/utils';

export const useGetUserByVin = () => {
  const getUserByVin = async (vin: string) => {
    return await getDocs(query(collection(dataBase, 'user'), where('vin', '==', vin)));
  };

  return { getUserByVin };
};
