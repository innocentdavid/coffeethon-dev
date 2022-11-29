import Link from "next/link";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <header className="py-[50px]" style={{ backgroundImage: 'url("images/headerBG.png")' }}>
        <Nav />
        <div className="flex justify-between items-center gap-32 py-24">
          <div className="">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/01.png" alt="" height="75px" width='609px' />}
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
              <img src="/images/01.png" alt="" height="75px" width='609px' />}
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

      <section className="p-[250px]flex justify-center bg-white text-[#243746] py-32 px-[30%]">
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

        <div className="flex justify-center gap-32 my-10">
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

      <section className="py-[150px] bg-[#1D3145] text-white">
        <div className="flex justify-end">
          <div className="flex gap-5 items-center">
            <span>سير الهاكاثون</span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar1.svg" alt="" width="190px" />}
            </div>
          </div>
        </div>

        <div className="mt-20 px-20">
          <div className="">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/section3Img.png" alt="" />}
          </div>
        </div>

        <div className="flex justify-end -mt-[50px] mb-24">
          <div className="flex gap-5 items-center">
            <span>مسارات الهاكاثون</span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar1.svg" alt="" width="190px" />}
            </div>
          </div>
        </div>

        <div className="flex gap-5 px-10">
          <Card1 key={11} />
          <Card1 key={22} />
          <Card1 key={33} />
          <Card1 key={44} />
        </div>
      </section>

      <section className="py-[90px] bg-white text-[#243746]">
        <div className="flex justify-end">
          <div className="flex gap-5 items-center">
            <span>ورش العمل </span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar1.svg" alt="" width="190px" />}
            </div>
          </div>
        </div>

        <div className="mt-10 px-20 grid grid-cols-3 gap-32 my-20">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>

        <div className="flex justify-end">
          <div className="flex gap-5 items-center">
            <span>الجوائز</span>
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/s3bar1.svg" alt="" width="190px" />}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-[350px] mt-28 text-[#243746]">
          <div className="flex flex-col justify-center items-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/sec4num3.svg" alt="" width="70px" />}
            </div>
            <div className="flex flex-col items-center mt-3 gap-1">
              <h1 className="font-[800] text-xl">40.000</h1>
              <p className="">sdk sdlkjasdl</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/sec4num2.svg" alt="" width="70px" />}
            </div>
            <div className="flex flex-col items-center mt-3 gap-1">
              <h1 className="font-[800] text-xl">40.000</h1>
              <p className="">sdk sdlkjasdl</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/sec4num1.svg" alt="" width="70px" />}
            </div>
            <div className="flex flex-col items-center mt-3 gap-1">
              <h1 className="font-[800] text-xl">40.000</h1>
              <p className="">sdk sdlkjasdl</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1D3145] text-white py-[24px] px-[25%] flex justify-center overflow-hidden">
        <div className="absolute top-0 left-0">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/sect5LBar.png" alt="" />}
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
            <div className="flex justify-center mt-10">
              <div className="py-3 px-6 bg-[#E7004C] rounded-[38px] text-white">التسجيل</div>
            </div>
          </div>
          <div className="mt-[200px]">
            <div className="py-5 text-center w-full bg-white text-[#E7004C] text-2xl font-bold">تشكيل الفرق</div>
            <p className="mt-4" dir="rtl">بعد تسجيل الأفراد في المنصة وتعبئة الملف الشخصي، يتم تسجيل الفريق وفي حال كنت تبحث عن فريق فبامكانك الضغط على زر تشكيل الفرق وطلب الانضمام إلى أحد الفرق المسجلة أو إنشاء فريق جديد.</p>
            <div className="font-bold text-xl my-4" dir="rtl">خطوات التسجيل</div>
            <div className="flex justify-between items-center">
              <div className="">
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/images/sect5box.png" alt="" width="150px" />}
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
            <div className="flex justify-center mt-10">
              <div className="py-3 px-6 bg-[#E7004C] rounded-[38px] text-white">تشكيل الفرق</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] bg-white text-[#243746] flex gap-5">
        <div className="flex-[3]" dir="rtl">
          <h1 className="font-bold text-2xl mb-4">الاسئلة الشائعة</h1>
          <ul className="flex flex-col gap-4">
            <div className="">
              <li className="font-bold text-lg">هل يمكنني المشاركة كفرد؟</li>
              <span>
                المشاركة في الهاكاثون تلزم وجود فريق وبامكانك البحث عن فريق في خيار تشكيل الفرق.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">لا يوجد لدي فريق؟</li>
              <span>
                بامكانك البحث عن فريق في خيار تشكيل الفرق.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">متى سيقام الهاكاثون؟</li>
              <span>
                في يومي ٤ و ٥ جمادى الآخرة.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">أين سيقام الهاكاثون؟</li>
              <span>
                في واجهة الرياض.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">أين ستقام ورش العمل؟</li>
              <span>
                ورش العمل ستقام عن بعد عبر منصة Zoom.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">هل حضور ورش العمل إلزامي؟</li>
              <span>
                لا، ولكن تفيدك ورش العمل في الحصول على الكثير من المعلومات المتعلقة بالقهوة والهاكاثون.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">كيف ستسلم الجوائز؟</li>
              <span>
                سيكون لهاكاثون القهوة حصة من المشاريع الفائزة وستوزع الجوائز على دفعات لدعم استمرارية المشروع.
                </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">ما الفرص المتاحة بعد الهاكاثون؟</li>
              <span>
                سيتم ربط الفائزين بحاضنات ومسرعات أعمال لتدريبهم ودعم مشاريعهم وبامكانك كل المشاركين عرض مشاريعهم أمام المستثمرين المتواجدين في الهاكاثون.
              </span>
            </div>
            <div className="">
              <li className="font-bold text-lg">ما الفوائد المكتسبة من الهاكاثون؟</li>
              <span>
                سيحصل كل المشاركين على شهادة مشاركة وفرصة زيادة شبكة العلاقات وتعزيز الخبرات شخصية والسير الذاتية.
              </span>
            </div>
          </ul>
        </div>
        <div className="flex-1 flex justify-end items-start">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/s3bar1.svg" alt="" width="190px" />}
        </div>
      </section>

      {/* <section className="flex relative">
        <div className="">IMAGE...</div>
        <div className="">IMAGE...</div>
        <div className="absolute top-[70%] left-[50%] -translate-x-[70%] -translate-y-[50%]">
          <div className="border border-white p-[10px] rounded-[10px] bg-[#1D3145] text-white">
            <h1 className="text-cente#E7004Cr text-2xl font-bold">التسجيل lksdjf</h1>
            <form action="" className="w-[300px]" onSubmit={(e) => { e.preventDefault() }}>
              <input type="text" className="bg-[#1D3145]/50 text-white border-none outline-none rounded-[8px] h-[40px] w-full" placeholder="sfkjd" dir="rtl" />
              <input type="text" className="bg-[#1D3145]/50 text-white border-none outline-none rounded-[8px] my-[5px] h-[40px] w-full" placeholder="sldfkjd" dir="rtl" />
              <textarea type="text" className="bg-[#1D3145]/50 text-white border-none outline-none rounded-[8px] h-[90px] w-full" placeholder="fkjd" dir="rtl"></textarea>

              <div className="flex justify-center w-full">
                <button type="submit" className="py-3 px-5 rounded-full bg-white text-[#243746]">sldkfsdlj</button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      <section className="bg-white flex gap-10 py-10 px-20 items-center">
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

      <footer className="bg-[#1D3145] text-white pt-10 pb-2 px-10">
        <div className="flex justify-center gap-20 relative">
          <div className="flex flex-col items-end">
            <div className="">تواصل معنا</div>
            <div className="flex gap-3 my-3">
              <div>Contact@coffethon.com</div>
              <div className="w-[30px] h-[30px] rounded-full bg-white text-[#243746] grid place-items-center">O</div>
            </div>
            <div className="flex gap-3">
              <div>Coffeethon</div>
              <div className="w-[30px] h-[30px] rounded-full bg-white text-[#243746] grid place-items-center">O</div>
            </div>
          </div>

          <div className="" dir="rtl">
            <div className="">التسجيل</div>
            <div className="my-5">الجوائز</div>
            <div className="">الاسئلة الشائعة</div>
          </div>

          <div className="" dir="rtl">
            <div className="">نبذة عن الهاكاثون</div>
            <div className="my-5">ورش العمل</div>
            <div className="">الفرق</div>
          </div>

          <div className="ml-5 absolute right-20">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/logo01.png" alt="" />}
          </div>
        </div>

        <p className="text-center text-[#9EA1A1] text-sm mt-10">
          <span className="font-bold">@COFFEETHON </span>
          Copyright
          <span className="font-bold"> 2022</span>
        </p>
        <p className="text-center text-[#9EA1A1] text-sm">All Rights Reserved</p>
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
          <img src="/images/various-grains-bags-grocery-store-market.png" alt="" />}
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
    <div className="flex flex-col justify-center px-10 py-[24px] bg-white border border-[#E7004C]/25 rounded-[75px]">
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