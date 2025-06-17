import Image from 'next/image';

export default function ResponsiveBlocks({svg, children}) {
    return (
        <div className='flex flex-col justify-evenly items-center h-full p-10'>
            <Image width={40} height={40} alt="Image" src={svg}/>
            {children}
        </div>
    )
}