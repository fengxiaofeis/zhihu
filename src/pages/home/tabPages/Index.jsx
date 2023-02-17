import React, { useEffect, useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
    { name: '关注', to: '/follow'},
    { name: '推荐', to: '/'},
    { name: '热榜', to: '/hot'},
    { name: '视频', to: '/zvideo'},

]

export default function TabPage(props) {
    const scrollRef = useRef(null);

    useEffect(() => {
        var intersectionObserver = new IntersectionObserver(function(entries) {
            console.log(entries[0].isIntersecting)
            props.onChange && props.onChange(entries[0].isIntersecting)
        });

        intersectionObserver.observe(scrollRef.current);

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            intersectionObserver.unobserve(scrollRef.current);
            intersectionObserver = void 0;
        }
    })

  return (
    <div className='w-full'>
        <div ref={scrollRef}></div>
        <nav className='flex border-b'>
            {
                tabs.map((item) => <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => ' whitespace-nowarp py-4 px-6 text-base transition-all ' 
                    + (isActive ? "text-blue-500 font-medium": "text-black hover:text-blue-900")
                    }
                >{item.name}</NavLink>)
            }
        </nav>
        <Outlet />
    </div>
  )
}
