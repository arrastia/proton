import { useEffect, useRef, useState } from 'react';

import lottie from 'lottie-web';

import { eye } from 'assets/lotties';

import type { AnimationDirection, AnimationItem } from 'lottie-web';
import type { CSSProperties, MouseEvent } from 'react';
import type { VisibilityIconProps } from './@types/VisibilityIcon.types';

export const VisibilityIcon = ({ onClick, size }: VisibilityIconProps) => {
  const [animation, setAnimation] = useState<AnimationItem>();
  const [direction, setDirection] = useState<AnimationDirection>(1);

  const ref = useRef<HTMLDivElement>(null);

  const defaultStyles: CSSProperties = { height: `${size}px`, outline: 'none', overflow: 'hidden', width: `${size}px` };

  useEffect(() => {
    const instance = lottie.loadAnimation({
      animationData: eye,
      autoplay: false,
      container: ref.current as Element,
      loop: false,
      renderer: 'svg',
      rendererSettings: { progressiveLoad: true }
    });

    setAnimation(instance);
    return () => {
      instance?.destroy();
    };
  }, []);

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(event);

    animation?.play();
    animation?.setDirection(direction);

    setDirection(prevDirection => (prevDirection === 1 ? -1 : 1));
  };

  return <div onClick={handleOnClick} ref={ref} style={defaultStyles} />;
};
