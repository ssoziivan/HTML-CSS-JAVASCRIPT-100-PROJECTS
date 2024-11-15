const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // const handleDelete = props.handleDelete;
    // console.log(props,blogs);
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    {handleDelete && (
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    )}
                    {/* <button onClick={()=> handleDelete(blog.id) }>Delete Blog</button> */}
                </div>
            ))}
        </div>

    );
}
 
export default BlogList;