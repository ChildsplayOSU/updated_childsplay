import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const CardData = [
    {
        icon: <ExtensionIcon />,
        title: "Playing",
        link: '/playing',
        description: "Focused on problem-solving skills and understanding Representations, Algorithms, and Computation.",
        cname : "c1",
        btn: "b1"

    },
    {
        icon : <CodeIcon />,
        title : "Programming",
        link : '/programming',
        description : "Teaching computer science concepts through BoGL, a board game programming language.",
        cname : "c2",
        btn:"b2"
    },
    {
        icon : <MenuBookIcon />,
        title : "Publications",
        link : '/publications',
        description : "Published papers related to the curriculum.",
        cname : "c3",
        btn:"b3"
    },
    {
        icon : <PeopleIcon />,
        title : "Personnel",
        link : '/personnel',
        description : "Read about the team members involved in our research group.",
        cname : "c4",
        btn:"b4"
    },
    {
        icon : <ComputerIcon />,
        title : "Curriculum",
        link : '/curriculum',
        description : "Review and see the curriculum that has been created by the team.",
        cname : "c5",
        btn:"b5"
    },
    {
        icon : <ContactMailIcon />,
        title : "Contact",
        link : '/contact',
        description : "Contact the Childsplay research group for inquiries.",
        cname : "c6",
        btn:"b6"
    }
]