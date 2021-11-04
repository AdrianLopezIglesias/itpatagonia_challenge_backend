# IT Patagonia Challenge Weather Widget
## Uso
npm i 

get('/') devuelve la vista con los datos ya parseada en Angular

## Conceptos generales

Los datos son obtenidos de http://api.openweathermap.org/

Como no encontré un WebSocket disponible de clima construí el mío propio. Básicamente una vez que el Front genera el vínculo de WS con el Servidor, este último consulta constantemente a la API y le devuelve el resultado al Front. 

Existe un limite de request por hora en la versión gratis de la API, por lo que una vez consumidos la API no respondería. 

## FrontEnd
El repositorio del desarrollo en Angular se puede encontrar en : (http://completar)

