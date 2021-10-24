import React from 'react'



const Products = ({ products }) => {
  return (
    <div>
      <br/>
      <center><h1>Product List</h1></center>
      {products.map((product) => (
        <div class="card">
          <br/>
          <div class="view zoom overlay">
            <h5 class="card-title">{product.shortname}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{product.longname}</h6>
            <p class="card-text">ID: {product.productid}</p>
            <div>
                <img class="col-md-4 col-sm-4 col-xs-4" src={product.imageurls} alt="Italian Trulli"/>
            </div>
            <p class="card-text">Price: {product.price}</p>
            <p class="card-text">Description: {product.description}</p>
            <p class="card-text">Category: {product.category}</p>
            <p class="card-text">Sub Category: {product.subcategory}</p>
            <p class="card-text">Material: {product.material}</p>
            <p class="card-text">Colour: {product.colour}</p>
            <i class="fa fa-whatsapp" ><a href="https://wa.me/918978970413?text=I'm%20interested%20in%20a%20product%20and%20want%20to%20discuss%20more%20about%20it" target="_blank">Whatsapp</a></i>
            <br/>
          </div>
          <br/>
        </div>
      ))}
    </div>
  )

};

export default Products