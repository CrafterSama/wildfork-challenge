"use client";

import { Flex, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";

import useAppStoreContext from "@/state-management/users-app-global-state";

const UserDetails = () => {
  const params = useParams();
  // const { data: userData } = useGetUser(params?.id as string | number);
  const { users } = useAppStoreContext();
  const user = users.filter((user) => user.id === Number(params?.id))[0];

  return (
    <Flex
      direction="column"
      gap={4}
      mt={4}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="3xl">Datos del usuario</Heading>
      <Flex
        direction="column"
        gap={4}
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        shadow="md"
        maxW="xl"
        minW="xl"
        mx="auto"
      >
        <Heading size="2xl" mb={4}>
          {user?.name}
        </Heading>

        <Stack gap={2}>
          <Text>
            <em>Username:</em> {user?.username}
          </Text>
          <Text>
            <em>Email:</em> {user?.email}
          </Text>
          <Text>
            <em>Teléfono:</em> {user?.phone}
          </Text>
          <Text>
            <em>Website:</em> {user?.website}
          </Text>
        </Stack>

        <Separator my={4} />

        <Heading size="md">Dirección</Heading>
        <Stack gap={1}>
          <Text>
            {user?.address?.street}, {user?.address?.suite}
          </Text>
          <Text>
            {user?.address?.city}, {user?.address?.zipcode}
          </Text>
          <Text>
            Geo: {user?.address?.geo?.lat}, {user?.address?.geo?.lng}
          </Text>
        </Stack>

        <Separator my={4} />

        <Heading size="md">Compañía</Heading>
        <Stack gap={1}>
          <Text>
            <em>Nombre:</em> {user?.company?.name}
          </Text>
          <Text>
            <em>Catchphrase:</em> {user?.company?.catchPhrase}
          </Text>
          <Text>
            <em>BS:</em> {user?.company?.bs}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default UserDetails;
