import { db } from "../config/firebaseConfig";
import { User } from '@/packages/user/user';

export const updateUser = async (id: string, userData: Partial<User>): Promise<void> => {
  await db.collection("users").doc(id).update(userData);
};

export const fetchUser = async (id: string): Promise<User | null> => {
  const doc = await db.collection("users").doc(id).get();
  return doc.exists ? ({ id: doc.id, ...doc.data() } as User) : null;
};