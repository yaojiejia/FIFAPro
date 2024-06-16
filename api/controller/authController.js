import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();
export const createUser = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const apiKey = await bcrypt.hash(username, 10);
    try {
        const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            apiKey,
        },
        });

    return { apiKey};
  } catch (error) {
    console.error('Error creating user:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
}