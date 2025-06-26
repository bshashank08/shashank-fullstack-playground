const menuItems = [
    { name: "HOME", href: "/home"},
    {name: "SERVICES",
        subPages : [
            {
                name: "Appointments", href: "/services/appointments"
            },
            { name: "Surgery", href: "/services/surgery"},
            { name: "Therapy", href: "/services/therapy"},
            { name: "Diagnosis", href: "/services/diagnosis"},
            { name: "Emergency", href: "/services/emergency"},
            {name: "Doctors", href: "/services/doctors"},
        ]
    },
    {name: "PAGES",
        subPages : [
            {name: "About", href: "/about"},
            {name: "Blog", href: "/blog"},
        ]
    },
    {name: "CONTACT" , href: "/Contact"},
    
]

export default menuItems;