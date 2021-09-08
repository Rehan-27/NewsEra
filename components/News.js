import React, { Component } from 'react'

export class News extends Component {


    render() {
        let { title, description, image, url, source } = this.props;
        return (
            <div className="card" style={{ width: "18rem", margin: "5" }}>
                <img className="card-img-top" src={image} alt="Card  cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">Source:{source}</h6>
                    <a href={url} target="_blank" className="btn btn-sm btn-success">Read More</a>
                </div>
            </div>
        )
    }
}

export default News;
