import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogListComponent from './BlogListComponent';
import BlogDetailComponent from './BlogDetailComponent';
import { fetchBlogs } from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';
import Header from './common/Header';
import Footer from './common/Footer';
import Nav from './common/Nav';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    return {
        blogs: state,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBlogs: () => { dispatch(fetchBlogs()) }
});

class MainComponent extends Component {
    static propTypes = {
        blogs: PropTypes.any,
        errMess: PropTypes.any,
        isLoading: PropTypes.bool,
        fetchBlogs: PropTypes.func
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {

        const { blogs, isLoading, errMess } = this.props.blogs;

        const BlogWithId = ({ match }) => {
            return (
                <BlogDetailComponent blog={ blogs.filter((blog) => blog.id === match.params.id)[ 0 ] }
                />
            );
        };

        if (isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (blogs != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <Switch>
                                <Route exact path='/' component={ () => <BlogListComponent blogs={ blogs } /> } />} />
                                <Route path='/:id' component={ BlogWithId } />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                        <div className="col-md-4">
                            <Nav/>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <Footer />
                        </div>
                    </div>
                </div>
            );

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
