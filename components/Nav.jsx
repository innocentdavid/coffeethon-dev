import React from 'react'

export default function Nav() {
    return (
        <div className="flex justify-between items-center text-white px-5 lg:px-[130px] text-xs">
            <div className="lg:hidden">
                <img src="/images/Icon feather-menu.png" alt="" />
            </div>
            <div className="hidden lg:flex justify-between">
                <div className="">الاسئلة الشائعة</div>
                <div className="">تشكيل الفرق </div>
                <div className="">التسجيل</div>
                <div className="">الجوائز</div>
                <div className="">ورش العمل</div>
                <div className="">سير الهاكاثون</div>
                <div className="">نبذه عن الهاكاثون</div>
            </div>
            <div className="">
                <img src="/images/logo01.png" alt="" width="40px" />
            </div>
        </div>
    )
}
