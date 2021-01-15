function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,

    completeTask: function(){
      this.complete = true;
    },

    logTaskState: function(){
      console.log(`${this.title} has${this.complete ? ' ': ' not '}been completed`);
    }
  };

  return task;
}

const task1 = newTask('walk', 'go for a walk')
const task2 = newTask('swim', 'go for a swim')
const tasks = [task1, task2]

task1.completeTask()
task1.logTaskState()
