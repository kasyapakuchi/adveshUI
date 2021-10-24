import React from 'react';
import { Link,withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
function AdminHeader(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    function renderLogout() {
        if(props.location.pathname === '/home'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }
    return(

    //     <nav class="navbar navbar-dark bg-dark">
    //     <a class="navbar-brand" href="#">Navbar</a>
    // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //   <span class="navbar-toggler-icon"></span>
    // </button>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
  
              <li class="nav-item active">
                <Link class="nav-link" to="/admin">Home</Link>
              </li>
              <li class="nav-item">
                < Link class="nav-link"  to="/admin">AddProducts</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">Products</Link>
              </li>
            </ul>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button><div className="row col-12 d-flex justify-content-center text-white">
                {renderLogout()}
            </div>
            </div>
        </nav>
    )
}
export default withRouter(AdminHeader);