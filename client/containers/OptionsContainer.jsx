
/**
 * ************************************
 *
 * @module  OptionsContainer
 * @author
 * @date
 * @description component that renders OptionCreator and Option
 *
 * ************************************
 */

import React from 'react';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import OptionCreator from '../components/OptionCreator';

const mapStateToProps = ({ options }) => ({
  newOption: options.newOption,
  totalVotes: options.totalVotes,
  optionList: options.optionList,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions,dispatch);

const OptionsContainer = props => {
    return (
      <div className='innerBox'>
          <OptionCreator 
            newOption={props.newOption}
            updateOption={props.updateOption}
            addOption={props.addOption}
          />
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);