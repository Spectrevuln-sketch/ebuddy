import { db } from "../config/firebaseConfig";
export const updateUser = async (id, userData) => {
    await db.collection("users").doc(id).update(userData);
};
export const fetchUser = async (id) => {
    const doc = await db.collection("users").doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
};
