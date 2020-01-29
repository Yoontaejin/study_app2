import React from "react";

class Detail extends  React.Component {
    componentDidMount() {

        const {location, history} = this.props;
        if(location.state === undefined) {
            console.log("undefined !! and then go back init page ..");
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        console.log(location);
        if(location.state) {
            return <span>{location.state.title} {location.state.id}</span>;
        } else {
            return null;
        }
    }
}

/*function Detail(props) {
    console.log(props);
    return <h2>hello</h2>;
}*/

export  default  Detail;