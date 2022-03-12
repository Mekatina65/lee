

import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
            <h1>this is home page  or index.js</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, reprehenderit impedit, 
      dolor molestias rerum deleniti pariatur consectetur accusantium nemo nihil laudantium cupiditate soluta exercitationem <br />
       quasi magnam, incidunt porro? Atque, tenetur?</p>
       <Link href="/ninjas"><a>see ninjas list</a></Link> 
       <Footer />
    </div>
  )
}
