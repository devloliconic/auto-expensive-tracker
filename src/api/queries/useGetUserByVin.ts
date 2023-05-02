import { collection, getDocs, query, where } from 'firebase/firestore';

import { dataBase } from '@/utils';

export const useGetUserByVin = () => {
  const getUserByVin = async (vin: string) => {
    try {
      return await getDocs(query(collection(dataBase, 'user'), where('vin', '==', vin)));
    } catch (e) {
      console.log(e);
    }
  };

  return { getUserByVin };
};
