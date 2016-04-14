class View {
    constructor() {
        this.talkBox = document.querySelector('.msg-box ul');
        this.tipBox = document.querySelector('.tip-box ul');
        this.tips = [];
        this._st = false;
    }
    renderLi(content) {
        let _li = this.createLiElement(content, 'fadeInDown');
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
    }
    renderCtxTip(content) {
        let _li = this.createLiElement(content, 'fadeInDown');
        this.talkBox.appendChild(_li);
        this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
    }
    renderTip(content) {
        let _li = this.createLiElement(content, 'flipInX'),
            _tipBox = this.tipBox;
        _tipBox.appendChild(_li);
        setTimeout(() => {
            this.animationEnd(_li, 'rotateOutUpRight');
        }, 3000);
    }
    createLiElement(content, animated) {
        let _li = document.createElement('li'),
            _p = document.createElement('p');
        _p.innerHTML = content;
        _li.appendChild(_p);
        this.animationStart(_li, animated);
        return _li;
    }
    createElement(tag,cls='',child=flase) {
        let _tag = document.createElement(tag);
        _tag.classList.add(cls);
        if (child) {
            _tag.appendChild(child);
        }
        // return tmp = function(){
        //     console.log(123);
        // };
    }
    animationStart(dom, animated) {
        dom.classList.add('animated', animated);
    }
    animationEnd(dom, animated, callback) {
        dom.classList.add('animated', animated);
        dom.addEventListener('webkitAnimationEnd', function() {
            dom.parentNode.removeChild(dom);
            typeof callback === 'function' ? callback() : '';
            dom = null;
        });
    }
};

export default new View();