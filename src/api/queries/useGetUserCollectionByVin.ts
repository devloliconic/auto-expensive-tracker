import { collection, getDocs } from 'firebase/firestore';

import { dataBase } from '@/utils';

export const useGetUserCollectionByVin = () => {
  const getUserCollectionByVin = async (vin: string) => {
    return await Promise.all([
      getDocs(collection(dataBase, 'user', vin, 'fuel')),
      getDocs(collection(dataBase, 'user', vin, 'consumables')),
      getDocs(collection(dataBase, 'user', vin, 'service')),
      getDocs(collection(dataBase, 'user', vin, 'changeDetails')),
      getDocs(collection(dataBase, 'user', vin, 'other')),
    ]);
  };

  return { getUserCollectionByVin };
};
