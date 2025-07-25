"use server"

import { InitialFormState } from "@/types/action"
import { createCategory } from "@/features/categories/db/categories"


export const categoryAction = async (_prevState: InitialFormState, formData: FormData) => {
    const rawData = {
        id: formData.get("category_id") as string,
        name: formData.get("category_name") as string
    }

    const result = await createCategory(rawData)


    return result && result.message
        ? {
            success: false,
            message: result.message,
            errors: result.error
        } : {
            success: true,
            message: rawData.id ? " Updated Succes " : "Created Succes"
        }

}