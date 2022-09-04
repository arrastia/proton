import { useEffect, useRef, useState } from 'react';

import lottie from 'lottie-web';

import { Styles } from './VisibilityIcon.styles';

import { eye } from 'assets/lotties';

import type { AnimationDirection, AnimationItem } from 'lottie-web';
import type { MouseEvent } from 'react';
import type { VisibilityIconProps } from './@types/VisibilityIcon.types';

export const VisibilityIcon = ({ onClick, size }: VisibilityIconProps) => {
  const [animation, setAnimation] = useState<AnimationItem>();
  const [direction, setDirection] = useState<AnimationDirection>(1);

  const ref = useRef<HTMLDivElement>(null);

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

  return <Styles.Icon onClick={handleOnClick} ref={ref} size={size} />;
};
