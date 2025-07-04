import { User } from "@/prisma/client"

export interface UserType extends Omit<User, "password" | "pictureId" | "createAt" | "updatedAt"> { }