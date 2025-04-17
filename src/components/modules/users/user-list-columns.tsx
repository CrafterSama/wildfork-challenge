import { User } from "@/types/users";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const columns = (deleteUser: (id: number) => void) => [
  {
    name: "Nombre",
    accessor: (row: User) => row,
    cell: ({ id, name }: { id: number | string; name: string }) => (
      <Link
        style={{
          cursor: "pointer",
          color: "magenta",
        }}
        href={`/users/${id}`}
      >
        {name}
      </Link>
    ),
  },
  {
    name: "Usuario",
    accessor: (row: User) => row,
    cell: ({ username }: { username: string }) => <span>{username}</span>,
  },
  {
    name: "Email",
    accessor: (row: User) => row,
    cell: ({ email }: { email: string }) => <span>{email}</span>,
  },
  {
    name: "Teléfono",
    accessor: (row: User) => row,
    cell: ({ phone }: { phone: string }) => <span>{phone}</span>,
  },
  {
    name: "Acciones",
    accessor: (row: User) => row,
    cell: ({ id }: { id: number }) => (
      <Flex justifyContent="start">
        <Button
          background="red.400"
          color="white"
          onClick={() => deleteUser(id)}
        >
          Eliminar
        </Button>
      </Flex>
    ),
  },
];
