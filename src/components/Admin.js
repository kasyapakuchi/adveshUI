import React,{ useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { API_BASE_URL,ACCESS_TOKEN_NAME } from '../constants/apiConstants';

import AdminHeader from './Header/AdminHeader';
function Admin(props) {
    const [title, updateTitle] = useState(null);
    const [state , setState] = useState({
        username : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    const [errorMessage, updateErrorMessage] = useState(null);
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "productid":state.productid,
            "shortname":state.shortname,
            "longname":state.longname,
            "imageurls":state.imageurls,
            "price":state.price,
            "description":state.description,
            "category":state.category,
            "subcategory":state.subcategory,
            "material":state.material,
            "colour":state.colour

                }
        axios.post(API_BASE_URL+'/addproducts', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Product Added Successfully'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToAdmin();
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
    const redirectToAdmin = () => {
        props.updateTitle('Admin')
        props.history.push('/products');
    }
    return(
      
        // <div>
        // <p>Admin page content</p>

        // </div>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
              <br/><center><h3>Add Product</h3></center>
              <br/>
<form>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Product ID</label>
        <input type="productid" 
               className="form-control" 
               id="productid" 
               aria-describedby="emailHelp" 
               placeholder="Enter Product ID" 
               value={state.productid}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Short Name</label>
        <input type="shortname" 
               className="form-control" 
               id="shortname" 
               aria-describedby="emailHelp" 
               placeholder="Enter Short Name" 
               value={state.shortname}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Long Name</label>
        <input type="longname" 
               className="form-control" 
               id="longname" 
               aria-describedby="emailHelp" 
               placeholder="Enter Long Name" 
               value={state.longname}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Image URLs</label>
        <input type="imageurls" 
               className="form-control" 
               id="imageurls" 
               aria-describedby="emailHelp" 
               placeholder="Enter image URLs" 
               value={state.imageurls}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Price</label>
        <input type="price" 
               className="form-control" 
               id="price" 
               aria-describedby="emailHelp" 
               placeholder="Enter Price" 
               value={state.price}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Description</label>
        <input type="description" 
               className="form-control" 
               id="description" 
               aria-describedby="emailHelp" 
               placeholder="Enter Description" 
               value={state.description}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Category</label>
        <input type="category" 
               className="form-control" 
               id="category" 
               aria-describedby="emailHelp" 
               placeholder="Enter Category" 
               value={state.category}
               onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Sub Category</label>
        <input type="subcategory" 
               className="form-control" 
               id="subcategory" 
               placeholder="Enter Subcategory"
               value={state.subcategory}
               onChange={handleChange} 
        />
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Material</label>
        <input type="material" 
               className="form-control" 
               id="material" 
               placeholder="Enter Material"
               value={state.material}
               onChange={handleChange} 
        />
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Colour</label>
        <input type="colour" 
               className="form-control" 
               id="colour" 
               placeholder="Enter Colour"
               value={state.colour}
               onChange={handleChange} 
        />
        </div>
        <div className="form-check">
        </div>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handleSubmitClick}
        >Submit</button>
    </form>
    <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
        {state.successMessage}
    </div>
</div>
    )
}

export default withRouter(Admin);