//  INTERACCION CON EL NAVBAR, REACCION DE 'BOTONES'
function activar(e) {
    let elems = document.querySelector(".active");
    let dark = document.querySelector(".bg-dark");
    let colorTxt = document.querySelector(".text-white");
    if(elems !==null){
        elems.classList.remove("active");
        dark.classList.remove("bg-dark");
        colorTxt.classList.remove("text-white");
    }
    e.className = "nav-link active bg-dark text-white";
}

// zona de recepcion

const formUsuario = document.getElementById('formularioAddUsu');
const tabla = document.getElementById('cuerpoTabla');
const guardar = document.getElementById('guardar');


let mapCarrito = new Map();


// listar elementos existentes:

let mapaUsuarios = new Map();

let objetoData = {'cedula':1005638490,'nombre':'David', 'apellidos': 'Castro', 'tel':123456789, correo:'owo@gmail.com', 'fechaNac':'2018-12-31', 'nacion':'Colombia'};
mapaUsuarios.set(1, objetoData);


// contadores
let mapContUsu= 0;
let contador = 1;


document.addEventListener('DOMContentLoaded',()=>{
    mapContUsu++;
    let delMapa = contador;
    let nuevo = document.createElement('tr');
    nuevo.setAttribute('id',contador);
    nuevo.className='articulo';

    for (let i = 0; i < 9; i++) {
        let bodyN = document.createElement('th');
        let body = document.createElement('td');
        
        if (i==0) {
            let data = document.createTextNode(mapContUsu);
            bodyN.appendChild(data);
            nuevo.appendChild(bodyN);
        }else if (i==1) {
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.cedula);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        } else if (i==2) {
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.nombre);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        } else if (i==3) {
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.apellidos);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        } else if (i==4) {
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.tel);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        }
        else if (i==5){
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.correo);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        }
        else if (i==6){
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.fechaNac);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        }
        else if (i==7){
            let obtenetMapaUsu = mapaUsuarios.get(mapContUsu);
            let data = document.createTextNode(obtenetMapaUsu.nacion);
            // console.log(data);
            body.appendChild(data);
            nuevo.appendChild(body);
        } else if(i==8){
            let creaButton = document.createElement('button');
                creaButton.onclick = function () {
                    mapaUsuarios.delete(delMapa);
                    this.parentElement.remove();
                };
                creaButton.id = 'eliminarDIV';
                creaButton.textContent ='Eliminar';
                creaButton.className = 'btn btn-outline-danger';
                nuevo.appendChild(creaButton);
        }

    }
    //console.log(nuevo);
    tabla.appendChild(nuevo);
})


// Anadir elementos nuevos:


guardar.addEventListener('click', ()=>{
    contador++;
    let delMapa = contador;
    let nuevo = document.createElement('tr');
    nuevo.setAttribute('id',contador);

    for (let i = 0; i < 9; i++) {
        let bodyN = document.createElement('th');
        let body = document.createElement('td');
        if (i==0) {
            let data = document.createTextNode(contador);
            bodyN.appendChild(data);
            nuevo.appendChild(bodyN);
        }else if (i==1) {
            let data = document.createTextNode(formUsuario.inputCedula.value);
            objetoData.cedula=data;
            body.appendChild(data);
            body.className = 'articulo';
            nuevo.appendChild(body);
        } else if (i==2) {
            let data = document.createTextNode(formUsuario.inputNombre.value);
            objetoData.nombre=data;
            body.appendChild(data);
            body.className = 'articulo';
            nuevo.appendChild(body);
        } else if (i==3) {
            let data = document.createTextNode(formUsuario.inputApellido.value);
            objetoData.apellidos=data;
            body.appendChild(data);
            body.className = 'articulo';
            nuevo.appendChild(body);
        } else if (i==4) {
            let data = document.createTextNode(formUsuario.inputTelefono.value);
            objetoData.tel=data;
            body.appendChild(data);
            nuevo.appendChild(body);
        }
        else if (i==5){
            let data = document.createTextNode(formUsuario.inputCorreo.value);
            objetoData.correo=data;
            body.appendChild(data);
            nuevo.appendChild(body);
        }
        else if (i==6){
            let data = document.createTextNode(formUsuario.inputFechaNac.value);
            objetoData.fechaNac=data;
            body.appendChild(data);
            nuevo.appendChild(body);
        }
        else if (i==7){
            let data = document.createTextNode(formUsuario.inputNacion.value);
            objetoData.nacion=data;
            body.appendChild(data);
            nuevo.appendChild(body);
        }else if(i==8){
            let creaButton = document.createElement('button');
                creaButton.onclick = function () {
                    mapaUsuarios.delete(delMapa);
                    this.parentElement.remove();
                };
                creaButton.id = 'eliminarDIV';
                creaButton.textContent ='Eliminar';
                creaButton.className = 'btn btn-outline-danger';
                nuevo.appendChild(creaButton);
            
        } 
    }
    mapaUsuarios.set(contador, objetoData);
    tabla.appendChild(nuevo);
    formUsuario.reset();
})

// --------------------------- FIN ZONA DE CREACION USUARIOS ---------------------------------------


// CARGADO DE JUEGOS

//Zona de creacion de card (new format)
let contMapaAdd = 0;
document.addEventListener('DOMContentLoaded', () => {
    contMapaAdd++;
    let delMapa = contMapaAdd;
    for (let i = 0; i < gameMap.size ; i++) {
        mapGameCont++;
        let cardEsponja = document.createElement('div');
        cardEsponja.id = 'divCardElement';
        cardEsponja.className = 'card col-1 cardEsponja';
        cardEsponja.style = 'width: 18rem';
        let divLista = document.createElement('div');
        divLista.className = 'card-body text-center';   

        // Creación del img:
        let imgCard = document.createElement('img');
        imgCard.src = 'icons/gam-icon.png';
        imgCard.className = 'card-img-top';
        imgCard.alt = 'Imagen película';

        //Creación título:
        let hcreator = document.createElement('h5');
        hcreator.className = 'card-title';

        //Creación de la lista:
        let ulCreator = document.createElement('ul');
        ulCreator.className = 'list-group p-2';

        //Creación del enlace:
        let btnEnlace = document.createElement('button');
        btnEnlace.setAttribute('onclick', 'eliminarDiv(this)');
        btnEnlace.className = 'btn btn-outline-danger eliminar';
        btnEnlace.id = 'eliminar';
        btnEnlace.textContent = 'Eliminar';
        btnEnlace.href='#';


        for (let i = 0; i < 3; i++) {
            let elementList = document.createElement('li');
            if (i == 0) {
                let obtener = gameMap.get(contMapaAdd);
                // console.log(obtener);
                //adicion de los elementos al 'h5' (titulo del card)

                let titulos = document.createTextNode(obtener.nombre);
                hcreator.appendChild(titulos);
                divLista.appendChild(hcreator);
    
            } else if (i == 1) {
                let obtener = gameMap.get(contMapaAdd);
                //adicion de los elementos al 'ul' (unsorted list card)
                let generos = document.createTextNode(obtener.genero);
                elementList.appendChild(generos);
                ulCreator.appendChild(elementList);

            } else if (i == 2) {
                let obtener = gameMap.get(contMapaAdd);
                //adicion de los elementos al 'ul' (unsorted list card)
                let clasificaciones = document.createTextNode(obtener.clasificacion);
                elementList.appendChild(clasificaciones);
                ulCreator.appendChild(elementList);
                divLista.appendChild(ulCreator);
    
                // Adición del 'img' y 'div' del card
                cardEsponja.appendChild(imgCard);
                cardEsponja.appendChild(divLista);
                let creaButton = document.createElement('button');
                creaButton.onclick = function () {
                    gameMap.delete(delMapa);
                    this.parentElement.remove();
                };
                creaButton.id = 'eliminarDIV';
                creaButton.textContent ='Eliminar';
                creaButton.className = 'btn btn-outline-primary';

            cardEsponja.appendChild(creaButton);
            }
        }
        divConteCard.appendChild(cardEsponja);      
        //console.log(mapContador);
    }    
});




// ZONA DE CREACION DE JUEGOS



let gameMap = new Map();/////////////////////// OJITO CON EL MAPA DE JUEGOS PARA MOSTRARLOS EN LA PESTANA PRICIPAL 
let juegosBase = { nombre: 'Halo CE', genero: 'Accion', clasificacion: 'M'};
gameMap.set(1,juegosBase);
const guardarPartida = document.getElementById('guarDaPart');


const cardForm = document.querySelector('.cardForm');
let addC = gameMap.size;
//console.log(addC);

guardarPartida.addEventListener('click', (e) => {
    e.preventDefault();
    addC++;
    let delMapa = addC;
    
    let juegos = { nombre: '', genero: '', clasificacion: ''};

    // Creación de los div:
    let cardEsponja = document.createElement('div');
    cardEsponja.id = 'divCardElement';
    cardEsponja.className = 'card col-1 cardEsponja';
    cardEsponja.style = 'width: 18rem';
    let divLista = document.createElement('div');
    divLista.className = 'card-body text-center';

    // Creación del img:
    let imgCard = document.createElement('img');
    imgCard.src = 'icons/gam-icon.png';
    imgCard.className = 'card-img-top';
    imgCard.alt = 'Imagen juego';

    //Creación título:
    let hcreator = document.createElement('h5');
    hcreator.className = 'card-title';

    //Creación de la lista:
    let ulCreator = document.createElement('ul');
    ulCreator.className = 'list-group p-2';


    //Creación de elementos de la lista
    for (let i = 0; i < 3; i++) {
        let elementList = document.createElement('li');
        if (i == 0) {

            //adicion de los elementos al 'h5' (titulo del card)
            let titulos = document.createTextNode(cardForm.titulo.value);
            hcreator.appendChild(titulos);
            divLista.appendChild(hcreator);

            // Adición del valor al objeto
            juegos.nombre = titulos;
        } else if (i == 1) {

            //adicion de los elementos al 'ul' (unsorted list card)
            let generos = document.createTextNode(cardForm.selectGen.value);
            elementList.appendChild(generos);
            ulCreator.appendChild(elementList);

            // Adición del valor al objeto
            juegos.genero = generos;
        } else if (i == 2) {

            //adicion de los elementos al 'ul' (unsorted list card)
            let clasificaciones = document.createTextNode(cardForm.selecClasif.value);
            elementList.appendChild(clasificaciones);
            ulCreator.appendChild(elementList);

            // Adicion de 'h5' y el 'ul' a la sección de información del card
            divLista.appendChild(ulCreator);
            

            // Adición del 'img' y 'div' del card
            cardEsponja.appendChild(imgCard);
            cardEsponja.appendChild(divLista);


            let creaButton = document.createElement('button');
                creaButton.onclick = function () {
                    gameMap.delete(delMapa);
                    this.parentElement.remove();
                };
                creaButton.id = 'eliminarDIV';
                creaButton.textContent ='Eliminar';
                creaButton.className = 'btn btn-outline-primary';

            cardEsponja.appendChild(creaButton);

            // Adición del valor al objeto
            juegos.clasificacion = clasificaciones;

            // adicion del objeto al mapa.
            gameMap.set(addC, juegos);
        }
    }

    //Añadir CardEsponja al documento:
    divConteCard.appendChild(cardEsponja);
    cardForm.reset();
});

//Zona de creacion de card (new format)
let mapGameCont = 0;
let contGames = document.querySelector('.divContainerCard');
let btnMostrarInicio = document.getElementById('');



// zona de muestra de elementos en el map
const btnMostrarLobby = document.getElementById('mostJuegosMap');


// let contGames = document.querySelector('.divContainerCard');
// let btnMostrarInicio = document.getElementById('');

let owot = document.querySelector('.owo');
function owo(e){

    e.parentElement.remove();

    let containerFalso = document.createElement('div');
    containerFalso.className = 'row divContainerCard';
    contGames.appendChild(containerFalso);
}



let compra = {articulo: 0};



/* buscar una solucion para que cuando la persona use este click, no genere errores y en lugar de eso mande un mensaje diciendo que se ha cargado todo ya*/

btnMostrarLobby.addEventListener('click', () => {
    
    // buscar la forma de crear un contenedor dentro del contendor y agregar a ese contnedor los cards para poder tener un poccde mejor control, asi de esta forma
    // estoy 'eliminando' el contenido ya que agrego un container vacio el cual voy a llenar con js aqui abajo >:D
    // console.log(corrector);
    let mostrarMap = 0; // <--- el problema aqui es que lo va a seguir haciendo si importar si elimino aleatoriamente. Necesito es que este valor tome los keys de los elementos que estan
    
    let corrector = gameMap.size;
    // // console.log(corrector);
    // let temporal = gameMap.keys();
    // for (let i = 0; i < corrector; i++) {
    //     for (const value of temporal.next().value) {
    //         console.log(value);
    //     }
    // }


    for (let i = 0; i < corrector; i++) {
        // console.log(mostrarMap);
        mostrarMap++;
        let delMapa = mostrarMap;
        // let delMapa = mostrarMap;
        let cardEsponja = document.createElement('div');
        cardEsponja.id = 'divCardElement';
        cardEsponja.className = 'card col-1 cardEsponja';
        cardEsponja.style = 'width: 18rem';
        let divLista = document.createElement('div');
        divLista.className = 'card-body text-center';   

        // Creación del img:
        let imgCard = document.createElement('img');
        imgCard.src = 'icons/gam-icon.png';
        imgCard.className = 'card-img-top';
        imgCard.alt = 'Imagen película';

        //Creación título:
        let hcreator = document.createElement('h5');
        hcreator.className = 'card-title';

        //Creación de la lista:
        let ulCreator = document.createElement('ul');
        ulCreator.className = 'list-group p-2';

        //Creación del enlace:
        let btnEnCarrito = document.createElement('button');
        btnEnCarrito.setAttribute('onclick', 'aggCarrito');
        btnEnCarrito.className = 'btn btn-outline-warning text-dark btnCarrito';
        btnEnCarrito.id = 'btnCarrito';
        btnEnCarrito.textContent = 'Agregar al carrito';
        btnEnCarrito.href='#';
        

        for (let i = 0; i < 4; i++) {
            let elementList = document.createElement('li');
            if (i == 0) {
                let ObtMapaGames = gameMap.get(mostrarMap);
                
                //adicion de los elementos al 'h5' (titulo del card)

                let titulos = document.createTextNode(ObtMapaGames.nombre);
                hcreator.appendChild(titulos);
                divLista.appendChild(hcreator);
    
            } else if (i == 1) {
                let ObtMapaGames = gameMap.get(mostrarMap);
                //adicion de los elementos al 'ul' (unsorted list card)
                let generos = document.createTextNode(ObtMapaGames.genero);
                elementList.appendChild(generos);
                ulCreator.appendChild(elementList);

            } else if (i == 2) {
                let ObtMapaGames = gameMap.get(mostrarMap);
                //adicion de los elementos al 'ul' (unsorted list card)
                let clasificaciones = document.createTextNode(ObtMapaGames.clasificacion);
                elementList.appendChild(clasificaciones);
                ulCreator.appendChild(elementList);
                divLista.appendChild(ulCreator);
                
                // Adición del 'img' y 'div' del card
                cardEsponja.appendChild(imgCard);
                cardEsponja.appendChild(divLista);
            }else if (i == 3) {
                let creaButton = document.createElement('button');
                creaButton.onclick = carrito();
                creaButton.id = 'eliminarDIV';
                creaButton.textContent ='Eliminar';
                creaButton.className = 'btn btn-outline-danger';
                cardEsponja.appendChild(creaButton);
            }

        }
        contGames.appendChild(cardEsponja);
        //console.log(mapContador);
    }    
});



function carrito(){
    alert();
}










