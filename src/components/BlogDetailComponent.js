import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogDetailComponent =({ blog }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Card>
                        <CardImg className="detailed-image" top width="100%" height="auto" src={ blog.urlToImage } alt={ blog.title } />
                        <CardBody>
                            <CardTitle className="user-title">{blog.title}</CardTitle>
                            <CardSubtitle>Author: {blog.author}</CardSubtitle>
                            <CardSubtitle><span>Published At:</span> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(blog.publishedAt)))}</CardSubtitle>
                            <CardText>
                                {blog.description}
                            </CardText>
                            <Link to={ '/' } >
                                <Button>Back To Bloglist</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>

    )
}
BlogDetailComponent.propTypes = {
  blog: PropTypes.any,
  blogs: PropTypes.any
};

export default BlogDetailComponent;