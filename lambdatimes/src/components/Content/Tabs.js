import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          <div>{
          props.tabs.map((element, key) => {
            return(<Tab tab={element} key={key} selectTabHandler={props.selectTabHandler} selectedTab={props.selected}/>)
          })
        }
          </div>
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}



export default Tabs;
