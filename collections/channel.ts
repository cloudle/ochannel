export var Channels = new Mongo.Collection<Channel>('channels');

Channels.allow({
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