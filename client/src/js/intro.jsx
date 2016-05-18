import React, {Component} from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'hidden'
        }
    }

    show() {
        this.setState({
            display: 'start'
        });
        this.animationEnd(this.refs['intro-last'], (dom) => {
            this.setState({
                display: 'during'
            }, () => {
                this.animationEnd(this.refs['intro-logo'], (dom) => {
                    this.setState({
                        display: 'none'
                    });
                })
            });
        })
    }
    animationEnd(dom, callback = function () { }) {
        dom.addEventListener('webkitAnimationEnd', function () {
            callback(this);
            dom = null;
        });
    }
    render() {
        let {display} = this.state;
        return (
            <div ref='intro-logo' className={'intro animated ' + display}>
                <span className='f1 animated'>A</span>
                <span className='f2 animated'>C</span>
                <span className='f3 animated'>T</span>
                <span className='f4 animated'>r</span>
                <span className='f5 animated'>a</span>
                <span className='f6 animated'>c</span>
                <span ref='intro-last' className='f7 animated'>e</span>
            </div>
        );
    }
}

export default Intro;