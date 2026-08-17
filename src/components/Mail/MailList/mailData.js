//export const mailData = [
//  {
//    id: 1,
//    sender: "Annette Black",
//    email: "annette@gmail.com",
//    avatar: "https://i.pravatar.cc/150?img=32",
//    subject: "Meeting Tomorrow",
//    preview:
//      "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//    body: `
//Hi John,

//Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//Praesent commodo cursus magna, vel scelerisque nisl consectetur.

//Thanks,
//Annette
//    `,
//    time: "09:45 AM",
//    date: "Today",
//    unread: true,
//    starred: true,
//    important: false,
//    hasAttachment: true,
//    attachments: [
//      {
//        id: 1,
//        name: "Meeting.pdf",
//        size: "1.2 MB",
//      },
//    ],
//  },

//  {
//    id: 2,
//    sender: "Jacob Jones",
//    email: "jacob@gmail.com",
//    avatar: "https://i.pravatar.cc/150?img=12",
//    subject: "Design Review",
//    preview:
//      "Please check the latest design screens before tomorrow's meeting.",
//    body: `
//Hello,

//Please review the latest dashboard UI.

//Regards,
//Jacob
//    `,
//    time: "08:30 AM",
//    date: "Today",
//    unread: false,
//    starred: false,
//    important: true,
//    hasAttachment: false,
//    attachments: [],
//  },

//  {
//    id: 3,
//    sender: "Jenny Wilson",
//    email: "jenny@gmail.com",
//    avatar: "https://i.pravatar.cc/150?img=47",
//    subject: "Weekly Report",
//    preview:
//      "I've attached the weekly report for your review.",
//    body: `
//Hi,

//Attached is this week's progress report.

//Thanks,
//Jenny
//    `,
//    time: "Yesterday",
//    date: "Yesterday",
//    unread: true,
//    starred: false,
//    important: false,
//    hasAttachment: true,
//    attachments: [
//      {
//        id: 1,
//        name: "Weekly_Report.xlsx",
//        size: "845 KB",
//      },
//    ],
//  },

//  {
//    id: 4,
//    sender: "Robert Fox",
//    email: "robert@gmail.com",
//    avatar: "https://i.pravatar.cc/150?img=15",
//    subject: "Invoice Payment",
//    preview:
//      "Your payment has been successfully processed.",
//    body: `
//Hello,

//We have received your payment successfully.

//Thank you.

//Finance Team
//    `,
//    time: "Monday",
//    date: "Monday",
//    unread: false,
//    starred: true,
//    important: false,
//    hasAttachment: false,
//    attachments: [],
//  },

//  {
//    id: 5,
//    sender: "Kristin Watson",
//    email: "kristin@gmail.com",
//    avatar: "https://i.pravatar.cc/150?img=41",
//    subject: "Holiday Schedule",
//    preview:
//      "Please find the holiday calendar for the upcoming year.",
//    body: `
//Hi Team,

//Please review the attached holiday schedule.

//Regards,
//Kristin
//    `,
//    time: "Jul 12",
//    date: "12 Jul",
//    unread: false,
//    starred: false,
//    important: false,
//    hasAttachment: true,
//    attachments: [
//      {
//        id: 1,
//        name: "Holiday_Calendar.pdf",
//        size: "620 KB",
//      },
//    ],
//  },
//];

import FavoriteImage from "../../../assets/images/FavoriteImage.png";
//import Dustin from "../../../assets/images/avatars/Dustin.png";
//import Jane from "../../../assets/images/avatars/Jane.png";
//import Brundon from "../../../assets/images/avatars/Brundon.png";
//import Jacob from "../../../assets/images/avatars/Jacob.png";
//import Shane from "../../../assets/images/avatars/Shane.png";

export const mailData = [
  {
    id: 1,
    sender: "Regina Cooper",
    email: "regina_cooper@mail.com",
    avatar: FavoriteImage,
    subject: "Creative Director Resume",
    preview:
      "The Arts play a large role in the expression of inner thoughts and beauty in my life...",
    body: `Hello, Regina Cooper!

I am writing to introduce you to David Boyd. I know you've been looking hard for a candidate for that Creative Director position and I believe David Boyd fits the position.

David Boyd and I worked together at Apple Company, where they were the senior Creative Director. They did a terrific job there. David Boyd was responsible for completely restructuring both the public-facing and internal websites. They'd be a great fit at Google company.

I've attached David Boyd resume and portfolio for your review. You can contact David Boyd at regina_cooper@mail.com.

Thanks for any help you can give.

Best regards,

Regina Cooper`,
    time: "10:45",
    date: "May 27, 2020",
    unread: true,
    starred: false,
    important: false,
    hasAttachment: true,
    bookmarked: true,
    attachments: [
      {
        id: 1,
        name: "Resume.pdf",
        size: "570 KB",
      },
      {
        id: 2,
        name: "Portfolio.zip",
        size: "250 MB",
      },
    ],
  },

  {
    id: 2,
    sender: "Dustin Williamson",
    email: "dustin@mail.com",
    avatar: FavoriteImage,
    subject: "Meeting with friends",
    preview:
      "Hello, Mark! I am writing to introduce you to David Boyd...",
    body: `Hello Mark,

Let's catch up this weekend.

Regards,
Dustin`,
    time: "10:40",
    date: "May 27, 2020",
    unread: false,
    starred: false,
    important: false,
    hasAttachment: false,
    bookmarked: false,
    attachments: [],
  },

  {
    id: 3,
    sender: "Jane Wilson",
    email: "jane@mail.com",
    avatar: FavoriteImage,
    subject: "UX Conference in New York",
    preview:
      "We use the Arts as a means of touching that part of us that we cannot reach with...",
    body: `Conference invitation details.`,
    time: "09:15",
    date: "May 27, 2020",
    unread: false,
    starred: false,
    important: false,
    hasAttachment: true,
    bookmarked: false,
    attachments: [
      {
        id: 1,
        name: "Conference.pdf",
        size: "1.4 MB",
      },
    ],
  },

  {
    id: 4,
    sender: "Brundon Pend",
    email: "brundon@mail.com",
    avatar: FavoriteImage,
    subject: "Mulzi's weekly design #236",
    preview:
      "The arts allow us to be as specific or as abstract as we please. It helps us become...",
    body: `Weekly design update.`,
    time: "09:01",
    date: "May 27, 2020",
    unread: true,
    starred: false,
    important: false,
    hasAttachment: false,
    bookmarked: true,
    attachments: [],
  },

  {
    id: 5,
    sender: "Jacob Hawkins",
    email: "jacob@mail.com",
    avatar: FavoriteImage,
    subject: "Weekly project report",
    preview:
      "From dance and music to abstract art our concept of life is shown through the various...",
    body: `Weekly project report attached.`,
    time: "08:20",
    date: "May 27, 2020",
    unread: false,
    starred: false,
    important: false,
    hasAttachment: false,
    bookmarked: false,
    attachments: [],
  },

  {
    id: 6,
    sender: "Shane Black",
    email: "shane@mail.com",
    avatar: FavoriteImage,
    subject: "Order Status #24197118",
    preview:
      "The arts teach us how to communicate through creative expression...",
    body: `Your order has been shipped successfully.`,
    time: "08:10",
    date: "May 27, 2020",
    unread: false,
    starred: false,
    important: false,
    hasAttachment: false,
    bookmarked: false,
    attachments: [],
  },

  {
    id: 7,
    sender: "Regina Cooper",
    email: "regina@mail.com",
    avatar: FavoriteImage,
    subject: "Welcome to Dribbble!",
    preview:
      "The Arts play a large role in the expression of inner thoughts and beauty...",
    body: `Welcome to Dribbble.`,
    time: "08:02",
    date: "May 27, 2020",
    unread: false,
    starred: false,
    important: false,
    hasAttachment: false,
    bookmarked: false,
    attachments: [],
  },
];