import { SectionHeader } from '../components';
import { useRef, useEffect } from 'react';
import { courses } from '../constants';
import { Course } from '../components';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

register();

const PopularCourses = () => {
    const sliderRef = useRef(null);
    const swiperParams = {
      spaceBetween: 16,
      grabCursor: true,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
      }
    }

    useEffect(() => {
       sliderRef.current && Object.assign(sliderRef.current, swiperParams);
    }, []);

    return <section id="popular">
        <div className="flex flex-col gap-y-24">
            <SectionHeader title='Explore Most Popular Our Courses' link='#'/>
            <div className='flex flex-col gap-y-4'>
                <swiper-container ref={sliderRef}>
                    {
                        courses.map((course) => {
                           if (course.rating >= 4.8) {
                            return <swiper-slide key={course.id}>
                                <Course 
                                    id={course.id} 
                                    title={course.title} 
                                    category={course.category} 
                                    difficulty={course.difficulty} 
                                    thumbnail={course.thumbnail}
                                    instructor={{name: course.instructor.name, pic: course.instructor.pic}}
                                    rating={course.rating}
                                />
                            </swiper-slide>
                           }
                        })
                    }
                </swiper-container>
            </div>
        </div>
    </section>;
};

export default PopularCourses;