import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="#"> Java Developer - HCL America</a> <span>2019-present</span></h2>
                                                <ul>
                                                    <li>
                                                        <p> <b> Microservice </b> -   Developed microservices using Java Spring Boot, Hibernate, Restful services with good quality of code.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Core Java </b> -   Expertise on Core Java Technologies like Multithreading, Collections and Exception handling mechanisms.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Web Fontend </b> -   Building application with JS frameworks such as React.Js, Angular.Js.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Database </b> -   Developed Advanced SQL queries and stored procedures to generate data reports.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Design Pattern </b> -   Developed code using Design Pattern like DAO, Factory Pattern, Singleton and Value Objects.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Unit Test </b> -   Wrote unit tests to test all the desired functionality using JUnit (TDD) and Mockito.  </p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Cloud Deployment </b> -   Established Continuous Integration (CI) practices and standards in creating APIs with Jira, Jenkin Pipelines. </p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Agile/Scrum </b> -   Experience with Agile methodology and Software Development Life Cycle (SDLC).</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="#"> Final Project - Kennesaw State University</a> <span>Spring, 2018</span></h2>
                                                <ul>
                                                    <li>
                                                        <p> <b> Research </b> -  Conducted a research in memory database technology with a team of six students.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Requirement gathering  </b> -  Developed behavioral and non-behavioral requirements for a cache application that can scale up to 100 billion requests per month at associated peak usage.</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> POC  </b> - Presented a demo of high performance Data Caching mechanism using Hazelcast</p>
                                                    </li>
                                                    <li>
                                                        <p> <b> Award</b> - Won second place in best undergraduate project prepared by Kennesaw College of Computing and Software Engineering.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}