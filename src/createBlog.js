import React, { useState } from 'react';

const CreateBlog = () => {

    // setting states
    const [blogTitle, setBlogTitle] = useState('')
    const [blogBody, setBlogBody] = useState('')
    const [author, setAuthor] = useState('')




    return (
        <div className='container mx-auto w-75 my-4 bg-light'>
            <form>
                <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                            <input type="text" 
                            
                            className="form-control form-control-sm" id="floatingInputGrid" placeholder="Blog Title" />
                            <label>Enter Bolg Title</label>
                            <small>enter a minimum o three characters</small>
                        </div>
                    </div>
                    <div className="col-md mb-4">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected>Author</option>
                                <option option="1">Cedrick Olando</option>
                                <option option="2">Prince Jr</option>
                                <option option="3">Junior Ps</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Blog Body" id="floatingTextarea"></textarea>
                    <label >Enter Blog Description</label>
                </div>
                <button type="submit" className="btn btn-danger mx-auto d-block my-3 py-2 px-4">Submit</button>
            </form>
        </div>
    );
}

export default CreateBlog;
