const Comment = ({ comment }) =>
    console.log(comment) || (
        <div className='comment'>
            <div className='comment-user'>{comment.user}</div>
            <div className='comment-content' dangerouslySetInnerHTML={{ __html: comment.content }}></div>
            {/* innerHtml을 사용. 스크립트 공격에 노출 될 수 있어 명시적으로 경고함 여기서는 <p>comment</p> 형태로 들어옴 */}
            {comment.comments && (
                <div className='nested-comments'>
                    {comment.comments.map(nestedComment => (
                        <Comment key={nestedComment.id} comment={nestedComment} />
                    ))}
                </div>
            )}
            <style jsx>{`
                .comment {
                    margin-bottom: 1.5em;
                }
                .comment-user {
                    font-size:0.9rem;
                    font-weight: bold;
                    margin-bottom: 0.5em;
                }
                .comment-content {
                    font-size: 0.9rem;
                }
                .comment-content :global(p) {    
                    margin: 0;
                    margin-bottom: 0.5em;
                    word-wrap:break-word;
                }
                .comment-content :global(a) {
                    color: #f60;
                    text-decoration: underline;
                }
                .comment-content :global(pre) {
                    max-width: 100%;
                    overflow: scroll;
                }
                .nested-comments {
                    margin-top: 1em;
                    border-left: 1px solid rgba(0,0,0,0.1);
                    padding-left: 1em;
                }
            `}</style>
        </div>
    )

export default Comment;