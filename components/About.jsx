import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I began my journey into programming in 2019, initially diving into Python as my first programming language. 
            Intrigued by its versatility and the possibilities it opened up, I soon found myself 
            delving into web development. Since then, I&apos;ve been honing my skills in crafting dynamic and interactive web applications.
            Alongside honing my coding skills, I also organized a Python programming bootcamp at Nuhu Bamalli Polytechnic Zaria, 
            where I had the 
            privilege of teaching students how to build web applications using Python.
          </p>
          <p className='py-2 text-gray-600'>
            My journey into web development began in 2020, marking the start of an 
            exciting exploration into the world of coding. With Python as my 
            initial stepping stone, I quickly found myself drawn to the dynamic realm of web technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
