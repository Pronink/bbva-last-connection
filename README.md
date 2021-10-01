## Scripts usados para crear el proyecto:
- `npx create-react-app bbva-last-connection --template cra-template-pwa-typescript`
- `npm install node-sass --save`
- `npm install crypto-js --save`
- `npm install @types/crypto-js --save-dev`

## Ejecutar solo en web
- Open terminal and type:
    - `npm start`

## Ejecutar web con opción a instalar PWA:
- Abrir terminal y escribir:
    - `npm run build`
    - `npm install -g serve`
    - `serve -s build`
- Abrir `http://localhost:5000` en el navegador.
- Instalar PWA pulsando el botón a la derecha de la URL.

## Información:
- Uso de React por la reactividad, componetización y porque es ideal para hacer 
Single page applications y Progressive web apps.
- Por la sencillez de la interfaz, he decidido no usar ninguna librería gráfica, 
como Bootstrap.
- He instalado node-sass para tener soporte a SCSS, ideal para aislar estilos
usando scopes.
- Uso de typescript por el tipado y para crear código más seguro, más fácil de
mantener y refactorizar, aunque este proyecto puede prescindir de éste. He valorado
la alternativa de usar jsdoc para tipar los parámetros y propiedades de clases,
pero no me convenció.
- Los estilos estarán diferenciados: layout (flexbox, grid) y no-layout (colores, 
tamaño, otros) .
- Returns en funciones: he decidio usar el patrón del "templo maldito", acuñado por
un programador en stackoverflow, que consiste en salir o retornar lo antes posible
un valor de una función para evitar montañas de elseifs cuyo recorrido de ejecución 
es más difícil de seguir, en mi opinión. Fuente: https://es.stackoverflow.com/a/69971
- Almacenamiento de datos: usaré una clase que almacenará los datos persistentes
en el localstorage, y simulará algo de delay (como si de una conexión a backend real
se tratase).
- Estoy usando Webstorm 2021.2.2
- El idioma usado en el código de programación estará en inglés, sin embargo, para
acelerar la velocidad del desarrollo, la documentación y los comentarios de código
estarán en español
- El sistema de inicio de sesión usa SHA256 para almacenar las contraseñas hasheadas.

## Mejoras realizables en el futuro
Aquí dejo constancia de mejoras que se me han ocurrido pero que no he realizado
por la simplicidad del proyecto o por agilizar el desarrollo.
- Usar tokens para identificar a los usuarios una vez han iniciado sesión.
- Usar SHA512 y salt para mejorar la seguridad de las contraseñas guardadas.
