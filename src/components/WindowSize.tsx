"use client"
import { useState, useEffect } from "react";

const WindowSize: React.FC = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
  });

  console.log(window.devicePixelRatio);

	useEffect(() => {
		// Function to update window size state
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
      });

		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-[30vh] border bg-gray-100">
			<h1 className="text-4xl font-bold mb-4 text-gray-900">Window Size</h1>
			<p className="text-lg text-gray-700">Width: {windowSize.width}px</p>
			<p className="text-lg text-gray-700">Height: {windowSize.height}px</p>
		</div>
	);
};

export default WindowSize;