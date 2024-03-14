fetch('menu.json')
//Que hace esta linea? Esta linea inicia la carga del archivo menu.json, fetch es una funcion de Javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de Api.
//Como funciona? fetch devuelve, una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.
.then(Response=>Response.json())
//que hace? Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto Javascript (esto asume el cuerpo de la respuesta esta en formato JOSN).
//como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en fromato JSON.
.then(data => {
    const menuContainer = document.getElementById('menu-container');
    //que hace? Aqui se procesan los datos JSON ya convertidos. Se obtiene una referencia el contenedor del menu en el HTML mediante getElementById ('menu-container'), y luego se itera sobre los elementos (categorias) del menu.
    data.items.forEach(category => {
        const categoryTitle= document.createElement('h2');
        //Que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenedor menu.
        categoryTitle.textContent=category.category;
        menuContainer.appendChild(categoryTitle);
        const table=document.createElement('table');
        //que hace? Se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tablehead) con las columnas pertinentes. TablebOdy se inicializa vacio y se llenara con los elementos de la categoria
        const tablehead = '<tr><th>Foto</th><th>Descripcion</th><th>Precios</th></tr>';
        let tablebOdy='';
        //Como funciona? para cada categoria en los datos, se realizan varios pasos:
        //Crear un titulo para las categoria: se crea un elemento <h2> para el titulo de la categoria. Se establece su contenido de texto al nombre de la categoria (category.category), y luego se agrega al contenedor del menu.
        //Crear una tabla para los elementos de esa categoria: se genera una tabal por cada categoria. Primero se define el encabezado de la tabla (<th>foto</th><th>Descripcion</th><th>Precio</th>).

        category.items.forEach(item=> {
            tablebOdy += <tr>
                <td><img src= "${item.image}" alt="{item.name}"></img></td>
                <td>${item.name} - ${item.description} </td>
                <td>${item.price}</td>
            </tr>
        });
        //Que hace? para cada item dentro de category.items, se concatena una nueva fila (<tr>) a tableBody. Esta fila contiene una celda para la imagen del elemento (suando el atributo src para la URL de la imagen y "alt" para el texto alternativo), tra celda para el nombre y la descripcion del elemento, y una tercera celda para el precio del elemento.
        table.innerHTML = tablehead + tablebOdy;
        //Que hace? una vez completadas todas las filas de la tabla para los elementos de una categoria, se combina el encabezado de la tabla (tableHead) con el cuerpo de la tabla (tableBody) y se establece como el contenido HTML de la tabla. Finalmente, esta tabla se añade al contenedor del menu en la pagina web.
    });
});
//Poblar la tabla con los elementos: Para cada item dentro de una categoria, se crea una fila (<tr></tr>) con tres celdas (<td></td>): una para la imagen (con el elemento <img>), otra para el nombre y descripcion del item, y una ultima para el precio. Esto se hace concatenado la nueva fila a una variable tableBody.
//Finalizar y mostrar la tabla: Una vez que todas las filas han sido agregadas a tableBody, se establece el contenido interno (innerHTML) de la tabla combinado el encabezado con el cuerpo. luego, esta tabla completa se agrega al contenedor del menu en el documento.
