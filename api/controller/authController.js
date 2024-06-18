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

export const login = async (username, password) => {
    try {
        const user = await prisma.user.findUnique({
        where: {
            username,
        },
        });
        if (!user) {
        return { error: true, message: 'User not found' };
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return { error: true, message: 'Incorrect Password' };
        }
        
        return { user };
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: true, message: 'Internal Server Error, Please Check Documentation' };
    } finally {
        await prisma.$disconnect();
    }

}