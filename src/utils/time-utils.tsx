// Converts UTC DateTime string to a localized time, ex: 3:00 PM
export const convertTimezone = (dateString: string, timeZone?: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: timeZone,
  });
};
