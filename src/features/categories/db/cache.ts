import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export const getCategoryGlobalTag = () => {
    return getGlobalTag("categories")
}

export const getCategoryGlobalIdTag = (id: string) => {
    return getIdTag("categories", id)
}

export const revalidateCategoryCache = (id: string) => {
    revalidateTag(getCategoryGlobalTag())
    // global cache tag
    revalidateTag(getCategoryGlobalIdTag(id))
    //  specific id tag
}
