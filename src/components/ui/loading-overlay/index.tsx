// src/components/ui/LoadingOverlay.tsx
import { Box } from "@/src/components/ui/box";
import { Spinner } from "@/src/components/ui/spinner";
import { Text } from "@/src/components/ui/text";
import React from "react";

interface LoadingOverlayProps {
  visible: boolean;
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible,
  message = "Carregando...",
}) => {
  if (!visible) return null;

  return (
    <Box className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <Box className="p-5 bg-white rounded-lg items-center shadow-md">
        <Spinner className="text-blue-600" size="large" />
        <Text className="mt-2.5 text-base text-gray-800">{message}</Text>
      </Box>
    </Box>
  );
};

export { LoadingOverlay };
