import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/BlogDetails/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.blogBody}</p>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;