import { Button, ButtonIcon, ButtonText } from "@/src/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/src/components/ui/form-control";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@/src/components/ui/input";
import { VStack } from "@/src/components/ui/vstack";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, KeyIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "../../schemas/reset-password.schema";

interface ResetPasswordFormProps {
  onSubmit: (data: ResetPasswordFormData) => void;
  isSubmitting: boolean;
}

const ResetPasswordForm = ({
  onSubmit,
  isSubmitting,
}: ResetPasswordFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema) as any,
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onValidSubmit = (data: ResetPasswordFormData) => {
    onSubmit(data);
  };

  return (
    <VStack className="space-4 mb-8">
      <FormControl className="mb-4" isInvalid={!!errors.password} isRequired>
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700 font-medium">
            Nova senha
          </FormControlLabelText>
        </FormControlLabel>

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              className={`variant-outline size-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            >
              <InputField
                placeholder="Digite sua nova senha"
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                testID="password-input"
              />
              <InputSlot
                className="px-3"
                onPress={() => setShowPassword(!showPassword)}
              >
                <InputIcon
                  as={showPassword ? EyeOffIcon : EyeIcon}
                  size="md"
                  className="text-gray-500"
                />
              </InputSlot>
            </Input>
          )}
        />

        {errors.password ? (
          <FormControlError>
            <FormControlErrorText className="text-red-500 text-xs">
              {errors.password.message}
            </FormControlErrorText>
          </FormControlError>
        ) : (
          <FormControlHelperText className="text-xs text-gray-500">
            A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um
            número e um caractere especial
          </FormControlHelperText>
        )}
      </FormControl>

      <FormControl
        className="mb-4"
        isInvalid={!!errors.confirmPassword}
        isRequired
      >
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700 font-medium">
            Confirme a nova senha
          </FormControlLabelText>
        </FormControlLabel>

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              className={`variant-outline size-lg ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            >
              <InputField
                placeholder="Confirme sua nova senha"
                secureTextEntry={!showConfirmPassword}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                testID="confirm-password-input"
              />
              <InputSlot
                className="px-3"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <InputIcon
                  as={showConfirmPassword ? EyeOffIcon : EyeIcon}
                  size="md"
                  className="text-gray-500"
                />
              </InputSlot>
            </Input>
          )}
        />

        {errors.confirmPassword && (
          <FormControlError>
            <FormControlErrorText className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <Button
        className="size-lg bg-blue-600 mt-6"
        onPress={handleSubmit(onValidSubmit)}
        isDisabled={isSubmitting}
        testID="reset-password-button"
      >
        <ButtonIcon as={KeyIcon} className="mr-1 text-white" />
        <ButtonText className="text-white">
          {isSubmitting ? "Redefinindo..." : "Redefinir senha"}
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default ResetPasswordForm;
