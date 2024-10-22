import PropTypes from 'prop-types'; 
const blog = ({ blog }) => {
  console.log(blog);
  return <div></div>;
};

blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default blog;
