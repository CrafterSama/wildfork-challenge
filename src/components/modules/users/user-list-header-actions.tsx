import { Flex, Input } from "@chakra-ui/react";

const UserListHeaderActions = ({ handleSearch }: { handleSearch: any }) => {
  return (
    <Flex
      w="full"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt="4"
    >
      <Input
        placeholder="Buscar usuarios por nombre o email"
        onKeyUp={(e) => handleSearch(e.currentTarget.value)}
        width={{ base: "full", md: "xs" }}
      />
    </Flex>
  );
};

export default UserListHeaderActions;
