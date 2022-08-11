import { useEffect, useRef } from 'react';

import { createFountainElement } from './utils/createFountainElement';

export const useFountain = <T extends HTMLElement>(imageUrl: string, disabled?: boolean, ignoreCoolModeDocsDemo?: boolean) => {
  const ref = useRef<T>(null);
  const resolvedImageUrl = imageUrl;

  useEffect(() => {
    if (ref.current && resolvedImageUrl) return createFountainElement(ref.current, resolvedImageUrl, disabled, ignoreCoolModeDocsDemo);
  }, [resolvedImageUrl, disabled, ignoreCoolModeDocsDemo]);

  return ref;
};
