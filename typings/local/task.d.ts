interface Task {
  _id?: string;
  projectId?: string;
  name: string;
  creator: string;
  owner?: string;
  description?: string;
  comments: Array<string>;
}