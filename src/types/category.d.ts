import { Category } from "@prisma/client"

export type CategoryType = Omit<Category, "cratedAt", "updateAT">