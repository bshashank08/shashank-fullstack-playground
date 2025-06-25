import Image from 'next/image';

export default function Contact({icon, altText, children}) {
    return (
        <div className="flex items-center space-x-2">
            <span className="" ><Image src={icon} alt={altText} width={20} height={20}/></span>
            <span className="text-[#666666] text-sm font-light font-  ">{children}</span>
        </div>
    )
}