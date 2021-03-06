import Comment from './Comment'

export default ({ comments }) => (
    <React.Fragment>
        {/* instead of meanningless div, used React.Fragment */}
        {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
        ))}
    </React.Fragment>
)