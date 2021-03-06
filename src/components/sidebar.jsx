import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Abebe Adamu</a></h1>
                            <span className="email"><i className="icon-mail"></i> abbkassa@gmail.com</span>
                            <span className="number"><i className="icon-phone"></i> 404-563-9988</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://twitter.com/AbebeAdamu4" target="_blank"><i className="icon-twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/abebe-adamu-002942164" target="_blank"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/Abebe-Adamu" target="_blank"><i className="icon-github"></i></a></li>
                                
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}