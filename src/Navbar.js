import { Link } from "react-router-dom";
import { React } from "react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <Link to="/" className="mx-2 mx-5 text-decoration-none"> <img src="../blogit.svg"  alt="logo" className="img-fluid fw-bold" />BLOGIT</Link>
      <div className="col-">
        <Link to={'/'} className="text-decoration-none mx-1 btn btn-outline-danger">Home</Link>
        <Link to={'/createBlog'} className="text-decoration-none mx-1 btn btn-outline-danger"> Create Blog </Link>
        <Link to={{ pathname: "https://github.com" }} target="_blank"> <i className="bi bi-github"></i></Link>
      </div>
    </nav>








    // <nav className="navbar">
    //   <h1 className="fw-bold">Blogit</h1>
    //   <div className="links">
    //     <Link to="/">Home</Link>
    //     <Link to="/createBlog" style={{ 
    //       color: 'white', 
    //       backgroundColor: '#f1356d',
    //       borderRadius: '8px' 
    //     }}>New Blog</Link>
    //   </div>
    // </nav>
  );
}

export default Navbar;