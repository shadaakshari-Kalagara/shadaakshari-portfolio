import React, { useState, useEffect } from 'react';
import * as Parser from 'rss-parser';
import { articles,mediumUrl, mediumFilterKeyword } from '../data.js'
import Fade from 'react-reveal/Fade';

export default function Articles() {

    const [filterArr, setFilterArr] = useState([])

    const toggleFilter = (tech) => {
        if (filterArr.indexOf(tech) > -1) {
            setFilterArr(filterArr.filter(x => x !== tech))
            return
        }
        setFilterArr(filterArr.concat([tech]))
    }

    

    return (
        <div className="projects container-fluid section" name="articles">
            <Fade bottom>
                <h2 className="section-header">SKILLS</h2>
                
            </Fade>
            
            <div className="section-body section-width top-bot-border-sm">
            
                {articles.map((project, index) => {
                    return (
                        <Fade bottom key={index}>
                            
                            <div target="_blank" rel="noopener noreferrer" className="card-wrapper-art">
                            
                                <div className="card text-white background-dark-lg mb-3">
                                
                                    <img alt="" className="card-img-top-art object-top d-none d-md-block" src={require('../assets/' + project.imgName)} />
                                    <img alt="" className="card-img-left-art d-none d-sm-block d-md-none" src={require('../assets/' + project.imgName)} />
                                    <div className="card-body-art">
                                        <div className="label-wrapper">
                                            {project.stack.map((tech, i) => (
                                                < span key={i} className={`label-art ${filterArr.indexOf(tech) > -1 ? "active" : ""}`} onClick={() => toggleFilter(tech)}> {tech}</span>
                                            ))}
                                        </div>
                                        
                                            {/* {
                                        project.altCodeUrl !== undefined &&
                                        <a
                                            href={project.altCodeUrl}
                                            target="_blank" rel="noopener noreferrer"
                                            className="card-link"
                                        >More Code</a>
                                    } */}

                                        </div>
                                    </div>
                                </div>
                    
                        </Fade>
                    )
                }

                )}
            </div>
        </div >
    )
}
