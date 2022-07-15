import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Yuri Paiva</Text>
        <Text color="gray.300" fontSize="small">
          yuriqpaiva@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Yuri Paiva"
        src="https://github.com/yuriqpaiva.png"
      />
    </Flex>
  );
}
