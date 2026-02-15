"use client";
import Image from 'next/image'
import React from 'react'
import { UserButton, useClerk } from "@clerk/nextjs";



const Navbar = () => {
     const { signOut } = useClerk();
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-md'>
        <div className='flex gap-10 items-center'>
            <Image src="/eedzylogo.PNG" alt="eedzy" width={120} height={60}/>
            
        </div>
        <div className='hidden md:flex gap-6'>
        <h2 className='hover:bg-purple-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
        <h2 className='hover:bg-purple-100 p-2 rounded-md cursor-pointer transition-all'>About</h2>
        <h2 className='hover:bg-purple-100 p-2 rounded-md cursor-pointer transition-all'>Contact</h2>
        </div>
      
          <UserButton afterSignOut={() => signOut({ redirectUrl: "/" })} />

    </div>
  
  )
}

export default Navbar