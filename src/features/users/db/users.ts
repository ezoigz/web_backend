import { db } from "@/lib/db"
import {
    unstable_cacheLife as cacheLife,
    unstable_cacheTag as cacheTag
} from "next/cache"
import { getUserIdTeg } from "./cache"

export const getUserByid = async (id: string) => {
    "use cache"

    cacheLife("hours")

    cacheTag(getUserIdTeg(id))

    try {
        const user = await db.user.findUnique({
            where: { id, status: "Active" },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                status: true,
                address: true,
                picture: true,
                tel: true
            }

        })
        return user
    } catch (error) {
        console.error("Error getting user by id ", error)
        return null
    }
}