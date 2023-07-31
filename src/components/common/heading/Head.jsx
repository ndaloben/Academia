import React from 'react'
import {  FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Head = () => {
  return (
    <section className="head">
        <div className="container flexSB">
            <div className="logo">
                <h1 className='font-bold text-[35px]'>ACADEMIA</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>

            <div className="social">
                <FaFacebookF className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
            </div>
        </div>
    </section>
  )
}

export default Head