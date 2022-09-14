import React from 'react';
import Contact from "./Contact";
import './Resume.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Resume = ({backgroundImage}) => {
  
  return (
    <>
        <BgImage src={backgroundImage}/>
      <div className="main-wrapper">
        {/* <div className="main-content"> */}
          <div className="container">

              <section className="about-sec mt-100 mt-sm-120  mb-30" id="about-sec">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="row">
                                  <div className="col-md-5 col-xs-12 mb-30">
                                      <div className="candidate-img mb-35"></div>
                                      <ul className="social-icons">
                                          <li>
                                            <a className="email-link" href="mailto:ezeakudoluchinemerem@gmail.com" target="_blank" rel="noreferrer">
                                              <i id="tt11" className="zmdi zmdi-email" tabIndex="0"></i>
                                              <div className="mdl-tooltip" htmlFor="tt11" data-upgraded=",MaterialTooltip">
                                                email
                                              </div>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="twitter-link" href="https://twitter.com/stigezehjunior" target="_blank" rel="noreferrer">
                                              <i id="tt12" className="zmdi zmdi-twitter" tabIndex="0"></i>
                                              <div className="mdl-tooltip" htmlFor="tt12" data-upgraded=",MaterialTooltip">
                                                twitter
                                              </div>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="linkedin-link" href="https://www.linkedin.com/in/chinemerem-ezeakudolu-11003117b/" target="_blank" rel="noreferrer">
                                              <i id="tt13" className="zmdi zmdi-linkedin" tabIndex="0"></i>
                                              <div className="mdl-tooltip" htmlFor="tt13" data-upgraded=",MaterialTooltip">
                                                linkedin
                                              </div>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="instagram-link" href="https://www.instagram.com/stig._" target="_blank" rel="noreferrer">
                                              <i id="tt15" className="zmdi zmdi-instagram" tabIndex="0"></i>
                                              <div className="mdl-tooltip" htmlFor="tt15" data-upgraded=",MaterialTooltip">
                                                instagram
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                  </div>
                                  <Info className="col-md-7 col-xs-12">
                                      <div className="info-wrap">
                                          <h1>Chinemerem Ezeakudolu</h1>
                                          <h5 className="mt-20 font-grey">Front End Developer &amp; Data Scientist</h5>
                                          <div className="mt-30">
                                              <a id="download_cv"
                                                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect font-white mr-10 bg-green"
                                                  data-upgraded=",MaterialButton,MaterialRipple" href="/assets/files/Software Engineer.pdf" download>DOWNLOAD RESUME<span
                                                      className="mdl-button__ripple-container"><span
                                                          className="mdl-ripple is-animating"
                                                          style={{ width: '288.55px', height: '288.55px', transform: 'translate(-50, -50 +"%"), translate( 79px, 13px)' }}></span></span></a>
                                              <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect bg-blue font-white"
                                                  href="#contact_sec" data-scroll=""
                                                  data-upgraded=",MaterialButton,MaterialRipple">contact<span
                                                      className=" mdl-button__ripple-container"><span
                                                          className="mdl-ripple is-animating"
                                                          style={{width: "222.377px", height: "222.377px", transform: "translate(-50%, -50%) translate(56px, 6px)"}}></span></span></a>
                                          </div>
                                      </div>
                                      <ul className="profile-wrap mt-50">
                                          <li>
                                              <div className="profile-title">address</div>
                                              <div className="profile-desc">
                                                Canada, Ontario
                                              </div>
                                          </li>
                                          <li>
                                              <div className="profile-title">email</div>
                                              <div className="profile-desc">
                                                  ezeakudoluchinemerem@gmail.com
                                              </div>
                                          </li>
                                          <li>
                                              <div className="profile-title">phone</div>
                                              <div className="profile-desc">
                                                  +1 289 921 9808
                                              </div>
                                          </li>
                                          <li>
                                              <div className="profile-title">freelance</div>
                                              <div className="profile-desc relative">Available</div>
                                          </li>
                                      </ul>
                                  </Info>
                                  {/* <About className="col-md-10 mt-50">
                                    <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
                                  </About> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* <!--/About Sec--> */}

              {/* <!--Skills Sec--> */}
              <section id="skills_sec" className="skills-sec sec-pad-top-sm">
                  <div className="row">
                      <div className="col-sm-6 mb-30">
                          <h2 className="mb-30 heading">technical skills</h2>
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="mb-30">
                                  <span className="progress-cat">Javascript || Typescript</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap green-bar">
                                              <span data-width="95" style={{width: "95%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Python</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap blue-bar">
                                              <span data-width="85" style={{width: "85%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Swift</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap yellow-bar">
                                              <span data-width="80" style={{width: "80%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">SQL || NoSQL </span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap green-bar">
                                              <span data-width="90" style={{width: "90%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">HTML || CSS </span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap blue-bar">
                                              <span data-width="100" style={{width: "100%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Cloud Services || RESTful API </span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap green-bar">
                                              <span data-width="88" style={{width: "88%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-10">
                                  <span className="progress-cat">Java && C# </span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap yellow-bar">
                                              <span data-width="75" style={{width: "75%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 mb-30">
                          <h2 className="mb-30 heading">soft skills</h2>
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="mb-30">
                                  <span className="progress-cat">Problem Solver</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap blue-bar">
                                              <span data-width="100" style={{width: "100%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Strong Communicator</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap green-bar">
                                              <span data-width="90" style={{width: "90%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Critical Thinker</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap yellow-bar">
                                              <span data-width="95" style={{width: "95%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Solid Team Member</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap blue-bar">
                                              <span data-width="90" style={{width: "90%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Fast Learner</span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap green-bar">
                                              <span data-width="95" style={{width: "95%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-30">
                                  <span className="progress-cat">Passionate </span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap yellow-bar">
                                              <span data-width="90" style={{width: "90%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mb-10">
                                  <span className="progress-cat">Solution Driven </span>
                                  <div className="progress-bar-graph">
                                      <div className="progress-bar-wrap">
                                          <div className="bar-wrap green-bar">
                                              <span data-width="95" style={{width: "95%"}}></span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* <!--/Skills Sec--> */}

              {/* <!--Profile Sec--> */}
              <section id="profile_sec" className="profile-sec sec-pad-top-sm">
                  <h2 className="mb-30 heading">what i do</h2>
                  <div className="row">
                      <div className="col-md-3 col-sm-6 col-12 mb-30" >
                          <div className="mdl-card mdl-shadow--2dp" style={{height: '330px'}}>
                              <i className="zmdi zmdi-code font-blue profile-icon"></i>
                              <h4>Frontend development</h4>
                              <p>The building and maintenance of websites using React/Redux or Angular Javascript frameworks.</p>

                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-12 mb-30">
                          <div className="mdl-card mdl-shadow--2dp" style={{height: '330px'}}>
                              <i className="zmdi zmdi-smartphone font-green profile-icon"></i>
                              <h4>Backend development</h4>
                              <p>Using Node JS or Python to enable communication between servers, database and applications.</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-12 mb-30">
                          <div className="mdl-card mdl-shadow--2dp" style={{height: '330px'}}>
                              <i className=" font-yellow profile-icon material-icons-outlined">psychology</i>
                              <h4>data science</h4>
                              <p>The practice of utilizing ML algorithms programmed in NumPY to analyze, predict and create insights from complex data. </p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-12 mb-30">
                          <div className="mdl-card mdl-shadow--2dp" style={{height: '330px'}}>
                              <i className="font-red profile-icon material-icons-outlined">shopping_bag</i>
                              <h4>e-commerce marketing</h4>
                              <p>Using Shopify, knowledge of html/css, and understanding of UI/UX to develop an interactive online store.</p>
                          </div>
                      </div>
                  </div>
              </section>
              {/* <!--/Profile Sec--> */}

              {/* <!--Portfolio Sec--> */}
              <section id="portfolio_sec" className="portfolio-sec sec-pad-top-sm">
                  <div className="mb-15">
                      <h2 className="float-left float-none-xs heading">Projects</h2>
                      <div className="clearfix"></div>
                  </div>
                  {/* <!--Portfolios--> */}
                  <div className="row portfolios" data-col="3">
                      <div className="item col-md-4 col-sm-6 col-xs-12 mb-15">
                          <div className="mdl-card mdl-shadow--2dp mb-15">
                              <div className="light-img-wrap mdl-card__title pa-0">
                                  <img className="img-responsive" src="/assets/images/giftcoin.png" alt="Project description" style={{width: "100%", height: "250px"}}/>
                                  <div className="light-img-overlay"></div>
                                  <span className="img-cap">Giftcoin</span>
                              </div>
                              <span className="bottom-links mdl-card__actions">
                                 <Link to="/sciencestuff"><i className="zmdi zmdi-format-subject"></i></Link>
                              </span>
                          </div>
                      </div>
                      <div className="item col-md-4 col-sm-6 col-xs-12 mb-15">
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="light-img-wrap mdl-card__title pa-0">
                                  <img className="img-responsive" src="/assets/images/dl-1.png" alt="Project description" style={{width: "100%", height: "250px"}}/>
                                  <div className="light-img-overlay"></div>
                                  <span className="img-cap">Deep Learning</span>
                              </div>
                              <span className="bottom-links mdl-card__actions">
                                <Link to="/sciencestuff"><i className="zmdi zmdi-format-subject"></i></Link>
                              </span>
                          </div>
                      </div>
                      <div className="item col-md-4 col-sm-6 col-xs-12 mb-15">
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="light-img-wrap mdl-card__title pa-0">
                                  <img className="img-responsive" src="/assets/images/chess.jpg" alt="Project description" style={{width: "100%", height: "250px"}}/>
                                  <div className="light-img-overlay"></div>
                                  <span className="img-cap">Chess</span>
                              </div>
                              <span className="bottom-links mdl-card__actions">
                                 <Link to="/sciencestuff"><i className="zmdi zmdi-format-subject"></i></Link>
                              </span>
                          </div>
                      </div>
                      <div className="item col-md-4 col-sm-6 col-xs-12 mb-15">
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="light-img-wrap mdl-card__title pa-0">
                                  <img className="img-responsive" src= "/assets/images/mmdb.png" alt="Project description" style={{width: "100%", height: "250px"}}/>
                                  <div className="light-img-overlay"></div>
                                  <span className="img-cap">MMDB</span>
                              </div>
                              <span className="bottom-links mdl-card__actions">
                                <Link to="/sciencestuff"><i className="zmdi zmdi-format-subject"></i></Link>
                              </span>
                          </div>
                      </div>
                      <div className="item col-md-4 col-sm-6 col-xs-12">
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="light-img-wrap mdl-card__title pa-0">
                                  <img className="img-responsive" src= "/assets/images/isac.png" alt="Project description" style={{width: "100%", height: "250px"}}/>
                                  <div className="light-img-overlay"></div>
                                  <span className="img-cap">ISAC</span>
                              </div>
                              <span className="bottom-links mdl-card__actions">
                                  <Link to="/sciencestuff"><i className="zmdi zmdi-format-subject"></i></Link>
                              </span>
                          </div>
                      </div>
                      <div className="item col-md-4 col-sm-6 col-xs-12">
                          <div className="mdl-card mdl-shadow--2dp">
                              <div className="light-img-wrap mdl-card__title pa-0">
                                  <img className="img-responsive" src= "/assets/images/view_all.jpg" alt="Project description" style={{width: "100%", height: "250px"}}/>
                                  <div className="light-img-overlay"></div>
                                  <span className="img-cap">View All</span>
                              </div>
                              <span className="bottom-links mdl-card__actions">
                                 <Link to="/sciencestuff"><i className="zmdi zmdi-format-subject"></i></Link>
                              </span>
                          </div>
                      </div>                        
                  </div>
                  
              </section>
              {/* <!--/Portfolio Sec--> */}

              {/* <!--Interest Sec--> */}
              <section id="interest_sec" className="interest-sec sec-pad-top-sm">
                  <h2 className="mb-30 heading">interests</h2>
                  <div className="row">
                      <div className="col-md-2 col-sm-4 col-6 mb-30">
                          <div className="mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30">
                              <i className="zmdi zmdi-radio"></i>
                              <span>music</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6 mb-30">
                          <div className="mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30">
                              <i className="zmdi zmdi-smartphone-ring"></i>
                              <span>gaming</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6 mb-30">
                          <div className="mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30">
                              <i className="zmdi zmdi-camera"></i>
                              <span>movies</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6 mb-30">
                          <div className="mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30">
                              <i className="zmdi zmdi-library"></i>
                              <span>writing</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6 mb-30">
                          <div className="mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30">
                              <i className="zmdi zmdi-airplane"></i>
                              <span>traveling</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6 mb-30">
                          <div className="mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30">
                              <i className="zmdi zmdi-dribbble"></i>
                              <span>sports</span>
                          </div>
                      </div>
                  </div>
              </section>
              {/* <!--/Interest Sec--> */}

              {/* <!--Experience Sec--> */}
              <section id="experience_sec" className="experience-sec sec-pad-top-sm">
                  <h2 className="mb-30 heading">experience</h2>
                  <div className="timeline-wrap  overflow-hide mb-30">
                      <ul className="timeline">
                        
                          <li>
                              <div className="timeline-badge">
                                  <i className="zmdi zmdi-case font-blue"></i>
                              </div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">Application Developer</h4>
                                      <span className="duration mb-5">May 2022</span>
                                      <span className="institution">Evenica Corp.</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Build and extend functionality for both Dynamics 365 Commerce and Evenica’s in house E-commerce platform, using C#, TypeScript, SQL, Angular, React.js, Redux, Ngrx, HTML and CSS. Design and document database models to cater to a variety of business requirements.
                                      </p>
                                  </div>
                              </div>
                          </li>
                                                                  
                          <li className="timeline-inverted">
                              <div className="timeline-badge">
                                  <i className="zmdi zmdi-format-color-text font-green"></i>
                              </div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">Full Stack Developer Instructor</h4>
                                      <span className="duration mb-5"> September 2021 – April 2022</span>
                                      <span className="institution">Concordia University</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Developed various websites, APIs, and projects solutions for students’ utilizing JavaScript, React, Node.js, MongoDB along with development tools such as GitHub, Visual Studio code and others. Have a direct positive impact on changing people’s lives through education.
                                      </p>
                                  </div>
                              </div>
                          </li>

                          <li>
                              <div className="timeline-badge">
                                  <i className="zmdi zmdi-city-alt font-yellow"></i>
                              </div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">WordPress Web Designer</h4>
                                      <span className="duration mb-5">June 2021 – January 2022</span>
                                      <span className="institution">BorderWorx Logistics</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Implemented, responsive design and web pages using WordPress CMS. Employed industry and design guidelines, standards, and best practice through website build process. Analyze code and improve design, performance, and security.
                                      </p>
                                  </div>
                              </div>
                          </li>
                          <li className="timeline-inverted">
                              <div className="timeline-badge">
                                  <i className="zmdi zmdi-format-color-text font-green"></i>
                              </div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">Web Developer/Tutor</h4>
                                      <span className="duration mb-5"> September 2019 – December 2019</span>
                                      <span className="institution">Industry-Education Council</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Tutored over 200+ office hours, going above and beyond with interactive projects 
                                          to keep students involved and interested. Inspired students to develop an interest and appreciate
                                          value in Computer Science and technology as well as share their passion with others.
                                      </p>
                                  </div>
                              </div>
                          </li>

                          <li>
                              <div className="timeline-badge">
                                  <i className="zmdi zmdi-case font-blue"></i>
                              </div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">Front End Developer</h4>
                                      <span className="duration mb-5">July 2020 - Februray 2021</span>
                                      <span className="institution">Mohawk College</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Received an Award for Dedicated Service from Mohawk College.
                                          Created an interactive website using MySQL database and PHP for the 
                                          back-end integration and JavaScript, Bootstrap, HTML and CSS for the front end pages.
                                      </p>
                                  </div>
                              </div>
                          </li>
                          <li className="clearfix no-float"></li>
                      </ul>
                  </div>
              </section>
              {/* <!--/Experience Sec--> */}

              {/* <!--Education Sec--> */}
              <section id="education_sec" className="education-sec sec-pad-top-sm">
                  <h2 className="mb-30 heading">education</h2>
                  <div className="timeline-wrap overflow-hide mb-30">
                      <ul className="timeline">
                          <li>
                              <div className="timeline-badge bg-blue no-icon"></div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">Advanced Diploma Of Computer Systems Technology </h4>
                                      <span className="duration mb-5">2018 - 2021</span>
                                      <span className="institution">Mohawk College</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Academic Honors: Certification of Hard work and Excellence, 
                                          Dean’s List.</p>
                                  </div>
                              </div>
                          </li>

                          <li className="timeline-inverted">
                              <div className="timeline-badge bg-green no-icon"></div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">Microsoft MTA & Azure Certification</h4>
                                      <span className="duration mb-5">2020</span>
                                      <span className="institution">Self Taught</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Recieved an online certification for Microsoft (MTA) and Microsoft Azure.</p>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="timeline-badge bg-blue no-icon"></div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">AWS Certified Developer - Associate </h4>
                                      <span className="duration mb-5">2022</span>
                                      <span className="institution">Amazon</span>
                                  </div>
                                  <div className="timeline-body">
                                      <p className="mt-25">Recieved an online certification for Amazon Web Services Certified Developer.</p>
                                  </div>
                              </div>
                          </li>
                      
                          <li className="timeline-inverted">
                              <div className="timeline-badge bg-red no-icon"></div>
                              <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-red">
                                  <div className="timeline-heading">
                                      <h4 className="mb-10">High School Diploma</h4>
                                      <span className="duration mb-5">2010 - 2016</span>
                                      <span className="institution">Faith Academy </span>
                                  </div>
                              </div>
                          </li>
                          <li className="clearfix no-float"></li>
                      </ul>
                  </div>
              </section>
              {/* <!--/Education Sec--> */}

            <Contact/>
          </div>
      </div>
    {/* </div> */}
  </>
  )
}
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// const About = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-self: center;
//   align-self: center;
// `
const BgImage = styled.img`
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    object-fit: cover;
    z-index: -1;
`
export default Resume;
