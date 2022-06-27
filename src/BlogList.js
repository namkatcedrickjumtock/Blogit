import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;


  return (
    <div className="container my-3 w-50 mx-auto">
      {blogs.map(blog => (
        <div className=" rounded mb-4" key={blog.id} >
          <Link to={`/BlogDetails/${blog.id}`}>
            <h2 className="text-dark fw-bold">{blog.title}</h2>
            <p className="text-secondary">{blog.blogBody}</p>
            <div className="row">
              <div className="col-lg-6">
                <small>Written by {blog.author}</small>
              </div>
              <div className="col-lg-6">
                <small className="text-muted">uploaded 3 mins ago</small>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;