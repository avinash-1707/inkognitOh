import { z } from 'zod'

export const messageSchema = z.object({
    content : z.string()
    .min(8,"Message should be atleast 8 characters long!")
    .max(250,"Content must be no longer than 250 characters")
})