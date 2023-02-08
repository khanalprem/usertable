import HighlightImage from "../assets/images/highlight.jpg";
import Fluid from "../assets/images/fluid-logo.svg";
import Olumo from "../assets/images/olumo-logo.svg";
import Kirus from "../assets/images/kirus-logo.png";
const  Data =  [
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
    id:1,
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
]
export default Data;