import React from 'react'
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa";

function Port() {
    return (
        <section className='section-port'>
            <div className="port">
                <div className='circle'></div>
                <h1 className="title">Star</h1>
                <h1 className="title">Wars</h1>
                <p className="subtitle">Api in <span>Next.js</span></p>
            </div>
            <div className="scroll">
                <Link href={"#section-sec"} className='Link cursor-pointer'><FaChevronDown /></Link>
            </div>
        </section>
    )
}

export default Port