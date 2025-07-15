import { db } from "@/lib/db"
import {
    unstable_cacheLife as cacheLife,
    unstable_cacheTag as cacheTag
} from "next/cache"
import { getCategoryGlobalTag, revalidateCategoryCache } from "./cache"
import { categorySchema } from "@/features/categories/components/schemas/categories"
import { authCheck } from "@/features/auths/db/auths"
import { canCreateCategory } from "../permissions/categorise"
import { redirect } from "next/navigation"


interface CreateCategoryInput {
    name: string
}

interface UpdateCategoryInput {
    id: string
    name: string
}

export const getCategories = async () => {
    "use cache"

    cacheLife("days")
    cacheTag(getCategoryGlobalTag())
    try {
        return await db.category.findMany({
            orderBy: { createdAt: "asc" },
            select: {
                id: true,
                name: true,
                status: true

            }
        })
    } catch (error) {
        console.error('Error getting categories data:', error)
        return []
    }
}

export const createCategory = async (input: CreateCategoryInput) => {

    const user = await authCheck()
    if (!user || !canCreateCategory(user)) {
        redirect("/")
    }

    try {
        const { success, data, error } = categorySchema.safeParse(input)
        if (!success) {
            return {
                message: "Please enter valid data",
                error: error.flatten().fieldErrors
            }
        }

        //เช็ค catagory  database error
        const category = await db.category.findFirst({
            where: {
                name: data.name
            }
        })

        if (category) {
            return {
                message: "A category with this name already exists"
            }
        }

        //สร้าง category 

        const newCategory = await db.category.create({
            data: {
                name: data.name
            }
        })

        revalidateCategoryCache(newCategory.id)

    } catch (error) {
        console.error("Error creating new category:", error)
        return {
            message: "Something went wrong, Please try again later"
        }
    }
}


export const UpdateCategory = async (input: UpdateCategoryInput) => {
    try {
        const { success, data, error } = categorySchema.safeParse(input)
        if (!success) {
            return {
                message: "Please enter vaild data",
                error: error.flatten().fieldErrors
            }
        }

        // check if category
        const existsingCategory = await db.category.findUnique({
            where: {
                id: input.id
            }
        })
        if (!existsingCategory) {
            return "Category not found"

        }
    } catch (error) {
        console.error("Error updating category:", error)
        return {
            message: "Someting want wrong, Please try again later"
        }

    }
}


