import ReviewForm from "./ReviewForm"
import UserComment from "./UserComment"

function Review() {
  return (
    <>
        <div className="tab-panel-reviews">
            <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
            <UserComment />
            {/* comment form start */}
            <ReviewForm />
            {/* comment form end */}
          </div>
    </>
  )
}

export default Review