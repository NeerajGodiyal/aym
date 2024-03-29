import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {}

function Header({}: Props) {
  return (
    <header className='bottom-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{ 
             x: -500,
             opacity: 0,
             scale: 0.5,
             }}
             
             whileInView={{
                x: 0,
                opacity: 1,
              }}
             transition = {{
                duration: 1.5,
             }}
              animate = {{
                x : 0,
                opacity : 1,
                scale : 1,
             }}
             viewport={{ once: false }}
        
            className='flex flex-row items-center' >
            <SocialIcon 
            url='https://github.com/NeerajGodiyal'
            fgColor='orange'
            bgColor='transparent'
            
            />
            <SocialIcon 
            url='https://www.facebook.com/naj.godiyal.3/'
            fgColor='cyan'
            bgColor='transparent'
            
            />
            <SocialIcon 
            url='https://www.youtube.com/channel/UCrmXM_ALRVu8nBGFSEVD-nA'
            fgColor='red'
            bgColor='transparent'
            
            />
            <SocialIcon 
            url='https://www.instagram.com/neerajgodiyal250/'
            fgColor='pink'
            bgColor='transparent'
            
            />

        </motion.div>
        
    </header>
  )
}

export default Header