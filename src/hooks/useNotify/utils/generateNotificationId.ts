export const generateNotificationId = () => {
  let count = 0;

  return () => (++count).toString();
};
