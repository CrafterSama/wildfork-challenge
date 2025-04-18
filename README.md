## Wildfork Challenge
website: [https://wildfork-challenge.vercel.app/](https://wildfork-challenge.vercel.app/)

Una Pequeña WebApp, para "gestionar usuarios", lo primero que nos encontramos al abrir la aplicación lo primero que se encuentra es un inicio de sesión (datos de inicio de sesión: admin@example.com:password), ya dentro, luego de iniciar sesión, se presenta una lista de usuarios que se obtuvieron desde la API proveeida, con su respectiva paginación, en esta vista puedes eliminar usuarios de la lista, haciendo click en el boton eliminar, en la parte superior, en el header de la tabla hay un boton para agregar nuevos usuarios de forma local sin afectar los datos de la API, y si haces click al nombre del usuario te lleva a una vista donde estan los detalles del usuario en una ficha.

### Objetivos alcanzados
1. Mostrar una lista de usuarios obtenida de la API. ✔️
2. Ver detalles de un usuario específico. ✔️
3. Filtrar usuarios por nombre o correo electrónico. ✔️
4. Eliminar usuarios de la lista localmente (sin afectar la API). ✔️
5. Agregar un nuevo usuario localmente (sin afectar la API). ✔️
6. Autenticación básica para acceder a la aplicación. ✔️

### Tecnologias utilizadas
Typescript, React, Next.js, Chakra UI, Tanstack Query, React Hook Form, Axios, Zustand y [faltan por agregar]

Todo se creo de forma tal que se pudiera presentar lo solicitado, lo cual se logro, sin dejar de lado que el desarrollo de este challenge para mi busca mostrar la forma en como se deberia abordar un proyecto usando buenas practicas, tratando de hacer buen uso del patron modular lo que conlleva una separarción clara de responsabilidades y mejora la mantenibilidad y reusabilidad de componentes y/o metodos/funciones, se tomo la decisión de usar Tanstack Query por que ya esta libreria tiene ciertos metodos para verificar el fetching y los estados del mismo, fuera de eso que maneja un cache por default que evita que se hagan llamados al back innecesarios y se pueden invalidar queries para actualizar las vistas en toda la aplicación (Son algunas de sus cualidades), se decidio usar React Hook Form + Yup porque estos facilita el manejo del estado de los formularios y sus validaciones, se uso Chakra UI (Por recomendación de la parte interesada) para facilitar la creación de los Layouts y la puesta a punto de algunos componentes como Botones, Inputs, etc, se uso Zustand para manejar el estado global de la Aplicación, las razones, super obvias, el boilerplate es menor, su mantenibilidad es mejor y carece de una abstracción complicada para la puesta a punto, se uso inicio de sesion con cookies porque asi no se pierde la sesion ni los datos si se actualiza la pagina web con F5, al menos que se borren los datos y el cache de la web.

### Razones Claves para elegir el patrón modular
Cada feature tiene su "módulo" autocontenido.
Se mantiene la separación de responsabilidades: UI, lógica, estado y servicios.
Facilita el escalado del proyecto.

### El patrón modular se traduce en organizar lógica por dominio o feature en módulos autocontenidos, que pueden incluir:
Componentes (components/modules/feature) ✔️

Hook(s) (hooks/useFeature) ✔️

Constantes (constants/featureConstants.ts) ✔️

Estado global o local (state-management/featureStore) ✔️

Proveedores (providers/featureProviders.ts) ✔️

Servicios o APIs (services/featureService) ✔️

Tipos (types/featureTypes.ts) ✔️

### Ejemplo de scaffolding con el Patron Modular:
```bash
src/
├── app/                            # Rutas, layouts
├── components/
│   └── modules/
│       └── profile/
│           ├── profile-info.tsx
│           ├── profile-image.tsx
│           └── index.ts           # Re-exportador
├── hooks/
│   └── use-profile.ts
├── services/
│   └── profile-service.ts
├── state-management/
│   └── profile-store.ts
├── providers/
│   └── profile-provider.ts
├── types/
│   └── profile-types.ts
├── constants/
│   └── profile-constants.ts
```
 
### Para empezar

#### Primero, instala todos los paquetes
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

#### Luego, corre el server en modo desarrollo:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### Al Final, para correr un test
```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```
