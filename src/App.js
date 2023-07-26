import { exportComponentAsPNG } from "react-component-export-image";
import React,{Component} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CertificateGenerator from "./components/CertificateGenerator";
import CertificateValidator from "./components/CertificateValidator";
import './style/styles.css';


const footerStyle = {
  backgroundColor: "#ccc",
  color: "#333",
  padding: "10px",
  textAlign: "center"
};
class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
    Course: "",
    Date: "",
    Instructor: ""
  };



  render() {
    return (

      <>
      <Router>
        <Routes>
          <Route path="/" element={<CertificateGenerator/>}>Home</Route>
          <Route path="/validator" element={<CertificateValidator/>}>Certificate Validator</Route>
        </Routes>
      </Router>
      </>
      // <div className="App">
       
      //   <div className="Meta">
      //   <nav className="navbar">
      //     <a href="/">Home</a>
      //     <a href="/about">Certificate Validator</a>
      //   </nav>
      //     <h1>Certificate Generator</h1>
      //     <p>Please enter your name, course name, date of completion, and instructor name.</p>
      //     <input
      //       type="text"
      //       placeholder="Please enter your name..."
      //       value={this.state.Name}
      //       onChange={(e) => {
      //         this.setState({ Name: e.target.value });
      //       }}
      //     />
      //     <input
      //       type="text"
      //       placeholder="Please enter the course name..."
      //       value={this.state.Course}
      //       onChange={(e) => {
      //         this.setState({ Course: e.target.value });
      //       }}
      //     />
      //     <input
      //       type="date"
      //       placeholder="Please enter the date of completion..."
      //       value={this.state.Date}
      //       onChange={(e) => {
      //         this.setState({ Date: e.target.value });
      //       }}
      //     />
      //     <input
      //       type="text"
      //       placeholder="Please enter the instructor name..."
      //       value={this.state.Instructor}
      //       onChange={(e) => {
      //         this.setState({ Instructor: e.target.value });
      //       }}
      //     />
      //     <button
      //       onClick={(e) => {
      //         e.preventDefault();
      //         exportComponentAsPNG(this.certificateWrapper, {
      //           html2CanvasOptions: { backgroundColor: null }
      //         });
      //       }}
      //     >
      //       Download
      //     </button>
      //   <footer style={footerStyle}>
      //     <p>Certificate Generator By Eshan © 2023</p>
      //   </footer>
      //   </div>
      //   <div id="downloadWrapper" ref={this.certificateWrapper}>
      //     <div id="certificateWrapper">
      //       <p id="Uname">{this.state.Name}</p>
      //       <p id="Course">{this.state.Course}</p>
      //       <p id="Date">{this.state.Date}</p>
      //       <p id="Instructor">{this.state.Instructor}</p>
      //       <img src="https://i.imgur.com/5jqiddi.png" alt="Certificate" />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;