import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-cool-gray-900 overflow-hidden">
    
    <article  className="absolute w-full md:w-3333 h-auto md:h-1966.65 top-0 md:top-[-1595px] left-0 md:left-[-1341px] bg-gray-100 transform -rotate-25">
        <div className="absolute top-[890px] left-[600px] flex items-center justify-center w-3/6 h-5/6 gap-6 transform -rotate-24   ">
          <Image
          alt= ''
          className="Logo tailwind"
          width={152}
          height={91.31}
          src='/Images/tail.svg'/>
          <h1 className="w-691 h-140 font-inter font-bold text-7xl leading-tight text-cool-gray-900 flex-none order-1">Tailwind CSS</h1>
        </div>
      </article>

      <article className=" w-screen h-screen bg-111827  ">
        <div className="flex items-center  p-0 gap-32 absolute w-[907.2px] h-[186px] left-[40%] top-3/4 -translate-y-1/2 translate-x-32 translate-y-27">
          <Image
          alt= 'Logo flowbite'
          className=""
          width={102}
          height={102}
          src='/Images/flow.svg'/>
          <h1 className="w-579 h-186 font-outfit font-semibold text-7xl leading-8 text-white flex-none order-2" >Flowbite</h1>
        </div>
    </article>
        
    </main>
  );
}
