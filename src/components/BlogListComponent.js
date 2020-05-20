import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import PropTypes from 'prop-types';

const RenderBlockBlog = ({ blog }) => {
    return (
        <Card>
            <CardImg top className="blocked-image" width="120px" height="120px" src={ blog.urlToImage } alt={ blog.title } />
            <CardBody>
                <Link to={ `/${ blog.id }` } >
                    <CardTitle className="user-title">{blog.title}</CardTitle>
                </Link>
                <CardSubtitle>{blog.description.substr(1, 50)}...</CardSubtitle>
                <CardSubtitle><span>Published At:</span> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(blog.publishedAt)))}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

const BlogListComponent = ({ blogs }) => {

        const blogList = blogs.map((blog) => {
            return (
                <div className="col-6" key={ blog.id }>
                    <RenderBlockBlog blog={ blog } />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {blogList}
                </div>
            </div>
        );
    
}

RenderBlockBlog.propTypes = {
    blog: PropTypes.any
};

BlogListComponent.propTypes = {
    blog: PropTypes.any,
    blogs: PropTypes.any
};
export default BlogListComponent;
