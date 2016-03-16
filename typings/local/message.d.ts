interface Message {
  _id?: string;
  content: string;
  creator: string;
  readers: Array<string>;
}