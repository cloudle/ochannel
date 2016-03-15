export var Tasks = new Mongo.Collection<Task>('tasks');

Tasks.allow({
  insert: (userId: string) => {
    return !!userId;
  },
  update: (userId: string) => {
    return !!userId;
  },
  remove: (userId: string) => {
    return !!userId;
  }
});