import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Layout/Header.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import MoreInfo from './components/pages/MoreInfo.jsx';

import Index from './components/pages/Main'
import Footer from './components/Layout/Footer.jsx';
import Sidebar from './components/Layout/Sidebar.jsx';

import ScrollToTop from 'react-router-scroll-top'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 1024, 
      color:'rgba(0,0,0,0)',
      accent:'white',
      display: 'flex',
      displayM: 'none',
      textdisplay: 'none',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    document.title = 'Colin\'s Portfolio';
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.listenScrollEvent)
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({width: window.innerWidth});
    
  }
  listenScrollEvent = e => {
    if (window.scrollY > 200) {
      this.setState({color: '#192841'})
      this.setState({accent: 'orange'})
      this.setState({textdisplay: 'inline'})
    } else {
      this.setState({color: 'rgba(0,0,0,0)'})
      this.setState({accent: 'white'})
      this.setState({textdisplay: 'none'})
    }
  }
  

  render(){
  return (
    /* 
      all styling is in app.css
      all pages have <Header/> header styling is in header.js

    */
    <Router>
      <ScrollToTop>
    <div className="App">

      <Header colour={this.state.color} accent={this.state.accent} display={this.state.width < 1024? "none": "flex"}/>
      <Sidebar colour={this.state.color} accent={this.state.accent} display={this.state.width < 1024? "flex": "none"} textdisplay={this.state.textdisplay}></Sidebar>


      <Route exact path="/" component={Index}/>
      <Route path="/about" component = {About}/>
      <Route path="/contact" component = {Contact}/>
      <Route path="/moreinfo" component = {MoreInfo}/>

      <Footer></Footer>

    </div>
    </ScrollToTop>
    </Router>
  );
  }
}

export default App;
