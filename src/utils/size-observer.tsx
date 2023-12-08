import React, { useCallback, useEffect, useState } from "react";

interface ScrollValue {
	innerWidth: number;
}

export const SizeContext = React.createContext<ScrollValue>({
	innerWidth: 0,
});

const SizeObserver: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const [innerWidth, setInnerWidth] = useState(0);
	const handelResize = useCallback(() => {
		setInnerWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		handelResize();
		window.addEventListener("resize", handelResize, { passive: true });
		return () => window.removeEventListener("resize", handelResize);
	}, [handelResize]);

	return (
		<SizeContext.Provider value={{ innerWidth }}>
			{children}
		</SizeContext.Provider>
	);
};

export default SizeObserver;
