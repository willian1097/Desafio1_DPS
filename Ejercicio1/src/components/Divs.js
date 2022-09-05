import React, { useState } from "react";
import Select from "./Select";
import items from "../data/data";
import Table from "./Table";

const Form = () => {
    let id = 0;
    const [product, setProduct] = useState([]);

    const handleClick = (e) => {
        id = e.target.value;
    };

    const handleSubmit = () => {
        if (!id) {
            return alert("Debe seleccionar un producto");
        }
        const item = items.find((item) => item.id === parseInt(id));

        if (product.find((item) => item.id === parseInt(id))) {
            product.forEach((item) => {
                if (item.id === parseInt(id)) {
                    item.amount++;
                }
            });
        } else {
            product.push(item);
        }

        setProduct([...product]);
    };

    return (
        <div className="row mt-2">
            <h1 className="text-center">Lista de Compras</h1>
            <div className="form-group col-md-10 mb-3">
                <Select items={items} handleClick={handleClick} />
            </div>

            <div className="form-group col-md-2 mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Agregar
                </button>
            </div>
            <Table product={product} setProduct={setProduct} />
        </div>
    );
};

export default Form;
