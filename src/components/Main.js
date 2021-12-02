import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hey there! My name is Ayman. I'm a Year 13 (Grade 12) student
            currently studying the British-patterned CAIE A-levels at the
            International School of KSAFH-NWR, located in Tabuk, Saudi Arabia.
            I'm studying four A-level subjects: Computer Science, Mathematics,
            Physics & Chemistry, and enjoying each one of them.
          </p>
          <p>
            My main interests lie in tech & CS. The extensive integration of
            technology into our lives has nurtured my fascination with software
            systems and how they affect everything we do, which further led me
            to learn more about the applications of these systems in the real
            world. As a result, I strived to become an avid programmer in
            multiple different frameworks & languages, such as C/C++,
            JavaScript, Python and ReactJS, to be able to explore & create
            complex software systems.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work & Activities</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <b>Software Engineer at{' '}
            <a href="https://znotes.org/" target="_blank">
              ZNotes
            </a></b>
            . ZNotes is a community-led online learning platform allowing
            students to maximize their potential by having free access to
            high-quality educational resources. I maintain the front-end of the
            live website and extensively write code using the MERN (MongoDB,
            Express.js, React.js & Node.js) stack.
          </p>
          <p>
            <b>Member at{' '}
            <a href="https://www.flowboat.ca/" target="_blank">
              Flowboat
            </a></b>
            . Flowboat is a startup incubator in Waterloo that provides
            entrepreneurial lessons, industry mentors, and pitch training for
            high school students to start their own startups.
          </p>
          <p>
            <b>Technology Executive at{' '}
            <a href="https://re-fill.app/" target="_blank">
              Re-Fill
            </a></b>
            . Re-Fill is a start-up company based on snack-subscription. Re-Fill
            won the Flowboat Pitch Competition 2021. My job is to maintain the
            technological aspect of the startup and propose advancements in
            technology that will benefit the growth of the start-up. We plan on
            attending the Diamond Pitch Challenge this year.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Project Showcase</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I've always had a strong interest in technology and software
            development. 
          </p>
          <p>
            My latest and most notable project has been{' '}
            <a
              href="https://devpost.com/software/medicaid-3f2er5"
              target="_blank"
            >
              My MedicAid
            </a>
            , which won <b>2nd place</b> at Hack the Valley V 2021. It is a
            project that I spent lots of time on, and is one of my biggest
            achievements.
          </p>
          <p>
            Another wonderful project that I've made is{' '}
            <a
              href="https://devpost.com/software/linkup-96m7x1"
              target="_blank"
            >
              Link Up
            </a>
            , which was submitted to Hack the North 2021. It is a project that
            taught me a lot more about using front-end and back-end modules, and
            also taught me how to use Unity WebGL to host a game on a website,
            which could be played with through the browser. This took many hours
            of hard work and collaboration and showed me how to work efficiently
            in limited time constraints.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Get in touch!</h2>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}

          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/sabdulmajid"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sabdulmajid"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://devpost.com/sabdulmajid"
                target="_blank"
                className="icon fas fa-code"
              >
                <span className="label">Devpost</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:aymanwebsite@outlook.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <br />
            <br />
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
