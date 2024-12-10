import { z } from 'zod'


export const validateBody = z.object({
    name: z.string(),
    password: z.string(),
    mail: z.string().email().optional()
})

export const validateContent = z.object({
    title: z.string().min(0).max(200),
    Link: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    userId: z.string().optional(),
})