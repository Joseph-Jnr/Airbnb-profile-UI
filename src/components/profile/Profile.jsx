import React from 'react'
import './Profile.css'
import profileImage from '../../assets/jojo2.jpg'
import { MdVerifiedUser, MdOutlineFastfood } from 'react-icons/md'
import { GiMedal } from 'react-icons/gi'
import { BsBriefcase, BsStars } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

const Profile = ({ open, handleClose }) => {
  return (
    <>
      {open && (
        <>
          <div className='backdrop' onClick={handleClose}></div>
          <div className='profile-modal'>
            <div className='container'>
              <div className='bar-container py-2 flex justify-center'>
                <div className='bar'></div>
              </div>
              {/* Profile Card grid grid-cols-2 gap-5  */}
              <div className='profile-modal-card shadow-md shadow-gray-300 flex justify-between items-center'>
                <div
                  className='pc-img w-full py-[35px] bg-slate-400 text-center flex justify-center flex-col items-center'
                  data-aos='flip-left'
                >
                  <div className='img-area'>
                    <div className='pc-img-wrap'>
                      <img src={profileImage} alt='user' />
                    </div>
                    <div className='tag'>
                      <MdVerifiedUser />
                    </div>
                  </div>
                  <h1 className='font-bold'>Joseph</h1>
                  <p className='text-xs font-bold flex items-center'>
                    <span className='mr-1'>
                      <GiMedal />
                    </span>
                    Superhost
                  </p>
                </div>
                <div
                  className='pc-detail w-full pt-[18px] pb-[30px] bg-slate-400'
                  data-aos='flip-right'
                >
                  <div className='pc-detail-desc pl-4'>
                    <h1>17</h1>
                    <p>Reviews</p>
                  </div>
                  <div className='pc-detail-desc pl-4'>
                    <h1>4.89</h1>
                    <p>Rating</p>
                  </div>
                  <div className='pc-detail-desc pl-4'>
                    <h1>2</h1>
                    <p>Years Hosting</p>
                  </div>
                </div>
              </div>

              {/* Extra detail */}
              <div className='extra-detail mt-7'>
                <div className='single-detail flex items-center text-gray-600'>
                  <div className='icon'>
                    <BsBriefcase />
                  </div>
                  <div className='desc'>My Work: Frontend Developer</div>
                </div>
                <div className='single-detail flex items-center text-gray-600'>
                  <div className='icon'>
                    <BsStars />
                  </div>
                  <div className='desc'>
                    What makes my home unique: It's fully automated
                  </div>
                </div>
                <div className='single-detail flex items-center text-gray-600'>
                  <div className='icon'>
                    <AiOutlineHeart />
                  </div>
                  <div className='desc'>I'm obsessed with: Technology</div>
                </div>
                <div className='single-detail flex items-center text-gray-600'>
                  <div className='icon'>
                    <MdOutlineFastfood />
                  </div>
                  <div className='desc'>
                    What's for breakfast: Oats and Fresh Fruit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
