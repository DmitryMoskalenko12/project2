import { hero01, hero02, hero03, roundedText } from '../constants/images';
import { leftSideVariants, rightSideVariants } from '../constants/motion';
import { motion } from 'framer-motion';

const Hero = () => {
    return <section className="flex items-center" id="home">
        <div className="container flex items-center justify-center">
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row pt-[70px] lg:pt-0 gap-8">
                <motion.div variants={leftSideVariants} initial='hidden' animate='visible' className="flex flex-col gap-y-8 items-center lg:items-start text-center lg:text-start">
                    <div className="flex flex-col gap-y-4">
                       <h2 className="section-title-before section-title-after text-h1 text-gray-10">Unlock Your Potential With Our Diverse Online Courses</h2>
                       <p className="text-base font-medium text-gray-60">Explore a world of knowledge and skills at your fingertips, from business and technology to the arts and beyond </p>
                    </div>
                    <button className="btn btn-primary" type="button">Get Started</button>
                </motion.div>
                <motion.div variants={rightSideVariants} initial='hidden' animate='visible' className="relative">
                    <div className="grid grid-cols-[minmax(70px,_230px)_minmax(70px,_250px)] grid-rows-[auto_auto] sm:grid-cols-[240px_270px] sm:grid-rows-[220px_220px] xl:grid-cols-[270px_300px] xl:grid-rows-[250px_250px] gap-4">
                        <img className='rounded-4xl' src={hero01} alt="" />
                        <img className='row-span-2 rounded-4xl' src={hero02} alt="" />
                        <img className='rounded-4xl' src={hero03} alt="" />
                    </div>
                    <div className='hidden sm:block w-[120px] h-[120px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-[calc(50%-15px)]'>
                        <img src={roundedText} alt="Explore More" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>;
};

export default Hero;