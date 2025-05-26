export default function Menu() {
    const menuItems = [
        { name: "HOME", href: "/"},
        {name: "SERVICES",
            subPages : [
                {
                    name: "Consultation", href: "/services/consultation"
                },
                { name: "Surgery", href: "/services/surgery"},
                { name: "Therapy", href: "/services/therapy"},
                { name: "Diagnosis", href: "/services/diagnosis"},
                { name: "Emergency", href: "/services/emergency"},
            ]
        },
        {name: "PAGES",
            subPages : [
                {name: "About", href: "/about"},
                {name: "Doctors", href: "/doctors"},
                {name: "Blog", href: "/blog"},
            ]
        },
        {name: "CONTACT" ,
            subPages: [
                {name: "ContactStyle 1", href: "/contact-style-1"},
                {name: "ContactStyle 2", href: "/contact-style-2"},
                {name: "ContactStyle 3", href: "/contact-style-3"},
            ]
        },
        {name: "BLOG", href: "/blog"},
    ]

    return(
        <>
           <div className="bg-white h-20 flex justify-between items-center-safe px-20">
           <div className= "flex justify-between items-center ">
                <img src="https://www.thetahmid.com/themes/mediseba-v1.2/images/logo.png" alt="T"></img>
            </div>
            <nav className=" flex text-black space-x-4 ">
            {menuItems.map((item, index)=> (
                <div key={index} className="relative group" >
                    <a href={item.href || "#"} className="hover:text-[#00a3c8]">{item.name}</a>
                    {item.subPages && (
                        <div className=" absolute left-0 bg-white hidden group-hover:block ">
                            <ul >
                                {item.subPages.map((subItem, subIndex) =>(
                                    <li className=" hover:bg-[#00a3c8] hover:text-white border-b-[#eeeeee9f] w-fit py-0.5" key={subIndex}>
                                    <a href={subItem.href}>{subItem.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )
            )}
            </nav>

            {/*search bar*/}
            <div>
                <input type="text" placeholder="Search"/>
                <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#00a3c8]"
                    >
                    </button>
            </div>
           </div>
            
            
        </>
    )
}