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
import { ShieldCheckIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  VerificationCodeFormData,
  verificationCodeSchema,
} from "../../schemas/verification-code.schema";

interface VerificationCodeFormProps {
  onSubmit: (data: VerificationCodeFormData) => void;
  isSubmitting: boolean;
}

const VerificationCodeForm = ({
  onSubmit,
  isSubmitting,
}: VerificationCodeFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationCodeFormData>({
    resolver: zodResolver(verificationCodeSchema) as any,
    defaultValues: {
      code: "",
    },
  });

  const onValidSubmit = (data: VerificationCodeFormData) => {
    onSubmit(data);
  };

  return (
    <VStack className="space-6 mb-8">
      <FormControl className="mb-5" isInvalid={!!errors.code} isRequired>
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700">
            Código
          </FormControlLabelText>
        </FormControlLabel>

        <Controller
          control={control}
          name="code"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              className={`variant-outline size-lg ${
                errors.code ? "border-red-500" : "border-gray-300"
              }`}
            >
              <InputField
                placeholder="000000"
                keyboardType="number-pad"
                maxLength={6}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                testID="code-input"
                className="text-center text-lg tracking-widest"
              />
            </Input>
          )}
        />

        {errors.code && (
          <FormControlError>
            <FormControlErrorText className="text-red-500 text-xs">
              {errors.code.message}
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <Button
        className="size-lg bg-blue-600 mt-6"
        onPress={handleSubmit(onValidSubmit)}
        isDisabled={isSubmitting}
        testID="verify-code-button"
      >
        <ButtonIcon as={ShieldCheckIcon} className="mr-1 text-white" />
        <ButtonText className="text-white">
          {isSubmitting ? "Verificando..." : "Verificar"}
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default VerificationCodeForm;
