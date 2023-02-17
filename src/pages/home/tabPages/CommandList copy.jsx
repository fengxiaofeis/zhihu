import React, { useEffect, useState, useRef } from 'react';
import { commandList } from '../../../mock/list';


const CommandData = ({item}) => {
    const [ selected, setSelected ] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setSelected(!selected);
    }

    return <div className='flex flex-col items-start p-4 border-b '>
        {/* 1. 标题 */}
        <div className='h-auto flex justify-start'>
            <a className=' font-bold text-lg leading-10' href=''>
               {
                item?.target?.question?.title || item?.target?.title
               } 
            </a>
        </div>
        {/* 具体的内容 */}
        <div className='leading-6'>
            {
                selected ?
                <div dangerouslySetInnerHTML={{__html: item?.target?.content}}></div>:
                <a href="/" onClick={handleClick}
                className="cursor-pointer hover:text-gray-500 text-gray-800"
                >
                    {item?.target?.excerpt.substring(0, 80) + '...'}
                    <span className='text-base leading-7 text-blue-800' >阅读全文 &gt;</span>
                </a>
            }
        </div>
        {/* 按钮 */}
        <div className={'flex bg-white w-full ' + (selected ? 'bottom-0 border-t shadow-sm sticky': '')}>
            <div className='h-10 rounded-md bg-blue-100 text-blue-500 px-2 py-1 my-1 flex items-center justify-center'>
                <svg width="10" height="10" viewBox="0 0 24 24" className="Zi Zi--TriangleUp VoteButton-TriangleUp" fill="currentColor"><path fillRule="evenodd" d="M13.792 3.681c-.781-1.406-2.803-1.406-3.584 0l-7.79 14.023c-.76 1.367.228 3.046 1.791 3.046h15.582c1.563 0 2.55-1.68 1.791-3.046l-7.79-14.023Z" clipRule="evenodd"></path></svg>
                <span className='mx-2'>赞同</span>
                <span>{item?.target?.voteup_count}</span>
            </div>
            <div className='ml-2 h-10 rounded-md bg-blue-100 text-blue-500 px-2 py-1 my-1 flex items-center justify-center'>
                <svg width="10" height="10" viewBox="0 0 24 24" className="Zi Zi--TriangleDown" fill="currentColor"><path fillRule="evenodd" d="M13.792 20.319c-.781 1.406-2.803 1.406-3.584 0L2.418 6.296c-.76-1.367.228-3.046 1.791-3.046h15.582c1.563 0 2.55 1.68 1.791 3.046l-7.79 14.023Z" clipRule="evenodd"></path></svg>               
            </div>
            <div className='font-base text-gray-400 p-2 m-2 inline-flex'>
                <svg width="1.2em" height="1.2em" viewBox="0 -2 24 24"  className="Zi Zi--Comment Button-zi" fill="currentColor"><path d="M12 2.75a9.25 9.25 0 104.737 17.197l2.643.817a1 1 0 001.25-1.25l-.8-2.588A9.25 9.25 0 0012 2.75z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                &nbsp; {item?.target?.comment_count} 条评论
            </div>
            <div className='font-base text-gray-400 p-2 m-2 inline-flex'>
                <svg width="1.2em" height="1.2em" viewBox="0 -2 24 24" className="Zi Zi--Comment Button-zi" fill="currentColor"><path d="M12 2.75a9.25 9.25 0 104.737 17.197l2.643.817a1 1 0 001.25-1.25l-.8-2.588A9.25 9.25 0 0012 2.75z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                收藏
            </div>
            <div className='font-base text-gray-400 p-2 m-2 inline-flex'>
                <svg width="1.2em" height="1.2em" viewBox="0 -2 24 24" className="Zi Zi--Comment Button-zi" fill="currentColor"><path d="M12 2.75a9.25 9.25 0 104.737 17.197l2.643.817a1 1 0 001.25-1.25l-.8-2.588A9.25 9.25 0 0012 2.75z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                喜欢
            </div>
            <div className='font-base text-gray-400 p-2 m-2 inline-flex'>
                <svg width="1.2em" height="1.2em" viewBox="0 -2 24 24" className="Zi Zi--Comment Button-zi" fill="currentColor"><path d="M12 2.75a9.25 9.25 0 104.737 17.197l2.643.817a1 1 0 001.25-1.25l-.8-2.588A9.25 9.25 0 0012 2.75z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                分享
            </div>
            {
                selected && <div onClick={handleClick} className="font-base text-stone-500 p-2 m-2 inline-flex cursor-pointer">
                    <span className='inline-flex text-blue-700'>收起 &lt;</span>
                </div>
            }
        </div>
    </div>
}

function useObserver(scrollRef) {

    let [ list, setList ] = useState(commandList);

    useEffect(() => {
        var intersectionObserver = new IntersectionObserver(function(entries) {
            const bool = entries[0].isIntersecting;
            bool && setList(list => [...list, ...commandList])
        });

        intersectionObserver.observe(scrollRef.current);

        return () => {
            intersectionObserver.unobserve(scrollRef.current);
            intersectionObserver = void 0;
        }
    }, []);

    return list;
    
}

export default function CommandList() {

    const scrollRef = useRef(null);

    const list = useObserver(scrollRef)

  return (
    <div className='flex flex-col'>
        {
            list.map((item, idx) => <CommandData key={idx} item={item} />)
        }
        <div ref={scrollRef}>loading......</div>
    </div>
  )
}
