import React from "react";

const page = () => {
  return (
    <div className="h-full flex justify-center items-center text-gray-800 font-semibold text-3xl">
      Happy Chatting
    </div>
  );
};

export default page;

// "use client";
// import { useEffect } from "react";
// import {  io } from "socket.io-client";

// export default function Home() {
//   const socket = io("http://localhost:9000");
//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//     });
//   }, []);

//   return (
//     <>

//       {/* <div classNameName="flex flex-row justify-between bg-white">
//           <div classNameName="flex flex-col w-2/5 border-r-2 overflow-y-auto">
//             <div classNameName="border-b-2 py-4 px-2">
//               <input
//                 type="text"
//                 placeholder="search chatting"
//                 classNameName="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
//               />
//             </div>

//             <div classNameName="flex flex-row py-4 px-2 justify-center items-center border-b-2">
//               <div classNameName="w-1/4">
//                 <im/g
//                   src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
//                   classNameName="object-cover h-12 w-12 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="w-full">
//                 <div classNameName="text-lg font-semibold">Luis1994</div>
//                 <span classNameName="text-gray-500">Pick me at 9:00 Am</span>
//               </div>
//             </div>
//             <div classNameName="flex flex-row py-4 px-2 items-center border-b-2">
//               <div classNameName="w-1/4">
//                 <im/g
//                   src="https://source.unsplash.com/otT2199XwI8/600x600"
//                   classNameName="object-cover h-12 w-12 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="w-full">
//                 <div classNameName="text-lg font-semibold">Everest Trip 2021</div>
//                 <span classNameName="text-gray-500">Hi Sam, Welcome</span>
//               </div>
//             </div>
//             <div classNameName="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
//               <div classNameName="w-1/4">
//                 <img
//                   src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
//                   classNameName="object-cover h-12 w-12 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="w-full">
//                 <div classNameName="text-lg font-semibold">MERN Stack</div>
//                 <span classNameName="text-gray-500">Lusi : Thanks Everyone</span>
//               </div>
//             </div>
//             <div classNameName="flex flex-row py-4 px-2 items-center border-b-2">
//               <div classNameName="w-1/4">
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-12 w-12 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="w-full">
//                 <div classNameName="text-lg font-semibold">
//                   Javascript Indonesia
//                 </div>
//                 <span classNameName="text-gray-500">
//                   Evan : some one can fix this
//                 </span>
//               </div>
//             </div>
//             <div classNameName="flex flex-row py-4 px-2 items-center border-b-2">
//               <div classNameName="w-1/4">
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-12 w-12 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="w-full">
//                 <div classNameName="text-lg font-semibold">
//                   Javascript Indonesia
//                 </div>
//                 <span classNameName="text-gray-500">
//                   Evan : some one can fix this
//                 </span>
//               </div>
//             </div>

//             <div classNameName="flex flex-row py-4 px-2 items-center border-b-2">
//               <div classNameName="w-1/4">
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-12 w-12 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="w-full">
//                 <div classNameName="text-lg font-semibold">
//                   Javascript Indonesia
//                 </div>
//                 <span classNameName="text-gray-500">
//                   Evan : some one can fix this
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div classNameName="w-full px-5 flex flex-col justify-between">
//             <div classNameName="flex flex-col mt-5">
//               <div classNameName="flex justify-end mb-4">
//                 <div classNameName="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
//                   Welcome to group everyone !
//                 </div>
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-8 w-8 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="flex justify-start mb-4">
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-8 w-8 rounded-full"
//                   alt=""
//                 />
//                 <div classNameName="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Quaerat at praesentium, aut ullam delectus odio error sit rem.
//                   Architecto nulla doloribus laborum illo rem enim dolor odio
//                   saepe, consequatur quas?
//                 </div>
//               </div>
//               <div classNameName="flex justify-end mb-4">
//                 <div>
//                   <div classNameName="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Magnam, repudiandae.
//                   </div>

//                   <div classNameName="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Debitis, reiciendis!
//                   </div>
//                 </div>
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-8 w-8 rounded-full"
//                   alt=""
//                 />
//               </div>
//               <div classNameName="flex justify-start mb-4">
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   classNameName="object-cover h-8 w-8 rounded-full"
//                   alt=""
//                 />
//                 <div classNameName="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
//                   happy holiday guys!
//                 </div>
//               </div>
//             </div>
//             <div classNameName="py-5">
//               <input
//                 classNameName="w-full bg-gray-300 py-5 px-3 rounded-xl"
//                 type="text"
//                 placeholder="type your message here..."
//               />
//             </div>
//           </div>

//           <div classNameName="w-2/5 border-l-2 px-5">
//             <div classNameName="flex flex-col">
//               <div classNameName="font-semibold text-xl py-4">Mern Stack Group</div>
//               <img
//                 src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
//                 classNameName="object-cover rounded-xl h-64"
//                 alt=""
//               />
//               <div classNameName="font-semibold py-4">Created 22 Sep 2021</div>
//               <div classNameName="font-light">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Deserunt, perspiciatis!
//               </div>
//             </div>
//           </div>
//         </div> */}
//     </>
//   );
// }
