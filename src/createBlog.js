import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const CreateBlog = () => {

    // setting states
    const [title, setTitle] = useState('')
    const [body, setBlogBody] = useState('')
    const [author, setAuthor] = useState('')
    const [hasStartTyping, setTyping] = useState(false)
    const [isAdding, isPending] = useState(false)
    const history = useHistory()

    const handleSubmitBlog = (e) => {
        e.preventDefault()
        const formData = { title, body, author }
        isPending(true)
        // sending post request since we're only gonna need it here
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                isPending(false);
                console.log(`Blog${formData.title} by ${formData.author} added!`)
                history.push('/')
            })
    }

    return (
        <div className='container mx-auto w-75 my-4 bg-light'>
            {hasStartTyping && <div className="alert alert-success">{body}</div>}
            <form onSubmit={handleSubmitBlog}>
                <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                            <input type="text"
                                className="form-control form-control-sm"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                id="floatingInputGrid" placeholder="Blog Title" required />
                            <label>Enter Bolg Title</label>
                            <small>enter a minimum o three characters</small>
                        </div>
                    </div>
                    <div className="col-md mb-4">
                        <div className="form-floating">
                            <select className="form-select" required
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                id="floatingSelectGrid" aria-label="Floating label select example">
                                <option >Author</option>
                                <option value="Cedrick Olando">Cedrick Olando</option>
                                <option value="Prince Jr">Prince Jr</option>
                                <option value="Junior Ps">Junior Ps</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" required
                        value={body}
                        onChange={(e) => { setTyping(true); setBlogBody(e.target.value) }}
                        placeholder="Blog Body" id="floatingTextarea"></textarea>
                    <label >Enter Blog Description</label>
                </div>
                {!isAdding && <button type="submit" className="btn btn-danger mx-auto d-block my-3 py-2 px-4">Add Blog</button>}
                {isAdding && <button type="submit" className="btn btn-danger mx-auto d-block my-3 py-2 px-4">Adding...</button>}

            </form>
        </div>
    );
}

export default CreateBlog;
