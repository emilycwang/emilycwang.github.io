import {usda,ut,wwf,iedu,hda, ibm } from "../assets/images";
import {
    contact,
    arc,
    Jupyter,
    MySQL,
    Python,
    qgis,
    Stata,
    RStudio,
    excel,
    github,
    html,
    linkedin,
    violin,
    factory,
    testing,
    game
} from "../assets/icons";

export const skills = [
    {
        imageUrl: excel,
        name: "Excel",
        type: "Data Analysis",
    },
    {
        imageUrl: RStudio,
        name: "R Studio",
        type: "Data Analysis",
    },
    {
        imageUrl: Stata,
        name: "Stata",
        type: "Data Analysis",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Data Analysis",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database Management",
    },
    {
        imageUrl: Jupyter,
        name: "Jupyter",
        type: "Tools",
    },
    {
        imageUrl: qgis,
        name: "QGIS",
        type: "GIS",
    },
    {
        imageUrl: arc,
        name: "ArcGIS Pro",
        type: "GIS",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "College Readiness Mentor",
        company_name: "iEducate",
        icon: iedu,
        iconBg: "#accbe1",
        date: "Feb 2022 - May 2022",
        points: [
            "Taught elementary school students in an underserved Houston neighborhood and increased passing rates in standardized testing"
        ],
        tools: "Excel, MS Suite",
    },
    {
        title: "Lead TA & Receptionist",
        company_name: "Houston Dragon Academy",
        icon: hda,
        iconBg: "#fbc3bc",
        date: "June 2022 - August 2022",
        points: [
            "Facilitated communication between teachers, students, and parents during the height of COVID-19, enforced safety precautions, and handled day-to-day office operations as a receptionist",
            "Taught algebra and 2nd grade English, administered diagnostic tests to assess student progress, and supported individualized learning",
            "Led a team of TAs, coordinating their schedules and school operations with the principal",
        ],
        tools: "Excel",
    },
    {
        title: "Markets Institute Business Case Research Intern",
        company_name: "World Wildlife Fund",
        icon: wwf,
        iconBg: "#b7e4c7",
        date: "August 2023 - December 2023",
        points: [
            "Contributed to business case development by researching and advising economic valuation methods for soil-based ecosystem services, leveraging company databases in Excel",
            "Analyzed farm-level data to identify correlations between soil health indicators and production losses across \
            conventional and regenerative agricultural practices and presented data insights to technical and non-\
            technical branch directors",
        ],
        tools: "R Markdown, knitr, tidyverse, ggplot2, cowplot, fmsb",
    },
    {
        title: "Content Tutor, Renewable Energy Fellow",
        company_name: "University of Texas at Austin - UT Athletics, Innovations for Peace and Development Lab ",
        icon: ut,
        iconBg: "#BF5700",
        date: "March 2024 - June 2024, Jan 2024 - Present",
        points: [
            "Supported students in data science and managerial accounting coursework by creating Excel review sheets\
            and debugging code",
            "Compiled and coded a comprehensive database of IRA (2022) projects in Excel and web dashboard,\
            conducted qualitative analyses of incentive structures in legal contracts, and coordinated FOIA requests",
        ],
        tools: "R Markdown, Excel, R Programming",
    },
    {
        title: "Survey Statistician Intern",
        company_name: "US Department of Agriculture - National Agricultural Statistics Service",
        icon: usda,
        iconBg: "#a2d2ff",
        date: "May 2024 - January 2025",
        points: [
            "Proposed commodity estimates for national release using multi-frame survey methodology indications",
            "Conducted ad hoc analyses with Hyperion queries and built Excel API integrations to support publications",
            "Developed a network analysis script to improve travel efficiencies of 200+ workers",
        ],
        tools: "OSMnx, Network X"
    },
    {
        title: "Strategic Initiatives Intern",
        company_name: "IBM Global Procurement",
        icon: ibm,
        iconBg: "#a6c8ff",
        date: "May 2025 - August 2025",
        points: [
            "Developed logic, Python script, and Streamlit tool to automate supplier relationship data cleanup",
            "Coordinated User Acceptance Testing for enterprise chatbot resulting in successful sprint",
            "Presented and documented usage, limitations, and developments of AI to analyze structured business data",
        ],
        tools: "Python, MS Office Suite, Watson Orchestrate, WXO ADK, Cognos Analytics"
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:+7134271452',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/emilycwang',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/emily-c-wang/',
    }
];

export const projects = [
    {
        iconUrl: factory,
        theme: 'btn-back-red',
        name: 'Predicting Ambient Air Pollution Concentrations Across the US',
        description: 'Trained and tested KNNs, Random Forest, Boosted Trees models to predict PM2.5 and visualize in\
        comprehensive HTML report |R markdown, tidycensus, leaflet, engines xgboost and ranger',
        link: '/pm2.5.html',
    },
    {
        iconUrl: violin,
        theme: 'btn-back-green',
        name: 'In Search of Sadness',
        description: 'Unveiling the saddest classical masterpieces using Spotify API and spotifyr.',
        link: '/In Search of Sadness.html',
    },
    {
        iconUrl: testing,
        theme: 'btn-back-blue',
        name: 'Data Entry App - Goldin App',
        description: 'Beta-tested and supported web app development for an orchestral diversity initiative, improving data entry efficiency for a team of 10 researchers through automated data scraping | React.js, Firestore',
        link: 'https://goldinapp-97348.web.app/signup',
    },

    {
        name: "2048 - Cats",
        description: "The classic 2048 game – cat themed – built with Code.org AppLab in my senior year of high school.",
        iconUrl: game, // Replace with an icon path if you have one
        theme: "btn-back-yellow", // Adjust theme as needed
        link: "https://studio.code.org/projects/applab/EODsK1rGZb2yAtNmTuqgdrqDU-5rNkaoB2r71TI7Xms", // Optional if you want a separate live link
      },
    
];