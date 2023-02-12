import Link from 'next/link'
import React from 'react'
import classes from '@/styles/Sosmed.module.css'



function SosmedBtn() {
  return (
    <div className='d-flex gap-2'>
        <div className={classes.icons}>
            <Link  href="" ><i className="ri-at-fill " > </i></Link>
        </div >
        <div className={classes.icons}>
            <Link  href="">
                <i className="ri-linkedin-fill"> </i>
            </Link>
        </div>
        <div className={classes.icons}>
            <Link  href="https://github.com/triramdhani" >
                <i className="ri-github-fill"> </i>
            </Link>
        </div>
        <div className={classes.icons}>
            <Link  href="https://wa.me/085722456676" >
                <i className="ri-whatsapp-fill"> </i>
            </Link>
        </div>
    </div>
  )
}

export default SosmedBtn
