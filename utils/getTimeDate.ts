export function getLocaltimeAndDate() {
  const date: Date = new Date();

  const getFullYear = () => {
    return date.getFullYear();
  };

  const getFullDay = () => {
    return date.getDay();
  };

  return { date, getFullYear, getFullDay };
}
