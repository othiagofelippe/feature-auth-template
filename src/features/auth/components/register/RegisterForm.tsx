import { Button, ButtonIcon, ButtonText } from "@/src/components/ui/button";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/src/components/ui/checkbox";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/src/components/ui/form-control";
import { HStack } from "@/src/components/ui/hstack";
import { CheckIcon } from "@/src/components/ui/icon";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@/src/components/ui/input";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, UserIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { Pressable } from "@/src/components/ui/pressable";
import {
  RegisterFormData,
  registerSchema,
} from "../../schemas/register.schema";

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  isSubmitting: boolean;
  onTermsPress?: () => void;
  onPrivacyPress?: () => void;
}

const RegisterForm = ({
  onSubmit,
  isSubmitting,
  onTermsPress,
  onPrivacyPress,
}: RegisterFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema) as any,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const onValidSubmit = (data: RegisterFormData) => {
    onSubmit(data);
  };

  return (
    <VStack className="space-4 mb-8">
      <FormControl className="mb-4" isInvalid={!!errors.name} isRequired>
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700 font-medium">
            Nome completo
          </FormControlLabelText>
        </FormControlLabel>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              className={`variant-outline size-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            >
              <InputField
                placeholder="Seu nome completo"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                testID="name-input"
              />
            </Input>
          )}
        />

        {errors.name && (
          <FormControlError>
            <FormControlErrorText className="text-red-500 text-xs">
              {errors.name.message}
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <FormControl className="mb-4" isInvalid={!!errors.email} isRequired>
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700 font-medium">
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
                autoCorrect={false}
                testID="email-input"
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

      <FormControl className="mb-4" isInvalid={!!errors.password} isRequired>
        <FormControlLabel>
          <FormControlLabelText className="text-gray-700 font-medium">
            Senha
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
                placeholder="Sua senha"
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
            Confirmar senha
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
                placeholder="Confirme sua senha"
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

      <FormControl className="mb-2" isInvalid={!!errors.termsAccepted}>
        <Controller
          control={control}
          name="termsAccepted"
          render={({ field: { onChange, value } }) => (
            <Checkbox
              value="termsAccepted"
              isChecked={value}
              onChange={onChange}
              className="mb-2"
              testID="terms-checkbox"
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="text-sm text-gray-600">
                Eu concordo com os Termos de Uso e a Política de Privacidade
              </CheckboxLabel>
            </Checkbox>
          )}
        />

        {errors.termsAccepted && (
          <FormControlError>
            <FormControlErrorText className="text-red-500 text-xs">
              {errors.termsAccepted.message}
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <HStack className="justify-center mb-4 space-x-1">
        <Pressable onPress={onTermsPress}>
          <Text className="text-sm text-blue-600 font-medium">
            Termos de Uso
          </Text>
        </Pressable>
        <Text className="text-sm text-gray-600">|</Text>
        <Pressable onPress={onPrivacyPress}>
          <Text className="text-sm text-blue-600 font-medium">
            Política de Privacidade
          </Text>
        </Pressable>
      </HStack>

      <Button
        className="size-lg bg-blue-600 mt-4"
        onPress={handleSubmit(onValidSubmit)}
        isDisabled={isSubmitting}
        testID="register-button"
      >
        <ButtonIcon as={UserIcon} className="mr-1 text-white" />
        <ButtonText className="text-white">
          {isSubmitting ? "Criando..." : "Criar conta"}
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default RegisterForm;
