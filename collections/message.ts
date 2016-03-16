export var Messages = new Mongo.Collection<Message>('messages');

Messages.allow({
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