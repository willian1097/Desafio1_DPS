import React from "react";

const Select = ({ items, handleClick }) => {
    return (
        <select className="form-select" id="select-product" onChange={handleClick}>
            <option value="0">Seleccione un producto</option>
            {items.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.title}
                </option>
            ))}
        </select>
    );
};

export default Select;
