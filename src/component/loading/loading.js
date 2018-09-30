import React, { Component } from "react";
import { Spin } from 'antd';

import './loading.css'
export default class Loading extends React.Component{
    render(){
        return (
            <div class="loading">
            <Spin size="large" />
            </div>

        )
    }
}