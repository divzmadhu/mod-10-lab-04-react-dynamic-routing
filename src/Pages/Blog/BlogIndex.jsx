import posts from '../../data/posts';
import {Link} from 'react-router-dom';

export default function BlogIndex(){
    return(
        <div>
            <h2>Latest Posts</h2>
            <ul>
                {posts.map((post) =>(
                    <li key = {post.id}>
                        <Link to = {`/blog/${post.slug}`}>
                        {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
           
        </div>
    )
}
