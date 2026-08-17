import { events } from "./events";

export const calendarData = [
  [
    {
      day: 30,
      outside: true,
      events: [],
    },
    {
      day: 31,
      outside: true,
      events: [],
    },
    {
      day: 1,
      outside: false,
      isToday: false,
      events: events.filter((e) => e.day === 1),
    },
    {
      day: 2,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 3,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 4,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 5,
      outside: false,
      isToday: false,
      events: [],
    },
  ],

  [
    {
      day: 6,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 7,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 8,
      outside: false,
      isToday: true,
      events: [],
    },
    {
      day: 9,
      outside: false,
      isToday: false,
      events: events.filter((e) => e.day === 9),
    },
    {
      day: 10,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 11,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 12,
      outside: false,
      isToday: false,
      events: [],
    },
  ],

  [
    {
      day: 13,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 14,
      outside: false,
      isToday: false,
      events: events.filter((e) => e.day === 14),
      moreCount: 5,
    },
    {
      day: 15,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 16,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 17,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 18,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 19,
      outside: false,
      isToday: false,
      events: [],
    },
  ],

  [
    {
      day: 20,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 21,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 22,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 23,
      outside: false,
      isToday: false,
      events: events.filter((e) => e.day === 23),
    },
    {
      day: 24,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 25,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 26,
      outside: false,
      isToday: false,
      events: [],
    },
  ],

  [
    {
      day: 27,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 28,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 29,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 30,
      outside: false,
      isToday: false,
      events: [],
    },
    {
      day: 1,
      outside: true,
      events: [],
    },
    {
      day: 2,
      outside: true,
      events: [],
    },
    {
      day: 3,
      outside: true,
      events: [],
    },
  ],
];