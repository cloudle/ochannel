export var Posts = new Mongo.Collection<Post>('posts');

Posts.allow({
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