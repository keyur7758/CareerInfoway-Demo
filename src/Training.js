import React from 'react'
import './Training.css'
export default function Training(props) {
  return (
    <>
     <div className='php-title'>
                <img src={props.src}  />
            </div>
            <div className='php-training'>
                <div className='container'>
                    <div className='training'>
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
            <div className='php-course'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-8'>
                            <div className='img-box'>
                                <img src={props.src2} />


                                <h4>{props.title2}, Rajkot</h4>

                                <p>{props.paragraph1}</p>

                                <p>{props.paragraph2}</p>

                             

                                <h2>Expert Faculties</h2>

                                <p>{props.paragraph3} </p>

                                <h2>Work On Live Project</h2>

                                <p>{props.paragraph4}</p>

                                <h2>Jobs Opportunity</h2>

                                <p>{props.paragraph5}</p>

                            </div>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <div className='features'>
                                <h3>Course features</h3>
                                <ul>
                                    <li><i className="course-icon fa-solid fa-calendar-days"></i>Course duration 70 days</li>
                                    <li><i className="course-icon fa-regular fa-pen-to-square"></i>Total Lectures 35</li>
                                    <li><i className="course-icon fa-solid fa-user"></i>Total Students 100+</li>
                                    <li><i className="course-icon fa-solid fa-trophy"></i>Certification yes</li>
                                </ul>
                                <h3>Register Today</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
