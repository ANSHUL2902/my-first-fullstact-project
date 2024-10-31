import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(

<div>

<Link className="navbar navbar-expand-lg navbar-dark bg-info" to={"/"}>
<div className="container-fluid">
<a className="navbar-brand" href="#">User</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<Link className="btn btn-dark" to="/adduser">Add User</Link>
</div>
</Link>
    
</div>


    )
}

export default Navbar;



