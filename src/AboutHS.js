import React from 'react';
import BreadCrumb from './component/BreadCrumb/Index';
import Container from './component/Container/Index';
import Slider from './component/Slider/Index';
import Counter from './component/CountLoader/Index';
import Overview from './component/Paragraph/Overview';
import Quote from './component/Paragraph/Quote';
import VissionMission from './component/Paragraph/VissionMission';
import Tabs from './component/Tabs/Index'
import Value from './component/Paragraph/Value';
import { Integrity } from './images/Svg/Integrity';
import { Sustainable } from './images/Svg/Sustainable';
import { Innovative } from './images/Svg/Innovative';
import { Excellence } from './images/Svg/Excellence';
import { Commitment } from './images/Svg/Commitment';

const AboutHS = () => {
    const pageData = {
        homeBanner: [
            {
                imagePath: "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/9969278111721825752about-Banner.webp",
                mobimgPath: "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/9661334981721826107m-aboutBanner.webp",
                title: "EXPECT <br/>Exceptional",
            }
        ],
        number: {
            title: "H&S Group in Numbers",
            numberData: [
                { startValue: 5, endValue: 8, label: "Projects Handled", Plus: "" },
                { startValue: 5, endValue: 20, label: "Lakh sq.ft. Delivered", Plus: "+" },
                { startValue: 25, endValue: 50, label: "Lakh sq.ft. in Development", Plus: "+" },
                { startValue: 3500, endValue: 5000, label: "Happy Customers", Plus: "+" }
            ]
        },
        overview: {
            title: "Overview",
            Text01: [
                "At H&S Real Estate Group, trust is not just a word but a commitment forged through years of unwavering dedication and excellence. As one of Noida’s premier real estate developers, we have built a legacy of success, marked by our ability to deliver exceptional residential and commercial projects that exceed expectations.",
                "Our journey is defined by a perfect synergy of engineering excellence, and innovative design. We believe in creating developments that not only fulfill the needs of our customers but also set new standards in the real estate industry.",
                "Our mission is to craft spaces that foster community and well-being while adhering to the highest environmental and sustainability practices."
            ],
            Text02: [
                "Our team of experienced architects and engineers is at the forefront of technology and quality control, working tirelessly to design and construct projects that are both visionary and enduring. Our landmark developments, including F Premiere, Beetle Lap, Boulevard Walk, and Halt Express, reflect our commitment to innovation, aesthetics, and long-term value.",
                "With a reputation for excellence and a portfolio of successful projects, H&S Real Estate Group continues to be a leader in shaping Noida’s skyline and enhancing the urban landscape."
            ]
        },
        quote: "With a legacy of excellence, H&S Real Estate Group is committed to creating landmark developments in Noida. Our projects reflect our dedication to quality, innovation, and community enrichment.",
        VissionMission: {
          title: "Our Ethos",
          visionHeading: "Our Vision",
          visionCont: [
              "Our vision at is to establish ourselves as a benchmark of excellence, innovation, and integrity in real estate development. We aspire to be the top choice for customers seeking unparalleled quality and service."
          ],
          missionHeading: "Our Mission",
          missionCont: [
              "Our mission at H&S Real Estate, Noida, is to enrich urban living through visionary design, sustainable practices, and unparalleled customer satisfaction, creating enduring value for our stakeholders and community."
          ]
      },
      "coreValue" : [
        {
          title: 'TRUST',
          description: 'Trust is the key foundation to building any relationship.',
          icon: <Integrity />,
        },
        {
          title: 'RELIABILITY',
          description: 'Reliability towards our business practices has helped ensure that faith in us.',
          icon: <Sustainable />,
        },
        {
          title: 'COMMITMENT',
          description: 'We believe in always delivering upon our promises, irrespective of their circumstances.',
          icon: <Commitment />,
        },
        {
          title: 'QUALITY',
          description: 'The most essential value of all, we believe that great structures can only be built on great quality.',
          icon: <Excellence />,
        },
        {
          title: 'INNOVATIVE',
          description: 'We keep evolving our designs and processes, constantly striving for improvement.',
          icon: <Innovative />,
        },
      ],
      "gallery": {
    "PAGE 3": [
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f17011c4d_3.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "1"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6695078b45fca_gallery page3.webp",
        "mobile_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6695077949137_gallery page3.webp",
        "alt_text": "",
        "priority": "2"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f178f3520_5.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "3"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669508854275e_pagegal2.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "3"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669508dfdb1a3_pagegal3.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "4"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/66950956b13b7_pagegal3=4.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "5"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669509ce18525_pagegal5.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "6"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f17d57f49_6.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "7"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/66950a4504697_pagegal6.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "8"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/66950add6ba75_pagegal7.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "9"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/66950bfe7b73d_pagegal10.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "10"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/66950bd7205f7_pagegal8.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "11"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/66950c2bc552e_pagegal11.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "12"
      }
    ],
    "F-PREMIERE": [
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6695155ae4cb5_F-Premiere_1920x1080 - 08.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "1"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6695155416ad6_F-Premiere_1920x1080 - 02.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "2"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6695154cf1660_F-Premiere_1920x1080 - 05.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "3"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f6daddeec_7.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "4"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f6cbc6d72_3.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "5"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669513396539c_f premierdal01.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "6"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669513755a30b_f premierdal02.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "7"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f6cf968b2_4.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "8"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/6690f6d37f743_5.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "9"
      }
    ],
    "BOULEVARD WALK": [
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e143d9cc0e_1.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "1"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e144cc891d_1.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "2"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e14513678f_2.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "3"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e14560a4d7_3.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "4"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e145aa287c_4.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "5"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e145f35c5d_5.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "6"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e1464f1322_6.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "7"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e146cf1c87_7.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "8"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e14746e6b3_8.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "9"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e147991b45_9.jpg",
        "mobile_image": "",
        "alt_text": "",
        "priority": "10"
      },
      {
        "desktop_image": "https://triverseadvertising.com/homeandsoul_website/admin-portal/uploads/669e1f61bc5d2_bW gal10.webp",
        "mobile_image": "",
        "alt_text": "",
        "priority": "11"
      }
    ]
  }
    };

    return (
        <>
            <Slider Data={pageData.homeBanner} mobHeight={'height_auto'} parentClass={'manageText'} />
            <Container _parentClass="m-0">
                <BreadCrumb pageName="Home and Soul" />
            </Container>
            <Overview Data={pageData.overview} />
            <Counter Data={pageData.number} />
            <Quote Data={pageData.quote} />
            <VissionMission Data={pageData.VissionMission}/>
            <Value Data={pageData.coreValue}/>
            <Tabs galleryData={pageData.gallery}/>
        </>
    );
};

export default AboutHS;
