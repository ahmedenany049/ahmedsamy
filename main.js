const tasks = [
    { title: "Do laundry", completed: true, priority: "medium" },
    { title: "Study JavaScript", completed: false, priority: "high" },
    { title: "Buy groceries", completed: false, priority: "low" },
    { title: "Go to the gym", completed: false, priority: "medium" },];

const project = {
    low: 0,
    medium: 0,
    high: 0};

for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let priority = task.priority;

    if (priority === "low") {
      project.low++;
    }
    else if (priority === "medium") {
      project.medium++;
    }
    else if (priority === "high") {
      project.high++;
    }
}

console.log(project);


