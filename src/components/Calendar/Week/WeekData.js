export const weekDays = [
  { id: 1, day: "MO", date: 6 },
  { id: 2, day: "TU", date: 7 },
  { id: 3, day: "WE", date: 8, active: true },
  { id: 4, day: "TH", date: 9 },
  { id: 5, day: "FR", date: 10 },
  { id: 6, day: "SA", date: 11 },
  { id: 7, day: "SU", date: 12 },
];

export const timeSlots = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
];

export const weekEvents = [
  {
    id: 1,
    day: 2, // Tuesday
    title: "Meeting with...",
    time: "10:00 - 11:30",
    startHour: 1,
    duration: 1,
    color: "cyan",
  },
  {
    id: 2,
    day: 2, // Tuesday
    title: "New Event",
    time: "10:00 - 11:30",
    startHour: 2,
    duration: 4,
    color: "cyan",
  },
  {
    id: 3,
    day: 3, // Wednesday
    title: 'Project "Rocket"',
    time: "10:00 - 11:30",
    startHour: 4,
    duration: 2,
    color: "yellow",
  },
  {
    id: 4,
    day: 4, // Thursday
    title: "Call Back Priscilla",
    time: "10:00 - 11:30",
    startHour: 7,
    duration: 4,
    color: "cyan",
  },
  {
    id: 5,
    day: 5, // Friday
    title: "Presentation",
    time: "10:00 - 11:30",
    startHour: 3,
    duration: 5,
    color: "green",
  },
  {
    id: 6,
    day: 5, // Friday
    title: "Presentation",
    time: "10:00 - 11:30",
    startHour: 8,
    duration: 2,
    color: "green",
  },
];

export const currentTime = {
  label: "06:30",
  hour: 6,
  minute: 30,
};