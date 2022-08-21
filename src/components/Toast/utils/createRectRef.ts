export const createRectRef = (onRect: (rect: DOMRect) => void) => (element: HTMLElement | null) => {
  if (element) {
    setTimeout(() => {
      const boundingRect = element.getBoundingClientRect();
      onRect(boundingRect);
    });
  }
};
