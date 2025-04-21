import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Informe seu endereço de e-mail" })
    .email({ message: "Formato de e-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),

  password: z
    .string()
    .min(1, { message: "Informe sua senha" })
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

  rememberMe: z.boolean().default(false).optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
