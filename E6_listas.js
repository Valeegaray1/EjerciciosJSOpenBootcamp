/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)*/ 
const listaCompra = ['yerba','leche','azucar', 'miel', 'té',]


/*- Modifica la lista de la compra y añádele "Aceite de Girasol"*/
listaCompra.splice(2, 0, 'Aceite de girasol')


/*- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"*/
listaCompra.splice(2, 1,)


/*- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)*/
const listaPeliculas = [
    {titulo: 'Avatar I', director: 'James Cameron', fecha: 2009},
    {titulo: 'Avatar II', director: 'James Cameron', fecha: 2022},
    {titulo: 'Black Panther: Wakanda Forever', director: 'Ryan Coogler', fecha: 2022}
]


/*- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)*/

const listaPeliculas2= listaPeliculas.filter(obj=> obj.fecha > 10)


/*- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)*/
function director( {director}) {
    return `${director}`;
}

const directoresPeliculas= listaPeliculas.map(director)



/*- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)*/
function titulos( {titulo}) {
    return `${titulo}`;
}

const titulosPeliculas= listaPeliculas.map(titulos)


/*- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)*/
const directores = [
    {director: 'James Cameron'},
    {director: 'James Cameron'},
    {director: 'Ryan Coogler'}
]

const titulos = [
{titulo: 'Avatar I'},
{titulo: 'Avatar II'},
{titulo: 'Black Panther: Wakanda Forever'}
]

const lista3 = directores.concat(titulos)

