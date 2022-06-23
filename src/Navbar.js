import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="fw-bold">Blogit</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/createBlog" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;