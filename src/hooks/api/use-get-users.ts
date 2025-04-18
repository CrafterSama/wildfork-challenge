import { getUser, getUsers } from '@/services/get-users';
import { useQuery } from '@tanstack/react-query';

export function useGetUsers() {
  return useQuery({
    queryKey: ['userList'],
    queryFn: async () => await getUsers(),
  });
}

export function useGetUser(id: string | number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => await getUser(id),
  });
}
