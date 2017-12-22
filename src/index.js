import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

class Clippy extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(this.trigger, {
      target: () => this.target,
    });

    this.clipboard.on('success', event => {
      if (event.action === 'copy' && this.props.onCopy) {
        this.props.onCopy(event.text);
      }

      if (this.props.noSelection) {
        event.clearSelection();
      }
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  setTarget = target => {
    this.target = target;
  };

  setTrigger = trigger => {
    this.trigger = trigger;
  };

  render() {
    return this.props.children(this.setTrigger, this.setTarget);
  }
}

Clippy.defaultProps = {
  noSelection: false,
  onCopy: null,
};

Clippy.propTypes = {
  children: PropTypes.func.isRequired,
  noSelection: PropTypes.bool,
  onCopy: PropTypes.func,
};

export default Clippy;
