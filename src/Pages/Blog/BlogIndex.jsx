import posts from '../../data/posts';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function BlogIndex() {

    // Get the user's authentication status from AuthContext
    const { isAuthenticated } = useContext(AuthContext);

    // Store the message shown when a logged-out user clicks a blog title
    const [accessMessage, setAccessMessage] = useState('');

    // Get the confirmation message passed through navigation state
    const location = useLocation();

    // Store the navigation confirmation message for display
    const [navigationMessage, setNavigationMessage] = useState('');
    const navigate = useNavigate();

    // Store the message before clearing the navigation state
    useEffect(() => {
        const message = location.state?.message;

        if (message) {
            setNavigationMessage(message);

            navigate(location.pathname, {
                replace: true,
                state: null
            });
        }
    }, [location.state, navigate, location.pathname]);

    return (
        <div>
            <h2>Latest Posts</h2>
            {/* Display confirmation message if available */}
            {navigationMessage && <p>{navigationMessage}</p>}
            {/* Display a message if a logged-out user tries to open a blog post */}
            {accessMessage && <p>{accessMessage}</p>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link
                            to={`/blog/${post.slug}`}
                            onClick={(event) => {
                                if (!isAuthenticated) {
                                    event.preventDefault();
                                    setAccessMessage('Please log in to read this blog post.');
                                }
                            }}
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}
