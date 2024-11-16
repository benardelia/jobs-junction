import React, { useState, useEffect } from 'react';
import pic2 from './pics/bright-marbles-5k-3840x2160-18216.png'
import pic3 from './pics/coffee-cup-refill-3840x2160-13666.png'
import pic4 from './pics/gwen-stacy-logo-3840x2160-18202.jpg'
import pic5 from './pics/coding-black-3840x2160-13653.png'



const slides = [
 {
 id: 1,
 text: 'Trusted platform for jobs',
 bgColor: pic4, // Tailwind background color
 },
 {
 id: 2,
 text: 'daily jobs update',
 bgColor: pic2,
 },
 {
 id: 3,
 text: 'Trustful and reliable',
 bgColor: pic3,
 },
];
function Carousel() {
 const [currentSlide, setCurrentSlide] = useState(0);
 // Automatically change slides every 3 seconds
 useEffect(() => {
 const interval = setInterval(() => {
 setCurrentSlide((prevSlide) =>
 prevSlide === slides.length - 1 ? 0 : prevSlide + 1
 );
 }, 3000); // Change every 3 seconds
 return () => clearInterval(interval);
 }, []);
 return (
 <div className="relative w-full h-72 overflow-hidden">
 {slides.map((slide, index) => (
 <div
 key={slide.id}
 className={`${slide.bgColor} absolute inset-0 transition-transform duration-700 ease-in-out
transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
 > <img src={slide.bgColor} className='w-full absolute h-full'/>
 <div className="flex items-center justify-center pl-72 absolute h-full text-white text-2xl font-bold">
 {slide.text}
 </div>
 </div>
 ))}
 {/* Navigation Dots */}
 <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
 {slides.map((_, idx) => (
 <button
 key={idx}
 onClick={() => setCurrentSlide(idx)}
 className={`h-3 w-3 rounded-full ${currentSlide === idx ? 'bg-white' : 'bg-gray-400'}`}
 />
 ))}
 </div>
 </div>
 );
}
export default Carousel