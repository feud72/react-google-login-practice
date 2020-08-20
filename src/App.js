import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import dotenv from "dotenv"
dotenv.config()

const App = (props) => {
const  {user, setUser} = useState({id:"", name:"", provider:""})
const responseGoogle = (res) => {console.log(res)}
const clientId=process.env.REACT_APP_GOOGLE_CLIENT_ID
console.log(process.env)
return (
  <div>
  <GoogleLogin clientId={clientId}
  buttonText="Google"
    onSuccess={responseGoogle}
    onFailure={result => console.log(result)}
  />
  
  </div>)
}

export default App;
