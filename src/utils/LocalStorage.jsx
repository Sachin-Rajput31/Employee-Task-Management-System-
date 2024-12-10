
const employees = [
  {
    "id": 1,
    "firstName":"Abhijit",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts":{
      "active":2,
      "newTask":1,
      "completed":1,
      "failed":0
    },
    "tasks": [
      {
        "task": "Complete project report",
        "description": "Finish the quarterly report and submit it.",
        "date": "2024-10-20",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "task": "Update website content",
        "description": "Revise the content on the homepage.",
        "date": "2024-10-22",
        "category": "Content",
        "active": true,
        "newTask": false,
        "failed": true,
        "completed": false
      },
      {
        "task": "Attend team meeting",
        "description": "Participate in the weekly sync-up.",
        "date": "2024-10-21",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName":"Ganesh",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts":{
      "active":5,
      "newTask":2,
      "completed":1,
      "failed":0
    },
    "tasks": [
      {
        "task": "Prepare presentation",
        "description": "Create slides for the upcoming client meeting.",
        "date": "2024-10-25",
        "category": "Presentations",
        "active": true,
        "newTask": true,
        "failed":false,
        "completed": false
      },
      {
        "task": "Analyze survey results",
        "description": "Review and summarize the feedback from the last survey.",
        "date": "2024-10-30",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": true
      },
      {
        "task": "Coordinate with vendors",
        "description": "Reach out to suppliers for upcoming orders.",
        "date": "2024-10-21",
        "category": "Coordination",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName":"Pranit",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts":{
      "active":1,
      "newTask":0,
      "completed":1,
      "failed":0
    },
    "tasks": [
      {
        "task": "Review code",
        "description": "Check the latest commits for the project.",
        "date": "2024-10-22",
        "category": "Development",
        "active": true,
        "newTask": false,
        "failed": true,
        "completed": false
      },
      {
        "task": "Write documentation",
        "description": "Update the API documentation.",
        "date": "2024-10-25",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "task": "Fix bugs",
        "description": "Address the critical bugs reported by QA.",
        "date": "2024-10-24",
        "category": "Bug Fixing",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName":"Kiran",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts":{
      "active":2,
      "newTask":2,
      "completed":3,
      "failed":0
    },
    "tasks": [
      {
        "task": "Conduct training session",
        "description": "Lead a training session for new hires.",
        "date": "2024-10-28",
        "category": "Training",
        "active": true,
        "newTask": false,
        "failed": true,
        "completed": false
      },
      {
        "task": "Prepare budget report",
        "description": "Draft the budget report for the next quarter.",
        "date": "2024-10-29",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": true
      },
      {
        "task": "Evaluate performance",
        "description": "Review employee performance for the past year.",
        "date": "2024-10-30",
        "category": "Evaluation",
        "active": true,
        "newTask":false,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName":"Raju",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts":{
      "active":2,
      "newTask":1,
      "completed":1,
      "failed":0
    },
    "tasks": [
      {
        "task": "Research market trends",
        "description": "Gather data on current market trends.",
        "date": "2024-10-21",
        "category": "Research",
        "active": false,
        "newTask": true,
        "failed": true,
        "completed": true
      },
      {
        "task": "Develop marketing strategy",
        "description": "Create a marketing plan for the new product launch.",
        "date": "2024-10-27",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "failed": true,
        "completed": true
      },
      {
        "task": "Compile competitor analysis",
        "description": "Analyze competitors and their offerings.",
        "date": "2024-10-23",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "failed": true,
        "completed": false
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
localStorage.setItem('employees', 
  
  JSON.stringify(employees));
 localStorage.setItem('admin',JSON.stringify(admin));
}


export const getLocalStorage = ()=>{
  const employees =JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
return {employees,admin} 
}