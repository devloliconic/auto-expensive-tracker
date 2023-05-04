import { doc, updateDoc } from 'firebase/firestore';

import { DataEditFields } from '@/_types/user';
import { dataBase } from '@/utils';

export const useEditProfileData = () => {
  const updateUserProfile = async (data: DataEditFields) => {
    const userRef = doc(dataBase, 'user', data.vin);
    try {
      return await updateDoc(userRef, data as Record<string, any>);
    } catch (e) {
      console.log(e);
    }
  };
  return { updateUserProfile };
};
