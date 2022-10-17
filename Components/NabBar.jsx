import React from 'react';
import Requests from '../utils/requests';
import {useRouter} from 'next/router';
export default function NabBar() {
  const router = useRouter();

  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 whitespace-nowrap text-2xl space-x-10 sm:space-x-20 overflow-x-scroll p-2 scrollbar-hide'> {/*whitespace-nowrap  -> means text wrap hobe na*/}
          {Object.entries(Requests).map(([key,{title,url}])=>(  //Object.entries -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
            <h2 key={key} onClick={()=> router.push(`/?genre=${key}`)} className='cursor-pointer transform hover:scale-125 duration-100 transition  hover:text-white active:text-red-500 last:pr-10'>{title}</h2>
          ))}
      </div>
      <div className='absolute top-0  right-0 bg-gradient-to-l from-[#0f172a]  h-12 w-1/12'/> {/*Main hero -> bg-gradient-to-l from-[#0f172a] for add => Effect*/}
    </nav>
  )
}
