import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="home-page">
        <div className="text-center mt-15 md:mt-25">
          <p className="text-title font-lexend-deca mx-auto max-w-4xl text-6xl text-black md:text-7xl animate-fade-in">
            Everything You Need, <span className="text-orange-500">In One Place</span>
          </p>
          <p className="text-sub mt-[40px] font-lexend-deca mx-auto max-w-3xl text-xl text-[#1e293b]">Explore a variety of products with a smooth and simple shopping experience, all in one place</p>
          <div className="button mt-[40px] flex-gap justify-center">
            <Link href="/" target="blank" className="inline-flex items-center gap-2 px-12 py-5 rounded-4xl bg-orange-500">
              <p className="font-lexend-deca text-white text-[20px]">Explore</p>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff5f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </Link>
          </div>
        </div>
        <div>
          <div className="w-[85%] h-[50px] mx-auto mt-10 rounded-4xl border border-gray-200 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
          <div className="relative bg-white w-[85%] h-[700px] mx-auto mt-5 rounded-4xl border-t border-gray-200 shadow-lg bg-[url('/images/violet-ever.jpg')] bg-cover bg-center">
          </div>
          <div className="w-[85%] h-[50px] mx-auto mt-5 rounded-4xl border border-gray-200 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="w-[85%] mx-auto mt-10">
          <div className="mb-6">
            <h2 className="text-xl text-center font-lexend-deca">Featured Products</h2>
            <Link href="/" className="invisible md:visible font-lexend-deca">Explore More</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white h-[400px] rounded-3xl shadow-lg border border-gray-200">
                <div className="mx-auto w-[90%] mt-[5%] h-[60%] bg-[url('https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395016/04/sv01/fnd/IDN/fmt/png/Sepatu-Sneaker-Unisex-Puma-Caven-2.0-Lux')] bg-cover bg-center rounded-2xl border border-gray-200"></div>
              </div>
              <div className="bg-white h-[400px] rounded-3xl shadow-lg border border-gray-200">
                <div className="mx-auto w-[90%] mt-[5%] h-[60%] bg-[url('https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395016/04/sv01/fnd/IDN/fmt/png/Sepatu-Sneaker-Unisex-Puma-Caven-2.0-Lux')] bg-cover bg-center rounded-2xl border border-gray-200"></div>
              </div>
              <div className="bg-white h-[400px] rounded-3xl shadow-lg border border-gray-200">
                <div className="mx-auto w-[90%] mt-[5%] h-[60%] bg-[url('https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395016/04/sv01/fnd/IDN/fmt/png/Sepatu-Sneaker-Unisex-Puma-Caven-2.0-Lux')] bg-cover bg-center rounded-2xl border border-gray-200"></div>
              </div>
              <div className="bg-white h-[400px] rounded-3xl shadow-lg border border-gray-200">
                <div className="mx-auto w-[90%] mt-[5%] h-[60%] bg-[url('https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395016/04/sv01/fnd/IDN/fmt/png/Sepatu-Sneaker-Unisex-Puma-Caven-2.0-Lux')] bg-cover bg-center rounded-2xl border border-gray-200"></div>
              </div>
          </div>
        </div>
        <div className="h-[900px]">

        </div>
        
        {/* <div className="w-[95%] h-[50px] mx-auto mt-10 rounded-4xl border border-gray-200">

        </div> */}
        {/* <div className="bg-white w-[95%] h-[500px] mx-auto mt-4 rounded-4xl border border-gray-200 shadow-lg bg-[url('/images/violet-ever.jpg')] bg-cover bg-center">
          <span className="header-text flex justify-center pt-40 text-[40px] font-archivo text-white">Meet the Super-fast E-com</span>
        </div> */}
        {/* <div className="home-section">  
            <div className="bg-white h-[50px] shadow-lg mt-[20px] border-t border-b border-gray-300 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <div className="bg-white h-[800px] shadow-lg">
              <div className="max-w-[85%] mx-auto">
                <span className="text-title-section text-[30px] font-lexend-deca pt-10 flex justify-center">Lorem Ipsum is simply dummy</span>
                <span className="text-description flex justify-center font-lexend-deca mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</span>
                <div className="element-card bg-[#FA8112] w-[95%] h-[500px] flex mx-auto mt-[30px] rounded-4xl">
                    <div className="image-card bg-black w-100 h-100 border bg-[url('/images/violet-ever.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
        </div> */}
    </div>
  ); 
}

  // return (
  //   <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  //     <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={100}
  //         height={20}
  //         priority
  //       />
  //       <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
  //         <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
  //           To get started, edit the page.tsx file.
  //         </h1>
  //         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
  //           Looking for a starting point or more instructions? Head over to{" "}
  //           <a
  //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //             className="font-medium text-zinc-950 dark:text-zinc-50"
  //           >
  //             Templates
  //           </a>{" "}
  //           or the{" "}
  //           <a
  //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //             className="font-medium text-zinc-950 dark:text-zinc-50"
  //           >
  //             Learning
  //           </a>{" "}
  //           center.
  //         </p>
  //       </div>
  //       <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
  //         <a
  //           className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={16}
  //             height={16}
  //           />
  //           Deploy Now
  //         </a>
  //         <a
  //           className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Documentation
  //         </a>
  //       </div>
  //     </main>
  //   </div>
  // );
  

