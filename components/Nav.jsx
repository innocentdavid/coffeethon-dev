import Link from 'next/link'
import React, { useState } from 'react'

export default function Nav() {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (<>
        {showMobileNav && <div className="fixed z-50">
            <div className="fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-sm"
                onClick={() => setShowMobileNav(!showMobileNav)}></div>
            <div className="fixed top-0 right-0 w-[300px] h-screen bg-white/75 py-20 px-12">

                <div className="absolute top-8 left-10 font-Dubai-Bold py-1 px-3 bg-[#E7004C] text-white cursor-pointer"
                    onClick={() => setShowMobileNav(!showMobileNav)}>X</div>

                <div className="flex flex-col gap-8 font-Dubai-Bold text-xl" dir='rtl'>
                    <Link href="#FAQ"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>الاسئلة الشائعة</Link>
                    <Link href="#formation_of_team"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>تشكيل الفرق </Link>
                    <Link href="#register"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>التسجيل</Link>
                    <Link href="#award"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>الجوائز</Link>
                    <Link href="#workshop"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>ورش العمل</Link>
                    <Link href="#course"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>سير الهاكاثون</Link>
                    <Link href="#about"
                        className='hover:bg-[#E7004C] hover:text-white' dir='rtl'
                        onClick={() => setShowMobileNav(!showMobileNav)}>نبذه عن الهاكاثون</Link>

                    <div className="flex flex-col gap-5">
                        {isLoggedIn ? <div className='flex items-center gap-5'>
                            {
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src="/images/user.svg" alt="" className='cursor-pointer' onClick={() => setIsLoggedIn(!isLoggedIn)} />}
                            {
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src="/images/arrow-down.svg" alt="" className='cursor-pointer' onClick={() => setIsLoggedIn(!isLoggedIn)} />}
                        </div> : <>
                            <div className="w-[160px] h-[50px] cursor-pointer grid place-items-center text-lg rounded-[29px] bg-white text-[#243746]" onClick={() => setIsLoggedIn(!isLoggedIn)}>تسجيل الدخول</div>
                            <div className="w-[160px] h-[50px] cursor-pointer grid place-items-center text-lg rounded-[29px] bg-[#E7004C] text-white">تسجيل جديد</div>
                        </>}
                    </div>
                </div>
            </div>
        </div>}

        <div className="flex justify-between gap-10 items-center text-white px-12">
            <div className="flex gap-5">
                <div className="hidden lg:flex gap-5">
                    {isLoggedIn ? <>
                        {
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/user.svg" alt="" className='cursor-pointer' onClick={() => setIsLoggedIn(!isLoggedIn)} />}
                        {
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/arrow-down.svg" alt="" className='cursor-pointer' onClick={() => setIsLoggedIn(!isLoggedIn)} />}
                    </> : <>
                        <div className="w-[160px] h-[50px] cursor-pointer grid place-items-center text-lg rounded-[29px] bg-white text-[#243746]" onClick={() => setIsLoggedIn(!isLoggedIn)}>تسجيل الدخول</div>
                        <div className="w-[160px] h-[50px] cursor-pointer grid place-items-center text-lg rounded-[29px] bg-[#E7004C] text-white">تسجيل جديد</div>
                    </>}
                </div>

                <div className="lg:hidden">
                    {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src="/images/Icon feather-menu.png" alt="" onClick={() => setShowMobileNav(!showMobileNav)} />}
                </div>
            </div>
            <div className="flex justify-end items-center gap-5">
                <div className="hidden lg:flex gap-6 w-full text-lg">
                    <Link href="#FAQ" className="">الاسئلة الشائعة</Link>
                    <Link href="#formation_of_team" className="">تشكيل الفرق </Link>
                    <Link href="#register" className="">التسجيل</Link>
                    <Link href="#award" className="">الجوائز</Link>
                    <Link href="#workshop" className="">ورش العمل</Link>
                    <Link href="#course" className="">سير الهاكاثون</Link>
                    <Link href="#about" className="">نبذه عن الهاكاثون</Link>
                </div>
                <Link href="/" className="">
                    {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src="/images/logo01.png" alt="" className='w-[50px] md:w-[60px] lg:w-[90px]' />}
                </Link>
            </div>
        </div>
    </>)
}
