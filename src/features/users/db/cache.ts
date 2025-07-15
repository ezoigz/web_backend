import { getGlobalTag, getIdTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export const getuserGlobalTag = () => {
    return getGlobalTag("users")
}

export const getUserIdTeg = (id: string) => {
    return getIdTag("users", id)
}
export const revalidateUserCache = (id: string) => {
    revalidateTag(getGlobalTag("users"))
    revalidateTag(getUserIdTeg(id))
}

