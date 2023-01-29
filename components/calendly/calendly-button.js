import React, { useRef, useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { Button } from 'theme-ui';
import { render } from 'react-dom';

export default class CustomButtonExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      blueColor: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          sx={this.props.blueColor ? styles.buttonBlue : styles.buttonRed}
          variant="primary"
          aria-label="Book Your Qualifying Call"
          onClick={() => this.setState({ isOpen: true })}
        >
          {this.props.content}
        </Button>
        <PopupModal
          url="https://calendly.com/onemillionjourney/30min"
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.querySelector(this.props.selector)}
        />
      </div>
    );
  }
}

const styles = {
  buttonRed: {
    display: 'flex',
    mt: [45, 45, 45, 25, 25],
    ml: ['auto', null, null, '0px'],
    mr: ['auto', null, null, '0px'],
  },
  buttonBlue: {
    display: 'flex',
    mt: [45, 45, 45, 25, 25],
    ml: ['auto', null, null, '0px'],
    mr: ['auto', null, null, '0px'],
    backgroundColor: 'secondary',
  },
};
