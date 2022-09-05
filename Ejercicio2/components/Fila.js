import React from 'react';
import ContenidoFila from './ContenidoFila';

const Fila = ({ item }) => (
    <ContenidoFila 
        titulo={item.titulo} 
        descripcion={item.descripcion} 
        img={item.imagen}
    />
);

export default Fila;