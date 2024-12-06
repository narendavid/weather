# Proyecto Full-Stack: Laravel y React

Este repositorio contiene dos proyectos principales:  
1. **Back-End**: Aplicación desarrollada con Laravel.  
2. **Front-End**: Aplicación desarrollada con React.  

A continuación, se detallan los pasos para configurar y ejecutar ambos proyectos en tu entorno local.

---

## Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Configuración del Back-End (Laravel)](#configuración-del-back-end-laravel)
3. [Configuración del Front-End (React)](#configuración-del-front-end-react)
4. [Ejecutando Ambos Proyectos](#ejecutando-ambos-proyectos)

---

## Requisitos Previos
Asegúrate de tener instalados los siguientes componentes en tu máquina:
- **PHP** >= 8.0 con Composer
- **Laravel** CLI (`composer global require laravel/installer`)
- **Node.js** >= 16.x con npm
- **MySQL** o cualquier base de datos compatible
- **Git** para clonar el repositorio

---

1. **Clona el repositorio** e ingresa al directorio del proyecto Laravel:
   ```bash
   git clone https://github.com/narendavid/weather

## Configuración del Back-End (Laravel)

1. **Instala las dependencias de Laravel:**
    ```bash
    cd backend
    composer install

2. **Configura el archivo .env**
    ```bash
    OPENWEATHER_API_KEY=b9d24fb064672ee187b6653fbdbd59b1

3. **Inicia el servidor**
    ```bash
    php artisan serve


## Configuración del Front-End (React)

1. **Instala las dependencias de React:**
    ```bash
    npm install

2. **Configura las variables de entorno:**
- Crea un archivo .env en la raíz del proyecto React.
- Agrega la siguiente línea para la API de OpenWeatherMap:
    ```bash
    VITE_BASE_URL=http://localhost:8000/

3. **Inicia el servidor de desarrollo**
    ```bash
    npm run dev

## Ejecutando Ambos Proyectos
Asegúrate de que ambos servidores estén corriendo:

- **Back-End:** Laravel en http://localhost:8000.
- **Front-End:** React en http://localhost:5173.

Abre el navegador y visita http://localhost:5173 para interactuar con la aplicación.
