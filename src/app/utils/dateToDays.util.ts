export function dateToDays(date: string) {
  const post_date = new Date(date);
  const today = new Date();
  return today.getTime() - post_date.getTime() / (1000 * 3600 * 24);
}
