'use client'

import { UserNav } from './navigation'
import React from 'react'
import Image from 'next/image'

export default function Header() { 
    const navLinks = [
        {
            name: "Teste 01",
            href: "test-1"
        },
        {
            name: "Teste 02",
            href: "test-2"
        }
    ];

    return (
        <React.Fragment>
            <nav className='px-[64px] flex items-center bg-[#101822] justify-between'>
                <Image className='w-auto h-auto border-r border-l-white' width={70} height={70} src="/logo-text.png" alt="Spike Side" />
                <Image className='w-auto h-auto mx-[18px]' src="/logo-icon.png" width={70} height={70} alt="Spike Side" />
                <UserNav navLinks={navLinks} />
                <a className='bg-[#ff4655] text-white py-4 px-6'>Monte seu card!</a>
            </nav>
        </React.Fragment>   
    )
}