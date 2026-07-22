import { databases } from "./appwrite";

export const getUserData = async () => {
  return await databases.listDocuments("DATABASE_ID", "COLLECTION_ID");
};
