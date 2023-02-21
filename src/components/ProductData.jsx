import HighlightImage from "../assets/images/highlight.jpg";
import James from "../assets/images/avatar-female.jpg";
import Fluid from "../assets/images/fluid-logo.svg";
import Olumo from "../assets/images/olumo-logo.svg";
import Kirus from "../assets/images/kirus-logo.png";
import { FiFacebook,FiTwitter,FiLinkedin,FiInstagram,FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
const  ProductData =  [
  {
    id:1,
    name:'menu',
    menuItems:[
      {
        id:1,
        name:'home',
        to:'/'
      },
      {
        id:2,
        name:'about',
        to:'/about'
      },
      {
        id:3,
        name:'services',
        to:'/services'
      },
      {
        id:4,
        name:'portfolio',
        to:'/portfolio'
      },
      {
        id:5,
        name:'teams',
        to:'/teams'
      },
      {
        id:6,
        name:'contact',
        to:'/contact'
      }
    ]
  },
  {
    id:2,
    name:'services',
    serviceItems:[
      {
        id:1,
        title:'Software & Apps Development',
        icon:'/',
        description:'We build digital applications to provide digital solutions that contribute to efficient data collection and visualization focusing mainly on geodata collection and visualization.'
      },
      {
        id:2,
        title:'ICT & Digital Development Research',
        icon:'/',
        description:'We build digital applications to provide digital solutions that contribute to efficient data collection and visualization focusing mainly on geodata collection and visualization.'
      },
      {
        id:3,
        title:'Creative Graphic Design',
        icon:'/',
        description:'We build digital applications to provide digital solutions that contribute to efficient data collection and visualization focusing mainly on geodata collection and visualization.'
      }
      
    ]
  },
  {
    id:3,
    name:'highlight',
    highlightItems:[
      {
        id:1,
        image:HighlightImage,
        title:'Fluid Digital marketing platform',
        description:"Fluid's mobile app gives your field the ability to summon leads, engage customers, and promote your brand from anywhere.",
        client:'fluid',
        startDate:'2018-01-01',
        endDate:''
      },
      {
        id:2,
        image:HighlightImage,
        title:'Fluid Digital marketing platform',
        description:"Fluid's mobile app gives your field the ability to summon leads, engage customers, and promote your brand from anywhere.",
        client:'Olumo',
        startDate:'2018-01-01',
        endDate:''
      },
      {
        id:3,
        image:HighlightImage,
        title:'Kirus Digital marketing platform',
        description:"Kirus's mobile app gives your field the ability to summon leads, engage customers, and promote your brand from anywhere.",
        client:'Kirus',
        startDate:'2018-01-01',
        endDate:''
      },
      {
        id:4,
        image:HighlightImage,
        title:'Somdi Digital marketing platform',
        description:"Somdi's mobile app gives your field the ability to summon leads, engage customers, and promote your brand from anywhere.",
        client:'Somdi',
        startDate:'2018-01-01',
        endDate:''
      },
    ]
  },
  {
    id:4,
    name:'trusted',
    trustedItems:[
      {
        id:1,
        name:"Fluid",
        image:Fluid,
      },
      {
        id:2,
        name:"Olumo",
        image:Olumo,
      },
      {
        id:3,
        name:"Kirus",
        image:Kirus,
      },
      {
        id:4,
        name:"Fluid",
        image:Fluid,
      },
      {
        id:5,
        name:"Olumo",
        image:Olumo,
      },
      {
        id:6,
        name:"Kirus",
        image:Kirus,
      },
    ]
  },
  {
    id:5,
    name:'footer',
    companyMenus:[
      {
        id:1,
        name:"About",
        to:"/about"
      },
      {
        id:2,
        name:"Teams",
        to:"/teams"
      },
      {
        id:3,
        name:"Portfolio",
        to:"portfolio"
      },
      
    ]
  },
  {
    id:6,
    name:'socialIcons',
    socialIcons:[
      {
        id:1,
        icon:<FiFacebook/>,
        url:'https://www.facebook.com/DanpheInfoTech',
      },
      {
        id:2,
        icon:<FiTwitter/>,
        url:'https://www.facebook.com/DanpheInfoTech',
      },
      {
        id:3,
        icon:<FiLinkedin/>,
        url:'https://www.linkedin.com/company/danphe-software-labs/',
      },
      {
        id:4,
        icon:<FiInstagram/>,
        url:'https://www.linkedin.com/company/danphe-software-labs/',
      },
    
    ]
  },
  {
    id:7,
    name:'teams',
    teamsMember:[
      {
        id:1,
        image:James,
        name:"Prem Prasad Khanal",
        post:'Sr.Frontend Developer',
        description:"I am a passionate Frontend Developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:2,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:3,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:4,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:5,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:6,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Railss developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:7,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:8,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:9,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:10,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:11,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
      {
        id:12,
        image:James,
        name:"James watt",
        post:'Senior Rails Developer',
        description:"I am a passionate Rails developer who also relishes exploring new technology.",
        socialIcons:[
          {
            id:1,
            icon:<FiFacebook/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:2,
            icon:<FiTwitter/>,
            url:'https://www.facebook.com/DanpheInfoTech',
          },
          {
            id:3,
            icon:<FiLinkedin/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
          {
            id:4,
            icon:<FiInstagram/>,
            url:'https://www.linkedin.com/company/danphe-software-labs/',
          },
        
        ]
      },
    ]
  },
  {
    id:8,
    name:'contact',
    contactItems:[
      {
        id:1,
        icon:<FiPhoneCall/>,
        name:'Phone Number',
        address:'+9779851182852'
      },
      {
        id:2,
        icon:<FiMail/>,
        name:'Email Address',
        address:'info@danpheite.com'
      },
      {
        id:3,
        icon:<FiMapPin/>,
        name:'Location',
        address:'Tanka Prasad Ghumti Sadak, Anamnagar, Kathmandu'
      },
    
    ]
  },
]
export default ProductData;