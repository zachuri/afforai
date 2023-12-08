import { useCallback, useRef, useEffect } from "react";

const useAnimationFrame = (enabled: boolean, callBack: () => void) => {
	const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>();

	const animate = useCallback(() => {
		callBack();
		requestRef.current = requestAnimationFrame(animate);
	}, [callBack]);

	useEffect(() => {
		if (enabled) {
			requestRef.current = requestAnimationFrame(animate);
			return () => {
				if (requestRef.current) {
					return cancelAnimationFrame(requestRef.current);
				}
			};
		}
	}, [enabled, animate]);
};

export default useAnimationFrame;
