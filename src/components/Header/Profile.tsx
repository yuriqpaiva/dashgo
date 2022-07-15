import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yuri Paiva</Text>
          <Text color="gray.300" fontSize="small">
            yuriqpaiva@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Yuri Paiva"
        src="https://github.com/yuriqpaiva.png"
      />
    </Flex>
  );
}
