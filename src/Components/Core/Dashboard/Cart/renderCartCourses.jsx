import React from 'react'
import { useSelector } from 'react-redux'
import ReactStars from 'react-stars';
import { FaRegStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const renderCartCourses = () => {
    const {cart} = useSelector((state) => state.cart);

  return (
<div>
    {
        cart.map((course, index) => (
            <div>
                <div>
                    <img src={course?.thumbnail} />
                    <div>
                        <p>{course?.courseName}</p>
                        <p>{course?.category?.name}</p>
                        <div>
                            <span>4.8</span>
                            <ReactStars
                                count={5}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emtpyIcon={<FaRegStar />}
                                fullIcon={<FaRegStar />}
                            /> 

                            <span>{course?.ratingAndReviews?.length} Ratings</span>

                        </div>
                    </div>
                </div>

                <div>
                    <button
                    onClick={() => dispatch(removeFromCart(course._id))}
                    >
                        <MdDeleteForever/>
                        <span>Remove</span>
                    </button>

                    <p>Rs {course?.price} </p>
                </div>
            </div>
        ))
    }
      
    </div>
  )
}

export default renderCartCourses