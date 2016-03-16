interface Channel {
  _id?: string;
  name: string;
  owner: string;
  members: Array<string>;
  description?: string;
}