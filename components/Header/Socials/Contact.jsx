export default function Contact({icon, children}) {
    return (
        <div className="flex items-center space-x-2">
            <span className="" >{icon}</span>
            <span className="text-[#666666] text-sm font-light font-  ">{children}</span>
        </div>
    )
}