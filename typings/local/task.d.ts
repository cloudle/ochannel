interface Task {
  _id?: string;
  name: string;
  creator: string;
  owner?: string;
  description?: string;
  comments: Array<string>;
}