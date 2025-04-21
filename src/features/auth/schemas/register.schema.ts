import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Nome é obrigatório" })
      .min(3, { message: "Seu nome deve ter pelo menos 3 caracteres" })
      .max(100, { message: "Seu nome deve ter no máximo 100 caracteres" })
      .refine((name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/.test(name), {
        message: "Nome deve conter apenas letras e espaços",
      }),

    email: z
      .string()
      .trim()
      .min(1, { message: "Email é obrigatório" })
      .email({ message: "Formato de email inválido" })
      .max(255, { message: "Email deve ter no máximo 255 caracteres" }),

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

    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos e políticas para continuar",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
