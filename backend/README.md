# Backend PetsParadise

## Requisitos
- Node.js instalado
- MongoDB local o en la nube

## Variables de entorno
Crea un archivo `.env` en la carpeta `backend/` con el siguiente contenido:
```
MONGO_URI=mongodb://localhost:27017/petsparadise
```
Ajusta la URI si usas MongoDB Atlas u otro servicio.

## Instalación de dependencias
Desde la carpeta raíz del proyecto ejecuta:
```
npm install --prefix backend
```

## Cómo arrancar el backend

### Opción 1: Desde la raíz del proyecto
```
npx nodemon backend/server.js
```
O con npm:
```
npm run dev --prefix backend
```

### Opción 2: Desde la carpeta backend
```
cd backend
npx nodemon server.js
```
O con npm:
```
npm run dev
```

## Probar la API
La API estará disponible en:
```
http://localhost:5000/api/pets
```

Puedes probar los endpoints con Postman, Insomnia o curl.

---

Si tienes dudas, revisa que:
- El archivo `.env` tenga la variable `MONGO_URI`.
- El archivo principal es `server.js` (no existe `index.js`).
- El comando que usas corresponde a la carpeta donde estás.

¡Listo para usar tu API de mascotas! 🐾 