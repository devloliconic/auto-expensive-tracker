import { doc, setDoc } from 'firebase/firestore';

import { dataBase } from '@/utils';

export const useAddUserEntries = () => {
  const addUser = async (id: string, data: unknown) => {
    await setDoc(doc(dataBase, 'user', id), data);
  };

  return { addUser };
};
