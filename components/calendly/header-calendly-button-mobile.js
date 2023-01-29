import React, { useRef, useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { Button } from 'theme-ui';
import { render } from 'react-dom';

export default class CustomButtonMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          sx={styles.button}
          className="mobile__btn"
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
  button: {},
};
