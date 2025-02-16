import BlogContent from "./singleBlog/BlogContent"
import BlogFigure from "./singleBlog/BlogFigure"
import BlogMeta from "./singleBlog/BlogMeta"
import SingleBlogTitle from "./singleBlog/SingleBlogTitle"

function SingleBlog() {
  return (
    <>
        <article>
            <BlogFigure />
            <div className="blog-wrapper">
              <BlogMeta />
              <SingleBlogTitle />
              <BlogContent />
            </div>
          </article>
    </>
  )
}

export default SingleBlog