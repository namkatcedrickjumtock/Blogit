import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='container'>

            <img src="../img/404.png" alt="" className="img-fluid w-25 mx-auto d-block py-3 mt-4" />
            <h5 className="text-center my-4"> sorry page doesn't exist</h5>
            <Link to={'/'}><p className='btn btn-outline-danger mx-auto d-block w-25'>Back to Home Page</p></Link>
        </div>
    );
}

export default Page404;
