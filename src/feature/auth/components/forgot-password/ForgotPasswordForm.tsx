import { Button, ButtonIcon, ButtonText } from "@/src/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/src/components/ui/form-control";
import { Input, InputField } from "@/src/components/ui/input";
import { VStack } from "@/src/components/ui/vstack";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "../../schemas/forgot-password.schema";

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordFormData) => void;
  isSubmitting: boolean;
}

const ForgotPasswordForm = ({
  onSubmit,
  isSubmitting,
}: ForgotPasswordFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema) as any,
    defaultValues: {
      email: "",
    },
  });

  const onValidSubmit = (data: ForgotPasswordFormData) => {
    onSubmit(data);
  };

  return (
    <VStack className="space-6 mb-8">
      <FormControl className="mb-5" isInvalid={!!errors.email} isRequired>
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700">
            Email
          </FormControlLabelText>
        </FormControlLabel>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              className={`variant-outline size-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            >
              <InputField
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                testID="email-input"
                autoCorrect={false}
              />
            </Input>
          )}
        />

        {errors.email && (
          <FormControlError>
            <FormControlErrorText className="text-red-500 text-xs">
              {errors.email.message}
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <Button
        className="size-lg bg-blue-600 mt-6"
        onPress={handleSubmit(onValidSubmit)}
        isDisabled={isSubmitting}
        testID="forgot-password-button"
      >
        <ButtonIcon as={MailIcon} className="mr-1 text-white" />
        <ButtonText className="text-white">
          {isSubmitting ? "Enviando..." : "Enviar código"}
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default ForgotPasswordForm;
