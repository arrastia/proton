import { useEffect, useRef } from 'react';

import lottie from 'lottie-web';

import { loading } from 'assets/lotties';

type Props = {
  size?: number;
};

export const Spinner = ({ size }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      animationData: loading,
      autoplay: true,
      container: ref.current as Element,
      loop: true,
      renderer: 'svg',
      rendererSettings: { progressiveLoad: true }
    });

    return () => {
      instance?.destroy();
    };
  }, []);

  return <div ref={ref} />;
};
