import { toaster } from '@/components/ui/toaster';
import { api } from '@/utils/api';

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users');
    return data;
  } catch (error) {
    toaster.create({
      title: 'Error',
      description: 'Error al obtener los usuarios',
      type: 'error',
    });
    return [];
  }
};

export const getUser = async (id: string | number) => {
  try {
    const { data } = await api.get(`/users/${id}`);
    return data;
  } catch (error) {
    toaster.create({
      title: 'Error',
      description: 'Error al obtener los datos del usuario',
      type: 'error',
    });
    return [];
  }
};
