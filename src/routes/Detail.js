import React from "react";

class Detail extends React.Component {
    //2
    componentDidMount() {
        console.log(this.props);

        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    //1
    render() {
        const { location } = this.props;

        if (location.state) {
            return <span>{location.state.title}</span>;
        } else
            return null;
    }
}

export default Detail;