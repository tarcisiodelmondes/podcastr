export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const secondes = duration % 60;

  const timeString = [hours, minutes, secondes]
    .map((unity) => String(unity).padStart(2, '0'))
    .join(':');

  return timeString;
}
