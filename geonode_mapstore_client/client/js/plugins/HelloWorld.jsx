import React from 'react';

class HelloWorldComponent extends React.Component {
    render() {
        const style = {position: "absolute", top: "100px", left: "100px", zIndex: 10000000};
        return <div style={style}> Hello World! </div>;
    }
}

export const HelloWorldPlugin = HelloWorldComponent;
