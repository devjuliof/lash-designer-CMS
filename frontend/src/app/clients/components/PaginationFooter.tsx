import Image from "next/image";
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

export default function PaginationFooter() {
  return (
    <>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 rounded-l">
        <Image src={leftArrow} alt="Left arrow Icon" /></button>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 text-purple-500">1</button>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 text-purple-500">2</button>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 text-purple-500">3</button>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 text-purple-500">4</button>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 text-purple-500">5</button>
      <button className="outline outline-1 outline-gray-400 px-6 py-3 rounded-r">
        <Image src={rightArrow} alt="Right arrow Icon" />
      </button>
    </>
  );
}