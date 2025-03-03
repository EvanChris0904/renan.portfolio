import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Frontend Services</p>
                        <p className='services-desc'>Building high-performance web apps with React, Next.js, Tailwind CSS, ShadCN UI, and headless CMS, optimized for speed and seamless UX.</p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Blockchain Services</p>
                        <p className='services-desc'>Developing secure smart contracts, DApps, DeFi platforms, NFT marketplaces, tokens, and blockchain-integrated payment solutions.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
