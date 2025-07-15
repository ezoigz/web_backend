import { z } from "zod"

// Define Constants
const MIN_NAME_LENGTH = 2

//Define error message

const ERROR_MESSAGE = {
    name: `Category name must be at least ${MIN_NAME_LENGTH} characters`
}

//main Category

export const categorySchema = z.object({
    name: z.string()
        .min(MIN_NAME_LENGTH, { message: ERROR_MESSAGE.name })
})