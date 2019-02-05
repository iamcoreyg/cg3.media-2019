import React from "react"
import { Link } from "gatsby"
import ReactGA from 'react-ga';

class Footer extends React.Component {
    componentDidMount () {
        ReactGA.initialize('UA-41719093-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <footer>
                <section className="container">
                    <section className="columns">
                    <section className="column">
                        <h3>CG3.Media</h3>
                        <small className="subtle">&copy; { new Date().getFullYear() } CG3.Media • All Rights Reserved.</small>
                    </section>
                    <section className="column">
                        <a href="#">corey@cg3media.com</a> <br />
                        <Link to="/about">About</Link> <br />
                        <Link to="/work">Work</Link>
                    </section>
                    <section className="column">
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/cg3media">Twitter</a> <br />
                        <a rel="noopener noreferrer" target="_blank"href="https://instagram.com/cg3media">Instagram</a> <br />
                    </section>
                    </section>
                </section>
                </footer>
        )
    }
}

export default Footer