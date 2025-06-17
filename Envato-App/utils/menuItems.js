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
    }
]

export default menuItems;