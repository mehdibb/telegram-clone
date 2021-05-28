

// TODO: improve the representation of the date
export function dateFormat(date: Date): string {
  return `${date.getHours() % 12}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
    ${date.getHours() < 12 ? 'AM' : 'PM'}`;
}