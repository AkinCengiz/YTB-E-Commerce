import BlogList from "../components/blogs/BlogList";
import BlogTitle from "../components/blogs/BlogTitle";

const BlogsPage = () => {
  return (
    <>
      <section className="blogs blog-page">
        <div className="container">
          <BlogTitle />
          <BlogList />
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
