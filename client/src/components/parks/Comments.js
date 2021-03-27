import React from 'react-router-dom'

const Comments = ({ text, rating, createdAt }) => {

  const date = new Date(createdAt)
  const formattedTime = date.toUTCString()
  
  return (
    <div className="box">
      <h3>Comment: {text}</h3>
      <h3>Rating: {rating}</h3>
      <h5>Created at: {formattedTime}</h5>
    </div>

  )

}

export default Comments

{/* the below will need to be added into the parks info page and import this component there)
  <div className="box">
{ comments.map(comment => (
  <Comments key={comment._id} {...comment}/>
  
))}
</div> */}