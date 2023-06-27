import React from 'react'
import Link from "next/link"

const Footer = () => {
  const footerLinks = [
    {title:'About', path:'/about'},
    {title:'Support', path:'/Support'},
    {title:'Contact Us', path:'/Contact Us'},
  ]
  return (
    <footer className='flex justify-between items-center ml-[300px] w-[calc(100% - 310px)] bottom-0 mt-2 pb-2 pr-5'>
      <div>
        <p className='text-[#6b6d65]'>2018 © Influence - Designed and Developed byJituchuahan</p>
      </div>
      <div>
        <ul className='flex gap-5 text-sm text-[#6b6d65]'>
          {
            footerLinks.map((link, index) => (
              <li key={index}><Link href={link.path}>{link.title}</Link></li>
            ))
          }
        </ul>
      </div>
    </footer>
  )
}

export default Footer