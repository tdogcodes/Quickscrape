"use server";

import { symmetricEncrypt } from "@/lib/encryption";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const GetCredentialsForUser = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  let credentials = await prisma.credential.findMany({
    where: { userId },
    orderBy: { name: "asc" },
  });

  if(credentials.length === 0){
     const defaultCredential = await prisma.credential.create({
      data: {
        userId,
        name: "Gemini 2.0 Flash",
        value: symmetricEncrypt(process.env.OPENAI_API_KEY!), // Assuming default credential has no value
      },
     })
     credentials = [defaultCredential];
  }
  return credentials
};
