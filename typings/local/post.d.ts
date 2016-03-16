interface Post {
  _id?: string;
  content: string;
  owner: string;
  comments: Array<string>;
}