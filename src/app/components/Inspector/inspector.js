import { React, useState, useEffect, useRef } from "react";
import actions from '../../redux/actions';
import { useStore } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './inspector.css';

function Inspector() {
    return (
        <>
            <div className="inspector"></div>
        </>
    );
}
export default Inspector;