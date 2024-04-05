function longRunningTask() {
    // Simulate a time-consuming task by waiting for 1 second
    var start = new Date().getTime();
    while (new Date().getTime() - start < 1000);
}

function executeTasks() {
    // Perform the task 10 times
    for (let i = 0; i < 10; i++) {
        console.log(`Task ${i + 1} started.`);
        longRunningTask();
        console.log(`Task ${i + 1} completed.`);
    }
}

executeTasks();
