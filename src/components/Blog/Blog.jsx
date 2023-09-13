import PropTypes from 'prop-types';

const Blog = (blog) => {
    console.log(blog);
    return (
        <div>
            {/* <h2>Blog</h2> */}
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;