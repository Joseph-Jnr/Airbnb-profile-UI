import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './Property.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

const Property = ({
  title,
  description,
  owner,
  duration,
  price,
  rating,
  propertyImg,
  profileImg,
  showProfile,
}) => {
  return (
    <>
      <div className='property-wrap mb-8'>
        <div className='property-image-area'>
          <div className='favorite'>
            <AiOutlineHeart />
          </div>
          <img src={propertyImg} alt='house' />
          <div className='card-sub'></div>
          <div
            className='profile-card flex items-center justify-center'
            onClick={showProfile}
          >
            <div className='profile-card-image'>
              <img src={profileImg} alt='fine boy' />
            </div>
          </div>
        </div>
        <div className='property-details'>
          <div className='property-name flex justify-between items-center'>
            <h5 className='font-bold text-sm'>{title}</h5>
            <div className='rating flex items-center'>
              <AiFillStar />
              <span className='ml-1 text-sm'>{rating}</span>
            </div>
          </div>
          <div className='property-desc text-slate-500 text-sm mt-2'>
            <div className='flex items-center'>
              <p>Stay with {owner}</p>
              <BsDot size={20} />
              <p>{description}</p>
            </div>
            <div className='date mt-1'>
              <p>{duration}</p>
            </div>
            <div className='price mt-2'>
              <p>
                <span className='text-black font-bold'>${price}</span> night
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Property
