import React from "react";
import FeaturesField from "./FeaturesField";
import UseCasesField from "./UseCasesField";
import Figma from "./Figma";
// import logo from "../../assets/AceB logo.png";
import { Link } from "react-router-dom";
import FigmaProtoytpe from "./Figma";

function Tabs() {
  return (
    <div>
      {/* <div>
        <Link to="/">
          <img className="logo-header" src={logo} alt="logo" />
        </Link>
      </div> */}

      <div className="tab">
        <button
          className="tablinks"
          onClick={(event) => openTab(event, "Features")}
        >
          Features
        </button>
        <button
          className="tablinks"
          onClick={(event) => openTab(event, "Use Cases")}
        >
          Use cases
        </button>
        <button className="tablinks" onClick={(event) => openTab(event, "App")}>
          App Prototype
        </button>
      </div>
      <div id="Features" className="tabcontent">
        <FeaturesField />
      </div>
      <div id="Use Cases" className="tabcontent">
        <UseCasesField />
      </div>
      <div id="App" className="tabcontent">
        <FigmaProtoytpe />
      </div>
    </div>
  );
}

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener("scroll", myFunctionForSticky);

  // Get the navbar
  var tab = document.getElementById("tab");

  // Get the offset position of the navbar
  var sticky = tab.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

export default Tabs;
