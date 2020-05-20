import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Nav extends Component {
    state = {
        news: ''
    };

    componentDidMount() {
        this.getNews();
        this.interval = setInterval(() => {
            this.getNews();
        }, 5000);
    }

    getNews() {   
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=38bc02793232481496f0a74a13c60e96&pageSize=5')
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    news: res.articles
                });
            });
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const newsList = this.state.news && this.state.news.map((news) => {
            return (
                <div className="news-list" key={ news.title }>{news.title}</div>
            );
        });
        return (
            <div className="nav">
                <Link to={ '/' } >
                    <Button>Home</Button>
                </Link>
                {newsList} 
            </div>
         )
  }
}
