import { z } from "zod";

export const verificationCodeSchema = z.object({
  code: z
    .string()
    .trim()
    .min(1, { message: "Código é obrigatório" })
    .length(6, { message: "O código deve ter exatamente 6 dígitos" })
    .regex(/^\d+$/, { message: "O código deve conter apenas números" }),
});

export type VerificationCodeFormData = z.infer<typeof verificationCodeSchema>;
