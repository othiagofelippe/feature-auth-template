import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Formato de email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
