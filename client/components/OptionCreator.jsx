import React from 'react';

const OptionCreator = ({ 
    newOption,
    updateOption,
    addOption,
}) => {
    return (
      <div>
          <form onSubmit={addOption}>
            <input 
                id='new-option'
                value={newOption}
                onChange={e => updateOption(e.target.value)}
            />
            <button id='add-option' className='primary' type='submit'>Add Option</button>
          </form>
      </div>
    );
}

export default OptionCreator;