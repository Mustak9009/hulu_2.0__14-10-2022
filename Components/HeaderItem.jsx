import React from 'react';

export default function HeaderItem({Icon,title}) {
  return (
    <div className='group flex flex-col px-8 pt-3 items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
        <Icon className='text-3xl  group-hover:animate-bounce font-bold'/> {/*animate-bounce -> Help to get bouncing effect(Tailwind is great)*/}
        <p className='tracking-widest opacity-0 group-hover:opacity-100 '>{title}</p>
    </div>
  )
}
