import React, { useState, useEffect } from "react";

const Table = ({ product, setProduct }) => {
    const [total, setTotal] = useState(0);

    const handleDelete = (id) => {
        const newProduct = product.filter((item) => item.id !== id);
        setProduct(newProduct);
    };

    const handleTotal = () => {
        let total = 0;
        product.forEach((item) => {
            total += item.price * item.amount;
        });
        setTotal(total);
    };

    const handleAmount = (e, id) => {
        const newProduct = product.map((item) => {
            if (item.id === id) {
                item.amount = e.target.value;
            }
            return item;
        });
        setProduct(newProduct);
    };

    useEffect(() => {
        handleTotal();
    });

    return (
        <div className="col-md-12">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>
                                <input
                                    type="number"
                                    step={1}
                                    min={1}
                                    onChange={(e) => handleAmount(e, item.id)}
                                    value={item.amount}
                                />
                            </td>
                            <td>${(item.price * item.amount).toFixed(2)}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="col-md-12 d-flex justify-content-end">
                <h3>Total General: ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Table;
