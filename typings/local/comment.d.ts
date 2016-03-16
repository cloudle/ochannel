interface Comment {
  _id?: string;
  content: string;
  owner: string;
  comments: Array<string>;
  likes: Array<string>;
  likeCount: number;
}