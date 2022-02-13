import React, { useRef, createContext, useContext, useState } from "react";

const carouselContext = createContext();

export const useCarousel = () => {
	return useContext(carouselContext);
};

const CarouselApi = ({ children }) => {
	const listRef = useRef(null);
  const [showbtn, setShowbtn] = useState(false)
  const scrollLeft = () => {
		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: 50,
				behaviour: "smooth",
			});
		}
  };
  const showScroll = () => {
    setShowbtn(true)
  }
  const scrollRight = () => {
		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: -50,
				behaviour: "smooth",
			});
		}
  };
	return (
		<carouselContext.Provider value={{ listRef, scrollLeft, scrollRight, showbtn, showScroll}}>
			{children}
		</carouselContext.Provider>
	);
};

export default CarouselApi;
