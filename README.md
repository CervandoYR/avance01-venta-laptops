# Servitek Laptops - E-Commerce

Este es el repositorio del sistema de venta de laptops Servitek. El proyecto está construido utilizando **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS** y **Prisma ORM** con una base de datos **PostgreSQL**.

## 🚀 Cómo hacer funcionar el proyecto en tu computadora

Sigue estos pasos para clonar el proyecto, instalar las dependencias y levantar el servidor localmente.

### 1. Requisitos Previos
Asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (Se recomienda versión 18 o superior).
- [Git](https://git-scm.com/) para clonar el repositorio.
- Una base de datos **PostgreSQL** (puedes instalarla localmente o usar un servicio gratuito en la nube como [Supabase](https://supabase.com/) o [Neon](https://neon.tech/)).

### 2. Clonar el repositorio e instalar dependencias

Abre tu terminal y ejecuta los siguientes comandos:

```bash
# Clonar el repositorio (reemplaza con la URL correcta si es necesario)
git clone <URL_DEL_REPOSITORIO>

# Entrar a la carpeta del proyecto
cd Venta-Laptops

# Instalar todas las dependencias necesarias
npm install
```

### 3. Configurar las Variables de Entorno

El proyecto necesita conectarse a una base de datos y tener una clave de seguridad para la autenticación de usuarios.

1. En la raíz del proyecto, copia el archivo de ejemplo para crear tu propio archivo de configuración:
   - En Windows: `copy .env.example .env`
   - En Mac/Linux: `cp .env.example .env`
   - O simplemente crea un archivo llamado `.env` y pega el contenido de `.env.example`.

2. Abre el archivo `.env` y **reemplaza los valores** con tu propia información. Lo más importante es colocar la URL de tu base de datos PostgreSQL vacía:
   ```env
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/tu_base_de_datos"
   NEXTAUTH_SECRET="cualquier_texto_secreto_para_encriptar_sesiones"
   ```

### 4. Preparar la Base de Datos (Prisma)

Una vez configurado tu archivo `.env`, ejecuta los siguientes comandos para crear las tablas en tu base de datos:

```bash
# 1. Genera el cliente de Prisma para que interactúe con tu código
npx prisma generate

# 2. Sincroniza la estructura de la base de datos (crea las tablas)
npm run db:push

# 3. (Opcional pero recomendado) Carga datos iniciales de prueba
npm run db:seed
```

### 5. Levantar el servidor

¡Todo listo! Ahora puedes iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

Abre tu navegador y entra a [http://localhost:3000](http://localhost:3000) para ver la aplicación funcionando.

## 🛠️ Tecnologías Principales

- [Next.js 14](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/) para autenticación.
