import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './api/fetchData';

const BlogDetails = () => {

    const { id } = useParams()
    const { isPending, error, data: blog } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const handleBlog = () => {
        fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" })
            .then(() => { history.push('/') })

    }

    return (
        <div className="container  my-4 bg-light shadow-sm">
            {isPending && <div>
                <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
            </div>}
            {error && <div className='alert alert-danger text-dark'>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button className='btn btn-outline-danger my-2' onClick={handleBlog}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
