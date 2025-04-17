import * as yup from "yup";

export const UserSchema = () =>
  yup.object({
    name: yup.string().required("Nombre es obligatorio"),
    username: yup.string().required("Nombre de usuario es obligatorio"),
    email: yup.string().email().required("Email es obligatorio"),
    street: yup.string(),
    suite: yup.string(),
    city: yup.string(),
    zipcode: yup.string(),
    lat: yup.string(),
    lng: yup.string(),
    phone: yup.string().required("Teléfono es obligatorio"),
    website: yup.string().url(),
    companyName: yup.string(),
    catchPhrase: yup.string(),
    bs: yup.string(),
  });

export type UserSchemaType = yup.InferType<ReturnType<typeof UserSchema>>;
