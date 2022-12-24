import { Link } from 'react-router-dom';
import './App.css';
import AppWrapper from './components/AppWrapper/AppWrapper';
// import Blog from './components/Blog';
import Features from './components/Features/Features';
import List from './components/List';
import banner1 from './images/banner1.jpg'
import Pricing from './components/Pricing';
// import Stats from './components/Stats';
import Teams from './components/Teams';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <AppWrapper>
      <header className="">
        <List />
        <Teams />
        {/* <Stats /> */}
        <Pricing />
        <Features />
        {/* <Blog /> */}
        <div>
            <div className="2xl:mx-auto 2xl:container md:py-12 py-9">
                <div className="relative rounded-md">
                    <img src={banner1} alt="city view" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                    <img src="https://linkpicture.com/q/banner2_10.jpg" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative z-20 bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Act Before It’s Too Late!</h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Continuous improvement is better than delayed perfection – Mark Twain.</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">
                             <Link to="/contact">
                              Contact Me
                             </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Testimonial />
      </header>
    </AppWrapper>
  );
}

export default App;
