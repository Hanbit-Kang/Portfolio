import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './skill.css';
import './md.css';
import img_html from '../images/skill/html.png';
import img_css from '../images/skill/css.png';
import img_js from '../images/skill/js.png';
import img_mongodb from '../images/skill/mongodb.jpeg';
import img_nodejs from '../images/skill/nodejs.png';
import img_ps from '../images/skill/ps.svg';
import img_ts from '../images/skill/ts.png';
import img_react from '../images/skill/react.png';
import img_kotlin from '../images/skill/kotlin.png';

class Skill extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('sl_img') as HTMLCollectionOf<HTMLElement>);
    let delay:number = 0.4;
    const timeToAdded:number = 0.07;
    elems.forEach((elem:HTMLElement) => {
      elem.style.transitionDelay = delay+'s';
      delay+=timeToAdded;
    })
    this.onScroll();
  }

  onScroll = () => {
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('sl_img') as HTMLCollectionOf<HTMLElement>);
    if(!this.isElementUnderBottom(elems[0], 0)){
      elems.forEach((elem:HTMLElement, i:number) => {
        elem.style.transitionDuration="1s";
        elem.style.opacity = "100";
        elem.style.transform = "scale(1)";
      })
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  isElementUnderBottom(elem: HTMLElement, offsetY: number){
    const {top} = elem.getBoundingClientRect();
    const {innerHeight} = window;
    return top > innerHeight - offsetY;
  }

  handleHover = (e) => {
    let sl_hover = document.getElementsByClassName('sl_hover')[0] as HTMLElement;
    sl_hover.style.left = window.pageXOffset+e.target.getBoundingClientRect().left+'px';
    sl_hover.style.top = window.pageYOffset+e.target.getBoundingClientRect().top+'px';
    sl_hover.style.width = e.target.offsetWidth+'px';
    sl_hover.innerText = e.target.id;
  }

  render(){
    return (
      <div className="Skill" id="Skill">
        <div className="skill_title">
          <p className="st_text text"> Skills </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="skill_list">
          <img className="sl_img" src={img_html} id="Middle" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_css} id="Middle" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_js} id="Middle" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_ts} id="Junior" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_react} id="Junior" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_nodejs} id="Middle" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_mongodb} id="Middle" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_kotlin} id="Junior" onMouseOver={this.handleHover} />
          <img className="sl_img" src={img_ps} id="Middle" onMouseOver={this.handleHover} />
        </div>
        <p className="sl_hover"></p>
      </div>
    );
  };
}

export default Skill;
