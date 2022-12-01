import Link from "next/link";
import { useState } from "react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <header className="py-[50px]" style={{ backgroundImage: 'url("images/headerBG.png")' }}>
        <Nav />
        <div className="flex justify-between items-center gap-5 lg:gap-32 py-24">
          <div className="">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/01.png" alt="" className="rotate-180" />}
          </div>
          <div className="text-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/LOGO 2.png" alt="" />}
            </div>
          </div>
          <div className="">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/01.png" alt="" />}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white mb-10">الوقت المتبقي</p>
          <div className="flex gap-5">
            <div className="w-[54px] h-[76px] border border-white bg-[#E7004C]/50 text-white font-bold rounded-[12px] grid place-items-center text-xl">1</div>
            <div className="w-[54px] h-[76px] border border-white bg-[#E7004C]/50 text-white font-bold rounded-[12px] grid place-items-center text-xl">22</div>
            <div className="w-[54px] h-[76px] border border-white bg-[#E7004C]/50 text-white font-bold rounded-[12px] grid place-items-center text-xl">45</div>
          </div>
        </div>
      </header>

      <section className="bg-white text-[#243746] py-20 lg:py-32 px-[5%] md:px-[10%] lg:px-[20%]">
        <div className="">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/sec2bar.png" alt="" className="w-full" />}
        </div>
        <div className="">
          <div className="text-center py-3 bg-[#243746] text-white">هاكاثون القهوة </div>
        </div>

        <p className="text-center mt-7">
          تحدي تقني يقام لمدة يومين في الرياض وفي إطار القهوة للمساهمة في مبادرة عام القهوة السعودية 2022، وللخروج بمشاريع من المشاركين تخدم هذا المجال، وليكون أيضا لقاء للمهتمين في مجال القهوة ومجال المسابقات والفعاليات التقنية من الرياض وباقي مدن المملكة العربية السعودية.
        </p>

        <div className="flex justify-center gap-10 md:gap-32 my-10">
          <div className="flex flex-col items-center gap-3">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/calender.svg" alt="" />}
            </div>
            <p className="text-center">28 - 29 ديسمبر</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/location.svg" alt="" />}
            </div>
            <p className="text-center">الرياض، واجهة الرياض</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="#" className="py-3 px-10 rounded-full bg-[#E7004C] text-white">التسجيل</Link>
        </div>
      </section>

      <section className="py-20 lg:py-[150px] bg-[#1D3145] text-white">
        <div className="flex justify-end">
          <div className="flex gap-5 items-center">
            <span>سير الهاكاثون</span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar2.png" alt="" className="h-[30px]" />}
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-20 px-8 lg:px-20">
          <div className="">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/section3Img.png" alt="" />}
          </div>
        </div>

        <div className="flex justify-end lg:-mt-[50px] mb-24">
          <div className="flex gap-5 items-center">
            <span>مسارات الهاكاثون</span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar2.png" alt="" className="h-[30px]" />}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-5 px-10">
          <Card1 key={11} />
          <Card1 key={22} />
          <Card1 key={33} />
          <Card1 key={44} />
        </div>
      </section>

      <section className="py-[90px] bg-white text-[#243746]">
        <div className="flex justify-end">
          <div className="flex gap-5 items-center">
            <span className="font-bold text-xl">ورش العمل </span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar2.png" alt="" className="h-[30px]" />}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-10 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32 my-20">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>

        <div className="flex justify-end">
          <div className="flex gap-5 items-center">
            <span className="font-bold text-xl">الجوائز</span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar2.png" alt="" className="h-[30px]" />}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-0 items-center justify-between px-10 md:px-28 lg:px-[350px] mt-28 text-[#243746]">
          <div className="flex flex-col justify-center items-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/sec4num3.svg" alt="" width="70px" />}
            </div>
            <div className="flex flex-col items-center mt-3 gap-1">
              <h1 className="font-[800] text-xl">40.000</h1>
              <p className="">ريال سعودي</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/sec4num2.svg" alt="" width="70px" />}
            </div>
            <div className="flex flex-col items-center mt-3 gap-1">
              <h1 className="font-[800] text-xl">50.000</h1>
              <p className="">ريال سعودي</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/sec4num1.svg" alt="" width="70px" />}
            </div>
            <div className="flex flex-col items-center mt-3 gap-1">
              <h1 className="font-[800] text-xl">80.000</h1>
              <p className="">ريال سعودي</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1D3145] text-white py-[24px] px-5 md:px-[10%] lg:px-[25%] flex justify-center overflow-hidden">
        <div className="absolute top-0 left-0 hidden md:block">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/sect5LBar.png" alt="" className="w-[90px]" />}
        </div>
        <div className="my-20">
          <div className="">
            <div className="py-5 text-center w-full bg-white text-[#E7004C] text-2xl font-bold">التسجيل</div>
            <div className="font-bold text-xl my-4" dir="rtl">شروط المشاركة</div>
            <ul className="flex flex-col gap-4" dir="rtl">
              <li>أن يكون عمر المشاركين فوق 18 عاما.</li>
              <li>أن تكون المشاركة كفريق لا يقل عدد أعضاؤه عن 3 ولا يزيد عن 5.</li>
              <li>أن يكون الفريق حاضرا في مقر الهاكاثون وقت إقامة الهاكاثون (28-29 ديسمبر).</li>
              <li>أن تكون فكرة المشاركة في قطاع القهوة ولا تخرج عنها.</li>
            </ul>
            <div className="flex justify-center mt-20">
              <div className="py-3 px-6 bg-[#E7004C] rounded-[38px] text-white">التسجيل</div>
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[200px]">
            <div className="py-5 text-center w-full bg-white text-[#E7004C] text-2xl font-bold">تشكيل الفرق</div>
            <p className="mt-4" dir="rtl">بعد تسجيل الأفراد في المنصة وتعبئة الملف الشخصي، يتم تسجيل الفريق وفي حال كنت تبحث عن فريق فبامكانك الضغط على زر تشكيل الفرق وطلب الانضمام إلى أحد الفرق المسجلة أو إنشاء فريق جديد.</p>
            <div className="font-bold text-xl my-4" dir="rtl">خطوات التسجيل</div>
            <div className="flex justify-between items-center">
              <div className="hidden md:block">
                {/* {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/images/sect5box.png" alt="" width="150px" />} */}
              </div>
              <ul className="flex flex-col gap-4 items-end">
                <li>
                  <span className="mr-1" dir="rtl">التسجيل في المنصة بالضغط على زر التسجيل</span> - 1
                </li>
                <li>
                  <span className="mr-1" dir="rtl">تعبئة المعلومات الأساسية في الملف الشخصي</span> - 2
                </li>
                <li>
                  <span className="mr-1" dir="rtl">الضغط على خيار تشكيل الفرق</span> - 3
                </li>
                <li>
                  <span className="mr-1" dir="rtl"> إنشاء فريق جديد أو طلب انضمام إلى فريق متواجد</span> - 4
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-20">
              <div className="py-3 px-6 bg-[#E7004C] rounded-[38px] text-white">تشكيل الفرق</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] px-5 pl-0 lg:pl-5 lg:px-0 bg-white text-[#243746] flex gap-5">
        <div className="flex-[6] lg:flex-[3]" dir="rtl">
          <h1 className="font-bold text-2xl mb-8">الاسئلة الشائعة</h1>
          <ul className="flex flex-col gap-4">
            <Accordion
              key={1}
              question={'هل يمكنني المشاركة كفرد؟'}
              answer={'المشاركة في الهاكاثون تلزم وجود فريق وبامكانك البحث عن فريق في خيار تشكيل الفرق.'} />
            <Accordion
              key={2}
              question={'لا يوجد لدي فريق؟'}
              answer={'بامكانك البحث عن فريق في خيار تشكيل الفرق.'} />
            <Accordion
              key={3}
              question={'متى سيقام الهاكاثون؟'}
              answer={'في يومي ٤ و ٥ جمادى الآخرة.'} />
            <Accordion
              key={4}
              question={'أين سيقام الهاكاثون؟'}
              answer={'في واجهة الرياض.'} />
            <Accordion
              key={5}
              question={'أين ستقام ورش العمل؟'}
              answer={'ورش العمل ستقام عن بعد عبر منصة Zoom.'} />
            <Accordion
              key={6}
              question={'هل حضور ورش العمل إلزامي؟'}
              answer={'لا، ولكن تفيدك ورش العمل في الحصول على الكثير من المعلومات المتعلقة بالقهوة والهاكاثون.'} />
            <Accordion
              key={7}
              question={'كيف ستسلم الجوائز؟'}
              answer={'سيكون لهاكاثون القهوة حصة من المشاريع الفائزة وستوزع الجوائز على دفعات لدعم استمرارية المشروع.'} />
            <Accordion
              key={8}
              question={'ما الفرص المتاحة بعد الهاكاثون؟'}
              answer={'سيتم ربط الفائزين بحاضنات ومسرعات أعمال لتدريبهم ودعم مشاريعهم وبامكانك كل المشاركين عرض مشاريعهم أمام المستثمرين المتواجدين في الهاكاثون.'} />
            <Accordion
              key={1}
              question={'ما الفوائد المكتسبة من الهاكاثون؟'}
              answer={'سيحصل كل المشاركين على شهادة مشاركة وفرصة زيادة شبكة العلاقات وتعزيز الخبرات شخصية والسير الذاتية.'} />
          </ul>
        </div>
        <div className="flex-1 hidden md:flex justify-end items-start">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/s3bar1.svg" alt="" className="h-[30px]" />}
        </div>
      </section>


      <section className="py-10 md:py-36 px-3 md:px-20 lgpx-32 bg-center" style={{ backgroundImage: 'url("images/Group 490.png")' }}>
        <form action="" className="mx-auto bg-white rounded-[10px] px-[10px] py-7 text-[#1D3145] flex flex-col gap-3 w-full lg:w-[460px]" onSubmit={(e) => { e.preventDefault() }}>
          <h1 className="text-center text-2xl font-bold mb-5">تواصل معنا</h1>
          <input type="text" className="bg-[#9EA1A1]/50 text-white border-none outline-none rounded-[8px] px-5 h-[40px] w-full" placeholder="الاسم" dir="rtl" />
          <input type="text" className="bg-[#9EA1A1]/50 text-white border-none outline-none rounded-[8px] px-5 h-[40px] w-full" placeholder="البريد الالكتروني" dir="rtl" />
          <textarea type="text" className="resize-none bg-[#9EA1A1]/50 text-white border-none outline-none rounded-[8px] px-5 py-3 h-[90px] w-full" placeholder="رسالتك…." dir="rtl"></textarea>

          <div className="flex justify-center w-full mt-5">
            <button className="py-3 px-10 rounded-full bg-[#E7004C] text-white">إرسال</button>
          </div>
        </form>
      </section>


      <section className="bg-white flex flex-wrap justify-center gap-10 py-10 px-20 items-center">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/ministry_of_culture.png" alt="" />}
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/the_year_of_saudi_coffee.png" alt="" />}
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/coffeethon.png" alt="" />}
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/sponsor.png" alt="" />}
      </section>

      <footer className="bg-[#1D3145] text-white py-5 px-10 flex justify-between items-center">
        <div className="flex gap-5">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/@.svg" alt="" className="w-[40px]" />}

          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/twitter.svg" alt="" className="w-[40px]" />}
          
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-[#9EA1A1] text-sm">
            <span className="font-bold">@COFFEETHON </span>
            Copyright
            <span className="font-bold"> 2022</span>
          </p>
          <p className="text-center text-[#9EA1A1] text-sm">All Rights Reserved</p>
        </div>
        <div className="">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/logo01.png" alt="" />}
        </div>
      </footer>
    </>
  )
}


const Card1 = () => {
  return (<>
    <div className="flex flex-col justify-center p-[24px] bg-white text-[#243746] rounded-[14px]">
      <div className="rounded-[7px] mt-2">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/various-grains-bags-grocery-store-market.png" alt="" className="w-full" />}
      </div>
      <div className="mt-2 font-bold text-xl text-[#E7004C] text-center">الاستيراد والتصدير</div>
      <p className="text-center mt-5">
        تسهيل عملية الاستيراد من كافة دول العالم ودعم المحامص والموزعين المحليين لتصدير منتجاتهم.
      </p>
    </div>
  </>)
}

const Card2 = () => {
  return (<>
    <div className="flex flex-col justify-center px-10 py-[24px] bg-white border border-[#E7004C]/25 rounded-[25px]">
      <div className="mx-auto">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/card2img1.svg" alt="" width="180px" />}
      </div>
      <div className="mt-2 font-bold text-xl text-[#E7004C] text-center">عرض المشاريع</div>
      <p className="text-center mt-5">
        النقاط الرئيسية في عرض المشاريع وجلب المستثمرين.
      </p>
    </div>
  </>)
}

const Accordion = ({ question, answer }) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  return (
    <div className="">
      <li className="font-bold text-lg cursor-pointer" onClick={() => setOpenAccordion(!openAccordion)}>{question}</li>
      <span className={openAccordion ? 'visible' : 'invisible'}>{answer}</span>
    </div>
  )
}