import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text color="pink.500" as="span" marginLeft="1">
        .
      </Text>
    </Text>
  );
}
