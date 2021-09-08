import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div class="card my-10">
                    <div class="card-header">
                        <h3 style={{ color: 'green' }}> NewsEra.inc</h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">An online newspaper is the online version of a newspaper, either as a stand-alone publication or as the online version of a printed periodical. Going online created more opportunities for newspapers, such as competing with broadcast journalism in presenting breaking news in a more timely manner.</p>
                        <a href="/" class="btn btn-sm btn-success">Go to top</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer
