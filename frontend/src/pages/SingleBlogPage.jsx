import SingleBlog from "../components/blogs/SingleBlog";
import Review from "../components/reviews/Review";

function SingleBlogPage() {
  return (
    <>
      <section className="single-blog">
        <div className="container">
          <SingleBlog />
          <Review />
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
