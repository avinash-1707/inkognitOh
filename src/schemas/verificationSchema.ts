import { z } from 'zod'

export const verficationSchema = z.object({
    code : z.string()
    .length(6,"Verification code should be of length 6.")
})