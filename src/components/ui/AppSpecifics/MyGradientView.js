import React from "react";
import PropTypes from 'prop-types';
import LinearGradient from "react-native-linear-gradient";
import {myColors} from "../../../values/Colors/Colors";

export default class MyGradientView extends React.Component{

    static propTypes = {
        horizontal: PropTypes.bool
    };

    static defaultProps = {
        horizontal: false,
    };

    render() {

        let {horizontal} = this.props;

        return (

            <LinearGradient
                start={horizontal ? {x: 0, y: 0} : {x: 0, y: 0}}
                end={horizontal ? {x: 1, y: 0} : {x: 0, y: 1}}
                colors={[myColors.gradientColor1, myColors.gradientColor2, myColors.gradientColor3]}
                {...this.props}>

                {this.props.children}

            </LinearGradient>

        )

    }

}
