const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Database",
        taskDescription:
          "Ensure the customer database is updated with new entries.",
        taskDate: "2024-12-05",
        category: "Database",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the quarterly report.",
        taskDate: "2024-12-07",
        category: "Presentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Debug Application",
        taskDescription: "Fix critical issues in the login module.",
        taskDate: "2024-12-03",
        category: "Development",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstName: "Neha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription: "Draft the next blog post on company achievements.",
        taskDate: "2024-12-06",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct Survey",
        taskDescription: "Organize and analyze customer feedback survey.",
        taskDate: "2024-11-30",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Revamp the About Us section on the company website.",
        taskDate: "2024-12-08",
        category: "Web Design",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review Reports",
        taskDescription: "Analyze financial reports from Q3.",
        taskDate: "2024-12-09",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Host the weekly team meeting to discuss updates.",
        taskDate: "2024-11-25",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Maintenance",
        taskDescription:
          "Carry out scheduled maintenance on the production server.",
        taskDate: "2024-12-01",
        category: "IT",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Campaign",
        taskDescription:
          "Develop a social media campaign for the new product launch.",
        taskDate: "2024-12-15",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Outreach",
        taskDescription: "Follow up with leads generated in the last webinar.",
        taskDate: "2024-12-10",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Generate Invoices",
        taskDescription: "Prepare invoices for November billing cycle.",
        taskDate: "2024-11-30",
        category: "Billing",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Amit",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Features",
        taskDescription: "Perform testing on new features for the mobile app.",
        taskDate: "2024-12-11",
        category: "Quality Assurance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Documents",
        taskDescription: "Send required documents to the HR department.",
        taskDate: "2024-11-20",
        category: "Administrative",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Security Issue",
        taskDescription:
          "Resolve vulnerabilities in the payment gateway system.",
        taskDate: "2024-12-01",
        category: "Security",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Sourav",
    email: "admin@me.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
