import React, { Component } from 'react';
import News from './News';


export class NewsSection extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let fetchedUrl = fetch('http://api.mediastack.com/v1/news?access_key=5b7f58f4fcb3ddb0fd5d290b54a1d79c')
        let parseddata = await fetchedUrl;
        let data = await parseddata.json();
        console.log(data);
        this.setState({
            data: data.data
        });


    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center py-5">NewsEra Headlines</h2>
                <div className="container row" >
                    {
                        this.state.data.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <News title={element.title.slice(0, 30)} description={element.description.slice(0, 60)} image={!element.image ? "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" : element.image} source={element.source} url={element.url} />
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default NewsSection
