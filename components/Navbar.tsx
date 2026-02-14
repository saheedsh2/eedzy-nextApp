import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
            <Image src="/eedzylogo.PNG" alt="eedzy" width={120} height={60}/>
        </div>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
    </div>
  )
}

export default Navbar