import Link from 'next/link';

import Card from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { User } from '@/types/users';
import { AvatarIcon, Flex, Text } from '@chakra-ui/react';

const UserList = ({ paginatedUsers }: { paginatedUsers: User[] }) => {
  return (
    <Flex direction="column" gap="4" mt="4">
      {paginatedUsers?.length >= 1 ? (
        paginatedUsers.map((user: User) => (
          <Card
            key={user.id}
            width="full"
            header={
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="2"
              >
                <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
                  <Link
                    style={{
                      cursor: 'pointer',
                      color: 'magenta',
                    }}
                    href={`/users/${user.id}`}
                  >
                    {user.name}
                  </Link>
                </Text>
                <Text fontSize="sm" textAlign="center">
                  {user.email}
                </Text>
                <Text fontSize="sm" textAlign="center">
                  {user.phone}
                </Text>
              </Flex>
            }
          >
            <Text fontSize="sm" textAlign="center">
              {user.email}
            </Text>
            <Text fontSize="sm" textAlign="center">
              Teléfono: {user.phone}
            </Text>
          </Card>
        ))
      ) : (
        <Card width="full">
          <EmptyState icon={<AvatarIcon />} title="No hay datos disponibles" />
        </Card>
      )}
    </Flex>
  );
};

export default UserList;
