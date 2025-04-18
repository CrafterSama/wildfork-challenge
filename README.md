## Wildfork Challenge

### Objetivos alcanzados
1. Mostrar una lista de usuarios obtenida de la API. ✔️
2. Ver detalles de un usuario específico. ✔️
3. Filtrar usuarios por nombre o correo electrónico. ✔️
4. Eliminar usuarios de la lista localmente (sin afectar la API). ✔️
5. Agregar un nuevo usuario localmente (sin afectar la API). ✔️
6. Autenticación básica para acceder a la aplicación. ✔️

### Tecnologias utilizadas
Typescript, React, Next.js, Chakra UI, Tanstack Query, React Hook Form, Axios y [faltan por agregar]

Todo se creo de forma tal que se pudiera presentar lo solicitado, lo cual se logro, sin dejar de lado que el desarrollo de este challenge para mi busca mostrar la forma en como se deberia abordar un proyecto usando buenas practicas, tratando de hacer buen uso del patron modular lo que conlleva una separarción clara de responsabilidades y mejora la mantenibilidad y reusabilidad de componentes y/o metodos/funciones, se tomo la decisión de usar Tanstack Query por que ya esta libreria tiene ciertos metodos para verificar el fetching y los estados del mismo, fuera de eso que maneja un cache por default que evita que se hagan llamados al back innecesarios y se pueden invalidar queries para actualizar las vistas en toda la aplicación (Son algunas de sus cualidades), se decidio usar React Hook Form + Yup porque estos facilita el manejo del estado de los formularios y sus validaciones, se uso Chakra UI (Por recomendación de la parte interesada) para facilitar la creación de los Layouts y la puesta a punto de algunos componentes como Botones, Inputs, etc.

### El patrón modular se traduce en organizar lógica por dominio o feature en módulos autocontenidos, que pueden incluir:
Componentes (components/modules/feature) ✔️
Hook(s) (hooks/useFeature) ✔️
Constantes (constants/featureConstants.ts) ✔️
Estado global o local (state-management/store/featureStore) ✔️
Proveedores (providers/featureProviders.ts) ✔️
Servicios o APIs (services/featureService) ✔️
Tipos (types/featureTypes.ts) ✔️

### Razones Claves para elegir el patrón modular
Cada feature tiene su "módulo" autocontenido.
Se mantiene la separación de responsabilidades: UI, lógica, estado y servicios.
Facilita el escalado del proyecto.

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
