const menuItems = [
    { name: "HOME", href: "/Home"},
    {name: "SERVICES",
        subPages : [
            {
                name: "Appointments", href: "/Appointments"
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
            {name: "Doctors", href: "/Doctors"},
            {name: "Blog", href: "/blog"},
        ]
    },
    {name: "CONTACT" , href: "/Contact"},
    
]

export default menuItems;