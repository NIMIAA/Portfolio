import { useState, useRef } from 'react';
import Picture from './assets/TJ.png';
import ToDo from './assets/ToDo.png';
import klenz from './assets/klenz.png';
import HNG from './assets/HNG.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import { MdDeveloperMode } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { AiTwotoneApi } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import 'react-multi-carousel/lib/styles.css';

const LandPage = () => {
    const projects = [
        {
            Image:ToDo,
            Title:'A To-Do List App',
            Description:'HTML CSS JavaScript',
            live:'https://nimiaa.github.io/To-Do-List',
            code:'https://github.com/NIMIAA/To-Do-List',
        },
        {
            Image:klenz,
            Title:"A Photographer's Portfolio",
            Description:'React JS',
            live:'https://klenz.onrender.com',
            code:'https://github.com/NIMIAA/klenz',
        },
        {
            Image:HNG,
            Title:'Furniture Shop',
            Description:'React JS',
            live:'https://hngtask2-git-master-gasper-wonders-projects.vercel.app/',
            code:'https://github.com/NIMIAA/hngtasktwo',
        },
    ];
    const emailRef = useRef(null);
    const [buttonText, setButtonText] = useState('Copy');
    const copyToClipboard = () => {
        if (emailRef.current) {
            const email = emailRef.current.innerText;
        navigator.clipboard.writeText(email).then(
          () => {
            setButtonText('Copied!');
            setTimeout(() => setButtonText('Copy'), 2000); 
          },
          () => {
            setButtonText('Failed to copy.');
            setTimeout(() => setButtonText('Copy'), 2000);
          }
        );
    }
      };
  return (
    <div className="bg-background pt-8">
        <div className="px-8 flex md:items-center items-start justify-between text-sm">
            <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2 border rounded-full p-2 bg-sub">
                    <p ref={emailRef}>ayomide.aderotoye@gmail</p>
                    <button onClick={copyToClipboard} className="bg-white rounded-full px-4 py-1 font-semibold">{buttonText}</button>
                </div>
                <div className="border rounded-full py-1 px-2 bg-sub">
                <button className="bg-white rounded-full px-4 py-1 font-semibold">CV</button>
                </div>
            </div>
            <div className='md:flex'>
                <a href="http://linkedin.com/in/aderotoye-ayomide2910">
                <FaLinkedin className='mx-2 mb-2' size={24}/>
                </a>
                <a href="https://github.com/NIMIAA">
                <FaGithub className='mx-2  mb-2' size={24}/>
                </a>
                <a href="https://www.instagram.com/nimi.a.a/">
                <FaInstagram className='mx-2 ' size={24}/>
                </a>
            </div>
        </div>
        <div className="flex justify-center p-16">
            <div>
                <div className='flex items-center justify-center relative '>
                    <img src={Picture} width={150} className='border-2 border-white bg-dark rounded-full' alt="Me"/>
                    {/* <p className='absolute right-52 rounded-full bottom-10 bg-white p-4'>Aderotoye Ayomide</p> */}
                </div>
                <div className='my-8 flex items-center justify-center text-center'>
                    <p className="font-semibold text-2xl md:text-4xl md:w-3/4 ">My name is Aderotoye Ayomide, I build clean, responsive and dynamic web interfaces.
                    </p>
                </div>
                <div className="text-center">
                    <button className="bg-black text-white py-2 px-4 rounded-full">About me coming soon..</button>
                </div>
            </div>
        </div>
        <div className='bg-white flex items-center justify-center rounded-3xl'>
            <div className='md:flex my-8 text-center font-semibold text-xl'>
                <div>
                <FaHtml5 size={100} className='m-8'/>
                <p>HTML</p>
                </div>
                <div>
                <FaCss3Alt size={100} className='m-8'/>
                <p>CSS</p>
                </div>
                <div>
                <IoLogoJavascript size={100} className='m-8'/>
                <p>JavaScript</p>
                </div>
                <div>
                <FaReact size={100} className='m-8'/>
                <p>React JS</p>
                </div>
                <div>
                <RiTailwindCssFill size={100} className='m-8'/>
                <p>TailWind CSS</p>
                </div>
                <div>
                <FaBootstrap size={100} className='m-8'/>
                <p>BootStrap</p>
                </div>
            
            </div>
        </div>
        <div className='py-8 px-16'>
            <div className='text-center flex items-center justify-center relative'>
            <p className='font-semibold text-lg md:text-4xl w-full md:w-3/4 p-16'>Available for collaborations with brands, agencies and organizations for impactful results.</p>
            <div className='absolute md:left-1/2 -bottom-4 bg-white py-1 px-4 rounded-full'>Services</div>
            </div>
            <hr/>
            <div  className='border border-dark'></div>
            <div className='my-16 '>
            <div className='grid md:grid-cols-4 gap-16 text-center md:text-left'>
                <div>
                    <div className='flex items-center justify-center mb-2'>
                    <MdDeveloperMode size={28}/>
                    </div>
                    <p className='font-semibold text-md'>Website Design & Development</p>
                    <p className='text-sm '>Creating fast, responsive websites tailored to your audience and goals, ensuring seamless performance across devices.</p>
                </div>
                <div>
                <div className='flex items-center justify-center mb-2'>
                    <CgWebsite size={28}/>
                    </div>
                    <p className='font-semibold text-md'>UI/UX Design Implementation
                    </p>
                    <p className='text-sm'>Bringing stunning designs to life with clean, maintainable code and a user-centered approach.</p>
                </div>
                <div>
                <div className='flex items-center justify-center mb-2'>
                    <AiTwotoneApi size={28}/>
                    </div>
                    <p className='font-semibold text-md text-center'>API Integration</p>
                    <p className='text-sm'>Seamlessly connecting the frontend to powerful backends, ensuring smooth performance and robust functionality.</p>
                </div>
                <div>
                <div className='flex items-center justify-center mb-2'>
                    <MdAnimation size={28}/>
                    </div>
                    <p className='font-semibold text-md'>Animations & Interactivity</p>
                    <p className='text-sm'>Transforming static websites into interactive experiences that captivate users and drive engagement.</p>
                </div>
            </div>
            </div>
        </div>
        <div className='bg-white text-black p-8 rounded-md'>
            <p className='text-center font-semibold text-2xl underline'>My Projects</p>
        <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

    {
        projects.map((items)=>(
            <div className='p-8'>
                <a href={items.live}>
                <img src={items.Image} alt="list app" />
                </a>
                <p className='font-semibold text-xl my-2'>{items.Title}</p>
                <div className='flex justify-between'>
                <p>{items.Description}</p>
                <a href={items.code} className='border-b'>View Code</a>
                </div>
            </div>
        ))
    }
        </Carousel>
        </div>
        <div className='p-16'>
        <p className="text-center font-semibold text-2xl underline">Experiences</p>
        <div className='grid md:grid-cols-2 gap-16 justify-center my-8'>
            <div className='border shadow-md p-4 rounded-md'>
                <div className='flex justify-between text-md font-semibold'>
                <p>RUN Tech Space, Nigeria</p>
                <p>October 2023 - June 2024</p>
                </div>
                <p className='text-lg font-bold my-2'>Frontend Development - Stack Lead</p>
                <p>Led a team of frontend developers, architecting responsive and scalable web applications using modern frameworks like React and Vue.js. Collaborated with designers and backend teams to deliver seamless user experiences. Managed API integrations, conducted code reviews, and optimized performance. Mentored junior developers and ensured adherence to best practices.</p>
            </div>
            <div className='border shadow-md p-4 rounded-md'>
                <div className='flex justify-between  text-md font-semibold'>
                <p>Technology Law Club, Redeemer's University.</p>
                <p>September 1st - Present</p>
                </div>
                <p className='text-lg font-bold my-2'>Head of Tech Skills Acquisition & Tech Startups</p>
                <p>Oversee tech skills development and startup initiatives, leading programs that equip members with in-demand technical expertise. Collaborate with industry leaders to organize workshops, mentorship sessions, and startup incubation. Manage team efforts in curating learning resources and fostering innovation in tech entrepreneurship.</p>
            </div>
        </div>
        </div>
        <div className='bg-white px-16 pt-10 rounded-t-3xl'>
            <div className='flex items-center justify-center'>
                <div className='text-center mb-16'>
                    <div className='flex justify-center '>
                        <FaRegHandshake size={80} className='border rounded-full p-4 bg-background'/>
                    </div>
                    <p className="font-semibold text-4xl text-center my-8">Tell me about your next project</p>
                    <div>
                        <button className='bg-black text-white px-4 py-2 rounded-full mx-4'>
                        <a href="mailto:ayomide.aderotoye@gmail.com">Email Me</a></button>
                        <button className='bg-white text-black border-2 border-background px-4 py-2 rounded-full mx-4'>
                        <a href="https://wa.link/9rboqc">Whatsapp</a></button>
                    </div>
                </div>
            </div>
            <div className='border-t flex justify-center py-8'>
            <div className='md:flex items-center'>
            <div className='flex items-center md:mr-4'>
            <FaRegCopyright className='mr-2'/>
            2024 All rights reserved</div>
            <div className='flex justify-center my-1'>
                <a href="http://linkedin.com/in/aderotoye-ayomide2910">
                <FaLinkedin className='mx-2' size={24}/>
                </a>
                <a href="https://github.com/NIMIAA">
                <FaGithub className='mx-2' size={24}/>
                </a>
                <a href="https://www.instagram.com/nimi.a.a/">
                <FaInstagram className='mx-2' size={24}/>
                </a>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LandPage;