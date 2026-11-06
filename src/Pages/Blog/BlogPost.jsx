import {useParams, Link} from 'react-router-dom';
import posts from '../../data/posts';


export default function BlogPost(){

    //Retrieve the slug
    const {slug} = useParams();

    // Search the posts array and return the post with a matching slug
    const post = posts.find((post) =>post.slug === slug)

    // if find() method wont find a matching object?
    if(!post){
        return <h2>Post not found</h2>
    }

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            <Link to = "/blog">Back to Blog</Link>
        </div>


    )
} 