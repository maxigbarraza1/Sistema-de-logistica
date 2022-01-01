# Sistema de Logistica
Proyecto generado en el curso de Angular de la plataforma MindHub.

---

### ¿De que trata el proyecto?
El proyecto se basa en aumentar la eficacia de reparacion de equipos informaticos de la empresa TODO-IT.
Los clientes que poseen un equipo que necesita reparación, envian una solicitud al sistema para que minutos más tarde un Cadete/Repartidor
pueda recoger su equipo y enviarlo al centro de reparación, donde luego de reparado, otro o el mismo Cadete/Repartidor lo devuelva al domicilio del cliente.

---

### ¿Que funcionalidades tiene el proyecto?
Dentro de la solucion planteada se desarrolló una interfaz por cada actor.

- **Cliente**: Puede registrarse e iniciar sesión en el sitio para acceder a: Registrar una nueva orden de reparacion, ver el estado de reparacion de su equipo cómo tambien
                                                                          el estado en que se encuentra su envio y por ultimo, revisar el historial completo de operaciones
                                                                           con la empresa.
                                                                           
- **Cadete/Repartidor**: Puede ser registrado por un administrador e iniciar sesión en el sitio para acceder a: 
Tomar un pedido de la lista de pedidos disponibles, visualizar los pedidos que ha tomado,rechazar un pedido(Siempre que no tenga el 
equipo a reparar con el y por ultimo, comenzar un viaje de aquellos que ha tomado para llevarlo al domicilio de cliente o al laboratorio.
                                                                              
- **Administrador/Soporte Tecnico**: Puede iniciar sesion en el sitio para acceder a:
Dar de alta un nuevo Cliente o Cadete en el sistema, cambiar el estado de un viaje en particular, visualizar el historial de viajes existente en el sistema y por ultimo,
visualizar la lista de usuarios(Clientes y Cadetes) con la opcion de modificar cualquiera de sus datos o eliminarlo del sistema.


---

### ¿Cómo se realizo el proyecto?
El proyecto fue desarrollado con el framework de front-end **Angular 13** , se le dio estilos con el pre-procesador de css **SASS** y se utilizo como libreria de diseño **Angular Material**.

Para el manejo de datos, en todo momento la aplicacion se comunica mediante **servicios** con programacion asincrona con una **API rest**.
En los servicios, se implementan **Observables** de la libreria de RXJs para lograr un flujo de datos constante y ordenado.

Para la comunicación entre los componentes de **Angular** se implementaron los decoradores **@Input** y **@Output**.


---

### ¿Cómo pruebo el sistema?
Existen 3 usuarios, uno para cada actor dentro del sistema:
1. Interfaz cliente:
Usuario: maxi@cliente.com
password:1234

2.Intefaz cadete:
Usuario: maxi@cadete.com
password:1234

3.Intefaz administrador:
Usuario: maxi@admin.com
password:1234

