import { Flex, Input } from '@chakra-ui/react';

type UserListHeaderActionsProps = {
  handleSearch: (value: string) => void;
};

const UserListHeaderActions = ({
  handleSearch,
}: UserListHeaderActionsProps) => {
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
        onKeyUp={(e) => handleSearch(e.currentTarget.value as string)}
        width={{ base: 'full', md: 'xs' }}
      />
    </Flex>
  );
};

export default UserListHeaderActions;
