export const projects = [
  {
    slug: "green-mini-soccer",
    title: "Green Mini Soccer Booking System",
    category: "Information System / Web Development",
    description:
      "A web-based booking system designed to manage field reservations, payments, schedules, and administrative verification.",
    technologies: ["HTML", "CSS", "PHP", "Database"],
    image: "/assets/projects/green-mini-soccer.jpg",
    caseStudy: {
      overview:
        "A booking platform for a mini soccer field, built to replace manual, paper-based reservation handling with a simple digital flow.",
      problem:
        "Field reservations, payment confirmation, and schedule tracking were managed manually, which made conflicts and errors hard to avoid.",
      approach:
        "Mapped out the reservation flow first — from schedule selection to payment verification — before implementing the interface and data structure.",
      process:
        "Built the booking form, schedule view, and an administrative verification step using HTML, CSS, and JavaScript with a relational database for reservation records.",
      technologyUsed: ["HTML", "CSS", "PHP", "Database"],
      result:
        "A working booking system prototype covering reservation, schedule, and payment verification as an academic web development project.",
      learned:
        "Practiced structuring a booking workflow end-to-end and handling schedule-conflict logic in a real, if small-scale, use case.",
    },
  },
];
