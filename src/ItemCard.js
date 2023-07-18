import React from 'react';
import {useCart} from "react-use-cart";

function ItemCard({img,title,desc,price,item,id}) {
    const {addItem} =useCart();

    const handleAdd = (item)=>{
      addItem(item)
    }
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={id}>
        <div className="card p-0 overflow-hidden h-100 shadow" >
            <img src={img} className="card-img-top img-fluid" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-text">{desc}</h5>
                <p className="card-text">${price}</p>
                <button className="btn btn-success" 
                onClick={() => handleAdd(item)}
                > Add to cart</button>
             </div>
        </div> 
    </div>
  );
};

export default ItemCard;