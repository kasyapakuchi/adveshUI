import React,{ useEffect,useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import axios from 'axios'
import Header from '../Header/Header';

function Home(props) {
    const [title, updateTitle] = useState(null);

    useEffect(() => {
        // axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        // .then(function (response) {
        //     if(response.status !== 200){
        //       redirectToLogin()
        //     }
        // })
        // .catch(function (error) {
        //   redirectToLogin()
        // });
      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    return(
      
        <div class="row">

        </div>
    )
}

export default withRouter(Home);