import { Button, Flex, Text } from '@chakra-ui/react';

const UserListHeader = ({ onCreateUser }: { onCreateUser: () => void }) => {
  return (
    <Flex
      w="full"
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      gap="2"
    >
      <Flex direction="column" justifyContent={{ base: 'center', md: 'start' }} gap="2">
        <Text fontSize="2xl" fontWeight="semibold" textAlign={{ base: 'center', md: 'left' }}>
          Lista de Usuarios
        </Text>
        <Text
          fontSize="sm"
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          Crea, Busca y Elimina Usuarios
        </Text>
      </Flex>
      <Flex
        direction={{
          base: 'column',
          md: 'row',
        }}
        justifyContent="start"
        gap="2"
      >
        <Button onClick={onCreateUser} variant="solid">
          Nuevo Usuario
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserListHeader;
