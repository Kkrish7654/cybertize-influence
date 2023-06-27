import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='px-4 z-50 py-3 fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between '>
        <div>
            <Image width={150} height={150} src="/image/influenece.png" alt="logo" />
        </div>
        <div className='flex gap-2 items-center'>
            <form action="#">
                <input className='border-[1px] p-2' type="search" name="search" id="search" placeholder='Search...' />
            </form>
            <div className='flex gap-4 items-center text-2xl'>
              {/* add icons */}
              <i><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H8V8H4V4Z" fill="currentColor"></path><path d="M4 10H8V14H4V10Z" fill="currentColor"></path><path d="M8 16H4V20H8V16Z" fill="currentColor"></path><path d="M10 4H14V8H10V4Z" fill="currentColor"></path><path d="M14 10H10V14H14V10Z" fill="currentColor"></path><path d="M10 16H14V20H10V16Z" fill="currentColor"></path><path d="M20 4H16V8H20V4Z" fill="currentColor"></path><path d="M16 10H20V14H16V10Z" fill="currentColor"></path><path d="M20 16H16V20H20V16Z" fill="currentColor"></path></svg></i>
              <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z"></path></svg></i>
              <i><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;