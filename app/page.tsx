import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="home-page">
        <div className="text-center mt-15 md:mt-25">
          <p className="text-title font-lexend-deca mx-auto max-w-4xl text-6xl text-black md:text-7xl animate-fade-in">
            Everything You Need, <span className="text-[#A8DF8E]">In One Place</span>
          </p>
          <p className="text-sub mt-[40px] font-lexend-deca mx-auto max-w-3xl text-xl text-[#1e293b]">Explore a variety of products with a smooth and simple shopping experience, all in one place</p>
          <div className="button mt-[40px] flex-gap justify-center">
            <Link href="/" target="blank" className="inline-flex items-center gap-2 px-12 py-5 rounded-4xl bg-[#A8DF8E]">
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
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-lexend-deca">Featured Products</h2>
              <p className="text-gray-500 font-lexend-deca mt-2">Discover our handpicked selection</p>
            </div>
            {/* <h2 className="text-xl text-center font-lexend-deca">Featured Products</h2> */}
            <Link href="/" className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-lexend-deca transition-all duration-300">Explore More
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </Link>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white h-[650px] rounded-3xl shadow-lg border border-gray-200">
                <div className="relative mx-auto w-[90%] mt-[5%] h-[60%] bg-[url('https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395016/04/sv01/fnd/IDN/fmt/png/Sepatu-Sneaker-Unisex-Puma-Caven-2.0-Lux')] bg-contain bg-no-repeat bg-center rounded-2xl"></div>
                <p className="product-brand mt-3 font-lexend-deca text-white text-1xl inline-flex items-center gap-2 px-[30px] py-2 rounded-r-lg bg-[#A8DF8E] shadow-lg">Unisex</p>
                <div className="p-6 space-y-3 flex flex-col flex-grow">
                  <p className="product-title font-lexend-deca text-1xl line-clamp-2 min-h-[45px]">Sepatu Sneaker Unisex Puma Caven 2.0 Lux</p>
                  <p className="product-title font-lexend-deca text-1xl font-semibold">Rp. 25.000</p>
                    <Link href="/" target="blank" className="block w-full py-3 text-center rounded-2xl bg-[#1B211A]">
                      <p className="font-lexend-deca text-white text-[20px]">Buy Now</p>
                    </Link>
                </div>
              </div>
              
              <div className="bg-white h-[650px] rounded-3xl shadow-lg border border-gray-200">
                <div className="relative mx-auto w-[90%] mt-[5%] h-[60%] bg-[url('https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_blue_1.jpg')] bg-contain bg-no-repeat bg-center rounded-2xl"></div>
                <p className="product-brand mt-3 font-lexend-deca text-white text-1xl inline-flex items-center gap-2 px-[30px] py-2 rounded-r-lg bg-[#A8DF8E] shadow-lg">Apple</p>
                <div className="p-6 space-y-3 flex flex-col flex-grow">
                  <p className="product-title font-lexend-deca text-1xl line-clamp-2 min-h-[45px]">Iphone 15</p>
                  <p className="product-title font-lexend-deca text-1xl font-semibold">Rp. 11.249.000</p>
                    <Link href="/" target="blank" className="block w-full py-3 text-center rounded-2xl bg-[#1B211A]">
                      <p className="font-lexend-deca text-white text-[20px]">Buy Now</p>
                    </Link>
                </div>
              </div>
              
              
          </div>
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-black font-lexend-deca transition-all duration-300 shadow-lg">
            Explore More
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </Link>
        </div>
        <div className="relative h-[500px] bg-[#0a0a0a] rounded-b-4xl mt-12">
          <p className="text-white">How Potion works</p>
        </div>
        <div className="relative h-[500px]">

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


