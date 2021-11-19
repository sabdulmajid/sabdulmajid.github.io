import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.jpg'

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
            currently studying the British-patterned A levels at the
            International School of KSAFH-NWR, located in Tabuk, Saudi Arabia.
            I'm taking four A level subjects: Computer Science, Mathematics,
            Physics & Chemistry.
          </p>
          <p>
            My main interests lie in tech & CS. The extensive integration of
            technology into our lives has nurtured my fascination of software
            systems and how they affect everything that we do, which further
            lead me to learn more about the applications of these systems in the
            real-world. As a result, I strived to become an avid programmer in
            multiple different frameworks & languages, such as C/C++,
            JavaScript, Python and ReactJS.
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
          <h2 className="major">Work & Education</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Working as Software Engineer at ZNotes.</p>
          <p>Learning entrepreneurship at Flowboat.</p>
          <p>Executive at Re-Fill.</p>
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
            development. As a result, I've managed to build a variety of
            different projects, ranging from making an Arduino-based Robotic Car
            to coding eye-catching websites, made with ReactJS.
          </p>
          <p>
            My latest and most noted project has been{' '}
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
            also aided in helping me learn how to use Unity WebGL to host a game
            on a website, which could be played with through the browser.
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
