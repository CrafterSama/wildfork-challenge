'use client';

import { useEffect, useState } from 'react';

import UserForm from '@/components/modules/users/user-form';
import UserList from '@/components/modules/users/user-list';
import { columns } from '@/components/modules/users/user-list-columns';
import UserListHeader from '@/components/modules/users/user-list-header';
import UserListHeaderActions from '@/components/modules/users/user-list-header-actions';
import Dialog from '@/components/ui/dialog';
import Table from '@/components/ui/table';
import Pagination from '@/components/ui/template/pagination';
import { toaster } from '@/components/ui/toaster';
import { useGetUsers } from '@/hooks/api/use-get-users';
import { useIsMobile } from '@/hooks/use-mobile';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { User } from '@/types/users';
import { Flex } from '@chakra-ui/react';

const UsersPage = () => {
  const isMobile = useIsMobile();

  const { users, setUsers, deleteUser } = useAppStoreContext();
  const { data: usersData } = useGetUsers();

  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenUserForm, setIsOpenUserForm] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers: User[] = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSearch = (value: string) => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleCreateUser = () => {
    setIsOpenUserForm(true);
  };

  const handleCloseUserForm = () => {
    setIsOpenUserForm(false);
  };

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
    setCurrentPage(1);
    toaster.create({
      title: 'Success',
      description: 'Usuario eliminado exitosamente',
      type: 'success',
    });
  };

  useEffect(() => {
    if (usersData?.length >= 1 && usersData.length > users.length) {
      setUsers(usersData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersData]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
      h="screen"
      padding={{ base: '4', md: '8' }}
    >
      <Dialog
        open={isOpenUserForm}
        onOpenChange={() => handleCloseUserForm()}
        title="Crear usuario"
      >
        <UserForm
          onCancel={handleCloseUserForm}
          updateData={setFilteredUsers}
          updatePage={setCurrentPage}
        />
      </Dialog>

      <UserListHeader onCreateUser={handleCreateUser} />

      <UserListHeaderActions handleSearch={handleSearch} />

      {isMobile ? (
        <UserList paginatedUsers={paginatedUsers} />
      ) : (
        <Flex w="full" direction="column" gap="4" mt="4">
          <Table columns={columns(handleDeleteUser)} data={paginatedUsers} />
        </Flex>
      )}
      <Pagination
        data={paginatedUsers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Flex>
  );
};

export default UsersPage;
