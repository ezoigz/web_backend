import { User } from "@/prisma/client"

export type UserType = Omit<User, "password" | "pictureId" | "createAt" | "updatedAt">

