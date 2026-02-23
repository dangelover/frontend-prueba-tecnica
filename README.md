# 🛒 Cart App

Aplicación de e-commerce desarrollada con **React + TypeScript** que permite visualizar productos, filtrarlos, agregarlos al carrito y mantener persistencia de datos en el navegador.

---

## 🚀 Demo

🔗 Deploy: https://tu-demo.vercel.app  
(Actualizar con tu enlace real)

---

## 📸 Screenshots

### 🏠 Página principal

![Home Screenshot](./screenshots/home.png)

### 🛒 Carrito

![Cart Screenshot](./screenshots/cart.png)

---

## 🧱 Tecnologías utilizadas

- ⚛️ React 18
- 🟦 TypeScript
- 🧭 React Router DOM v6
- 🗂 Context API
- 🎨 TailwindCSS
- ⚡ Vite
- 🧪 Vitest + Testing Library

---

## 📂 Estructura del proyecto

```
src/
│
├── components/
│   ├── ProductList.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│
├── context/
│   └── CartContext.tsx
│
├── hooks/
│   └── useProducts.ts
│
├── pages/
│   ├── Home.tsx
│   └── CartPage.tsx
│
├── types.ts
├── App.tsx
└── main.tsx
```

---

## 🧠 Arquitectura

La aplicación está organizada bajo principios de separación de responsabilidades:

### 🔹 Context API

Se utiliza `CartContext` para centralizar el estado global del carrito y evitar prop drilling.

### 🔹 Custom Hook

`useProducts` encapsula la lógica de obtención de datos y manejo de loading.

### 🔹 Estado local

Los filtros y la búsqueda se manejan como estado local dentro de `Home`, ya que no requieren alcance global.

### 🔹 Persistencia

El carrito se guarda en `localStorage` utilizando:

- Lazy initialization en `useState`
- `useEffect` para sincronización automática

---

## 🛍 Funcionalidades

- ✅ Listado dinámico de productos
- ✅ Filtro por categoría
- ✅ Búsqueda en tiempo real
- ✅ Agregar productos al carrito
- ✅ Incrementar cantidad automáticamente si el producto ya existe
- ✅ Eliminar productos del carrito
- ✅ Cálculo automático de total y cantidad
- ✅ Persistencia tras recarga
- ✅ Navegación SPA sin recarga

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/dangelover/frontend-prueba-tecnica

```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 🧪 Tests

Ejecutar:

```bash
npm run test
```

Se testea:

- Renderizado de productos
- Filtro por categoría
- Búsqueda
- Comportamiento del carrito

Herramientas:

- Vitest
- Testing Library

---

## 📌 Decisiones técnicas

- Se eligió **Context API** en lugar de Redux debido a que el estado global es reducido y no requiere middleware.
- Se implementó **lazy initialization** en el carrito para evitar lecturas innecesarias de `localStorage`.
- Se mantuvo inmutabilidad en todas las actualizaciones de estado.
- Se separó lógica de UI y datos mediante un custom hook.
- Se evitó sobre-optimización prematura (no se usó `useMemo` innecesariamente).

---

## 🔮 Posibles mejoras futuras

- Integrar backend real (API REST)
- Implementar autenticación
- Agregar paginación
- Añadir tests de integración
- Implementar manejo de errores más robusto

---

## 🧑‍💻 Autor

Kevin Castro Campos
GitHub: https://github.com/dangelover
LinkedIn: https://www.linkedin.com/in/kevin-castro-campos/

---

## 📄 Licencia

MIT
