import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview text-decoration-none" key={blog.id} >
         <Link to={`/BlogDetails/${blog.id}`}> <h2 className="text-decoration-none">{blog.title}</h2>
         <p>Written by {blog.author}</p>
         </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;