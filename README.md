# 🎓 SULANS - Sistema de Promoción 2014-2019

Un sitio web moderno para la promoción de graduados con sistema de autenticación, dashboard interactivo y gestión de contenido.

## 🚀 Características Principales

### ✅ Autenticación Completa
- Login seguro con NextAuth.js
- Rutas protegidas para contenido privado
- Dashboard personalizado post-login
- Logout seguro con redirección

### ✅ Dashboard Interactivo
- **Estadísticas en tiempo real**: Estudiantes, eventos, fotos, mensajes
- **Accesos rápidos**: Navegación directa a secciones principales
- **Actividad reciente**: Timeline de actualizaciones
- **Próximos eventos**: Vista previa de eventos importantes
- **Diseño responsive**: Optimizado para desktop y móvil

### ✅ Rutas de Acceso

#### 🌐 Públicas (sin autenticación)
- `/` - Página de inicio
- `/contacto` - Formulario de contacto
- `/login` - Autenticación

#### 🔒 Privadas (requieren login)
- `/dashboard` - Panel principal (redirección post-login)
- `/galeria` - Galería de fotos de la promoción
- `/eventos` - Timeline de eventos y reuniones  
- `/estudiantes` - Directorio de compañeros

### ✅ Componentes Reutilizables
- **Formularios**: Input, PasswordInput, SearchInput, Textarea, Select
- **UI**: Botones, Cards, Themes, Layouts
- **Autenticación**: ProtectedRoute, SessionProvider
- **Navegación**: Header dinámico, Footer, Links

## 🔐 Credenciales de Prueba

### Administrador
```
Email: admin@promocion2024.com
Contraseña: admin123
```

### Estudiante
```
Email: estudiante@promocion2024.com  
Contraseña: estudiante123
```

## 🎯 Flujo de Usuario

### 1. Usuario No Autenticado
```
Inicio → Ver página pública → Clic "Iniciar Sesión" → Formulario Login
```

### 2. Proceso de Login
```
Login Form → Validación → Dashboard → Navegación completa disponible
```

### 3. Usuario Autenticado
```
Dashboard → Accesos rápidos → Galería/Eventos/Estudiantes/Contacto
```

### 4. Logout
```
Header "Salir" → Confirmación → Redirección a Inicio → Rutas privadas bloqueadas
```

## 🛠️ Tecnologías

### Frontend
- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconografía moderna

### Autenticación
- **NextAuth.js** - Sistema de auth completo
- **JWT Strategy** - Tokens seguros
- **bcryptjs** - Hash de contraseñas
- **Credentials Provider** - Login email/password

### Arquitectura
- **Clean Architecture** - Separación de responsabilidades
- **Component Library** - Componentes reutilizables
- **Custom Hooks** - Lógica compartida
- **Constants Management** - Configuración centralizada

## 📁 Estructura del Proyecto

```
src/
├── app/                          # App Router de Next.js
│   ├── api/auth/[...nextauth]/   # Configuración NextAuth
│   ├── dashboard/                # 🆕 Panel principal post-login
│   ├── galeria/                  # 🔒 Galería de fotos (privada)
│   ├── eventos/                  # 🔒 Lista de eventos (privada)
│   ├── estudiantes/              # 🔒 Directorio (privado)
│   ├── contacto/                 # 🌐 Formulario de contacto (público)
│   ├── login/                    # 🌐 Autenticación (público)
│   └── layout.tsx                # Layout principal con providers
├── presentation/
│   ├── components/
│   │   ├── auth/                 # Componentes de autenticación
│   │   │   └── protected-route.tsx
│   │   ├── forms/                # Formularios reutilizables
│   │   ├── layout/               # Header, Footer, Navigation
│   │   ├── sections/             # PageHero, CallToAction, Stats
│   │   └── ui/                   # Input, Button, Card, Select
│   └── providers/                # SessionProvider para NextAuth
└── shared/
    ├── constants/                # Configuración y constantes
    ├── hooks/                    # useAuth personalizado
    └── utils/                    # Utilidades compartidas
```

## 🎨 Dashboard Features

### Estadísticas Rápidas
- **Compañeros**: Total de estudiantes en la promoción
- **Eventos**: Cantidad de eventos programados
- **Fotos**: Total de imágenes en la galería
- **Mensajes**: Notificaciones pendientes

### Accesos Rápidos
- **Ver Compañeros** → `/estudiantes`
- **Galería de Fotos** → `/galeria`  
- **Próximos Eventos** → `/eventos`
- **Enviar Mensaje** → `/contacto`

### Actividad Reciente
- Timeline de actualizaciones
- Nuevas fotos subidas
- Perfiles actualizados
- Eventos creados
- Mensajes del grupo

### Próximos Eventos
- Vista previa de eventos importantes
- Fechas y ubicaciones
- Links directos para más detalles

## 🔧 Configuración de Desarrollo

### Instalación
```bash
npm install
```

### Variables de Entorno (.env.local)
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here
```

### Ejecutar Desarrollo
```bash
npm run dev
```

### Build Producción
```bash
npm run build
npm start
```

## 📱 Responsive Design

El dashboard está completamente optimizado para:
- **Desktop**: Grid completo con paneles laterales
- **Tablet**: Layout adaptativo de 2 columnas
- **Mobile**: Stack vertical con navegación táctil

## 🎯 Próximas Funcionalidades

### Sistema de Notificaciones
- [ ] Notificaciones en tiempo real
- [ ] Mensajería interna
- [ ] Alertas de eventos

### Gestión de Contenido
- [ ] Subida de fotos desde dashboard
- [ ] Creación de eventos
- [ ] Edición de perfil de usuario

### Social Features
- [ ] Timeline de actividades
- [ ] Comentarios en fotos
- [ ] Reacciones y likes
- [ ] Grupos de WhatsApp integrados

### Administración
- [ ] Panel de admin
- [ ] Gestión de usuarios
- [ ] Moderación de contenido
- [ ] Analytics y estadísticas

## 📖 Documentación Adicional

- [AUTHENTICATION.md](./AUTHENTICATION.md) - Sistema de autenticación detallado
- [FORM_COMPONENTS.md](./FORM_COMPONENTS.md) - Componentes de formulario
- [REORGANIZATION.md](./REORGANIZATION.md) - Arquitectura y refactoring

## 🎓 Demo en Vivo

Accede al sitio y prueba las funcionalidades:
1. Ve a la página de inicio (pública)
2. Haz clic en "Iniciar Sesión"
3. Usa las credenciales de prueba
4. Explora el dashboard y las rutas privadas
5. Navega entre las diferentes secciones
6. Prueba el logout y la protección de rutas

¡Revive los mejores momentos de la promoción SULANS 2014-2019! 🎉
