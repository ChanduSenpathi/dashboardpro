import React, { useContext } from 'react'
import './Sidebar.css'
import { FaBell, FaEnvelope, FaHome } from 'react-icons/fa'
import { FaArrowRightFromBracket, FaChartSimple, FaClipboardCheck, FaGear, FaSquareCheck, FaWallet } from 'react-icons/fa6'
import { UserContext } from '../Provider/SidebarProvider';


export default function Sidebar() {
  const {show} = useContext(UserContext);
  
  const openSidebar = {
    left : show ? '-100px' : '0%',
    transition: 'left 1s'
  }
  return (
        <aside style={openSidebar} className='d-flex flex-column justify-content-start navbar_container additional_navbar_container position-fixed left-0 top-25 py-3 h-100'>
            <div className='d-flex flex-column gap-5'>
              <button type="button" className='sidebar_icons active'>
                <FaHome />
              </button>
              <button type="button" className='sidebar_icons'>
                <FaChartSimple />
              </button>
              <button type="button" className='sidebar_icons'>
                <FaClipboardCheck />
              </button>
              <button type="button" className='sidebar_icons'>
                <FaWallet />
              </button>
              <button type="button" className='sidebar_icons'>
                <FaSquareCheck />
              </button>
              <div className='d-md-none d-flex flex-column justify-content-between gap-5 align-items-center gap-3'>
                    <button type="button" className='sidebar_icons'>
                      <FaEnvelope />
                    </button>
                    <button type="button" className='sidebar_icons'>
                      <FaGear />
                    </button>
                    <div className='additional_bell_icon position-relative top-0 left-0 text-white'>
                        <button type="button" className='sidebar_icons'>
                          <FaBell />
                        </button>
                    </div>
                </div>
            </div>
            <button type='button' className='sidebar_icons additional_btn_style d-sm-block d-none'>
              <FaArrowRightFromBracket />
            </button>
        </aside>
  )
}
