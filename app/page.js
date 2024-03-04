import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-cool-gray-900">
    
    <article className="absolute w-screen h-1/2 -left-1364 top-33.68 bg-gray-100 transform -rotate-7.22">
        <div className="flex items-center justify-center w-3/6 h-5/6 gap-6">
          <Image
          alt= ''
          className="Logo tailwind"
          width={152}
          height={91.31}
          src='/Images/tail.svg'/>
          <h1 className="w-691 h-140 font-inter font-bold text-5xl leading-tight text-cool-gray-900 flex-none order-1">Tailwind CSS</h1>
        </div>
      </article>

      <article className=" w-full h-screen bg-blue-950 ">
        <div className="flex items-center justify-between p-0 gap-32 absolute w-907.2 h-186 left-1/3 top-3/4 -translate-y-1/2 translate-x-32 translate-y-27">
          <Image
          alt= 'Logo flowbite'
          className=""
          width={132}
          height={132}
          src='/Images/flow.svg'/>
          <h1 className="w-579 h-186 font-outfit font-semibold text-6xl leading-8 text-white flex-none order-2" >Flowbite</h1>
        </div>
    </article>
        
    </main>
  );
}
