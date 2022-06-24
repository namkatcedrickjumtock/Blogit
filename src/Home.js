import BlogList from "./BlogList";
import useFetch from "./api/fetchData";


const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="container">
      {error && <div className="alert alert-danger text-dark py-4 my-3">{error}</div>}
      {isPending && <div>
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;