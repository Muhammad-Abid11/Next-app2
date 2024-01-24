import React from 'react'
import Link from 'next/link'
import { Header, Footer } from '@/components'//yhn @ ES-Lint ki wajah sy import me ../ ko remove kr rha hai
export default function Blog() {
    return (
        <div>
            <Header />
            <div style={{ background: "grey" }}>

                <h1>blog-Page</h1>
                <Link href={'/child2'}>
                    <h1>Go to child2-page</h1>
                </Link>
                <Link href={'/'}>
                    <h1>Go to home-page</h1>
                </Link>
            </div>
            <Footer />
        </div>
    )
}


