# 🎓 SULANS - Promoción 2024

## 📋 Descripción
Sitio web conmemorativo para la promoción 2024 del Colegio Secundario SULANS, desarrollado con Next.js 15 y arquitectura limpia.

## 🏗️ Arquitectura Limpia

Este proyecto implementa los principios de Clean Architecture para garantizar:
- **Mantenibilidad**: Código organizado y fácil de mantener
- **Escalabilidad**: Fácil agregar nuevas funcionalidades
- **Testabilidad**: Cada capa se puede testear independientemente
- **Separación de responsabilidades**: Cada capa tiene un propósito específico

### 📁 Estructura de Carpetas

```
src/
├── core/                    # 🎯 Lógica de negocio pura
│   ├── entities/           # Entidades de dominio (Student, Promotion)
│   ├── repositories/       # Interfaces de repositorios
│   └── use-cases/          # Casos de uso de la aplicación
├── infrastructure/         # 🔧 Implementaciones externas
│   ├── repositories/       # Implementaciones de repositorios (Mock/API)
│   └── services/          # Servicios externos
├── presentation/           # 🎨 Capa de presentación
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes reutilizables
│   │   ├── layout/       # Header, Footer, Theme
│   │   └── sections/     # Secciones específicas
│   ├── hooks/            # Custom hooks
│   └── pages/            # Páginas de la aplicación
└── shared/                # 🔄 Código compartido
    ├── constants/        # Constantes de la aplicación
    ├── types/           # Tipos TypeScript comunes
    └── utils/           # Utilidades y helpers
```

## 🎨 Paleta de Colores

- **Primario**: `#36d6fa` (Azul cian vibrante)
- **Secundario**: `#6366f1` (Púrpura)
- **Acento Verde**: `#10b981`
- **Acento Naranja**: `#f59e0b`

## 🚀 Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos
- **next-themes** - Sistema de temas

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linting
npm run lint
```

## 🧩 Componentes Principales

### Layout
- `Header` - Navegación principal con tema toggle
- `Footer` - Información y enlaces sociales
- `ThemeProvider` - Proveedor de tema claro/oscuro

### Secciones
- `HeroSection` - Sección principal de bienvenida
- `StatsSection` - Estadísticas de la promoción

### UI
- `Button` - Botón reutilizable con variantes
- `Card` - Tarjeta con header, content y footer

## 🔄 Casos de Uso

- **GetAllStudentsUseCase** - Obtener todos los estudiantes
- **SearchStudentsUseCase** - Buscar estudiantes
- **GetPromotionInfoUseCase** - Obtener información de la promoción
- **GetPromotionPhotosUseCase** - Obtener fotos de la promoción

## 📝 Convenciones

1. **Nombres de archivos**: kebab-case (ej: `hero-section.tsx`)
2. **Nombres de componentes**: PascalCase (ej: `HeroSection`)
3. **Imports absolutos**: Usar `@/` para rutas absolutas
4. **Exports barrel**: Archivos `index.ts` para facilitar imports
5. **Documentación**: JSDoc en todas las funciones públicas

## 🎯 Próximas Funcionalidades

- [ ] Galería de fotos interactiva
- [ ] Perfil individual de estudiantes
- [ ] Sistema de comentarios
- [ ] Línea de tiempo de eventos
- [ ] Integración con redes sociales

---

**Desarrollado con ❤️ para la Promoción 2024**
