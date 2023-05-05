import { useState } from 'react'
import './App.css'
import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine } from 'react-icons/ri'
import { BsChatSquare, BsDot, BsPinMap } from 'react-icons/bs'
import {
  GiSydneyOperaHouse,
  GiSpookyHouse,
  GiMushroomHouse,
} from 'react-icons/gi'
import { BiHomeAlt } from 'react-icons/bi'
import { MdOutlineHouseSiding, MdOutlineMapsHomeWork } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import Property from './components/property/Property'
import properties from './data'
import Profile from './components/profile/Profile'

function App() {
  const [showProfilePopup, setShowProfilePopup] = useState(false)

  const showProfile = () => {
    setShowProfilePopup(true)
  }

  const hideProfile = () => {
    setShowProfilePopup(false)
  }

  return (
    <>
      <div className='top-area pt-6 shadow'>
        <div className='container'>
          <div className='search-bar shadow-lg px-4 py-2 rounded-full'>
            <div className='flex justify-between items-center'>
              <div className='search-text-area flex items-center'>
                <div className='search-icon'>
                  <FiSearch />
                </div>
                <div className='search-text ml-3'>
                  <h6 className='font-bold text-[13.5px]'>Where to?</h6>
                  <div className='flex items-center text-[13px] justify-between text-slate-600'>
                    <span>Anywhere</span>
                    <BsDot size={20} />
                    <span>Any week</span>
                    <BsDot size={20} />
                    <span>Add Guests</span>
                  </div>
                </div>
              </div>
              <div className='filter-icon'>
                <RiEqualizerLine />
              </div>
            </div>
          </div>

          <ul className='filter-bar mt-3 flex'>
            <li className='single-item p-2 px-3 active'>
              <div className='item-icon flex justify-center'>
                <BiHomeAlt />
              </div>
              <div className='item-text'>
                <p className='text-xs'>Cabins</p>
              </div>
            </li>
            <li className='single-item p-2 px-3'>
              <div className='item-icon flex justify-center'>
                <GiSydneyOperaHouse />
              </div>
              <div className='item-text'>
                <p className='text-xs'>Lakefront</p>
              </div>
            </li>
            <li className='single-item p-2 px-3'>
              <div className='item-icon flex justify-center'>
                <MdOutlineHouseSiding />
              </div>
              <div className='item-text'>
                <p className='text-xs'>A-frames</p>
              </div>
            </li>
            <li className='single-item p-2 px-3'>
              <div className='item-icon flex justify-center'>
                <MdOutlineMapsHomeWork />
              </div>
              <div className='item-text'>
                <p className='text-xs'>Tiny homes</p>
              </div>
            </li>
            <li className='single-item p-2 px-3'>
              <div className='item-icon flex justify-center'>
                <GiSpookyHouse />
              </div>
              <div className='item-text'>
                <p className='text-xs'>National park</p>
              </div>
            </li>
            <li className='single-item p-2 px-3'>
              <div className='item-icon flex justify-center'>
                <GiMushroomHouse />
              </div>
              <div className='item-text'>
                <p className='text-xs'>Huts</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='property-section pt-5 pb-28'>
        <div className='container'>
          {properties.map((property, index) => (
            <Property
              key={index}
              title={property.title}
              description={property.description}
              owner={property.owner}
              duration={property.duration}
              price={property.price}
              rating={property.rating}
              propertyImg={property.propertyImg}
              profileImg={property.profileImg}
              showProfile={showProfile}
            />
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className='bottom-nav pt-2 pb-5'>
        <div className='container'>
          <ul className='flex justify-between text-xs text-slate-400'>
            <li className='single-nav-link active'>
              <div className='icon'>
                <FiSearch />
              </div>
              <div className='text'>Explore</div>
            </li>
            <li className='single-nav-link'>
              <div className='icon'>
                <AiOutlineHeart />
              </div>
              <div className='text'>Wishlists</div>
            </li>
            <li className='single-nav-link'>
              <div className='icon'>
                <BsPinMap />
              </div>
              <div className='text'>Trips</div>
            </li>
            <li className='single-nav-link'>
              <div className='icon'>
                <BsChatSquare />
              </div>
              <div className='text'>Inbox</div>
            </li>
            <li className='single-nav-link'>
              <div className='icon'>
                <FaRegUserCircle />
              </div>
              <div className='text'>Profile</div>
            </li>
          </ul>
        </div>
      </div>
      {/* <Profile /> */}

      {showProfilePopup && (
        <Profile handleClose={hideProfile} open={showProfilePopup} />
      )}
    </>
  )
}

export default App
