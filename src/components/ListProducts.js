import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import Products from './products'

function ListProducts(props) {
    const [state , setState] = useState({
        successMessage: null,
        products:[]
    })
  
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
          products:state.products,
          "successMessage":state.successMessage
      }
        axios.get(API_BASE_URL+'/products', payload)
            .then(function (response) {
                if(response.status === 200){
                  console.info(response);
                  
                    state.successMessage = 'Login successful. Redirecting to home page..';
                    state.products=response.data
                         
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToProducts();
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToProducts = () => {
        props.updateTitle('Products')
        props.history.push('/products');
    }
    const redirectToAdmin = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(
               <div className="card col-12 col-lg-8 login-card mt-2 hv-center">
                   <button class='btn btn-primary btn-lg' onClick={handleSubmitClick}>View All Products</button>
                         <Products products={state.products} />

</div>
               

    )
}

export default withRouter(ListProducts);