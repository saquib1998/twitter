import CommentItem from "./CommentItem";

interface Comment {
  id: string;
  // Add other properties as needed
  [key: string]: any;
}

interface CommentFeedProps {
  comments?: Comment[];
}


const CommentFeed: React.FC<CommentFeedProps> = ({ comments = []}) => {
  return ( 
    <div>
      {
        comments.map(comment => (
          <CommentItem key={comment.id} data={comment} />
        ))
      }
    </div>
   );
}
 
export default CommentFeed;