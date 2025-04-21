import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Senha é obrigatória" })
      .min(8, { message: "Sua senha deve ter pelo menos 8 caracteres" })
      .max(100, { message: "Sua senha deve ter no máximo 100 caracteres" })
      .regex(/[A-Z]/, {
        message: "Sua senha deve conter pelo menos uma letra maiúscula",
      })
      .regex(/[0-9]/, {
        message: "Sua senha deve conter pelo menos um número",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Sua senha deve conter pelo menos um caractere especial",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirmação de senha é obrigatória" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
