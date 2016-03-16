export var Projects = new Mongo.Collection<Project>('projects');

Projects.allow({
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