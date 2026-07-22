import { account } from "./appwrite";

export const login = async (email, password) => {
  return await account.createEmailSession(email, password);
};
