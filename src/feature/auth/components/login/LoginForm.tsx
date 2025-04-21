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
import { Pressable } from "@/src/components/ui/pressable";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, LogInIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { LoginFormData, loginSchema } from "../../schemas/login.schema";

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isSubmitting: boolean;
  onForgotPassword: () => void;
}

const LoginForm = ({
  onSubmit,
  isSubmitting,
  onForgotPassword,
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema) as any,
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onValidSubmit = (data: LoginFormData) => {
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
          render={({ field: { onChange, value } }) => (
            <Input className="variant-outline size-lg border-gray-300">
              <InputField
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            </Input>
          )}
        />

        {errors.email && (
          <FormControlError>
            <FormControlErrorText>{errors.email.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <FormControl className="mb-3" isInvalid={!!errors.password} isRequired>
        <HStack className="justify-between items-center">
          <FormControlLabel>
            <FormControlLabelText className="text-gray-700">
              Senha
            </FormControlLabelText>
          </FormControlLabel>
          <Pressable onPress={onForgotPassword}>
            <Text className="text-xs text-blue-600 font-medium">
              Esqueci minha senha
            </Text>
          </Pressable>
        </HStack>

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input className="variant-outline size-lg border-gray-300">
              <InputField
                placeholder="Sua senha"
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={onChange}
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

        {errors.password && (
          <FormControlError>
            <FormControlErrorText>
              {errors.password.message}
            </FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <Controller
        control={control}
        name="rememberMe"
        render={({ field: { onChange, value } }) => (
          <Checkbox
            value="rememberMe"
            isChecked={value}
            onChange={onChange}
            className="mb-2"
          >
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel className="text-sm text-gray-600">
              Mantenha-me conectado
            </CheckboxLabel>
          </Checkbox>
        )}
      />

      <Button
        className="size-lg bg-blue-600 mt-4"
        onPress={handleSubmit(onValidSubmit)}
        isDisabled={isSubmitting}
      >
        <ButtonIcon as={LogInIcon} className="mr-1 text-white" />
        <ButtonText className="text-white">
          {isSubmitting ? "Entrando..." : "Entrar"}
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default LoginForm;
