import Link from 'next/link'
import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <SnowCanvas />
      <h1 className='text-1'>Select Our Service</h1>
      <div className='container'>
        
        <div className='box-1'>
          <div>
         <Link href="/home" className='link-1'><h2>Snow  Removal</h2></Link>
         </div>
         </div>
        <div   className="box-2">
                 <div>
         <Link href="https://gonano.com/en" className='link-1'><h2>Go  Nano</h2></Link>
         </div>
         </div>
      </div>

      </>
  )
}
