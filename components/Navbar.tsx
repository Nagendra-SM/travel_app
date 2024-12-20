import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <nav className='flexBetween max-contrainer padding-container relative z-30 py-5'>
            <Link href='/'>
                <Image src={"/hilink-logo.svg"} alt='logo' width={74} height={29} className='object-contain' />

            </Link>
            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter  cursor-pointer pb-1.5 transition-all
                        hover:font-bold'>{link.label}</Link>))}
            </ul>
            <div className='lg:flexCenter hidden'>
                <Button
                    type="button" title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green" />
            </div>
            <Image src="/menu.svg" alt='menu' width={32} height={32} className='inline-block lg:hidden cursor-pointer' />
        </nav>
    )
}

export default Navbar
