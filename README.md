# React + Vite

# Bici Store

Bici Store es un eCommerce diseñado para la venta de productos de ciclismo, incluyendo bicicletas, indumentaria y accesorios. El proyecto está desarrollado en React, utilizando componentes, y gestionando el estado con un contexto de carrito conectado a Firestore.

## Características

- **Categorías de productos**: Los productos están organizados en categorías para facilitar la navegación.
- **Agregar al carrito**: Desde la página de detalles de cada producto, los usuarios pueden agregar productos al carrito.
- **Vista del carrito**: Se puede ver el carrito desde el detalle del producto. El enlace al carrito solo se activa si hay productos en él, lo que permite que el componente `ItemCount` permanezca visible. Esto para aumentar la posibilidad de venta de mas unidades del producto.
- **Navegación fácil**: Acceso directo al carrito desde el navbar, que muestra un icono con la cantidad de productos en el carrito.
- **Gestión del carrito**: Los usuarios pueden ver los detalles de los productos en el carrito, eliminar productos y acceder al producto a través de un enlace en la imagen del detalle.
- **Cálculo de totales agregados al carrito**: El carrito del navbar muestra los articulos del carrito considerando la cantidad de productos agregada y no por el tipo de ítems.

- **Checkout**: Después de realizar el checkout, se abre una página donde el usuario ingresa su información personal. 
- **Validación de formulario**: El formulario verifica que el usuario ingrese la información solicitada, validando números de teléfono y correos electrónicos, además de asegurarse de que todos los campos estén completos.
- **Actualización de stock**: La tienda actualiza el stock en Firebase, con dos colecciones: una para los productos disponibles llamada Items y otra para las órdenes recibidas llamada orders. Se envía un código de verificación automático al comprador.
- **Control de stock**: El stock se verifica al realizar el checkout, y el componente `ItemCount` respeta el stock disponible para agregar al carrito, impidiendo que el usuario agregue más de lo disponible.
- **Alertas**: Se utilizan alertas con SweetAlert2, que ha sido instalado e importado en el proyecto.

## Consideraciones Técnicas

- **Gestión de variables sensibles**: No utilicé `process.env` para ocultar información sensible debido a una gran cantidad de errores. En su lugar, creé un archivo que oculté con `.gitignore` que contiene las variables.
- **Firestore**: El proyecto está integrado con Firestore para la gestión de productos y órdenes.




Tecnologías Utilizadas
React
Firestore
SweetAlert2
CSS


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
