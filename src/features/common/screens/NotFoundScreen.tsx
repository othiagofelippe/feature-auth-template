import { Box } from "@/src/components/ui/box";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Heading } from "@/src/components/ui/heading";
import { Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <Box className="flex-1 items-center justify-center p-5">
      <Heading className="text-xl mb-4 text-center">
        Esta tela não existe.
      </Heading>

      <Link href="/" className="mt-4">
        <Button className="bg-blue-500 rounded-md px-4 py-2">
          <ButtonText className="text-white font-medium">
            Voltar para a tela inicial!
          </ButtonText>
        </Button>
      </Link>
    </Box>
  );
}
