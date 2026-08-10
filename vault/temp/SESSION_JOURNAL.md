## 2026-08-06 19:47:29.375Z load
- url: http://localhost:3000/

## 2026-08-06 19:48:31.004Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-06 19:48:32.537Z load
- url: http://192.168.40.10:3000/

## 2026-08-06 19:48:33.584Z navigate
- url: http://192.168.40.10:3000/
- via: replaceState

## 2026-08-06 19:48:43.732Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 19:48:45.901Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:48:47.176Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 19:48:48.686Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-06 19:48:51.444Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 19:48:51.446Z navigate
- url: http://localhost:3000/checkout
- via: pushState

## 2026-08-06 19:48:56.621Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:48:56.723Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:48:59.703Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"rrr","valueLength":3,"text":""}

## 2026-08-06 19:48:59.703Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"rrr","valueLength":3,"text":""}

## 2026-08-06 19:48:59.703Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:48:59.798Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:04.468Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"6665566565","valueLength":10,"text":""}

## 2026-08-06 19:49:04.469Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"6665566565","valueLength":10,"text":""}

## 2026-08-06 19:49:04.469Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:04.548Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:05.612Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:05.701Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:08.314Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 19:49:08.369Z submit
- action: http://localhost:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"rrr","length":3,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"text","value":"6665566565","length":10,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad","type":"text","value":"","length":0,"redacted":false},{"label":"Dirección de entrega","type":"text","value":"","length":0,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 19:49:08.769Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/rest/v1/orders?columns=%22customer_name%22%2C%22customer_phone%22%2C%22customer_email%22%2C%22customer_city%22%2C%22customer_address%22%2C%22notes%22%2C%22status%22%2C%22total%22&select=*
- status: 401
- requestBody: {"0":{"customer_name":"rrr","customer_phone":"6665566565","customer_email":"","customer_city":"","customer_address":"","notes":"","status":"pendiente","total":""}}
- response: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"orders\""}
- durationMs: 393

## 2026-08-06 19:49:08.770Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/rest/v1/orders?columns=%22customer_name%22%2C%22customer_phone%22%2C%22customer_email%22%2C%22customer_city%22%2C%22customer_address%22%2C%22notes%22%2C%22status%22%2C%22total%22&select=*: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"orders\""}

## 2026-08-06 19:49:14.565Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:14.655Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:17.831Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds","valueLength":2,"text":""}

## 2026-08-06 19:49:17.832Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds","valueLength":2,"text":""}

## 2026-08-06 19:49:17.832Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:17.967Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:20.317Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"medellin","valueLength":8,"text":""}

## 2026-08-06 19:49:20.317Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"medellin","valueLength":8,"text":""}

## 2026-08-06 19:49:20.318Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":null,"label":"Dirección de entrega","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:26.253Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":null,"label":"Dirección de entrega","value":"carera 45 45 45","valueLength":15,"text":""}

## 2026-08-06 19:49:26.254Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":null,"label":"Dirección de entrega","value":"carera 45 45 45","valueLength":15,"text":""}

## 2026-08-06 19:49:26.309Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 19:49:26.311Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds","valueLength":2,"text":""}

## 2026-08-06 19:49:28.054Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds","valueLength":2,"text":""}

## 2026-08-06 19:49:30.745Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds♠","valueLength":3,"text":""}

## 2026-08-06 19:49:30.986Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds♠","valueLength":3,"text":""}

## 2026-08-06 19:49:31.199Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"ds♠","valueLength":3,"text":""}

## 2026-08-06 19:49:32.299Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:49:32.314Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 19:49:32.316Z submit
- action: http://localhost:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"rrr","length":3,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"text","value":"6665566565","length":10,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad","type":"text","value":"medellin","length":8,"redacted":false},{"label":"Dirección de entrega","type":"text","value":"carera 45 45 45","length":15,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 19:49:32.551Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/rest/v1/orders?columns=%22customer_name%22%2C%22customer_phone%22%2C%22customer_email%22%2C%22customer_city%22%2C%22customer_address%22%2C%22notes%22%2C%22status%22%2C%22total%22&select=*
- status: 401
- requestBody: {"0":{"customer_name":"rrr","customer_phone":"6665566565","customer_email":"","customer_city":"medellin","customer_address":"carera 45 45 45","notes":"","status":"pendiente","total":""}}
- response: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"orders\""}
- durationMs: 227

## 2026-08-06 19:49:32.551Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/rest/v1/orders?columns=%22customer_name%22%2C%22customer_phone%22%2C%22customer_email%22%2C%22customer_city%22%2C%22customer_address%22%2C%22notes%22%2C%22status%22%2C%22total%22&select=*: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"orders\""}

## 2026-08-06 19:49:45.526Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-06 19:49:48.624Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:49:49.754Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-06 19:49:51.916Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Quitar"}

## 2026-08-06 19:49:52.554Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Quitar"}

## 2026-08-06 19:49:53.572Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:49:56.009Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-08-06 19:49:56.010Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-08-06 19:49:58.647Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Creatina Monohidratada 300gMuscleMeds$ 65.000 Añadir al carrito"}

## 2026-08-06 19:49:58.648Z navigate
- url: http://localhost:3000/product/5a55d998-de1c-46b1-af1a-287c9b879a56
- via: pushState

## 2026-08-06 19:50:01.866Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 19:50:02.937Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 19:50:06.513Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:50:07.153Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 19:50:07.154Z navigate
- url: http://localhost:3000/checkout
- via: pushState

## 2026-08-06 19:50:11.814Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Marcas"}

## 2026-08-06 19:50:11.815Z navigate
- url: http://localhost:3000/marcas
- via: pushState

## 2026-08-06 19:50:14.157Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 19:50:15.166Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-06 19:50:16.567Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Creatina Monohidratada 300g$ 65.000-2+Quitar"}

## 2026-08-06 19:50:17.977Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:50:19.805Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-06 19:50:21.510Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:50:22.276Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 19:50:22.277Z navigate
- url: http://localhost:3000/checkout
- via: pushState

## 2026-08-06 19:51:24.217Z load
- url: http://localhost:3000/admin/login

## 2026-08-06 19:51:24.850Z navigate
- url: http://localhost:3000/admin/login
- via: replaceState

## 2026-08-06 19:51:26.205Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:26.291Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:35.249Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"ricamazo0725@gmail.com","valueLength":22,"text":""}

## 2026-08-06 19:51:35.249Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"ricamazo0725@gmail.com","valueLength":22,"text":""}

## 2026-08-06 19:51:35.250Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-06 19:51:41.700Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-06 19:51:41.700Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-06 19:51:41.827Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-08-06 19:51:41.829Z submit
- action: http://localhost:3000/admin/login
- fields: [{"label":"Correo","type":"email","value":"ricamazo0725@gmail.com","length":22,"redacted":false},{"label":"Contraseña","type":"password","value":"[redacted:length=13]","length":13,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 19:51:42.868Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-06 19:51:42.898Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-06 19:51:49.959Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo producto"}

## 2026-08-06 19:51:51.384Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:51.473Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:54.481Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"test","valueLength":4,"text":""}

## 2026-08-06 19:51:54.482Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"test","valueLength":4,"text":""}

## 2026-08-06 19:51:54.483Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:56.762Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"ddd","valueLength":3,"text":""}

## 2026-08-06 19:51:56.762Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"ddd","valueLength":3,"text":""}

## 2026-08-06 19:51:56.763Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:56.843Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:57.483Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:57.749Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"","valueLength":0,"text":""}

## 2026-08-06 19:51:59.632Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"ddddd","valueLength":5,"text":""}

## 2026-08-06 19:51:59.632Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"ddddd","valueLength":5,"text":""}

## 2026-08-06 19:51:59.704Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nombre *Subtítulo / MarcaCategoríaDescripciónPrecio (COP) *Precio en oferta (opcional)Stock disponible *Etiqueta (ej. \"Nuevo\", \"Oferta\")Imágenes (una URL por línea)Sube tus fotos a un servicio como Imgur, Cloudinary o Supabase Storage y pega aquí el link directo.Visible en la tiendaCrear productoCancelar"}

## 2026-08-06 19:52:00.000Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"ddddd","valueLength":5,"text":""}

## 2026-08-06 19:52:00.066Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"ddddd","valueLength":5,"text":""}

## 2026-08-06 19:52:00.279Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"ddddd","valueLength":5,"text":""}

## 2026-08-06 19:52:01.891Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:06.860Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"creatina","valueLength":8,"text":""}

## 2026-08-06 19:52:06.860Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"category","placeholder":"Proteínas, Creatina, Pre-entreno...","label":"Categoría","value":"creatina","valueLength":8,"text":""}

## 2026-08-06 19:52:06.861Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:06.972Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:08.620Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"ssdds","valueLength":5,"text":"ssdds"}

## 2026-08-06 19:52:08.620Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"ssdds","valueLength":5,"text":"ssdds"}

## 2026-08-06 19:52:08.667Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:08.722Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:12.870Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-06 19:52:12.870Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-06 19:52:12.871Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:12.990Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:22.338Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 19:52:22.339Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 19:52:22.341Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:22.422Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:22.640Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:22.950Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:23.254Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 19:52:26.997Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear producto"}

## 2026-08-06 19:52:27.000Z submit
- action: http://localhost:3000/admin
- fields: [{"label":"Nombre *","type":"text","value":"test","length":4,"redacted":false},{"label":"Subtítulo / Marca","type":"text","value":"ddd","length":3,"redacted":false},{"label":"Categoría","type":"text","value":"creatina","length":8,"redacted":false},{"label":"Descripción","type":"textarea","value":"ssdds","length":5,"redacted":false},{"label":"Precio (COP) *","type":"number","value":"0","length":1,"redacted":false},{"label":"Precio en oferta (opcional)","type":"number","value":"","length":0,"redacted":false},{"label":"Stock disponible *","type":"number","value":"1","length":1,"redacted":false},{"label":"Etiqueta (ej. \"Nuevo\", \"Oferta\")","type":"text","value":"","length":0,"redacted":false},{"label":"Imágenes (una URL por línea)","type":"textarea","value":"","length":0,"redacted":false},{"label":"Visible en la tienda","type":"button","value":"on","length":2,"redacted":false},{"label":"[checkbox]","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-08-06 19:52:33.409Z load
- url: http://192.168.40.10:3000/

## 2026-08-06 19:56:52.706Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 19:56:54.018Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 19:56:59.158Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Carrito de comprastest$ 0-1+QuitarTotal$ 0Continuar con el pedido"}

## 2026-08-06 19:57:05.056Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 19:57:06.854Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-06 19:57:06.950Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-06 19:57:07.190Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-06 19:57:16.183Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"100","valueLength":3,"text":""}

## 2026-08-06 19:57:16.184Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"100","valueLength":3,"text":""}

## 2026-08-06 19:57:16.279Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Guardar cambios"}

## 2026-08-06 19:57:16.281Z submit
- action: http://localhost:3000/admin
- fields: [{"label":"Nombre *","type":"text","value":"test","length":4,"redacted":false},{"label":"Subtítulo / Marca","type":"text","value":"ddd","length":3,"redacted":false},{"label":"Categoría","type":"text","value":"creatina","length":8,"redacted":false},{"label":"Descripción","type":"textarea","value":"ssdds","length":5,"redacted":false},{"label":"Precio (COP) *","type":"number","value":"100","length":3,"redacted":false},{"label":"Precio en oferta (opcional)","type":"number","value":"","length":0,"redacted":false},{"label":"Stock disponible *","type":"number","value":"1","length":1,"redacted":false},{"label":"Etiqueta (ej. \"Nuevo\", \"Oferta\")","type":"text","value":"","length":0,"redacted":false},{"label":"Imágenes (una URL por línea)","type":"textarea","value":"","length":0,"redacted":false},{"label":"Visible en la tienda","type":"button","value":"on","length":2,"redacted":false},{"label":"[checkbox]","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-08-06 20:13:02.460Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Productos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutli..."}

## 2026-08-06 20:13:02.645Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Productos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutli..."}

## 2026-08-06 20:19:02.331Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Productos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutli..."}

## 2026-08-06 20:24:02.219Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Productos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutli..."}

## 2026-08-06 20:24:12.389Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo producto"}

## 2026-08-06 20:24:17.723Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Visible en la tienda"}

## 2026-08-06 20:24:23.887Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:24:23.960Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:24:24.549Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:24:24.791Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:24:25.263Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:24:25.495Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:24:27.647Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:26:05.560Z load
- url: http://192.168.40.10:3000/

## 2026-08-06 20:26:08.842Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 20:26:08.894Z unhandledrejection
- message: No hay suficiente stock de test. Solo quedan 1.
- stack: 
    Error: No hay suficiente stock de test. Solo quedan 1.
        at http://192.168.40.10:3000/src/hooks/useCart.jsx:31:18
        at basicStateReducer (http://192.168.40.10:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=89b6755c:11751:49)
        at dispatchSetState (http://192.168.40.10:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=89b6755c:12433:36)
        at http://192.168.40.10:3000/src/hooks/useCart.jsx:27:7
        at new Promise (<anonymous>)
        at http://192.168.40.10:3000/src/hooks/useCart.jsx:26:12
        at http://192.168.40.10:3000/src/components/ProductsList.jsx:26:7
        at HTMLUnknownElement.callCallback2 (http://192.168.40.10:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=89b6755c:3680:22)
        at Object.invokeGuardedCallbackDev (http://192.168.40.10:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=89b6755c:3705:24)
        at invokeGuardedCallback (http://192.168.40.10:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=89b6755c:3739:39)

## 2026-08-06 20:26:10.389Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 20:26:12.814Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 20:26:13.587Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 20:26:13.589Z navigate
- url: http://192.168.40.10:3000/checkout
- via: pushState

## 2026-08-06 20:26:16.460Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 20:26:17.454Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Quitar"}

## 2026-08-06 20:26:18.624Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 20:26:20.262Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver productos"}

## 2026-08-06 20:26:20.263Z navigate
- url: http://192.168.40.10:3000/productos
- via: pushState

## 2026-08-06 20:26:22.819Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 20:26:24.474Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 20:26:26.578Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 20:26:27.240Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 20:26:27.241Z navigate
- url: http://192.168.40.10:3000/checkout
- via: pushState

## 2026-08-06 20:26:29.760Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:26:29.879Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:26:34.137Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"ricardo mazo","valueLength":12,"text":""}

## 2026-08-06 20:26:34.137Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"ricardo mazo","valueLength":12,"text":""}

## 2026-08-06 20:26:34.138Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:26:38.394Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"3107008875","valueLength":10,"text":""}

## 2026-08-06 20:26:38.394Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"3107008875","valueLength":10,"text":""}

## 2026-08-06 20:26:38.395Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo (opcional)","value":"","valueLength":0,"text":""}

## 2026-08-06 20:26:39.817Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"city","placeholder":null,"label":"Ciudad","value":"","valueLength":0,"text":""}

## 2026-08-06 20:26:42.753Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 20:26:42.755Z submit
- action: http://192.168.40.10:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"ricardo mazo","length":12,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"text","value":"3107008875","length":10,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad","type":"text","value":"","length":0,"redacted":false},{"label":"Dirección de entrega","type":"text","value":"","length":0,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 20:26:43.068Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/rest/v1/orders?columns=%22customer_name%22%2C%22customer_phone%22%2C%22customer_email%22%2C%22customer_city%22%2C%22customer_address%22%2C%22notes%22%2C%22status%22%2C%22total%22&select=*
- status: 401
- requestBody: {"0":{"customer_name":"ricardo mazo","customer_phone":"3107008875","customer_email":"","customer_city":"","customer_address":"","notes":"","status":"pendiente","total":"100"}}
- response: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"orders\""}
- durationMs: 305

## 2026-08-06 20:26:43.069Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/rest/v1/orders?columns=%22customer_name%22%2C%22customer_phone%22%2C%22customer_email%22%2C%22customer_city%22%2C%22customer_address%22%2C%22notes%22%2C%22status%22%2C%22total%22&select=*: {"code":"42501","details":null,"hint":null,"message":"new row violates row-level security policy for table \"orders\""}

## 2026-08-06 20:26:45.747Z click
- element: {"tag":"div","role":"region","ariaLabel":"Notifications (F8)","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"No se pudo crear el pedidonew row violates row-level security policy for table \"orders\""}

## 2026-08-06 20:26:47.744Z click
- element: {"tag":"div","role":"region","ariaLabel":"Notifications (F8)","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"No se pudo crear el pedidonew row violates row-level security policy for table \"orders\""}

## 2026-08-06 20:26:52.915Z click
- element: {"tag":"div","role":"region","ariaLabel":"Notifications (F8)","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"No se pudo crear el pedidonew row violates row-level security policy for table \"orders\""}

## 2026-08-06 20:26:53.139Z click
- element: {"tag":"div","role":"region","ariaLabel":"Notifications (F8)","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"No se pudo crear el pedidonew row violates row-level security policy for table \"orders\""}

## 2026-08-06 20:35:58.642Z load
- url: http://192.168.40.10:3000/checkout

## 2026-08-06 20:36:02.866Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:36:02.935Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:36:04.007Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"dsffds","valueLength":6,"text":""}

## 2026-08-06 20:36:04.007Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"dsffds","valueLength":6,"text":""}

## 2026-08-06 20:36:04.008Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:36:04.103Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"","valueLength":0,"text":""}

## 2026-08-06 20:36:09.905Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"3107007785","valueLength":10,"text":""}

## 2026-08-06 20:36:09.906Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"3107007785","valueLength":10,"text":""}

## 2026-08-06 20:36:09.995Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 20:36:09.998Z submit
- action: http://192.168.40.10:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"dsffds","length":6,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"text","value":"3107007785","length":10,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad","type":"text","value":"","length":0,"redacted":false},{"label":"Dirección de entrega","type":"text","value":"","length":0,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 20:38:48.423Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 20:38:48.426Z submit
- action: http://192.168.40.10:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"dsffds","length":6,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"text","value":"3107007785","length":10,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad","type":"text","value":"","length":0,"redacted":false},{"label":"Dirección de entrega","type":"text","value":"","length":0,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 20:38:50.048Z navigate
- url: http://192.168.40.10:3000/success
- via: pushState

## 2026-08-06 20:39:04.454Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Confirmar por WhatsApp"}

## 2026-08-06 20:48:02.657Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Seguir comprando"}

## 2026-08-06 20:48:02.666Z navigate
- url: http://192.168.40.10:3000/productos
- via: pushState

## 2026-08-06 21:12:37.699Z load
- url: http://192.168.40.10:3000/productos

## 2026-08-06 21:12:42.106Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:12:44.072Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:12:46.408Z load
- url: http://localhost:3000/admin

## 2026-08-06 21:12:49.484Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo producto"}

## 2026-08-06 21:12:50.634Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nombre *Subtítulo / MarcaCategoríaDescripciónPrecio (COP) *Precio en oferta (opcional)Stock disponible *Etiqueta (ej. \"Nuevo\", \"Oferta\")Imágenes (una URL por línea)Sube tus fotos a un servicio como Imgur, Cloudinary o Supabase Storage y pega aquí el link directo.Visible en la tiendaCrear productoCancelar"}

## 2026-08-06 21:12:50.936Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:12:51.047Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:12:53.112Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nuevo productoNombre *Subtítulo / MarcaCategoríaDescripciónPrecio (COP) *Precio en oferta (opcional)Stock disponible *Etiqueta (ej. \"Nuevo\", \"Oferta\")Imágenes (una URL por línea)Sube tus fotos a un servicio como Imgur, Cloudinary o Supabase Storage y pega aquí el link directo.Visible en la tiendaCrear productoCancelar"}

## 2026-08-06 21:12:53.514Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:12:53.631Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:12:54.908Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:12:55.972Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:12:55.972Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:12:56.419Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:12:56.470Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:12:56.502Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:13:00.054Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:13:01.527Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"cx","valueLength":2,"text":""}

## 2026-08-06 21:13:01.528Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:01.630Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:02.657Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"cxcx","valueLength":4,"text":""}

## 2026-08-06 21:13:02.657Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"cxcx","valueLength":4,"text":""}

## 2026-08-06 21:13:02.658Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:02.770Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:05.572Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"xccx","valueLength":4,"text":"xccx"}

## 2026-08-06 21:13:05.573Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"xccx","valueLength":4,"text":"xccx"}

## 2026-08-06 21:13:05.573Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:05.670Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:05.924Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:08.646Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:10.971Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:15.361Z load
- url: http://localhost:3000/admin

## 2026-08-06 21:13:27.015Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 21:13:30.307Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:30.369Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:31.017Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:31.249Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:34.831Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:35.089Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:35.367Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:13:57.905Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:14:49.127Z load
- url: http://localhost:3000/

## 2026-08-06 21:14:53.760Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-06 21:14:53.776Z window.error
- message: Uncaught TypeError: Cannot destructure property 'cartItems' of 'useCart(...)' as it is undefined.
- source: http://localhost:3000/src/components/Layout.jsx?t=1786050889930
- line: 20
- col: 11
- stack: 
    TypeError: Cannot destructure property 'cartItems' of 'useCart(...)' as it is undefined.
        at Layout (http://localhost:3000/src/components/Layout.jsx?t=1786050889930:20:11)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19190:13)

## 2026-08-06 21:14:53.808Z window.error
- message: Uncaught TypeError: Cannot destructure property 'cartItems' of 'useCart(...)' as it is undefined.
- source: http://localhost:3000/src/components/Layout.jsx?t=1786050889930
- line: 20
- col: 11
- stack: 
    TypeError: Cannot destructure property 'cartItems' of 'useCart(...)' as it is undefined.
        at Layout (http://localhost:3000/src/components/Layout.jsx?t=1786050889930:20:11)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19190:13)

## 2026-08-06 21:14:53.811Z console.error
- text: 
    The above error occurred in the <Layout> component:
    
        at Layout (http://localhost:3000/src/components/Layout.jsx?t=1786050889930:16:19)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=a64a9ed6:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=a64a9ed6:7572:3)
        at CartProvider (http://localhost:3000/src/hooks/useCart.jsx?t=1786050889930:12:32)
        at AuthProvider (http://localhost:3000/src/hooks/useAuth.jsx?t=1786050889800:11:32)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=a64a9ed6:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=a64a9ed6:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-08-06 21:14:53.814Z window.error
- message: Uncaught TypeError: Cannot destructure property 'cartItems' of 'useCart(...)' as it is undefined.
- source: http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6
- line: 19466
- col: 13
- stack: 
    TypeError: Cannot destructure property 'cartItems' of 'useCart(...)' as it is undefined.
        at Layout (http://localhost:3000/src/components/Layout.jsx?t=1786050889930:20:11)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-QFMFQ3UP.js?v=a64a9ed6:18734:30)

## 2026-08-06 21:16:08.264Z load
- url: http://localhost:3000/

## 2026-08-06 21:16:16.395Z load
- url: http://localhost:3000/admin

## 2026-08-06 21:16:16.670Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-06 21:16:19.659Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 21:16:21.769Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:21.855Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:22.473Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:22.549Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:25.178Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:25.705Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:25.711Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:25.737Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:31.044Z load
- url: http://localhost:3000/admin

## 2026-08-06 21:16:31.500Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-06 21:16:33.704Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-06 21:16:33.705Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:33.822Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:37.578Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:38.819Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:39.027Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:39.241Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:40.051Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:44.423Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo producto"}

## 2026-08-06 21:16:47.506Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:47.599Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:47.839Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:48.081Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:49.162Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Imágenes (una URL por línea)Sube tus fotos a un servicio como Imgur, Cloudinary o Supabase Storage y pega aquí el link directo."}

## 2026-08-06 21:16:49.699Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:49.819Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:50.139Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:51.069Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Imágenes (una URL por línea)Sube tus fotos a un servicio como Imgur, Cloudinary o Supabase Storage y pega aquí el link directo."}

## 2026-08-06 21:16:51.492Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:51.709Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:16:51.931Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:17:30.828Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:19:59.673Z click
- element: {"tag":"td","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"testddd"}

## 2026-08-06 21:20:02.366Z load
- url: http://localhost:3000/admin

## 2026-08-06 21:20:06.303Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 21:20:08.398Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:08.494Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:08.726Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:08.949Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:09.190Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:09.814Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:10.158Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:10.360Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:20:10.540Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"images","placeholder":"https://ejemplo.com/imagen1.jpg\nhttps://ejemplo.com/imagen2.jpg","label":"Imágenes (una URL por línea)","value":"","valueLength":0,"text":""}

## 2026-08-06 21:22:26.187Z load
- url: http://localhost:3000/admin

## 2026-08-06 21:22:28.912Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 21:22:31.200Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Subir imagen"}

## 2026-08-06 21:22:31.237Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"file","id":null,"placeholder":null,"label":"[file]","value":"","valueLength":0,"text":""}

## 2026-08-06 21:23:37.754Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nombre *Subtítulo / MarcaCategoríaDescripciónssddsPrecio (COP) *Precio en oferta (opcional)Stock disponible *Etiqueta (ej. \"Nuevo\", \"Oferta\")Imágenes del productoSubir imagenJPG, PNG o WEBPO pega URLs de imágenes manualmentehttps://lejipsqguyjzryotljdu.supabase.co/storage/v1/object/public/product-images/products/1786051416004-img_20240608_143030772_mfnr.jpgVisible en la tiendaGuardar cambiosCancelar"}

## 2026-08-06 21:23:38.296Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"test","valueLength":4,"text":""}

## 2026-08-06 21:23:38.935Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Productos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutli..."}

## 2026-08-06 21:23:41.979Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"test","valueLength":4,"text":""}

## 2026-08-06 21:23:42.045Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Guardar cambios"}

## 2026-08-06 21:23:42.049Z submit
- action: http://localhost:3000/admin
- fields: [{"label":"Nombre *","type":"text","value":"test","length":4,"redacted":false},{"label":"Subtítulo / Marca","type":"text","value":"ddd","length":3,"redacted":false},{"label":"Categoría","type":"text","value":"creatina","length":8,"redacted":false},{"label":"Descripción","type":"textarea","value":"ssdds","length":5,"redacted":false},{"label":"Precio (COP) *","type":"number","value":"100","length":3,"redacted":false},{"label":"Precio en oferta (opcional)","type":"number","value":"","length":0,"redacted":false},{"label":"Stock disponible *","type":"number","value":"1","length":1,"redacted":false},{"label":"Etiqueta (ej. \"Nuevo\", \"Oferta\")","type":"text","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[file]","type":"file","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"https://ejemplo.com/imagen1.jpg https://ejemplo.com/imagen2.jpg","type":"textarea","value":"https://lejipsqguyjzryotljdu.supabase.co/storage/v1/object/public/product-images/products/1786051416004-img_20240608_143030772_mfnr.jpg","length":135,"redacted":false},{"label":"Visible en la tienda","type":"button","value":"on","length":2,"redacted":false},{"label":"[checkbox]","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-08-06 21:23:49.561Z load
- url: http://192.168.40.10:3000/productos

## 2026-08-06 21:25:42.780Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-06 21:25:44.502Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-06 21:25:46.844Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 21:25:47.454Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 21:25:47.456Z navigate
- url: http://192.168.40.10:3000/checkout
- via: pushState

## 2026-08-06 21:25:50.454Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:25:50.537Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:25:52.291Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 21:25:52.292Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:25:56.968Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"ricardo","valueLength":7,"text":""}

## 2026-08-06 21:25:56.968Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"ricardo","valueLength":7,"text":""}

## 2026-08-06 21:25:56.969Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"","valueLength":0,"text":""}

## 2026-08-06 21:26:04.210Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"31070088877","valueLength":11,"text":""}

## 2026-08-06 21:26:04.210Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"31070088877","valueLength":11,"text":""}

## 2026-08-06 21:26:04.315Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-06 21:26:04.318Z submit
- action: http://192.168.40.10:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"ricardo","length":7,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"text","value":"31070088877","length":11,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad","type":"text","value":"","length":0,"redacted":false},{"label":"Dirección de entrega","type":"text","value":"","length":0,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-06 21:26:05.372Z navigate
- url: http://192.168.40.10:3000/success
- via: pushState

## 2026-08-06 21:26:08.083Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Confirmar por WhatsApp"}

## 2026-08-06 21:26:26.001Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Seguir comprando"}

## 2026-08-06 21:26:26.002Z navigate
- url: http://192.168.40.10:3000/productos
- via: pushState

## 2026-08-06 21:29:53.473Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Marcas"}

## 2026-08-06 21:29:53.476Z navigate
- url: http://192.168.40.10:3000/marcas
- via: pushState

## 2026-08-06 21:29:55.888Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"IRONFUELSUPLEMENTOSInicioProductosMarcasCombosOfertasBlog Carrito"}

## 2026-08-06 21:29:56.238Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Combos"}

## 2026-08-06 21:29:56.239Z navigate
- url: http://192.168.40.10:3000/combos
- via: pushState

## 2026-08-06 21:29:58.743Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ofertas"}

## 2026-08-06 21:29:58.744Z navigate
- url: http://192.168.40.10:3000/ofertas
- via: pushState

## 2026-08-06 21:30:00.564Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-08-06 21:30:00.565Z navigate
- url: http://192.168.40.10:3000/
- via: pushState

## 2026-08-06 21:31:15.022Z load
- url: http://localhost:3000/checkout

## 2026-08-06 21:31:43.765Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-06 21:31:44.937Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-06 21:31:44.943Z navigate
- url: http://localhost:3000/checkout
- via: pushState

## 2026-08-06 21:50:23.725Z load
- url: http://localhost:3000/checkout

## 2026-08-06 22:23:51.759Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-06 22:24:01.024Z load
- url: http://localhost:3000/

## 2026-08-06 22:24:01.427Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-08 17:56:21.947Z load
- url: http://localhost:3000/

## 2026-08-08 17:57:01.230Z click
- element: {"tag":"vite-error-overlay","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-08 18:06:46.066Z load
- url: http://localhost:3000/

## 2026-08-08 18:06:51.426Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-08 18:07:04.775Z load
- url: http://localhost:3000/admin

## 2026-08-08 18:07:05.155Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-08 18:07:08.682Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pedidos"}

## 2026-08-08 18:07:08.687Z navigate
- url: http://localhost:3000/admin/orders
- via: pushState

## 2026-08-08 18:07:11.120Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ricardo#828379c0 · 6/08/2026, 4:26 p. m.$ 100pendiente"}

## 2026-08-08 18:07:12.618Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"1 x test$ 100"}

## 2026-08-08 18:07:15.385Z load
- url: http://localhost:3000/

## 2026-08-08 18:07:15.752Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-08 18:07:33.768Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Productos"}

## 2026-08-08 18:07:33.769Z navigate
- url: http://localhost:3000/admin
- via: pushState

## 2026-08-08 18:07:37.417Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pedidos"}

## 2026-08-08 18:07:37.418Z navigate
- url: http://localhost:3000/admin/orders
- via: pushState

## 2026-08-08 18:07:40.670Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Pedidos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutline..."}

## 2026-08-08 18:07:41.157Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Pedidos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutline..."}

## 2026-08-08 18:07:41.782Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ricardo#828379c0 · 6/08/2026, 4:26 p. m.$ 100pendiente"}

## 2026-08-08 18:07:43.585Z click
- element: {"tag":"body","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\tProductosPedidosADMINPedidosSesión: ricamazo0725@gmail.comTodos los estados Salirricardo#828379c0 · 6/08/2026, 4:26 p. m.$ 100pendiente 310700888771 x test$ 100Cambiar estado:Pendientedsffds#5712ab19 · 6/08/2026, 3:38 p. m.$ 100pendiente\n\t\t\n\t\t// plugins/visual-editor/state/editing-state.js\nvar current = null;\nfunction getEditing() {\n  return current;\n}\nfunction setEditing(info) {\n  current = info;\n}\nfunction clearEditing() {\n  current = null;\n}\n\n// plugins/visual-editor/utils/html-utils.js\nfunction escapeHtml(string) {\n  return string.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\");\n}\nfunction nextNodeInFlow(node, root) {\n  if (node.firstChild) return node.firstChild;\n  let current2 = node;\n  while (current2 && current2 !== root) {\n    if (current2.nextSibling) return current2.nextSibling;\n    current2 = current2.parentNode;\n  }\n  return null;\n}\nfunction isAtLineEnd(node, root) {\n  const next = nextNodeInFlow(node, root);\n  if (!next) return true;\n  let candidate = next;\n  while (candidate && candidate.nodeType === Node.ELEMENT_NODE) {\n    if (candidate.tagName.toLowerCase() === \"br\") return true;\n    candidate = candidate.firstChild;\n  }\n  return false;\n}\nfunction preserveTrailingSpacesInTextNodes(root) {\n  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);\n  const textNodes = [];\n  for (let node = walker.nextNode(); node; node = walker.nextNode()) {\n    textNodes.push(node);\n  }\n  for (const node of textNodes) {\n    const text = node.nodeValue ?? \"\";\n    if (!/ $/.test(text) || !isAtLineEnd(node, root)) continue;\n    node.nodeValue = text.replace(/ +$/g, (spaces) => \"\\xA0\".repeat(spaces.length));\n  }\n}\nfunction serializeContentEditableHtml(element) {\n  if (!element) return \"\";\n  const clone = element.cloneNode(true);\n  preserveTrailingSpacesInTextNodes(clone);\n  return normalizeContentEditableHtml(clone.innerHTML);\n}\nfunction normalizeContentEditableHtml(html) {\n  if (typeof html !== \"string\") return \"\";\n  return html.repla..."}

## 2026-08-08 18:07:44.824Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmado"}

## 2026-08-08 18:07:46.319Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Pedidos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutline..."}

## 2026-08-08 20:13:00.522Z load
- url: http://localhost:3000/

## 2026-08-08 20:13:08.730Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-08 20:14:16.800Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-08 20:14:17.880Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito3"}

## 2026-08-08 20:14:22.262Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-08 20:14:23.102Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-08 20:14:23.153Z navigate
- url: http://localhost:3000/checkout
- via: pushState

## 2026-08-08 20:14:25.984Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:14:26.068Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:14:26.873Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:14:26.939Z focus
- element: {"tag":"select","role":null,"ariaLabel":"Phone number country","name":null,"type":null,"id":null,"placeholder":null,"label":"Phone number country","value":"CO","valueLength":2,"text":"AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth KoreaNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPolandPortugalPuerto RicoQatarReunionRomaniaRussiaRwandaSaint BarthélemySaint HelenaSaint Kitts and NevisSaint LuciaSaint Martin (French Part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth KoreaSouth SudanSpainSri LankaSudanSurinameSvalbard a..."}

## 2026-08-08 20:14:27.040Z click
- element: {"tag":"select","role":null,"ariaLabel":"Phone number country","name":null,"type":null,"id":null,"placeholder":null,"label":"Phone number country","value":"CO","valueLength":2,"text":"AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth KoreaNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPolandPortugalPuerto RicoQatarReunionRomaniaRussiaRwandaSaint BarthélemySaint HelenaSaint Kitts and NevisSaint LuciaSaint Martin (French Part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth KoreaSouth SudanSpainSri LankaSudanSurinameSvalbard a..."}

## 2026-08-08 20:14:31.511Z blur
- element: {"tag":"select","role":null,"ariaLabel":"Phone number country","name":null,"type":null,"id":null,"placeholder":null,"label":"Phone number country","value":"CO","valueLength":2,"text":"AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth KoreaNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPolandPortugalPuerto RicoQatarReunionRomaniaRussiaRwandaSaint BarthélemySaint HelenaSaint Kitts and NevisSaint LuciaSaint Martin (French Part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth KoreaSouth SudanSpainSri LankaSudanSurinameSvalbard a..."}

## 2026-08-08 20:14:31.527Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:14:31.565Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:14:44.144Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57 310 7008875","valueLength":15,"text":""}

## 2026-08-08 20:14:44.144Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57 310 7008875","valueLength":15,"text":""}

## 2026-08-08 20:14:44.169Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:14:44.217Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:14:46.817Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"ricardo","valueLength":7,"text":""}

## 2026-08-08 20:14:46.818Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"ricardo","valueLength":7,"text":""}

## 2026-08-08 20:14:46.844Z focus
- element: {"tag":"select","role":null,"ariaLabel":"Phone number country","name":null,"type":null,"id":null,"placeholder":null,"label":"Phone number country","value":"CO","valueLength":2,"text":"AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth KoreaNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPolandPortugalPuerto RicoQatarReunionRomaniaRussiaRwandaSaint BarthélemySaint HelenaSaint Kitts and NevisSaint LuciaSaint Martin (French Part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth KoreaSouth SudanSpainSri LankaSudanSurinameSvalbard a..."}

## 2026-08-08 20:14:48.697Z blur
- element: {"tag":"select","role":null,"ariaLabel":"Phone number country","name":null,"type":null,"id":null,"placeholder":null,"label":"Phone number country","value":"CO","valueLength":2,"text":"AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth KoreaNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPolandPortugalPuerto RicoQatarReunionRomaniaRussiaRwandaSaint BarthélemySaint HelenaSaint Kitts and NevisSaint LuciaSaint Martin (French Part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth KoreaSouth SudanSpainSri LankaSudanSurinameSvalbard a..."}

## 2026-08-08 20:14:48.721Z click
- element: {"tag":"body","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\t Envío gratis desde $200.000 COP 15% OFF en tu primera compra: FUERZA15 100% productos originales Envío gratis desde $200.000 COP 15% OFF en tu primera compra: FUERZA15 100% productos originalesIRONFUELSUPLEMENTOSInicioProductosMarcasCombosOfertasBlog Carrito3 Seguir comprandoFinalizar pedidoPago manual: te confirmamos el pedido y coordinamos el pago por transferencia o WhatsApp.Resumen del pedido2 x Creatina Monohidratada 300g$ 130.0001 x Proteína Whey Gold Standard 2LB$ 185.000Total$ 315.000Tus datosNombre completo *Teléfono / WhatsApp *AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfo..."}

## 2026-08-08 20:14:54.414Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Rionegro","valueLength":8,"text":"MedellínEnvigadoItagüíSabanetaLa EstrellaBelloCaldasCopacabanaRionegroBogotáCaliBarranquillaCartagenaBucaramangaOtra ciudad"}

## 2026-08-08 20:14:54.418Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rionegro"}

## 2026-08-08 20:14:55.669Z click
- element: {"tag":"body","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\t Envío gratis desde $200.000 COP 15% OFF en tu primera compra: FUERZA15 100% productos originales Envío gratis desde $200.000 COP 15% OFF en tu primera compra: FUERZA15 100% productos originalesIRONFUELSUPLEMENTOSInicioProductosMarcasCombosOfertasBlog Carrito3 Seguir comprandoFinalizar pedidoPago manual: te confirmamos el pedido y coordinamos el pago por transferencia o WhatsApp.Resumen del pedido2 x Creatina Monohidratada 300g$ 130.0001 x Proteína Whey Gold Standard 2LB$ 185.000Total$ 315.000Tus datosNombre completo *Teléfono / WhatsApp *AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfo..."}

## 2026-08-08 20:14:58.317Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Envigado","valueLength":8,"text":"MedellínEnvigadoItagüíSabanetaLa EstrellaBelloCaldasCopacabanaRionegroBogotáCaliBarranquillaCartagenaBucaramangaOtra ciudad"}

## 2026-08-08 20:14:58.320Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Envigado"}

## 2026-08-08 20:14:59.739Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:14:59.833Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:15:02.328Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"cacsddsd","valueLength":8,"text":""}

## 2026-08-08 20:15:02.329Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"cacsddsd","valueLength":8,"text":""}

## 2026-08-08 20:15:02.431Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-08 20:15:02.462Z submit
- action: http://localhost:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"ricardo","length":7,"redacted":false},{"label":"Phone number country","type":"select-one","value":"CO","length":2,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"tel","value":"+57 310 7008875","length":15,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad *","type":"button","value":"","length":0,"redacted":false},{"label":"[select]","type":"select-one","value":"Envigado","length":8,"redacted":false},{"label":"Dirección de entrega *","type":"text","value":"cacsddsd","length":8,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-08 20:15:03.719Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/rest/v1/order_items?columns=%22order_id%22%2C%22product_id%22%2C%22product_title%22%2C%22unit_price%22%2C%22quantity%22%2C%22subtotal%22
- status: 409
- requestBody: {"0":{"order_id":"9705168d-3701-4c09-9c91-238ae5e2aa1b","product_id":"5a55d998-de1c-46b1-af1a-287c9b879a56","product_title":"Creatina Monohidratada 300g","unit_price":"65000","quantity":"2","subtotal":"130000"},"1":{"order_id":"9705168d-3701-4c09-9c91-238ae5e2aa1b","product_id":"2c2a8aa2-5537-4a3d-bb26-b2b5b0509073","product_title":"Proteína Whey Gold Standard 2LB","unit_price":"185000","quantity":"1","subtotal":"185000"}}
- response: {"code":"23503","details":"Key is not present in table \"products\".","hint":null,"message":"insert or update on table \"order_items\" violates foreign key constraint \"order_items_product_id_fkey\""}
- durationMs: 687

## 2026-08-08 20:15:03.720Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/rest/v1/order_items?columns=%22order_id%22%2C%22product_id%22%2C%22product_title%22%2C%22unit_price%22%2C%22quantity%22%2C%22subtotal%22: {"code":"23503","details":"Key is not present in table \"products\".","hint":null,"message":"insert or update on table \"order_items\" violates foreign key constraint \"order_items_product_id_fkey\""}

## 2026-08-08 20:15:36.707Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-08-08 20:15:36.708Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-08-08 20:15:38.398Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito3"}

## 2026-08-08 20:15:40.366Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Quitar"}

## 2026-08-08 20:15:41.187Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Quitar"}

## 2026-08-08 20:15:52.035Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-08 20:15:53.661Z load
- url: http://localhost:3000/

## 2026-08-08 20:16:01.045Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-08 20:16:02.608Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-08 20:16:03.832Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito2"}

## 2026-08-08 20:16:05.562Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-08 20:16:06.225Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-08 20:16:06.226Z navigate
- url: http://localhost:3000/checkout
- via: pushState

## 2026-08-08 20:16:07.997Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:16:08.070Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-08 20:16:13.027Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57 310 7008875","valueLength":15,"text":""}

## 2026-08-08 20:16:13.028Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57 310 7008875","valueLength":15,"text":""}

## 2026-08-08 20:16:13.048Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:16:13.130Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:16:16.364Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"rica","valueLength":4,"text":""}

## 2026-08-08 20:16:16.365Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"rica","valueLength":4,"text":""}

## 2026-08-08 20:16:16.402Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tFinalizar pedido | IronFuel Suplementos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-col..."}

## 2026-08-08 20:16:19.577Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Envigado","valueLength":8,"text":"MedellínEnvigadoItagüíSabanetaLa EstrellaBelloCaldasCopacabanaRionegroBogotáCaliBarranquillaCartagenaBucaramangaOtra ciudad"}

## 2026-08-08 20:16:19.581Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Envigado"}

## 2026-08-08 20:16:20.401Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:16:20.486Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"","valueLength":0,"text":""}

## 2026-08-08 20:16:25.150Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"medellin","valueLength":8,"text":""}

## 2026-08-08 20:16:25.150Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"medellin","valueLength":8,"text":""}

## 2026-08-08 20:16:25.222Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-08 20:16:25.227Z submit
- action: http://localhost:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"rica","length":4,"redacted":false},{"label":"Phone number country","type":"select-one","value":"CO","length":2,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"tel","value":"+57 310 7008875","length":15,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad *","type":"button","value":"","length":0,"redacted":false},{"label":"[select]","type":"select-one","value":"Envigado","length":8,"redacted":false},{"label":"Dirección de entrega *","type":"text","value":"medellin","length":8,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-08 20:16:25.894Z navigate
- url: http://localhost:3000/success
- via: pushState

## 2026-08-08 20:17:09.842Z load
- url: http://localhost:3000/

## 2026-08-08 20:17:10.487Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-08 20:17:16.680Z load
- url: http://localhost:3000/admin

## 2026-08-08 20:17:17.073Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-08 20:17:20.764Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pedidos"}

## 2026-08-08 20:17:20.767Z navigate
- url: http://localhost:3000/admin/orders
- via: pushState

## 2026-08-08 20:17:24.802Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"rica#be07a45a · 8/08/2026, 3:16 p. m.$ 185.100pendiente"}

## 2026-08-08 20:17:28.217Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Pedidos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutline..."}

## 2026-08-08 20:17:29.769Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmado"}

## 2026-08-08 20:17:31.790Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tAdmin · Pedidos\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #357DF933;\n\t\toutline..."}

## 2026-08-08 20:17:33.134Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Enviado"}

## 2026-08-09 00:57:52.768Z load
- url: http://localhost:3000/

## 2026-08-09 00:57:58.429Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-09 00:58:38.974Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Productos"}

## 2026-08-09 00:58:38.976Z navigate
- url: http://localhost:3000/productos
- via: pushState

## 2026-08-09 00:58:40.101Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"InicioProductosMarcasCombosOfertasBlog"}

## 2026-08-09 00:58:41.497Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Marcas"}

## 2026-08-09 00:58:41.498Z navigate
- url: http://localhost:3000/marcas
- via: pushState

## 2026-08-09 00:58:42.721Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Combos"}

## 2026-08-09 00:58:42.722Z navigate
- url: http://localhost:3000/combos
- via: pushState

## 2026-08-09 00:58:44.049Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"IRONFUELSUPLEMENTOSInicioProductosMarcasCombosOfertasBlog Carrito"}

## 2026-08-09 00:58:44.596Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ofertas"}

## 2026-08-09 00:58:44.597Z navigate
- url: http://localhost:3000/ofertas
- via: pushState

## 2026-08-09 00:58:45.886Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-08-09 00:58:45.886Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-08-09 01:01:35.085Z load
- url: http://192.168.40.9:3000/

## 2026-08-09 01:01:37.301Z navigate
- url: http://192.168.40.9:3000/
- via: replaceState

## 2026-08-09 01:01:43.022Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Añadir al carrito"}

## 2026-08-09 01:01:45.903Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Carrito1"}

## 2026-08-09 01:01:47.251Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Continuar con el pedido"}

## 2026-08-09 01:01:47.253Z navigate
- url: http://192.168.40.9:3000/checkout
- via: pushState

## 2026-08-09 01:01:50.861Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-09 01:01:50.866Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"","valueLength":0,"text":""}

## 2026-08-09 01:01:53.077Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"Kkd","valueLength":3,"text":""}

## 2026-08-09 01:01:53.077Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"name","placeholder":null,"label":"Nombre completo *","value":"Kkd","valueLength":3,"text":""}

## 2026-08-09 01:01:53.102Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-09 01:01:53.111Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57","valueLength":3,"text":""}

## 2026-08-09 01:01:59.473Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57 310 7008875","valueLength":15,"text":""}

## 2026-08-09 01:01:59.473Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"tel","id":"phone","placeholder":null,"label":"Teléfono / WhatsApp *","value":"+57 310 7008875","valueLength":15,"text":""}

## 2026-08-09 01:01:59.491Z click
- element: {"tag":"button","role":"combobox","ariaLabel":null,"name":null,"type":"button","id":"city","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Selecciona tu ciudad"}

## 2026-08-09 01:02:00.694Z click
- element: {"tag":"button","role":"combobox","ariaLabel":null,"name":null,"type":"button","id":"city","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Selecciona tu ciudad"}

## 2026-08-09 01:02:02.068Z click
- element: {"tag":"div","role":"option","ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Cali"}

## 2026-08-09 01:02:02.086Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Cali","valueLength":4,"text":"MedellínEnvigadoItagüíSabanetaLa EstrellaBelloCaldasCopacabanaRionegroBogotáCaliBarranquillaCartagenaBucaramangaOtra ciudad"}

## 2026-08-09 01:02:03.688Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"","valueLength":0,"text":""}

## 2026-08-09 01:02:03.690Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"","valueLength":0,"text":""}

## 2026-08-09 01:02:06.307Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"Jdksksk","valueLength":7,"text":""}

## 2026-08-09 01:02:06.307Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"Jdksksk","valueLength":7,"text":""}

## 2026-08-09 01:02:06.325Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tus datosNombre completo *Teléfono / WhatsApp *AfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguillaAntigua and BarbudaArgentinaArmeniaArubaAscension IslandAustraliaAustriaAzerbaijanBahamasBahrainBangladeshBarbadosBelarusBelgiumBelizeBeninBermudaBhutanBoliviaBonaire, Sint Eustatius and SabaBosnia and HerzegovinaBotswanaBrazilBritish Indian Ocean TerritoryBrunei DarussalamBulgariaBurkina FasoBurundiCambodiaCameroonCanadaCape VerdeCayman IslandsCentral African RepublicChadChileChinaChristmas IslandCocos (Keeling) IslandsColombiaComorosCongoCongo, Democratic Republic of theCook IslandsCosta RicaCote d'IvoireCroatiaCubaCuraçaoCyprusCzech RepublicDenmarkDjiboutiDominicaDominican RepublicEcuadorEgyptEl SalvadorEquatorial GuineaEritreaEstoniaEthiopiaFalkland IslandsFaroe IslandsFederated States of MicronesiaFijiFinlandFranceFrench GuianaFrench PolynesiaGabonGambiaGeorgiaGermanyGhanaGibraltarGreeceGreenlandGrenadaGuadeloupeGuamGuatemalaGuernseyGuineaGuinea-BissauGuyanaHaitiHoly See (Vatican City State)HondurasHong KongHungaryIcelandIndiaIndonesiaIranIraqIrelandIsle of ManIsraelItalyJamaicaJapanJerseyJordanKazakhstanKenyaKiribatiKosovoKuwaitKyrgyzstanLaosLatviaLebanonLesothoLiberiaLibyaLiechtensteinLithuaniaLuxembourgMacaoMadagascarMalawiMalaysiaMaldivesMaliMaltaMarshall IslandsMartiniqueMauritaniaMauritiusMayotteMexicoMoldovaMonacoMongoliaMontenegroMontserratMoroccoMozambiqueMyanmarNamibiaNauruNepalNetherlandsNew CaledoniaNew ZealandNicaraguaNigerNigeriaNiueNorfolk IslandNorth KoreaNorth MacedoniaNorthern Mariana IslandsNorwayOmanPakistanPalauPalestinePanamaPapua New GuineaParaguayPeruPhilippinesPolandPortugalPuerto RicoQatarReunionRomaniaRussiaRwandaSaint BarthélemySaint HelenaSaint Kitts and NevisSaint LuciaSaint Martin (French Part)Saint Pierre and MiquelonSaint Vincent and the GrenadinesSamoaSan MarinoSao Tome and PrincipeSaudi ArabiaSenegalSerbiaSeychellesSierra LeoneSingaporeSint MaartenSlovakiaSloveniaSolomon IslandsSomaliaSouth AfricaSouth KoreaS..."}

## 2026-08-09 01:02:08.119Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"Jdksksk","valueLength":7,"text":""}

## 2026-08-09 01:02:08.121Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"Jdksksk","valueLength":7,"text":""}

## 2026-08-09 01:02:10.707Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"Jdkskskms","valueLength":9,"text":""}

## 2026-08-09 01:02:10.707Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"address","placeholder":"Ej. Calle 10 # 43-20, apto 301","label":"Dirección de entrega *","value":"Jdkskskms","valueLength":9,"text":""}

## 2026-08-09 01:02:10.727Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirmar pedido"}

## 2026-08-09 01:02:10.729Z submit
- action: http://192.168.40.9:3000/checkout
- fields: [{"label":"Nombre completo *","type":"text","value":"Kkd","length":3,"redacted":false},{"label":"Phone number country","type":"select-one","value":"CO","length":2,"redacted":false},{"label":"Teléfono / WhatsApp *","type":"tel","value":"+57 310 7008875","length":15,"redacted":false},{"label":"Correo (opcional)","type":"email","value":"","length":0,"redacted":false},{"label":"Ciudad *","type":"button","value":"","length":0,"redacted":false},{"label":"[select]","type":"select-one","value":"Cali","length":4,"redacted":false},{"label":"Dirección de entrega *","type":"text","value":"Jdkskskms","length":9,"redacted":false},{"label":"Notas adicionales","type":"textarea","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-09 01:02:11.635Z navigate
- url: http://192.168.40.9:3000/success
- via: pushState

## 2026-08-09 01:02:17.451Z navigate
- url: http://192.168.40.9:3000/checkout
- via: popstate

## 2026-08-09 01:08:09.079Z load
- url: http://localhost:3000/

## 2026-08-09 02:48:52.267Z load
- url: http://localhost:3000/

## 2026-08-09 02:48:56.938Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-09 02:49:06.974Z load
- url: http://localhost:3000/admin

## 2026-08-09 02:49:07.372Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-09 02:49:07.626Z navigate
- url: http://localhost:3000/admin/login
- via: replaceState

## 2026-08-09 02:49:28.655Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"","valueLength":0,"text":""}

## 2026-08-09 02:49:28.770Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"","valueLength":0,"text":""}

## 2026-08-09 02:49:30.153Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"ricamazo0725@gmail.com","valueLength":22,"text":""}

## 2026-08-09 02:49:30.618Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"ricamazo0725@gmail.com","valueLength":22,"text":""}

## 2026-08-09 02:49:30.619Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-09 02:49:30.716Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-09 02:49:31.204Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-09 02:49:36.941Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-09 02:49:36.942Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-09 02:49:37.043Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-08-09 02:49:37.090Z submit
- action: http://localhost:3000/admin/login
- fields: [{"label":"Correo","type":"email","value":"ricamazo0725@gmail.com","length":22,"redacted":false},{"label":"Contraseña","type":"password","value":"[redacted:length=13]","length":13,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-09 02:49:37.615Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password
- status: 400
- requestBody: {"email":"ricamazo0725@gmail.com","password":"[redacted:length=13]","gotrue_meta_security":{}}
- response: {"code":"invalid_credentials","message":"Invalid login credentials"}
- durationMs: 521

## 2026-08-09 02:49:37.616Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password: {"code":"invalid_credentials","message":"Invalid login credentials"}

## 2026-08-09 02:49:38.883Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-09 02:49:38.954Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-09 02:49:39.202Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-09 02:49:46.623Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:49:46.623Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:49:46.715Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-08-09 02:49:46.717Z submit
- action: http://localhost:3000/admin/login
- fields: [{"label":"Correo","type":"email","value":"ricamazo0725@gmail.com","length":22,"redacted":false},{"label":"Contraseña","type":"password","value":"[redacted:length=14]","length":14,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-09 02:49:47.028Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password
- status: 400
- requestBody: {"email":"ricamazo0725@gmail.com","password":"[redacted:length=14]","gotrue_meta_security":{}}
- response: {"code":"invalid_credentials","message":"Invalid login credentials"}
- durationMs: 311

## 2026-08-09 02:49:47.028Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password: {"code":"invalid_credentials","message":"Invalid login credentials"}

## 2026-08-09 02:49:48.027Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-08-09 02:49:48.029Z submit
- action: http://localhost:3000/admin/login
- fields: [{"label":"Correo","type":"email","value":"ricamazo0725@gmail.com","length":22,"redacted":false},{"label":"Contraseña","type":"password","value":"[redacted:length=14]","length":14,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-09 02:49:48.649Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password
- status: 400
- requestBody: {"email":"ricamazo0725@gmail.com","password":"[redacted:length=14]","gotrue_meta_security":{}}
- response: {"code":"invalid_credentials","message":"Invalid login credentials"}
- durationMs: 620

## 2026-08-09 02:49:48.649Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password: {"code":"invalid_credentials","message":"Invalid login credentials"}

## 2026-08-09 02:49:49.205Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:49:49.284Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:49:49.523Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:49:49.767Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:49:53.638Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:50:01.700Z load
- url: http://localhost:3000/admin

## 2026-08-09 02:50:02.041Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-09 02:50:09.812Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:50:09.864Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=14]","valueLength":14,"text":""}

## 2026-08-09 02:50:25.192Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo producto"}

## 2026-08-09 02:50:26.318Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nombre *Subtítulo / MarcaCategoríaDescripciónPrecio (COP) *Precio en oferta (opcional)Stock disponible *Etiqueta (ej. \"Nuevo\", \"Oferta\")Imágenes del productoSubir imagenJPG, PNG o WEBPO pega URLs de imágenes manualmenteVisible en la tiendaCrear productoCancelar"}

## 2026-08-09 02:50:26.513Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:26.623Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:27.712Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"sdds","valueLength":4,"text":""}

## 2026-08-09 02:50:27.712Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Nombre *","value":"sdds","valueLength":4,"text":""}

## 2026-08-09 02:50:27.712Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:27.807Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:31.123Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"dsds","valueLength":4,"text":""}

## 2026-08-09 02:50:31.124Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"subtitle","placeholder":null,"label":"Subtítulo / Marca","value":"dsds","valueLength":4,"text":""}

## 2026-08-09 02:50:31.125Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:31.187Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:32.542Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"dsffsd","valueLength":6,"text":"dsffsd"}

## 2026-08-09 02:50:32.542Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"description","placeholder":null,"label":"Descripción","value":"dsffsd","valueLength":6,"text":"dsffsd"}

## 2026-08-09 02:50:32.615Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear producto"}

## 2026-08-09 02:50:32.617Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:33.915Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nombre *Subtítulo / MarcaCategoríaDescripcióndsffsdPrecio (COP) *Precio en oferta (opcional)Stock disponible *Etiqueta (ej. \"Nuevo\", \"Oferta\")Imágenes del productoSubir imagenJPG, PNG o WEBPO pega URLs de imágenes manualmenteVisible en la tiendaCrear productoCancelar"}

## 2026-08-09 02:50:34.502Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:34.573Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:35.863Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-09 02:50:35.864Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"0","valueLength":1,"text":""}

## 2026-08-09 02:50:36.531Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"1","valueLength":1,"text":""}

## 2026-08-09 02:50:36.531Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"1","valueLength":1,"text":""}

## 2026-08-09 02:50:36.943Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"1","valueLength":1,"text":""}

## 2026-08-09 02:50:37.815Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"2","valueLength":1,"text":""}

## 2026-08-09 02:50:37.816Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"2","valueLength":1,"text":""}

## 2026-08-09 02:50:38.071Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"3","valueLength":1,"text":""}

## 2026-08-09 02:50:38.072Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"3","valueLength":1,"text":""}

## 2026-08-09 02:50:38.591Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"3","valueLength":1,"text":""}

## 2026-08-09 02:50:38.849Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"3","valueLength":1,"text":""}

## 2026-08-09 02:50:39.103Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"3","valueLength":1,"text":""}

## 2026-08-09 02:50:42.616Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"4","valueLength":1,"text":""}

## 2026-08-09 02:50:42.616Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"price","placeholder":null,"label":"Precio (COP) *","value":"4","valueLength":1,"text":""}

## 2026-08-09 02:50:42.711Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear producto"}

## 2026-08-09 02:50:42.713Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:44.177Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"","valueLength":0,"text":""}

## 2026-08-09 02:50:46.226Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-09 02:50:46.227Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"1","valueLength":1,"text":""}

## 2026-08-09 02:50:46.449Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"2","valueLength":1,"text":""}

## 2026-08-09 02:50:46.450Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"2","valueLength":1,"text":""}

## 2026-08-09 02:50:47.364Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":"stock","placeholder":null,"label":"Stock disponible *","value":"2","valueLength":1,"text":""}

## 2026-08-09 02:50:47.465Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear producto"}

## 2026-08-09 02:50:47.468Z submit
- action: http://localhost:3000/admin
- fields: [{"label":"Nombre *","type":"text","value":"sdds","length":4,"redacted":false},{"label":"Subtítulo / Marca","type":"text","value":"dsds","length":4,"redacted":false},{"label":"Categoría","type":"text","value":"","length":0,"redacted":false},{"label":"Descripción","type":"textarea","value":"dsffsd","length":6,"redacted":false},{"label":"Precio (COP) *","type":"number","value":"4","length":1,"redacted":false},{"label":"Precio en oferta (opcional)","type":"number","value":"","length":0,"redacted":false},{"label":"Stock disponible *","type":"number","value":"2","length":1,"redacted":false},{"label":"Etiqueta (ej. \"Nuevo\", \"Oferta\")","type":"text","value":"","length":0,"redacted":false},{"label":"[file]","type":"file","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"https://ejemplo.com/imagen1.jpg https://ejemplo.com/imagen2.jpg","type":"textarea","value":"","length":0,"redacted":false},{"label":"Visible en la tienda","type":"button","value":"on","length":2,"redacted":false},{"label":"[checkbox]","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-08-09 02:51:40.378Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ProductosPedidosADMINProductosSesión: ricamazo0725@gmail.com Nuevo producto SalirProductoCategoríaPrecioStockEstadoAccionessddsdsds—$ 42Visibletestdddcreatina$ 1001VisibleProteína Whey Gold Standard 2LBOptimum NutritionProteínas$ 185.00015Visible"}

## 2026-08-09 02:51:41.019Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pedidos"}

## 2026-08-09 02:51:41.022Z navigate
- url: http://localhost:3000/admin/orders
- via: pushState

## 2026-08-09 02:51:43.307Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ProductosPedidosADMINPedidosSesión: ricamazo0725@gmail.comTodos los estados Salirfdds#cfb0c3b2 · 8/08/2026, 9:51 p. m.$ 185.000pendienteKkd#d302a60e · 8/08/2026, 8:02 p. m.$ 100pendienterica#be07a45a · 8/08/2026, 3:16 p. m.$ 185.100enviadoricardo#9705168d · 8/08/2026, 3:15 p. m.$ 315.000pendientericardo#828379c0 · 6/08/2026, 4:26 p. m.$ 100confirmadodsffds#5712ab19 · 6/08/2026, 3:38 p. m.$ 100pendiente"}

## 2026-08-09 02:51:44.179Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"fdds#cfb0c3b2 · 8/08/2026, 9:51 p. m.$ 185.000pendiente"}

## 2026-08-10 03:19:48.272Z load
- url: http://localhost:3000/

## 2026-08-10 03:19:51.686Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-10 03:19:57.955Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"InicioProductosMarcasCombosOfertasBlog"}

## 2026-08-10 03:19:58.593Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Blog"}

## 2026-08-10 03:19:58.597Z navigate
- url: http://localhost:3000/blog
- via: pushState

## 2026-08-10 03:20:14.700Z load
- url: http://localhost:3000/admin/blog

## 2026-08-10 03:20:15.259Z navigate
- url: http://localhost:3000/admin/blog
- via: replaceState

## 2026-08-10 03:20:15.307Z navigate
- url: http://localhost:3000/admin/login
- via: replaceState

## 2026-08-10 03:20:17.264Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:17.366Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:18.232Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"ricamazo0725@gmail.com","valueLength":22,"text":""}

## 2026-08-10 03:20:18.729Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":null,"label":"Correo","value":"ricamazo0725@gmail.com","valueLength":22,"text":""}

## 2026-08-10 03:20:18.730Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-10 03:20:18.826Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-10 03:20:19.284Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-08-10 03:20:23.615Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:23.615Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:23.702Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-08-10 03:20:23.704Z submit
- action: http://localhost:3000/admin/login
- fields: [{"label":"Correo","type":"email","value":"ricamazo0725@gmail.com","length":22,"redacted":false},{"label":"Contraseña","type":"password","value":"[redacted:length=12]","length":12,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-10 03:20:24.185Z network.error
- method: POST
- url: https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password
- status: 400
- requestBody: {"email":"ricamazo0725@gmail.com","password":"[redacted:length=12]","gotrue_meta_security":{}}
- response: {"code":"invalid_credentials","message":"Invalid login credentials"}
- durationMs: 478

## 2026-08-10 03:20:24.185Z console.error
- text: Fetch error from https://lejipsqguyjzryotljdu.supabase.co/auth/v1/token?grant_type=password: {"code":"invalid_credentials","message":"Invalid login credentials"}

## 2026-08-10 03:20:25.942Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:26.028Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:26.276Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:26.731Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:27.124Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:27.596Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=12]","valueLength":12,"text":""}

## 2026-08-10 03:20:29.749Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-10 03:20:29.749Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":null,"label":"Contraseña","value":"[redacted:length=13]","valueLength":13,"text":""}

## 2026-08-10 03:20:29.854Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Iniciar sesión"}

## 2026-08-10 03:20:29.856Z submit
- action: http://localhost:3000/admin/login
- fields: [{"label":"Correo","type":"email","value":"ricamazo0725@gmail.com","length":22,"redacted":false},{"label":"Contraseña","type":"password","value":"[redacted:length=13]","length":13,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-08-10 03:20:30.236Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-10 03:20:30.252Z navigate
- url: http://localhost:3000/admin
- via: replaceState

## 2026-08-10 03:20:34.196Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Blog"}

## 2026-08-10 03:20:34.197Z navigate
- url: http://localhost:3000/admin/blog
- via: pushState

## 2026-08-10 03:20:35.861Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo artículo"}

## 2026-08-10 03:20:36.808Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Título *","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:36.911Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Título *","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:38.728Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Título *","value":"sdsd","valueLength":4,"text":""}

## 2026-08-10 03:20:38.728Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"title","placeholder":null,"label":"Título *","value":"sdsd","valueLength":4,"text":""}

## 2026-08-10 03:20:38.729Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"slug","placeholder":"se-genera-solo-desde-el-titulo","label":"URL (slug)","value":"sdsd","valueLength":4,"text":""}

## 2026-08-10 03:20:38.837Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"slug","placeholder":"se-genera-solo-desde-el-titulo","label":"URL (slug)","value":"sdsd","valueLength":4,"text":""}

## 2026-08-10 03:20:40.021Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"slug","placeholder":"se-genera-solo-desde-el-titulo","label":"URL (slug)","value":"sdsddssd","valueLength":8,"text":""}

## 2026-08-10 03:20:41.070Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"slug","placeholder":"se-genera-solo-desde-el-titulo","label":"URL (slug)","value":"sdsddssd","valueLength":8,"text":""}

## 2026-08-10 03:20:41.070Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":"slug","placeholder":"se-genera-solo-desde-el-titulo","label":"URL (slug)","value":"sdsddssd","valueLength":8,"text":""}

## 2026-08-10 03:20:41.071Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"excerpt","placeholder":"Aparece en la lista del blog y en buscadores.","label":"Resumen corto","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:41.166Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"excerpt","placeholder":"Aparece en la lista del blog y en buscadores.","label":"Resumen corto","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:42.278Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"excerpt","placeholder":"Aparece en la lista del blog y en buscadores.","label":"Resumen corto","value":"dsdsd","valueLength":5,"text":"dsdsd"}

## 2026-08-10 03:20:42.278Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"excerpt","placeholder":"Aparece en la lista del blog y en buscadores.","label":"Resumen corto","value":"dsdsd","valueLength":5,"text":"dsdsd"}

## 2026-08-10 03:20:42.279Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"content","placeholder":"Escribe el artículo. Los saltos de línea se respetan tal cual.","label":"Contenido","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:42.364Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"content","placeholder":"Escribe el artículo. Los saltos de línea se respetan tal cual.","label":"Contenido","value":"","valueLength":0,"text":""}

## 2026-08-10 03:20:44.863Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"content","placeholder":"Escribe el artículo. Los saltos de línea se respetan tal cual.","label":"Contenido","value":"dsfdsdsfsdf","valueLength":11,"text":"dsfdsdsfsdf"}

## 2026-08-10 03:20:44.864Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":"content","placeholder":"Escribe el artículo. Los saltos de línea se respetan tal cual.","label":"Contenido","value":"dsfdsdsfsdf","valueLength":11,"text":"dsfdsdsfsdf"}

## 2026-08-10 03:20:44.959Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Subir imagen"}

## 2026-08-10 03:20:44.959Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"file","id":null,"placeholder":null,"label":"[file]","value":"","valueLength":0,"text":""}

## 2026-08-10 03:21:02.719Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Crear artículo"}

## 2026-08-10 03:21:02.721Z submit
- action: http://localhost:3000/admin/blog
- fields: [{"label":"Título *","type":"text","value":"sdsd","length":4,"redacted":false},{"label":"URL (slug)","type":"text","value":"sdsddssd","length":8,"redacted":false},{"label":"Resumen corto","type":"textarea","value":"dsdsd","length":5,"redacted":false},{"label":"Contenido","type":"textarea","value":"dsfdsdsfsdf","length":11,"redacted":false},{"label":"[file]","type":"file","value":"C:\\fakepath\\image_fx_ (2).jpg","length":29,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"Publicado (visible en /blog)","type":"button","value":"on","length":2,"redacted":false},{"label":"[checkbox]","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-08-10 03:21:55.708Z load
- url: http://localhost:3000/

## 2026-08-10 03:21:56.036Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-10 03:21:57.640Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Blog"}

## 2026-08-10 03:21:57.641Z navigate
- url: http://localhost:3000/blog
- via: pushState

## 2026-08-10 03:22:01.647Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"9 de agosto de 2026sdsddsdsdLeer más "}

## 2026-08-10 03:22:01.648Z navigate
- url: http://localhost:3000/blog/sdsddssd
- via: pushState

## 2026-08-10 03:22:04.348Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Volver al blog"}

## 2026-08-10 03:22:04.349Z navigate
- url: http://localhost:3000/blog
- via: pushState

## 2026-08-10 03:22:12.827Z load
- url: http://localhost:3000/admin/blog

## 2026-08-10 03:22:13.163Z navigate
- url: http://localhost:3000/admin/blog
- via: replaceState

## 2026-08-10 03:22:16.456Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-08-10 03:22:18.481Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Subir imagen"}

## 2026-08-10 03:22:18.481Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"file","id":null,"placeholder":null,"label":"[file]","value":"","valueLength":0,"text":""}

## 2026-08-10 03:22:28.675Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Guardar cambios"}

## 2026-08-10 03:22:28.678Z submit
- action: http://localhost:3000/admin/blog
- fields: [{"label":"Título *","type":"text","value":"sdsd","length":4,"redacted":false},{"label":"URL (slug)","type":"text","value":"sdsddssd","length":8,"redacted":false},{"label":"Resumen corto","type":"textarea","value":"dsdsd","length":5,"redacted":false},{"label":"Contenido","type":"textarea","value":"dsfdsdsfsdf","length":11,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[file]","type":"file","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"Publicado (visible en /blog)","type":"button","value":"on","length":2,"redacted":false},{"label":"[checkbox]","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-08-10 03:22:35.400Z load
- url: http://localhost:3000/

## 2026-08-10 03:22:35.816Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-08-10 03:22:38.004Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Blog"}

## 2026-08-10 03:22:38.006Z navigate
- url: http://localhost:3000/blog
- via: pushState

## 2026-08-10 03:25:39.469Z load
- url: http://localhost:3000/blog

## 2026-08-10 03:25:51.084Z load
- url: http://localhost:3000/admin/blog

## 2026-08-10 03:25:51.457Z navigate
- url: http://localhost:3000/admin/blog
- via: replaceState

## 2026-08-10 03:25:55.796Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Nuevo artículo"}

