interface Project {
  _id?: string;
  name: string;
  creator: string;
  owner?: string;
  comments: Array<string>;
  description?: string;
}