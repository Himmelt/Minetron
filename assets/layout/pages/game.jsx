const React = require('react');
const Button = require('antd/lib/button');
const Carousel = require('antd/lib/carousel');
const ipcR = require('electron').ipcRenderer;

class Component extends React.Component {
    constructor() {
        super();
    }

    handleClick() {
        // ipcR.send('launch-game');
        console.log(global.config);
    }

    handleClose() {
        ipcR.send('launch-exit');
    }

    render() {
        return (
            <div>
                <Carousel className="slider">
                    <div><img src="http://via.placeholder.com/350x100/fafaaf/ffaabbcc?text=Test 01"/></div>
                    <div><img src="http://via.placeholder.com/350x100/fafaaf/ffbbaacc?text=Test 02"/></div>
                    <div><img src="http://via.placeholder.com/350x100/fafaaf/ff88ffcc?text=Test 03"/></div>
                    <div><img src="http://via.placeholder.com/350x100/fafaaf/ffaa77ac?text=Test 04"/></div>
                </Carousel>
                <Button onClick={this.handleClick}>
                    启动
                </Button>
                <Button onClick={this.handleClose}>
                    结束
                </Button>
                <p style={{fontSize: 20}}>
                    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                </p>
            </div>
        )
    }
}

module.exports = Component;
