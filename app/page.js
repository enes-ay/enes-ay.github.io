import Image from 'next/image';
import imgFoodDelivery from './images/food_delivery.png';
import imgBooking from './images/booking.png';
import imgFinancial from './images/financial.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaMedium } from 'react-icons/fa'; // Icons from react-icons

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">

      <header className="flex flex-col md:flex-row items-start md:justify-between w-full max-w-7xl mx-auto px-4 mt-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wider mb-4 mt-10 animate-fadeInDown text-left">
            Enes Ay
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 animate-fadeInUp text-left">
            Showcasing my mobile apps
          </p>

          {/* Contact Bar */}
          <div className="flex space-x-6 mt-4 animate-fadeInUp">
            <a href="https://www.linkedin.com/in/ayenes/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white text-3xl" />
            </a>
            <a href="https://github.com/enes-ay" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white text-3xl" />
            </a>
            <a href="https://medium.com/@enes-ay">
              <FaMedium className="text-gray-400 hover:text-white text-3xl" />
            </a>
            
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center w-full px-4">
        {/* Project Section */}
        <section className="w-full max-w-7xl mb-20 mt-20">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-8 font-semibold animate-fadeIn">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl shadow-black transition-transform transform hover:scale-105 animate-fadeInUp">
              <div className="flex justify-center mb-4">
                <Image
                  src={imgFoodDelivery}
                  width={250}
                  height={250}
                  alt="Food Delivery App Screenshot"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl text-white mb-2">Food Delivery App</h3>
              <p className="text-gray-400">
                An Android app for food delivery with Firebase integration and Google Sign-In.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl shadow-black transition-transform transform hover:scale-105 animate-fadeInUp">
              <div className="flex justify-center mb-4">
                <Image
                  src={imgBooking}
                  width={250}
                  height={250}
                  alt="Booking App Screenshot"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl text-white mb-2">Booking App</h3>
              <p className="text-gray-400">
                A booking app with streamlined user experience and modern UI.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl shadow-black transition-transform transform hover:scale-105 animate-fadeInUp">
              <div className="flex justify-center mb-4">
                <Image
                  src={imgFinancial}
                  width={250}
                  height={250}
                  alt="Financial Literacy App Screenshot"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl text-white mb-2">Financial Literacy App</h3>
              <p className="text-gray-400">
                A mobile app to help users enhance their financial literacy skills.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-center mt-auto">
        <p className="text-gray-400">© 2024 Personal Website | Enes Ay</p>
      </footer>
    </div>
  );
}
