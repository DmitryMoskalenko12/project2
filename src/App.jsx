import { Header, Statistics, Cta, Footer } from "./components";
import { About, Blogs, Courses, Hero, Instructors, PopularCourses } from "./sections";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Statistics />
            <About />
            <PopularCourses />
            <Courses />
            <Instructors />
            <Blogs />
            <Cta />
            <Footer />
        </>
    );
}
