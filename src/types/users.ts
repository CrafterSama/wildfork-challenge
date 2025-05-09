export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export interface UserFormProps {
  name: string;
  username: string;
  email: string;
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  lat?: string;
  lng?: string;
  phone: string;
  website?: string;
  companyName?: string;
  catchPhrase?: string;
  bs?: string;
}
