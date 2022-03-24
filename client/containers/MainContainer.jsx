/**
 * ************************************
 *
 * @module  MainContainer
 * @description stateful component that renders OptionInput and OptionsContainer
 *
 * ************************************
 */

import React from 'react';
import {connect } from 'react-redux';

import * as actions from '../actions/actions';
import OptionsContainer from './OptionsContainer';

const mapStateToProps = ({
    options: { totalVotes, synced },
}) => ({
    totalVotes,
    synced,
});

const mapDispatchToProps = dispatch => ({
    syncOptions: () => dispatch (actions.syncOptions()),
    resetOptions: () => dispatch (actions.resetOptions()),
    spinOptions: () => dispatch(actions.spinOptions()),
});

const MainContainer = props => (
    <div className="container">
        <div className="outerBox">
            <h1 id="header">Decision Maker</h1>
            <OptionsContainer />
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);