import { toaster } from '@/components/ui/toaster';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { User, UserFormProps } from '@/types/users';
import { Button, Field, Flex, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserSchema } from './user-form.schema';

const UserForm = ({
  onCancel,
  updateData,
  updatePage,
}: {
  onCancel: () => void;
  updateData: (user: User[]) => void;
  updatePage: (page: number) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema()),
  });
  const { users, addUser } = useAppStoreContext();

  const onSubmit = (data: UserFormProps) => {
    const user = {
      id: Math.floor(Math.random() * 1000),
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
        geo: {
          lat: data.lat,
          lng: data.lng,
        },
      },
      website: data.website,
      company: {
        name: data.companyName,
        catchPhrase: data.catchPhrase,
        bs: data.bs,
      },
    };
    addUser(user);
    toaster.create({
      title: 'Success',
      description: 'Usuario creado exitosamente',
      type: 'success',
    });
    onCancel();
  };

  useEffect(() => {
    updateData(users);
    updatePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <Flex w="full" direction="column" gap="4" mt="4">
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Stack w="full" gap="4">
          <Field.Root invalid={!!errors.email}>
            <Field.Label>Nombre</Field.Label>
            <Input {...register('name')} />
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <Input {...register('email')} />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.username}>
            <Field.Label>Nombre de Usuario</Field.Label>
            <Input {...register('username')} />
            <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.phone}>
            <Field.Label>Teléfono</Field.Label>
            <Input {...register('phone')} />
            <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
          </Field.Root>
          <Flex direction="column" gap="4" width="full">
            <Button variant="outline" type="button" width="full" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit" width="full">
              Guardar
            </Button>
          </Flex>
        </Stack>
      </form>
    </Flex>
  );
};

export default UserForm;
