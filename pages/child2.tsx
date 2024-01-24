import React from 'react'
import Link from 'next/link'
import { Header, Footer } from '@/components'//yhn @ ES-Lint ki wajah sy import me ../ ko remove kr rha hai

export default function Child2() {
    return (
        <div>
            <Header />

            <div style={{ background: "pink" }}>
                <h1>child 2</h1>
                <Link href={'/blog'}>
                    <h1>Go to blog-page</h1>
                </Link>
                <Link href={'/'}>
                    <h1>Go to home-page</h1>
                </Link>
            </div>
            <Footer />
        </div>
    )
}
