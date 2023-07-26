import React from "react";
import { Validator } from "validatorjs";

class CertificateValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
      errors: [],
      certificateID: "",
      errors2: [],
    };
  }

  validateDomain = () => {
    const errors = Validator.validate(this.state.domain, {
      domain: {
        required: true,
        format: {
          pattern: /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
        },
      },
    });

    this.setState({ errors });
  };

  handleChange = (event) => {
    this.setState({
      domain: event.target.value,
    });
  };

  validateCertificateID = () => {
    const errors = Validator.validate(this.state.certificateID, {
      certificateID: {
        required: true,
        format: {
          pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
        },
      },
    });

    this.setState({ errors });
  };

  handleChange2 = (event) => {
    this.setState({
      certificateID: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="Meta">
            <nav className="navbar">
              <a href="/">Home</a>
              <a href="/validator">Certificate Validator</a>
            </nav>
            
            <br />
            <input
              type="text"
              placeholder="Enter certificate ID"
              value={this.state.certificateID}
              onChange={this.handleChange2}
            />
            <ul>
              {this.state.errors2.map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
            <button onClick={this.validateCertificateID}>Verify</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CertificateValidator;
