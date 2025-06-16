import { z } from "zod";

export const CreateWorkflowSchema = z.object({
    name: z.string().max(50).min(1, "Name is required"),
    description: z.string().max(80).optional(),
})

export type CreateWorkflowSchemaType = z.infer<typeof CreateWorkflowSchema>;