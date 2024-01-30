import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdminDImg from '../public/assets/projects/admin.png';
import cryptoImg from '../public/assets/projects/crypto.png'
import Drive from '../public/assets/projects/drive.png'
import Data from '../public/assets/projects/data.png'
import mealAppImg from '../public/assets/projects/meal-app.png'
import Defi from '../public/assets/projects/defi.png'
import SMS from '../public/assets/projects/sms.png'
import VTU from '../public/assets/projects/vtuu.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem
          title='Meal App'
          backgroundImg={mealAppImg}
          projectUrl='https://abdul100-han.github.io/react-meal-app/'
          tech='React JS'
/>
        <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='https://cryptobase.abdulsalammuhammadabubakar.com.ng/'
            tech='React JS'

          />
          

          <ProjectItem
            title='Admin Dashboard'
            backgroundImg={AdminDImg}
            projectUrl='https://abdul100-han.github.io/ecommerce'
            tech='React JS'
          />
         
        

          <ProjectItem
            title='DEFI'
            backgroundImg={Defi}
            projectUrl='https://abdul100-han.github.io/defi-react-website'
            tech='React JS'

          />
          
          <ProjectItem
            title='DRIVE'
            backgroundImg={Drive}
            projectUrl='https://abdul100-han.github.io/react-car-website'
            tech='React JS'

          />
           <ProjectItem
            title='Data Seucred Protection'
            backgroundImg={Data}
            projectUrl='https://datasecure.abdulsalammuhammadabubakar.com.ng'
            tech='React JS'

          />
          <ProjectItem
            title='School Management System'
            backgroundImg={SMS}
            projectUrl='https://newmethodsacademyzaria.com.ng'
            tech='WordPress'

          />
            <ProjectItem
            title='VTU Website'
            backgroundImg={VTU}
            projectUrl='https://aruscodata.com'
            tech=''

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
