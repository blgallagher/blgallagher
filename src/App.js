import React, { Component } from "react";
import ValidationDistanceToThePin from "./ValidationDistanceToPin";
import ValidationLobWedge from "./ValidationLobWedge";
import ValidationSandWedge from "./ValidationSandWedge";
import ValidationPitchingWedge from "./ValidationPitchingWedge";
import Validation9Iron from "./Validation9Iron";
import Validation8Iron from "./Validation8Iron";
import Validation7Iron from "./Validation7Iron";
import Validation6Iron from "./Validation6Iron";
import Validation5Iron from "./Validation5Iron";
import Validation4Iron from "./Validation4Iron";
import Validation3Iron from "./Validation3Iron";
import Validation2Iron from "./Validation2Iron";
import Validation1Iron from "./Validation1Iron";
import Validation7Wood from "./Validation7Wood";
import Validation6Wood from "./Validation6Wood";
import Validation5Wood from "./Validation5Wood";
import Validation4Wood from "./Validation4Wood";
import Validation3Wood from "./Validation3Wood";
import Validation2Wood from "./Validation2Wood";
import ValidationDriver from "./ValidationDriver";
import Hero from "./Hero";

// Several child components imported,
// validating user input for a golf club if
// the user selects it

class App extends Component {
  constructor(props) {
    super(props);

    // numerous state variables

    // numberOfClubsDeselected is the number
    // of clubs currently deselected.
    // When this is 6, the user is allowed
    // input their average hitting distance
    // in "ideal conditions" for each club selected.
    // numberOfClubsDeselected goes up by 1
    // each time a club is deselected.
    // numberOfClubsDeselected goes down by 1
    // each time a club is selected.
    // "Ideal conditions" are:
    // off the fairway, no wind.

    //clubTypes is an array of 19 clubs set in state
    // from our own API which does not change.

    // clubsSelected is an array of the same 19 clubs,
    // again set in state from our own API,
    // which is spliced based on the clubs deselected.
    // We stop splicing when we get to 13,
    // as then the user has 14 clubs including the putter.

    // distanceToPin represents how far the
    // golfer/user is from the pin. The
    // golfer will know this as there are
    // many devices to tell a golfer this.
    // distanceToPin has default value "".

    // realFeelDistance represents how far
    // the shot to the hole is actually playing.
    // For example, if the golfer is 100 yards
    // from the hole and there is a strong wind
    // blowing against the golfer,
    // the golfer may need a club that can
    // hit 115 yards, 115 being the realFeelDistance.
    // Default is an empty string.

    // currentLie: tee, fairway, rough, sand.
    // The default is tee.

    // currentWind: calm, breezy, strong.
    // The default is calm.

    // windDirection: eight 'compass' directions.
    // The default is front.

    // readyToPlay: initially set to false.
    // When this is set to true, the user is // allowed to enter the specifics of their shot,
    // namely distanceToPin, currentLie,
    // currentWind and windDirection.
    // The application then advises the user // what club to use.

    // isFetched, initially false.
    // isFetched is set to true upon
    // successful connection to our API.

    // errorMsg, initially null.
    // Set to an error message if for any reason,
    // the application fails to connect to the API.

    // distanceLobWedge, initially set to an empty string.
    // This is later set in state to a user inputted
    // estimated hitting distance with a lob wedge
    // IF a user selects the lob wedge.

    // distanceSandWedge, distance9Iron,
    // distance7Wood, etc, all behave in the
    // same manner as distanceLobWedge.

    // distanceLobWedgeValid, initially set to false.
    // This is set to true once the user has
    // entered a valid distance for
    // Lob Wedge (if lob wedge is selected).

    // distance6IronValid,distanceDriverValid, etc,
    // all behave in the same manner as
    // distanceLobWedgeValid.

    // formErrorsLobWedge: an object containing one element,
    // namely distanceLobWedge, initially set
    // to the empty string to indicate no errors.
    // Various errors will be assigned to
    // distanceLobWedge within formErrorsLobWedge
    // should the user enter invalid data
    // (if lob wedge is selected).

    // formErrors5Wood, formErrors2Iron, etc,
    // all behave in the same manner as formErrorsLobWedge.

    // formValidLobWedge, initially set to false.
    // This is set to true once the user has
    // entered a valid distance for Lob Wedge
    // (if lob wedge is selected).

    // formValid8Iron, formValid4Wood, etc,
    // all behave in the same manner as formValidLobWedge.

    // userChoice, initially an empty array.
    // This is later set in state with club ids,
    // names, and this.state distances,
    // noting that for clubs deselected, the
    // this.state distance will be the empty string.

    // isLobWedgeDistanceSubmitted, initially set to false.
    // This is set to true if the user
    // enters a valid distance for the lob wedge.

    // Together with isPitchingWedgeDistance and so on,
    // the state of isLobWedgeDistanceSubmitted
    //is used to determine whether the user is
    // readyToPlay.
    // Once all selected clubs have
    // is(club)distance set to true,
    // the ready to play button is activated,
    // whereas previously, it was disabled.

    // After this.state has been declared,
    // there are numerous functions which
    // are subject to .bind(this)

    this.state = {
      enterButtonClicked: false,
      numberOfClubsDeselected: 0,
      clubTypes: [],
      clubsSelected: [],
      realFeelDistance: "",
      currentLie: "Tee",
      currentWind: "Calm",
      windDirection: "Front",
      readyToPlay: false,
      isFetched: false,
      errorMsg: null,
      distanceLobWedge: "",
      distanceLobWedgeValid: false,
      formErrorsLobWedge: { distanceLobWedge: "" },
      formValidLobWedge: false,
      distanceSandWedge: "",
      distanceSandWedgeValid: false,
      formErrorsSandWedge: { distanceSandWedge: "" },
      formValidSandWedge: false,
      distancePitchingWedge: "",
      distancePitchingWedgeValid: false,
      formErrorsPitchingWedge: { distancePitchingWedge: "" },
      formValidPitchingWedge: false,
      distance9Iron: "",
      distance9IronValid: false,
      formErrors9Iron: { distance9Iron: "" },
      formValid9Iron: false,
      distance8Iron: "",
      distance8IronValid: false,
      formErrors8Iron: { distance8Iron: "" },
      formValid8Iron: false,
      distance7Iron: "",
      distance7IronValid: false,
      formErrors7Iron: { distance7Iron: "" },
      formValid7Iron: false,
      distance6Iron: "",
      distance6IronValid: false,
      formErrors6Iron: { distance6Iron: "" },
      formValid6Iron: false,
      distance5Iron: "",
      distance5IronValid: false,
      formErrors5Iron: { distance5Iron: "" },
      formValid5Iron: false,
      distance4Iron: "",
      distance4IronValid: false,
      formErrors4Iron: { distance4Iron: "" },
      formValid4Iron: false,
      distance3Iron: "",
      distance3IronValid: false,
      formErrors3Iron: { distance3Iron: "" },
      formValid3Iron: false,
      distance2Iron: "",
      distance2IronValid: false,
      formErrors2Iron: { distance2Iron: "" },
      formValid2Iron: false,
      distance1Iron: "",
      distance1IronValid: false,
      formErrors1Iron: { distance1Iron: "" },
      formValid1Iron: false,
      distance7Wood: "",
      distance7WoodValid: false,
      formErrors7Wood: { distance7Wood: "" },
      formValid7Wood: false,
      distance6Wood: "",
      distance6WoodValid: false,
      formErrors6Wood: { distance6Wood: "" },
      formValid6Wood: false,
      distance5Wood: "",
      distance5WoodValid: false,
      formErrors5Wood: { distance5Wood: "" },
      formValid5Wood: false,
      distance4Wood: "",
      distance4WoodValid: false,
      formErrors4Wood: { distance4Wood: "" },
      formValid4Wood: false,
      distance3Wood: "",
      distance3WoodValid: false,
      formErrors3Wood: { distance3Wood: "" },
      formValid3Wood: false,
      distance2Wood: "",
      distance2WoodValid: false,
      formErrors2Wood: { distance2Wood: "" },
      formValid2Wood: false,
      distanceDriver: "",
      distanceDriverValid: false,
      formErrorsDriver: { distanceDriver: "" },
      formValidDriver: false,
      distanceToPin: "",
      distanceToPinValid: false,
      formErrorsDistanceToPin: { distanceToPin: "" },
      formValidDistanceToPin: false,
      userChoice: [],
      isLobWedgeDistanceSubmitted: false,
      isSandWedgeDistanceSubmitted: false,
      isPitchingWedgeDistanceSubmitted: false,
      is9IronDistanceSubmitted: false,
      is8IronDistanceSubmitted: false,
      is7IronDistanceSubmitted: false,
      is6IronDistanceSubmitted: false,
      is5IronDistanceSubmitted: false,
      is4IronDistanceSubmitted: false,
      is3IronDistanceSubmitted: false,
      is2IronDistanceSubmitted: false,
      is1IronDistanceSubmitted: false,
      is7WoodDistanceSubmitted: false,
      is6WoodDistanceSubmitted: false,
      is5WoodDistanceSubmitted: false,
      is4WoodDistanceSubmitted: false,
      is3WoodDistanceSubmitted: false,
      is2WoodDistanceSubmitted: false,
      isDriverDistanceSubmitted: false
    };
    this.handleEnterButtonClick = this.handleEnterButtonClick.bind(this);
    this.handleDeselectionOfClub = this.handleDeselectionOfClub.bind(this);
    this.handleSelectionOfClub = this.handleSelectionOfClub.bind(this);

    this.handleChangeLobWedgeDistanceBox = this.handleChangeLobWedgeDistanceBox.bind(
      this
    );
    this.submitLobWedgeButtonClick = this.submitLobWedgeButtonClick.bind(this);
    this.validateLobWedgeDistance = this.validateLobWedgeDistance.bind(this);

    this.handleChangeSandWedgeDistanceBox = this.handleChangeSandWedgeDistanceBox.bind(
      this
    );
    this.submitSandWedgeButtonClick = this.submitSandWedgeButtonClick.bind(
      this
    );
    this.validateSandWedgeDistance = this.validateSandWedgeDistance.bind(this);

    this.handleChangePitchingWedgeDistanceBox = this.handleChangePitchingWedgeDistanceBox.bind(
      this
    );
    this.submitPitchingWedgeButtonClick = this.submitPitchingWedgeButtonClick.bind(
      this
    );
    this.validatePitchingWedgeDistance = this.validatePitchingWedgeDistance.bind(
      this
    );

    this.handleChange9IronDistanceBox = this.handleChange9IronDistanceBox.bind(
      this
    );
    this.submit9IronButtonClick = this.submit9IronButtonClick.bind(this);
    this.validate9IronDistance = this.validate9IronDistance.bind(this);

    this.handleChange8IronDistanceBox = this.handleChange8IronDistanceBox.bind(
      this
    );
    this.submit8IronButtonClick = this.submit8IronButtonClick.bind(this);
    this.validate8IronDistance = this.validate8IronDistance.bind(this);

    this.handleChange7IronDistanceBox = this.handleChange7IronDistanceBox.bind(
      this
    );
    this.submit7IronButtonClick = this.submit7IronButtonClick.bind(this);
    this.validate7IronDistance = this.validate7IronDistance.bind(this);

    this.handleChange6IronDistanceBox = this.handleChange6IronDistanceBox.bind(
      this
    );
    this.submit6IronButtonClick = this.submit6IronButtonClick.bind(this);
    this.validate6IronDistance = this.validate6IronDistance.bind(this);

    this.handleChange5IronDistanceBox = this.handleChange5IronDistanceBox.bind(
      this
    );
    this.submit5IronButtonClick = this.submit5IronButtonClick.bind(this);
    this.validate5IronDistance = this.validate5IronDistance.bind(this);

    this.handleChange4IronDistanceBox = this.handleChange4IronDistanceBox.bind(
      this
    );
    this.submit4IronButtonClick = this.submit4IronButtonClick.bind(this);
    this.validate4IronDistance = this.validate4IronDistance.bind(this);

    this.handleChange3IronDistanceBox = this.handleChange3IronDistanceBox.bind(
      this
    );
    this.submit3IronButtonClick = this.submit3IronButtonClick.bind(this);
    this.validate3IronDistance = this.validate3IronDistance.bind(this);

    this.handleChange2IronDistanceBox = this.handleChange2IronDistanceBox.bind(
      this
    );
    this.submit2IronButtonClick = this.submit2IronButtonClick.bind(this);
    this.validate2IronDistance = this.validate2IronDistance.bind(this);

    this.handleChange1IronDistanceBox = this.handleChange1IronDistanceBox.bind(
      this
    );
    this.submit1IronButtonClick = this.submit1IronButtonClick.bind(this);
    this.validate1IronDistance = this.validate1IronDistance.bind(this);

    this.handleChange7WoodDistanceBox = this.handleChange7WoodDistanceBox.bind(
      this
    );
    this.submit7WoodButtonClick = this.submit7WoodButtonClick.bind(this);
    this.validate7WoodDistance = this.validate7WoodDistance.bind(this);

    this.handleChange6WoodDistanceBox = this.handleChange6WoodDistanceBox.bind(
      this
    );
    this.submit6WoodButtonClick = this.submit6WoodButtonClick.bind(this);
    this.validate6WoodDistance = this.validate6WoodDistance.bind(this);

    this.handleChange5WoodDistanceBox = this.handleChange5WoodDistanceBox.bind(
      this
    );
    this.submit5WoodButtonClick = this.submit5WoodButtonClick.bind(this);
    this.validate5WoodDistance = this.validate5WoodDistance.bind(this);

    this.handleChange4WoodDistanceBox = this.handleChange4WoodDistanceBox.bind(
      this
    );
    this.submit4WoodButtonClick = this.submit4WoodButtonClick.bind(this);
    this.validate4WoodDistance = this.validate4WoodDistance.bind(this);

    this.handleChange3WoodDistanceBox = this.handleChange3WoodDistanceBox.bind(
      this
    );
    this.submit3WoodButtonClick = this.submit3WoodButtonClick.bind(this);
    this.validate3WoodDistance = this.validate3WoodDistance.bind(this);

    this.handleChange2WoodDistanceBox = this.handleChange2WoodDistanceBox.bind(
      this
    );
    this.submit2WoodButtonClick = this.submit2WoodButtonClick.bind(this);
    this.validate2WoodDistance = this.validate2WoodDistance.bind(this);

    this.handleChangeDriverDistanceBox = this.handleChangeDriverDistanceBox.bind(
      this
    );
    this.submitDriverButtonClick = this.submitDriverButtonClick.bind(this);
    this.validateDriverDistance = this.validateDriverDistance.bind(this);

    this.handleChangeClubSelectionClick = this.handleChangeClubSelectionClick.bind(
      this
    );
    this.handleReadyToPlayClick = this.handleReadyToPlayClick.bind(this);
    this.handleChangeClubDistanceClick = this.handleChangeClubDistanceClick.bind(
      this
    );
    this.handleTeeClick = this.handleTeeClick.bind(this);
    this.handleFairwayClick = this.handleFairwayClick.bind(this);
    this.handleRoughClick = this.handleRoughClick.bind(this);
    this.handleSandClick = this.handleSandClick.bind(this);
    this.handleCalmClick = this.handleCalmClick.bind(this);
    this.handleBreezyClick = this.handleBreezyClick.bind(this);
    this.handleStrongClick = this.handleStrongClick.bind(this);
    this.handleFrontLeftWindClick = this.handleFrontLeftWindClick.bind(this);
    this.handleFrontWindClick = this.handleFrontWindClick.bind(this);
    this.handleFrontRightWindClick = this.handleFrontRightWindClick.bind(this);
    this.handleLeftWindClick = this.handleLeftWindClick.bind(this);
    this.handleRightWindClick = this.handleRightWindClick.bind(this);
    this.handleBackLeftWindClick = this.handleBackLeftWindClick.bind(this);
    this.handleBackWindClick = this.handleBackWindClick.bind(this);
    this.handleBackRightWindClick = this.handleBackRightWindClick.bind(this);
    this.handleChangeDistanceToPinBox = this.handleChangeDistanceToPinBox.bind(
      this
    );
  }

  // When the user deselects a club,
  // the user is told how many more clubs
  // they need to deselect

  // Also, the deselect button is replaced
  // by a select button.

  // Pressing the select button undoes the deselect.

  // fetch function to get data from API
  async componentDidMount() {
    try {
      const API_URL =
        "https://raw.githubusercontent.com/fps1610/golfApp/main/golfAppData.json";

      const response = await fetch(API_URL);
      // wait for the response. When it arrives, store the JSON version
      // of the response in this variable.
      const jsonResult = await response.json();

      //populate the local arrays with the data from external JSON
      this.setState({ clubsSelected: jsonResult.clubSelected });
      this.setState({ clubTypes: jsonResult.clubTypes });
      //console.log(this.state.apiData.length);
      this.setState({ isFetched: true });
    } catch (error) {
      // In the case of an error ...
      this.setState({ isFetched: false });
      // This will be used to display error message.
      this.setState({ errorMsg: error });
    } // end of try catch
  } // end of componentDidMount

  // filter function, finds a club
  //(to select or deselect)
  // based on club id number
  findClubByClubID(clubID) {
    return function (clubObject) {
      return clubObject.id === clubID;
    };
  }

  handleEnterButtonClick() {
    this.setState({ enterButtonClicked: true });
    console.log(this.state.enterButtonClicked);
  }

  // Once the user is ready to play,
  // pressing the Tee button sets currentLie // to be Tee.
  handleTeeClick() {
    this.setState({ currentLie: "Tee" });
  }

  // Once the user is ready to play,
  // pressing the Fairway button sets currentLie
  // to be Fairway.
  handleFairwayClick() {
    this.setState({ currentLie: "Fairway" });
  }

  // Once the user is ready to play,
  // pressing the Rough button sets currentLie
  // to be Rough.
  handleRoughClick() {
    this.setState({ currentLie: "Rough" });
  }

  // Once the user is ready to play,
  // pressing the Sand button sets currentLie
  // to be Sand.
  handleSandClick() {
    this.setState({ currentLie: "Sand" });
  }

  // Once the user is ready to play,
  // pressing the Calm button sets currentWind
  // to be Calm.
  handleCalmClick() {
    this.setState({ currentWind: "Calm" });
  }

  // Once the user is ready to play,
  // pressing the Breezy button sets currentWind
  // to be Breezy.
  handleBreezyClick() {
    this.setState({ currentWind: "Breezy" });
  }

  // Once the user is ready to play,
  // pressing the Wind button sets currentWind
  // to be Strong.
  handleStrongClick() {
    this.setState({ currentWind: "Strong" });
  }

  // Once the user is ready to play,
  // pressing the FrontLeftWind button sets windDirection
  // to be Front Left.
  handleFrontLeftWindClick() {
    this.setState({ windDirection: "Front Left" });
  }

  // Once the user is ready to play,
  // pressing the FrontWind button sets windDirection
  // to be Front.
  handleFrontWindClick() {
    this.setState({ windDirection: "Front" });
  }

  // Once the user is ready to play,
  // pressing the FrontRightWind button sets windDirection
  // to be Front Right.
  handleFrontRightWindClick() {
    this.setState({ windDirection: "Front Right" });
  }

  // Once the user is ready to play,
  // pressing the LeftWind button sets windDirection
  // to be Left.
  handleLeftWindClick() {
    this.setState({ windDirection: "Left" });
  }

  // Once the user is ready to play,
  // pressing the RightWind button sets windDirection
  // to be Right.
  handleRightWindClick() {
    this.setState({ windDirection: "Right" });
  }

  // Once the user is ready to play,
  // pressing the BackLeftWind button sets windDirection
  // to be Back Left.
  handleBackLeftWindClick() {
    this.setState({ windDirection: "Back Left" });
  }

  // Once the user is ready to play,
  // pressing the BackWind button sets windDirection
  // to be Back.
  handleBackWindClick() {
    this.setState({ windDirection: "Back" });
  }

  // Once the user is ready to play,
  // pressing the BackRightWind button sets windDirection
  // to be Back Right.
  handleBackRightWindClick() {
    this.setState({ windDirection: "Back Right" });
  }

  handleDeselectionOfClub(IDNumber) {
    // We assign the value of the event
    // The event is what is 'deselected' from the list. This action
    // is an event. The clubID is passed here.
    // we need to find this object from the clubTypes array
    // We force Javascript to convert the event.target.value to a
    // numeric value so that we can use it for filtering, using the filter function findClubByClubID.

    let currentClubChoices = this.state.clubsSelected;

    let firstObjectIndex = currentClubChoices.findIndex(
      this.findClubByClubID(IDNumber)
    );

    // here we use splice. This means that we want to SPLICE one
    // object from the array at the position firstObjectIndex
    // The object at this index is removed and the array is
    // reformed.
    currentClubChoices.splice(firstObjectIndex, 1);

    // We now setState with the newly spliced array minus
    // one object
    this.setState({
      clubsSelected: currentClubChoices
    });
    // As a club has been deselected, we add 1 to numberOfClubsDeselected
    this.setState({
      numberOfClubsDeselected: this.state.numberOfClubsDeselected + 1
    });
  }

  handleSelectionOfClub(IDNumber) {
    // We assign the value of the event
    // The event is what is 'selected' from the list. This action
    // is an event. The clubID is passed here.
    // we need to find this object from the clubTypes array
    // We force Javascript to convert the event.target.value to a
    // numeric value so that we can use it for filtering, using filter function above.
    let clubObject = this.state.clubTypes.filter(
      this.findClubByClubID(IDNumber)
    );
    // REMEMBER - filter always returns an array - even if it is
    // just one object.

    // We setState of clubsSelected
    // by adding clubObject to the
    // clubsSelected array, using concat.
    this.setState({
      clubsSelected: this.state.clubsSelected.concat(clubObject)
    });
    // As a club has been selected, we minus // one from numberOfClubsDeselected
    this.setState({
      numberOfClubsDeselected: this.state.numberOfClubsDeselected - 1
    });
  }

  //this button brings you to the edit club distance page
  handleChangeClubDistanceClick() {
    this.setState({ readyToPlay: false });
  }

  // feelsLikeDistance calculates distance
  // based on course conditions,
  // doesn't select club yet
  feelsLikeDistance() {
    let distance = this.state.distanceToPin;
    let lie = this.state.currentLie;
    let wind = this.state.currentWind;
    let windDirect = this.state.windDirection;
    // All possible lie variables.
    // Tee shot and fairway shot don't affect distance
    // as they are considered ideal conditions.
    // So, if rough, or if sand,
    // this will affect our final distance
    if (lie === "Rough") distance = distance * 1.05;
    if (lie === "Sand") distance = distance * 1.5;
    // Below are all possible variations of
    // wind direction with wind speed --breezy--
    // breezy will increase the distance
    // a specific amount depending on whether
    // the wind is from the front,
    // the front-left, or the front-right.
    // Right and left are not considered to affect distance,
    // only direction,
    // so they are not taken into account here.
    // If the wind is from the back,
    // the back-left, or the back-right,
    // the distance will also be affected
    // in the opposite direction.
    // For example, a shot of 160 yards,
    // with a front wind will become 168 yards,
    // however with a back wind will become 152 yards.
    if (wind === "Breezy" && windDirect === "Front") distance = distance * 1.05;
    if (wind === "Breezy" && windDirect === "Front Right")
      distance = distance * 1.03;
    if (wind === "Breezy" && windDirect === "Back Right")
      distance = distance - (distance * 1.03 - distance);
    if (wind === "Breezy" && windDirect === "Back")
      distance = distance - (distance * 1.05 - distance);
    if (wind === "Breezy" && windDirect === "Front Left")
      distance = distance * 1.03;
    if (wind === "Breezy" && windDirect === "Back Left")
      distance = distance - (distance * 1.03 - distance);
    // Below are the --gale-- wind and
    // all wind direction variables.
    // They follow the same guidelines as breezy,
    // set out above.
    if (wind === "Strong" && windDirect === "Front") distance = distance * 1.15;
    if (wind === "Strong" && windDirect === "Front Right")
      distance = distance * 1.1;
    if (wind === "Strong" && windDirect === "Front Left")
      distance = distance * 1.1;
    if (wind === "Strong" && windDirect === "Back")
      distance = distance - (distance * 1.15 - distance);
    if (wind === "Strong" && windDirect === "Back Left")
      distance = distance - (distance * 1.1 - distance);
    if (wind === "Strong" && windDirect === "Back Right")
      distance = distance - (distance * 1.1 - distance);
    return Math.round(distance);
  }

  // idealClub function checks our feelsLikeDistance,
  // and from our array of clubs it chooses
  // the most suitable club to use.
  // This is the magic moment of our app.
  // After considering all factors,
  // the app now tells you which club to use!!

  // idealClub decides which club should be used.

  idealClub() {
    const currentDist = this.feelsLikeDistance();

    const closest = this.state.userChoice.reduce((a, b) => {
      let aDiff = a.distance - currentDist;
      let bDiff = b.distance - currentDist;

      if (aDiff < 0 && bDiff < 0) {
        return aDiff > bDiff ? a : b;
      } else if (aDiff < 0) {
        return b;
      } else if (bDiff < 0) {
        return a;
      } else {
        return aDiff > bDiff ? b : a;
      }

      //if (aDiff === bDiff) {
      // Choose largest vs smallest (> vs <)
      //return a > b ? a : b;
      //} else {
      //return bDiff < aDiff ? b : a;
      //}
    });
    return closest.name;
  }

  // aimAmount tells the user how far away
  // to aim from the hole, but not which side.

  aimAmount() {
    const strength = this.state.currentWind;
    const length = this.state.distanceToPin;
    const direction = this.state.windDirection;
    let amount = 0;
    if (strength === "Breezy") {
      if (
        direction === "Front Left" ||
        direction === "Front Right" ||
        direction === "Back Left" ||
        direction === "Back Right"
      ) {
        amount = length * 1.05 - length;
      } else if (direction === "Left" || direction === "Right") {
        amount = length * 1.1 - length;
      }
    }
    if (strength === "Strong") {
      if (
        direction === "Front Left" ||
        direction === "Front Right" ||
        direction === "Back Left" ||
        direction === "Back Right"
      ) {
        amount = length * 1.1 - length;
      } else if (direction === "Left" || direction === "Right") {
        amount = length * 1.13 - length;
      }
    }
    return Math.round(amount);
  }

  // leftOrRightOfPin tells the user
  // which side of the pin to aim for.

  leftOrRightOfPin() {
    const currentDirection = this.state.windDirection;
    const currentWindStrength = this.state.currentWind;
    if (currentWindStrength === "Calm") {
      return "No strong winds, just aim at that hole";
    } else {
      if (currentDirection === "Left") {
        return "You should play to the left of the pin";
      }
      if (currentDirection === "Front Left") {
        return "You should play to the left of the pin";
      }
      if (currentDirection === "Back Left") {
        return "You should play to the left of the pin";
      }
      if (currentDirection === "Right") {
        return "You should play to the right of the pin";
      }
      if (currentDirection === "Front Right") {
        return "You should play to the right of the pin";
      }
      if (currentDirection === "Back Right") {
        return "You should play to the right of the pin";
      } else {
        return "No sidewind! Aim straight at that hole!";
      }
    }
  }

  //handle function for the change club selection button.
  // When this button is clicked,
  // the user can change their choice of clubs.
  // Many state variables...
  // are restored to their original state.
  handleChangeClubSelectionClick() {
    this.setState({ readyToPlay: false });
    this.setState({ numberOfClubsDeselected: 0 });
    this.setState({
      clubsSelected: [
        { id: 1, name: "Lob Wedge", distance: "" },
        { id: 2, name: "Sand Wedge", distance: "" },
        { id: 3, name: "Pitching Wedge", distance: "" },
        { id: 4, name: "9 Iron", distance: "" },
        { id: 5, name: "8 Iron", distance: "" },
        { id: 6, name: "7 Iron", distance: "" },
        { id: 7, name: "6 Iron", distance: "" },
        { id: 8, name: "5 Iron", distance: "" },
        { id: 9, name: "4 Iron", distance: "" },
        { id: 10, name: "3 Iron", distance: "" },
        { id: 11, name: "2 Iron", distance: "" },
        { id: 12, name: "1 Iron", distance: "" },
        { id: 13, name: "7 Wood", distance: "" },
        { id: 14, name: "6 Wood", distance: "" },
        { id: 15, name: "5 Wood", distance: "" },
        { id: 16, name: "4 Wood", distance: "" },
        { id: 17, name: "3 Wood", distance: "" },
        { id: 18, name: "2 Wood", distance: "" },
        { id: 19, name: "Driver", distance: "" }
      ]
    });
    this.setState({
      distanceLobWedge: "",
      distanceLobWedgeValid: false,
      formErrorsLobWedge: { distanceLobWedge: "" },
      formValidLobWedge: false,
      distanceSandWedge: "",
      distanceSandWedgeValid: false,
      formErrorsSandWedge: { distanceSandWedge: "" },
      formValidSandWedge: false,
      distancePitchingWedge: "",
      distancePitchingWedgeValid: false,
      formErrorsPitchingWedge: { distancePitchingWedge: "" },
      formValidPitchingWedge: false,
      distance9Iron: "",
      distance9IronValid: false,
      formErrors9Iron: { distance9Iron: "" },
      formValid9Iron: false,
      distance8Iron: "",
      distance8IronValid: false,
      formErrors8Iron: { distance8Iron: "" },
      formValid8Iron: false,
      distance7Iron: "",
      distance7IronValid: false,
      formErrors7Iron: { distance7Iron: "" },
      formValid7Iron: false,
      distance6Iron: "",
      distance6IronValid: false,
      formErrors6Iron: { distance6Iron: "" },
      formValid6Iron: false,
      distance5Iron: "",
      distance5IronValid: false,
      formErrors5Iron: { distance5Iron: "" },
      formValid5Iron: false,
      distance4Iron: "",
      distance4IronValid: false,
      formErrors4Iron: { distance4Iron: "" },
      formValid4Iron: false,
      distance3Iron: "",
      distance3IronValid: false,
      formErrors3Iron: { distance3Iron: "" },
      formValid3Iron: false,
      distance2Iron: "",
      distance2IronValid: false,
      formErrors2Iron: { distance2Iron: "" },
      formValid2Iron: false,
      distance1Iron: "",
      distance1IronValid: false,
      formErrors1Iron: { distance1Iron: "" },
      formValid1Iron: false,
      distance7Wood: "",
      distance7WoodValid: false,
      formErrors7Wood: { distance7Wood: "" },
      formValid7Wood: false,
      distance6Wood: "",
      distance6WoodValid: false,
      formErrors6Wood: { distance6Wood: "" },
      formValid6Wood: false,
      distance5Wood: "",
      distance5WoodValid: false,
      formErrors5Wood: { distance5Wood: "" },
      formValid5Wood: false,
      distance4Wood: "",
      distance4WoodValid: false,
      formErrors4Wood: { distance4Wood: "" },
      formValid4Wood: false,
      distance3Wood: "",
      distance3WoodValid: false,
      formErrors3Wood: { distance3Wood: "" },
      formValid3Wood: false,
      distance2Wood: "",
      distance2WoodValid: false,
      formErrors2Wood: { distance2Wood: "" },
      formValid2Wood: false,
      distanceDriver: "",
      distanceDriverValid: false,
      formErrorsDriver: { distanceDriver: "" },
      formValidDriver: false,
      distanceToPin: "",
      distanceToPinValid: false,
      formErrorsDistanceToPin: { distanceToPin: "" },
      formValidDistanceToPin: false,
      userChoice: [],
      isLobWedgeDistanceSubmitted: false,
      isSandWedgeDistanceSubmitted: false,
      isPitchingWedgeDistanceSubmitted: false,
      is9IronDistanceSubmitted: false,
      is8IronDistanceSubmitted: false,
      is7IronDistanceSubmitted: false,
      is6IronDistanceSubmitted: false,
      is5IronDistanceSubmitted: false,
      is4IronDistanceSubmitted: false,
      is3IronDistanceSubmitted: false,
      is2IronDistanceSubmitted: false,
      is1IronDistanceSubmitted: false,
      is7WoodDistanceSubmitted: false,
      is6WoodDistanceSubmitted: false,
      is5WoodDistanceSubmitted: false,
      is4WoodDistanceSubmitted: false,
      is3WoodDistanceSubmitted: false,
      is2WoodDistanceSubmitted: false,
      isDriverDistanceSubmitted: false
    });
  }

  // boolean. The findClubByClubId filter function
  // searches the clubTypes array
  // to see if the club is in the array.
  // If it is, thisClubIsDeselected is
  // an array of length 0, otherwise 1.
  // Returns true for deselected if length is 0 (or less!),
  // otherwise returns false.
  isClubDeselected(clubID) {
    let thisClubIsDeselected = this.state.clubsSelected.filter(
      this.findClubByClubID(clubID)
    );

    return thisClubIsDeselected.length <= 0;
  }

  // When the user submits
  // estimated hitting distance with a lob wedge,
  // this function sets the state of distanceLobWedge
  // to whatever the user has submitted.
  // The submission is also passed to the
  // function validateLobWedgeDistance for validation.
  handleChangeLobWedgeDistanceBox(event) {
    this.setState({ distanceLobWedge: event.target.value.trim() });
    this.validateLobWedgeDistance(event.target.value.trim());
  }

  // This function validates that the user submission
  // for lob wedge is of the correct form,
  // and sets an appropriate error message
  // if it is not.
  validateLobWedgeDistance(distance) {
    // localFormErrors initially contains one
    // variable, distanceLobWedge, set to "".
    let localFormErrors = this.state.formErrorsLobWedge;
    // localValid is initially set to false.
    let localValid = this.state.distanceLobWedgeValid;

    // if the user does not enter a number
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distanceLobWedge = "Please enter a positive number";
      // if the user has a blank field,
      // except before any attempt at submission
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distanceLobWedge = "No number entered";
    } else if (/^0+$/.test(distance)) {
      // testing for input 0 or 00 etc with a regular expression
      localValid = false;
      localFormErrors.distanceLobWedge = "Please enter a positive number";
      // if the user does enter a number,
      // but it is a decimal
    } else if (!/^\d+$/.test(distance)) {
      // Here we use a regular expression
      localValid = false;
      localFormErrors.distanceLobWedge =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
      // if the user enters too big a number
    } else if (distance.trim().length >= 4) {
      localFormErrors.distanceLobWedge =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      // otherwise, valid input.
      // The user is prompted to submit details.
      localValid = true;
      localFormErrors.distanceLobWedge = "Please submit details";
    }
    // distanceLobWedgeValid is set to the
    // value of localValid, true or false.
    this.setState({ distanceLobWedgeValid: localValid });
    // formErrorsLobWedge is assigned the
    // value of localFormErrors
    // (which may contain an error message).
    this.setState({ formErrorsLobWedge: localFormErrors });
    // formValidLobWedge is set to the
    // value of localValid, true or false.
    this.setState({
      formValidLobWedge: localValid
    });
  }

  submitLobWedgeButtonClick() {
    // user has submitted details for lob
    // wedge, if it is chosen.
    // isLobWedgeDistanceSubmitted is set to true
    // so the readyToPlay button
    // (further down) can be enabled.
    // Indeed, is(Club)DistanceSubmitted
    // must be set to true for all chosen
    // clubs to enable readyToPlay button.
    this.setState({ isLobWedgeDistanceSubmitted: true });
    // Upon submission of details, the user
    // is given the following 'error' message:
    this.state.formErrorsLobWedge.distanceLobWedge = "Thanks for your details";
    // formErrorsLobWedge is in turn updated.
    this.setState({ formErrorsLobWedge: this.state.formErrorsLobWedge });
    // distanceLobWedge printed to the console.
    console.log(this.state.distanceLobWedge);
  }

  // ALL OTHER CLUBS ARE VALIDATED IN THE
  // SAME WAY.

  // SAND WEDGE IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChangeSandWedgeDistanceBox(event) {
    this.setState({ distanceSandWedge: event.target.value.trim() });
    this.validateSandWedgeDistance(event.target.value.trim());
  }

  validateSandWedgeDistance(distance) {
    let localFormErrors = this.state.formErrorsSandWedge;
    let localValid = this.state.distanceSandWedgeValid;

    localFormErrors.distanceSandWedge = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distanceSandWedge = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distanceSandWedge = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distanceSandWedge = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distanceSandWedge =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distanceSandWedge =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distanceSandWedge = "Please submit details";
    }
    this.setState({ distanceSandWedgeValid: localValid });
    this.setState({ formErrorsSandWedge: localFormErrors });
    this.setState({
      formValidSandWedge: localValid
    });
  }

  submitSandWedgeButtonClick() {
    this.setState({ isSandWedgeDistanceSubmitted: true });
    this.state.formErrorsSandWedge.distanceSandWedge =
      "Thanks for your details";
    this.setState({ formErrorsSandWedge: this.state.formErrorsSandWedge });
    console.log(this.state.distanceSandWedge);
  }

  // PITCHING WEDGE IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChangePitchingWedgeDistanceBox(event) {
    this.setState({ distancePitchingWedge: event.target.value.trim() });
    this.validatePitchingWedgeDistance(event.target.value.trim());
  }

  validatePitchingWedgeDistance(distance) {
    let localFormErrors = this.state.formErrorsPitchingWedge;
    let localValid = this.state.distancePitchingWedgeValid;

    localFormErrors.distancePitchingWedge = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distancePitchingWedge = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distancePitchingWedge = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distancePitchingWedge = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distancePitchingWedge =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distancePitchingWedge =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distancePitchingWedge = "Please submit details";
    }
    this.setState({ distancePitchingWedgeValid: localValid });
    this.setState({ formErrorsPitchingWedge: localFormErrors });
    this.setState({
      formValidPitchingWedge: localValid
    });
  }

  submitPitchingWedgeButtonClick() {
    this.setState({ isPitchingWedgeDistanceSubmitted: true });
    this.state.formErrorsPitchingWedge.distancePitchingWedge =
      "Thanks for your details";
    this.setState({
      formErrorsPitchingWedge: this.state.formErrorsPitchingWedge
    });
    console.log(this.state.distancePitchingWedge);
  }

  // 9 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange9IronDistanceBox(event) {
    this.setState({ distance9Iron: event.target.value.trim() });
    this.validate9IronDistance(event.target.value.trim());
  }

  validate9IronDistance(distance) {
    let localFormErrors = this.state.formErrors9Iron;
    let localValid = this.state.distance9IronValid;

    localFormErrors.distance9Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance9Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance9Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance9Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance9Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance9Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance9Iron = "Please submit details";
    }
    this.setState({ distance9IronValid: localValid });
    this.setState({ formErrors9Iron: localFormErrors });
    this.setState({
      formValid9Iron: localValid
    });
  }

  submit9IronButtonClick() {
    this.setState({ is9IronDistanceSubmitted: true });
    this.state.formErrors9Iron.distance9Iron = "Thanks for your details";
    this.setState({ formErrors9Iron: this.state.formErrors9Iron });
    console.log(this.state.distance9Iron);
  }

  // 8 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange8IronDistanceBox(event) {
    this.setState({ distance8Iron: event.target.value.trim() });
    this.validate8IronDistance(event.target.value.trim());
  }

  validate8IronDistance(distance) {
    let localFormErrors = this.state.formErrors8Iron;
    let localValid = this.state.distance8IronValid;

    localFormErrors.distance8Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance8Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance8Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance8Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance8Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance8Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance8Iron = "Please submit details";
    }
    this.setState({ distance8IronValid: localValid });
    this.setState({ formErrors8Iron: localFormErrors });
    this.setState({
      formValid8Iron: localValid
    });
  }

  submit8IronButtonClick() {
    this.setState({ is8IronDistanceSubmitted: true });
    this.state.formErrors8Iron.distance8Iron = "Thanks for your details";
    this.setState({ formErrors8Iron: this.state.formErrors8Iron });
    console.log(this.state.distance8Iron);
  }

  // 7 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange7IronDistanceBox(event) {
    this.setState({ distance7Iron: event.target.value.trim() });
    this.validate7IronDistance(event.target.value.trim());
  }

  validate7IronDistance(distance) {
    let localFormErrors = this.state.formErrors7Iron;
    let localValid = this.state.distance7IronValid;

    localFormErrors.distance7Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance7Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance7Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance7Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance7Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance7Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance7Iron = "Please submit details";
    }
    this.setState({ distance7IronValid: localValid });
    this.setState({ formErrors7Iron: localFormErrors });
    this.setState({
      formValid7Iron: localValid
    });
  }

  submit7IronButtonClick() {
    this.setState({ is7IronDistanceSubmitted: true });
    this.state.formErrors7Iron.distance7Iron = "Thanks for your details";
    this.setState({ formErrors7Iron: this.state.formErrors7Iron });
    console.log(this.state.distance7Iron);
  }

  // 6 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange6IronDistanceBox(event) {
    this.setState({ distance6Iron: event.target.value.trim() });
    this.validate6IronDistance(event.target.value.trim());
  }

  validate6IronDistance(distance) {
    let localFormErrors = this.state.formErrors6Iron;
    let localValid = this.state.distance6IronValid;

    localFormErrors.distance6Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance6Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance6Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance6Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance6Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance6Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance6Iron = "Please submit details";
    }

    this.setState({ distance6IronValid: localValid });
    this.setState({ formErrors6Iron: localFormErrors });
    this.setState({
      formValid6Iron: localValid
    });
  }

  submit6IronButtonClick() {
    this.setState({
      is6IronDistanceSubmitted: true
    });
    this.state.formErrors6Iron.distance6Iron = "Thanks for your details";
    this.setState({ formErrors6Iron: this.state.formErrors6Iron });
    console.log(this.state.distance6Iron);
  }

  // 5 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange5IronDistanceBox(event) {
    this.setState({ distance5Iron: event.target.value.trim() });
    this.validate5IronDistance(event.target.value.trim());
  }

  validate5IronDistance(distance) {
    let localFormErrors = this.state.formErrors5Iron;
    let localValid = this.state.distance5IronValid;

    localFormErrors.distance5Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance5Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance5Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance5Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance5Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance5Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance5Iron = "Please submit details";
    }
    this.setState({ distance5IronValid: localValid });
    this.setState({ formErrors5Iron: localFormErrors });
    this.setState({
      formValid5Iron: localValid
    });
  }

  submit5IronButtonClick() {
    this.setState({ is5IronDistanceSubmitted: true });
    this.state.formErrors5Iron.distance5Iron = "Thanks for your details";
    this.setState({ formErrors5Iron: this.state.formErrors5Iron });
    console.log(this.state.distance5Iron);
  }

  // 4 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange4IronDistanceBox(event) {
    this.setState({ distance4Iron: event.target.value.trim() });
    this.validate4IronDistance(event.target.value.trim());
  }

  validate4IronDistance(distance) {
    let localFormErrors = this.state.formErrors4Iron;
    let localValid = this.state.distance4IronValid;

    localFormErrors.distance4Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance4Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance4Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance4Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance4Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance4Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance4Iron = "Please submit details";
    }
    this.setState({ distance4IronValid: localValid });
    this.setState({ formErrors4Iron: localFormErrors });
    this.setState({
      formValid4Iron: localValid
    });
  }

  submit4IronButtonClick() {
    this.setState({ is4IronDistanceSubmitted: true });
    this.state.formErrors4Iron.distance4Iron = "Thanks for your details";
    this.setState({ formErrors4Iron: this.state.formErrors4Iron });
    console.log(this.state.distance4Iron);
  }

  // 3 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange3IronDistanceBox(event) {
    this.setState({ distance3Iron: event.target.value.trim() });
    this.validate3IronDistance(event.target.value.trim());
  }

  validate3IronDistance(distance) {
    let localFormErrors = this.state.formErrors3Iron;
    let localValid = this.state.distance3IronValid;

    localFormErrors.distance3Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance3Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance3Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance3Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance3Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance3Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance3Iron = "Please submit details";
    }
    this.setState({ distance3IronValid: localValid });
    this.setState({ formErrors3Iron: localFormErrors });
    this.setState({
      formValid3Iron: localValid
    });
  }

  submit3IronButtonClick() {
    this.setState({ is3IronDistanceSubmitted: true });
    this.state.formErrors3Iron.distance3Iron = "Thanks for your details";
    this.setState({ formErrors3Iron: this.state.formErrors3Iron });
    console.log(this.state.distance3Iron);
  }

  // 2 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange2IronDistanceBox(event) {
    this.setState({ distance2Iron: event.target.value.trim() });
    this.validate2IronDistance(event.target.value.trim());
  }

  validate2IronDistance(distance) {
    let localFormErrors = this.state.formErrors2Iron;
    let localValid = this.state.distance2IronValid;

    localFormErrors.distance2Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance2Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance2Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance2Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance2Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance2Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance2Iron = "Please submit details";
    }
    this.setState({ distance2IronValid: localValid });
    this.setState({ formErrors2Iron: localFormErrors });
    this.setState({
      formValid2Iron: localValid
    });
  }

  submit2IronButtonClick() {
    this.setState({ is2IronDistanceSubmitted: true });
    this.state.formErrors2Iron.distance2Iron = "Thanks for your details";
    this.setState({ formErrors2Iron: this.state.formErrors2Iron });
    console.log(this.state.distance2Iron);
  }

  // 1 IRON IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange1IronDistanceBox(event) {
    this.setState({ distance1Iron: event.target.value.trim() });
    this.validate1IronDistance(event.target.value.trim());
  }

  validate1IronDistance(distance) {
    let localFormErrors = this.state.formErrors1Iron;
    let localValid = this.state.distance1IronValid;

    localFormErrors.distance1Iron = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance1Iron = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance1Iron = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance1Iron = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance1Iron =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance1Iron =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance1Iron = "Please submit details";
    }
    this.setState({ distance1IronValid: localValid });
    this.setState({ formErrors1Iron: localFormErrors });
    this.setState({
      formValid1Iron: localValid
    });
  }

  submit1IronButtonClick() {
    this.setState({ is1IronDistanceSubmitted: true });
    this.state.formErrors1Iron.distance1Iron = "Thanks for your details";
    this.setState({ formErrors1Iron: this.state.formErrors1Iron });
    console.log(this.state.distance1Iron);
  }

  // 7 WOOD IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange7WoodDistanceBox(event) {
    this.setState({ distance7Wood: event.target.value.trim() });
    this.validate7WoodDistance(event.target.value.trim());
  }

  validate7WoodDistance(distance) {
    let localFormErrors = this.state.formErrors7Wood;
    let localValid = this.state.distance7WoodValid;

    localFormErrors.distance7Wood = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance7Wood = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance7Wood = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance7Wood = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance7Wood =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance7Wood =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance7Wood = "Please submit details";
    }
    this.setState({ distance7WoodValid: localValid });
    this.setState({ formErrors7Wood: localFormErrors });
    this.setState({
      formValid7Wood: localValid
    });
  }

  submit7WoodButtonClick() {
    this.setState({ is7WoodDistanceSubmitted: true });
    this.state.formErrors7Wood.distance7Wood = "Thanks for your details";
    this.setState({ formErrors7Wood: this.state.formErrors7Wood });
    console.log(this.state.distance7Wood);
  }

  // 6 WOOD IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange6WoodDistanceBox(event) {
    this.setState({ distance6Wood: event.target.value.trim() });
    this.validate6WoodDistance(event.target.value.trim());
  }

  validate6WoodDistance(distance) {
    let localFormErrors = this.state.formErrors6Wood;
    let localValid = this.state.distance6WoodValid;

    localFormErrors.distance6Wood = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance6Wood = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance6Wood = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance6Wood = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance6Wood =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance6Wood =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance6Wood = "Please submit details";
    }
    this.setState({ distance6WoodValid: localValid });
    this.setState({ formErrors6Wood: localFormErrors });
    this.setState({
      formValid6Wood: localValid
    });
  }

  submit6WoodButtonClick() {
    this.setState({ is6WoodDistanceSubmitted: true });
    this.state.formErrors6Wood.distance6Wood = "Thanks for your details";
    this.setState({ formErrors6Wood: this.state.formErrors6Wood });
    console.log(this.state.distance6Wood);
  }

  // 5 WOOD IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange5WoodDistanceBox(event) {
    this.setState({ distance5Wood: event.target.value.trim() });
    this.validate5WoodDistance(event.target.value.trim());
  }

  validate5WoodDistance(distance) {
    let localFormErrors = this.state.formErrors5Wood;
    let localValid = this.state.distance5WoodValid;

    localFormErrors.distance5Wood = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance5Wood = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance5Wood = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance5Wood = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance5Wood =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance5Wood =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance5Wood = "Please submit details";
    }
    this.setState({ distance5WoodValid: localValid });
    this.setState({ formErrors5Wood: localFormErrors });
    this.setState({
      formValid5Wood: localValid
    });
  }

  submit5WoodButtonClick() {
    this.setState({ is5WoodDistanceSubmitted: true });
    this.state.formErrors5Wood.distance5Wood = "Thanks for your details";
    this.setState({ formErrors5Wood: this.state.formErrors5Wood });
    console.log(this.state.distance5Wood);
  }

  // 4 WOOD IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange4WoodDistanceBox(event) {
    this.setState({ distance4Wood: event.target.value.trim() });
    this.validate4WoodDistance(event.target.value.trim());
  }

  validate4WoodDistance(distance) {
    let localFormErrors = this.state.formErrors4Wood;
    let localValid = this.state.distance4WoodValid;

    localFormErrors.distance4Wood = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance4Wood = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance4Wood = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance4Wood = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance4Wood =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localFormErrors.distance4Wood =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance4Wood = "Please submit details";
    }
    this.setState({ distance4WoodValid: localValid });
    this.setState({ formErrors4Wood: localFormErrors });
    this.setState({
      formValid4Wood: localValid
    });
  }

  submit4WoodButtonClick() {
    this.setState({ is4WoodDistanceSubmitted: true });
    this.state.formErrors4Wood.distance4Wood = "Thanks for your details";
    this.setState({ formErrors54Wood: this.state.formErrors4Wood });
    console.log(this.state.distance4Wood);
  }

  // 3 WOOD IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange3WoodDistanceBox(event) {
    this.setState({ distance3Wood: event.target.value.trim() });
    this.validate3WoodDistance(event.target.value.trim());
  }

  validate3WoodDistance(distance) {
    let localFormErrors = this.state.formErrors3Wood;
    let localValid = this.state.distance3WoodValid;

    localFormErrors.distance3Wood = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance3Wood = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance3Wood = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance3Wood = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance3Wood =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance3Wood =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance3Wood = "Please submit details";
    }
    this.setState({ distance3WoodValid: localValid });
    this.setState({ formErrors3Wood: localFormErrors });
    this.setState({
      formValid3Wood: localValid
    });
  }

  submit3WoodButtonClick() {
    this.setState({ is3WoodDistanceSubmitted: true });
    this.state.formErrors3Wood.distance3Wood = "Thanks for your details";
    this.setState({ formErrors3Wood: this.state.formErrors3Wood });
    console.log(this.state.distance3Wood);
  }

  // 2 WOOD IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChange2WoodDistanceBox(event) {
    this.setState({ distance2Wood: event.target.value.trim() });
    this.validate2WoodDistance(event.target.value.trim());
  }

  validate2WoodDistance(distance) {
    let localFormErrors = this.state.formErrors2Wood;
    let localValid = this.state.distance2WoodValid;

    localFormErrors.distance2Wood = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distance2Wood = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distance2Wood = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance2Wood = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distance2Wood =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distance2Wood =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distance2Wood = "Please submit details";
    }
    this.setState({ distance2WoodValid: localValid });
    this.setState({ formErrors2Wood: localFormErrors });
    this.setState({
      formValid2Wood: localValid
    });
  }

  submit2WoodButtonClick() {
    this.setState({ is2WoodDistanceSubmitted: true });
    this.state.formErrors2Wood.distance2Wood = "Thanks for your details";
    this.setState({ formErrors2Wood: this.state.formErrors2Wood });
    console.log(this.state.distance2Wood);
  }

  // DRIVER IS VALIDATED IN THE
  // SAME WAY AS LOB WEDGE.

  handleChangeDriverDistanceBox(event) {
    this.setState({ distanceDriver: event.target.value.trim() });
    this.validateDriverDistance(event.target.value.trim());
  }

  validateDriverDistance(distance) {
    let localFormErrors = this.state.formErrorsDriver;
    let localValid = this.state.distanceDriverValid;

    localFormErrors.distanceDriver = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distanceDriver = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distanceDriver = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distanceDriver = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distanceDriver =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distanceDriver =
        "A thousand yards and more! Too big a number. If you can hit that far, you don't need this app! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distanceDriver = "Please submit details";
    }
    this.setState({ distanceDriverValid: localValid });
    this.setState({ formErrorsDriver: localFormErrors });
    this.setState({
      formValidDriver: localValid
    });
  }

  submitDriverButtonClick() {
    this.setState({ isDriverDistanceSubmitted: true });
    this.state.formErrorsDriver.distanceDriver = "Thanks for your details";
    this.setState({ formErrorsDriver: this.state.formErrorsDriver });
    console.log(this.state.distanceDriver);
  }

  // Once the user is ready to play,
  // this handle function sets the state of distance to pin,
  // namely input to the distance to pin text box.

  handleChangeDistanceToPinBox(event) {
    this.setState({ distanceToPin: event.target.value.trim() });
    this.validateDistanceToPin(event.target.value.trim());
  }

  validateDistanceToPin(distance) {
    let localFormErrors = this.state.formErrorsDistanceToPin;
    let localValid = this.state.distanceToPinValid;

    localFormErrors.distanceToPin = "";
    if (isNaN(distance)) {
      localValid = false;
      localFormErrors.distanceToPin = "Please enter a positive number";
    } else if (distance.trim().length <= 0) {
      localValid = false;
      localFormErrors.distanceToPin = "No number entered";
    } else if (/^0+$/.test(distance)) {
      localValid = false;
      localFormErrors.distanceToPin = "Please enter a positive number";
    } else if (!/^\d+$/.test(distance)) {
      localValid = false;
      localFormErrors.distanceToPin =
        "Decimals? Pretty precise! Or a negative number? Pleae enter a positive whole number";
    } else if (distance.trim().length >= 4) {
      localValid = false;
      localFormErrors.distanceToPin =
        "A thousand yards and more! This is a long hole! Or did you start with a 0?";
    } else {
      localValid = true;
      localFormErrors.distanceToPin = "You're good to go";
    }
    this.setState({ distanceToPinValid: localValid });
    this.setState({ formErrorsDistanceToPin: localFormErrors });
    this.setState({
      formValidDistanceToPin: localValid
    });
  }

  // handle function for ready to play button.
  // this will bring you to the game page
  // by setting readyToPlay to true.
  // userChoice, initially in this.state as
  // an empty array, is set in state with id,// name and distance for each club.
  // Distance will be "" if the user has not
  // chosen that club,
  // so that idealClub() cannot pick the
  // wrong club.
  handleReadyToPlayClick() {
    this.setState({ readyToPlay: true });
    this.setState({
      userChoice: this.state.userChoice.concat([
        { id: 1, name: "Lob Wedge", distance: this.state.distanceLobWedge },
        { id: 2, name: "Sand Wedge", distance: this.state.distanceSandWedge },
        {
          id: 3,
          name: "Pitching Wedge",
          distance: this.state.distancePitchingWedge
        },
        { id: 4, name: "9 Iron", distance: this.state.distance9Iron },
        { id: 5, name: "8 Iron", distance: this.state.distance8Iron },
        { id: 6, name: "7 Iron", distance: this.state.distance7Iron },
        { id: 7, name: "6 Iron", distance: this.state.distance6Iron },
        { id: 8, name: "5 Iron", distance: this.state.distance5Iron },
        { id: 9, name: "4 Iron", distance: this.state.distance4Iron },
        { id: 10, name: "3 Iron", distance: this.state.distance3Iron },
        { id: 11, name: "2 Iron", distance: this.state.distance2Iron },
        { id: 12, name: "1 Iron", distance: this.state.distance1Iron },
        { id: 13, name: "7 Wood", distance: this.state.distance7Wood },
        { id: 14, name: "6 Wood", distance: this.state.distance6Wood },
        { id: 15, name: "5 Wood", distance: this.state.distance5Wood },
        { id: 16, name: "4 Wood", distance: this.state.distance4Wood },
        { id: 17, name: "3 Wood", distance: this.state.distance3Wood },
        { id: 18, name: "2 Wood", distance: this.state.distance2Wood },
        { id: 19, name: "Driver", distance: this.state.distanceDriver }
      ])
    });
  }

  render() {
    // Conditional rendering to fetch API.
    // If there is any error it will display an error message.
    console.log(this.state.userChoice);
    if (this.state.errorMsg) {
      return (
        <div className="error">
          <h1>An error has occured in the API call</h1>
          <p>You can do the following to fix this.... </p>
          <p>{this.state.errorMsg.toString()}</p>
        </div>
      ); // end of return.

      // If it's still loading it will display a loading message
    } else if (this.state.isFetched === false) {
      return (
        <div className="fetching">
          <h1>Loading Pocket Caddy........</h1>
        </div>
      ); // end of return
    } else {
      // If it's working it runs the application
      return (
        <div className="App">
          {/*Displays the homepage until the enter button has been pressed*/}
          {this.state.enterButtonClicked === false && (
            <Hero onButtonClick={this.handleEnterButtonClick} />
          )}
          ;{/*Once enter button is clicked, go to next page*/}
          {this.state.enterButtonClicked === true && (
            <div>
              <div>
                <h1 className="text-center text-success">Pocket Caddy</h1>
              </div>
              {/*Displays the message while the user has deselected no clubs*/}
              {this.state.numberOfClubsDeselected === 0 && (
                <h4 className="p-3 mb-2 bg-info text-white">
                  Please deselect 6 clubs from the following 19 clubs - you must
                  play with a putter:
                </h4>
              )}

              {/*Displays the message if the user has deselected between 1 and 5 clubs inclusive*/}
              {this.state.numberOfClubsDeselected > 0 &&
                this.state.numberOfClubsDeselected < 6 && (
                  <h4 className="p-3 mb-2 bg-warning">
                    Please deselect a further{" "}
                    {6 - this.state.numberOfClubsDeselected} clubs
                  </h4>
                )}
              {/*if the first 3 condtions here are true, use a map function to display select and deselect buttons based on whether a club has been selected (displays deselect) or deselected (displays select)*/}
              {this.state.numberOfClubsDeselected >= 0 &&
                this.state.numberOfClubsDeselected < 6 &&
                this.state.readyToPlay === false && (
                  <div className="bg-success text-white rounded p-3">
                    {this.state.clubTypes.map((s) => (
                      <p key={s.id}>
                        <strong className=" mb-2">→{s.cName} </strong>
                        {this.isClubDeselected(s.id) > 0 && (
                          <button
                            className="btn btn-primary btn-xs Pocket_Caddy1"
                            onClick={() => this.handleSelectionOfClub(s.id)}
                          >
                            {" "}
                            Select{" "}
                          </button>
                        )}
                        {this.isClubDeselected(s.id) <= 0 && (
                          <button
                            className="btn btn-info btn-xs Pocket_Caddy2"
                            onClick={() => this.handleDeselectionOfClub(s.id)}
                          >
                            {" "}
                            Deselect{" "}
                          </button>
                        )}
                      </p>
                    ))}
                  </div>
                )}

              {/*Once 6 clubs have been deselected and the user is not ready to play (has not submitted 13 estimated hitting distances and clicked readyToPlay) the message is rendered to the screen*/}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false && (
                  <h4 className="p-3 mb-2 bg-info text-white">
                    Super, you've chosen 14 clubs. Including your putter of
                    course! Now let's get your average hitting distance off the
                    fairway and with no wind. Once you submit all distances,
                    you're good to go!
                  </h4>
                )}

              {/*In the same circumstances as above, if a club is selected, a text box and a submit details button are rendered. The distance entered to the text box is passed to the handleChangeClubDistanceBox and the submit details box is disabled unless there is valid input. Once the submit details button is clicked, the user receives a message 'Thanks for your details'*/}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(1) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[0].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distanceLobWedge}
                          name="getDist"
                          onChange={this.handleChangeLobWedgeDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValidLobWedge}
                        onClick={this.submitLobWedgeButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(1) <= 0 && (
                  <ValidationLobWedge
                    formErrorsLobWedge={this.state.formErrorsLobWedge}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(2) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[1].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distanceSandWedge}
                          name="getDist"
                          onChange={this.handleChangeSandWedgeDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValidSandWedge}
                        onClick={this.submitSandWedgeButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(2) <= 0 && (
                  <ValidationSandWedge
                    formErrorsSandWedge={this.state.formErrorsSandWedge}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(3) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[2].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distancePitchingWedge}
                          name="getDist"
                          onChange={this.handleChangePitchingWedgeDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValidPitchingWedge}
                        onClick={this.submitPitchingWedgeButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(3) <= 0 && (
                  <ValidationPitchingWedge
                    formErrorsPitchingWedge={this.state.formErrorsPitchingWedge}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(4) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[3].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance9Iron}
                          name="getDist"
                          onChange={this.handleChange9IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid9Iron}
                        onClick={this.submit9IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(4) <= 0 && (
                  <Validation9Iron
                    formErrors9Iron={this.state.formErrors9Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(5) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[4].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance8Iron}
                          name="getDist"
                          onChange={this.handleChange8IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid8Iron}
                        onClick={this.submit8IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(5) <= 0 && (
                  <Validation8Iron
                    formErrors8Iron={this.state.formErrors8Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(6) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[5].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance7Iron}
                          name="getDist"
                          onChange={this.handleChange7IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid7Iron}
                        onClick={this.submit7IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(6) <= 0 && (
                  <Validation7Iron
                    formErrors7Iron={this.state.formErrors7Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(7) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[6].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance6Iron}
                          name="getDist"
                          onChange={this.handleChange6IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid6Iron}
                        onClick={this.submit6IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(7) <= 0 && (
                  <Validation6Iron
                    formErrors6Iron={this.state.formErrors6Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(8) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[7].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance5Iron}
                          name="getDist"
                          onChange={this.handleChange5IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid5Iron}
                        onClick={this.submit5IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(8) <= 0 && (
                  <Validation5Iron
                    formErrors5Iron={this.state.formErrors5Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(9) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[8].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance4Iron}
                          name="getDist"
                          onChange={this.handleChange4IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid4Iron}
                        onClick={this.submit4IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(9) <= 0 && (
                  <Validation4Iron
                    formErrors4Iron={this.state.formErrors4Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(10) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          {" "}
                          Distance for {this.state.clubTypes[9].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance3Iron}
                          name="getDist"
                          onChange={this.handleChange3IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid3Iron}
                        onClick={this.submit3IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(10) <= 0 && (
                  <Validation3Iron
                    formErrors3Iron={this.state.formErrors3Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(11) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[10].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance2Iron}
                          name="getDist"
                          onChange={this.handleChange2IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid2Iron}
                        onClick={this.submit2IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(11) <= 0 && (
                  <Validation2Iron
                    formErrors2Iron={this.state.formErrors2Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(12) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[11].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance1Iron}
                          name="getDist"
                          onChange={this.handleChange1IronDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid1Iron}
                        onClick={this.submit1IronButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(12) <= 0 && (
                  <Validation1Iron
                    formErrors1Iron={this.state.formErrors1Iron}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(13) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[12].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance7Wood}
                          name="getDist"
                          onChange={this.handleChange7WoodDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid7Wood}
                        onClick={this.submit7WoodButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(13) <= 0 && (
                  <Validation7Wood
                    formErrors7Wood={this.state.formErrors7Wood}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(14) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[13].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance6Wood}
                          name="getDist"
                          onChange={this.handleChange6WoodDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid6Wood}
                        onClick={this.submit6WoodButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(14) <= 0 && (
                  <Validation6Wood
                    formErrors6Wood={this.state.formErrors6Wood}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(15) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[14].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance5Wood}
                          name="getDist"
                          onChange={this.handleChange5WoodDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid5Wood}
                        onClick={this.submit5WoodButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(15) <= 0 && (
                  <Validation5Wood
                    formErrors5Wood={this.state.formErrors5Wood}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(16) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[15].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance4Wood}
                          name="getDist"
                          onChange={this.handleChange4WoodDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid4Wood}
                        onClick={this.submit4WoodButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(16) <= 0 && (
                  <Validation4Wood
                    formErrors4Wood={this.state.formErrors4Wood}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(17) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[16].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance3Wood}
                          name="getDist"
                          onChange={this.handleChange3WoodDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid3Wood}
                        onClick={this.submit3WoodButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(17) <= 0 && (
                  <Validation3Wood
                    formErrors3Wood={this.state.formErrors3Wood}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(18) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[17].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distance2Wood}
                          name="getDist"
                          onChange={this.handleChange2WoodDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValid2Wood}
                        onClick={this.submit2WoodButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(18) <= 0 && (
                  <Validation2Wood
                    formErrors2Wood={this.state.formErrors2Wood}
                  />
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(19) <= 0 && (
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2">
                          Distance for {this.state.clubTypes[18].cName}:
                        </strong>
                        <input
                          type="text"
                          value={this.state.distanceDriver}
                          name="getDist"
                          onChange={this.handleChangeDriverDistanceBox}
                        />
                      </label>
                      <br />
                      <button
                        disabled={!this.state.formValidDriver}
                        onClick={this.submitDriverButtonClick}
                        type="button"
                        className="btn btn-warning btn-lg"
                      >
                        Submit Details
                      </button>
                    </div>
                  </form>
                )}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false &&
                this.isClubDeselected(19) <= 0 && (
                  <ValidationDriver
                    formErrorsDriver={this.state.formErrorsDriver}
                  />
                )}
              {/*If the user has deselected the required number of clubs, the user can click a button to change club selection. This applies whether the user has pressed readyToPlay or not */}
              {this.state.numberOfClubsDeselected >= 6 && (
                <button
                  type="button"
                  onClick={this.handleChangeClubSelectionClick}
                  className="btn btn-primary btn-xs Pocket_Caddy1"
                >
                  Change club selection
                </button>
              )}
              {/* If the user has deselected the required number of clubs and readyToPlay is false, the readyToPlay button is only enabled if a certain condition is true. This basically involves an input distance being submitted for each selected club*/}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === false && (
                  <button
                    disabled={
                      !(
                        (this.isClubDeselected(1) === true ||
                          this.state.isLobWedgeDistanceSubmitted === true) &&
                        (this.isClubDeselected(2) === true ||
                          this.state.isSandWedgeDistanceSubmitted === true) &&
                        (this.isClubDeselected(3) === true ||
                          this.state.isPitchingWedgeDistanceSubmitted ===
                          true) &&
                        (this.isClubDeselected(4) === true ||
                          this.state.is9IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(5) === true ||
                          this.state.is8IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(6) === true ||
                          this.state.is7IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(7) === true ||
                          this.state.is6IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(8) === true ||
                          this.state.is5IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(9) === true ||
                          this.state.is4IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(10) === true ||
                          this.state.is3IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(11) === true ||
                          this.state.is2IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(12) === true ||
                          this.state.is1IronDistanceSubmitted === true) &&
                        (this.isClubDeselected(13) === true ||
                          this.state.is7WoodDistanceSubmitted === true) &&
                        (this.isClubDeselected(14) === true ||
                          this.state.is6WoodDistanceSubmitted === true) &&
                        (this.isClubDeselected(15) === true ||
                          this.state.is5WoodDistanceSubmitted === true) &&
                        (this.isClubDeselected(16) === true ||
                          this.state.is4WoodDistanceSubmitted === true) &&
                        (this.isClubDeselected(17) === true ||
                          this.state.is3WoodDistanceSubmitted === true) &&
                        (this.isClubDeselected(18) === true ||
                          this.state.is2WoodDistanceSubmitted === true) &&
                        (this.isClubDeselected(19) === true ||
                          this.state.isDriverDistanceSubmitted === true)
                      )
                    }
                    type="button"
                    onClick={this.handleReadyToPlayClick}
                    className="btn btn-warning btn-lg"
                  >
                    Ready To Play
                  </button>
                )}
              {/*If the user has deselected the required number of clubs and is ready to play, they can still change their club distances*/}
              {this.state.numberOfClubsDeselected >= 6 &&
                this.state.readyToPlay === true && (
                  <button
                    type="button"
                    onClick={this.handleChangeClubDistanceClick}
                    className="btn btn-primary btn-xs Pocket_Caddy1"
                  >
                    Change club Distance
                  </button>
                )}
              {/*If the user is ready to play, they are displayed with a distance to pin text box, a choice of lie, a choice of wind type and a choice of wind direction. Once they have made their choices, and the distance to pin is a valid one, PocketCaddy recommends a club!*/}
              {this.state.readyToPlay === true && (
                <div className="bg-success text-white rounded p-3">
                  <h5>Please enter distance to pin</h5>
                  <form>
                    <div className="form-group">
                      <label>
                        <strong className="text-success mb-2"></strong>
                        <input
                          type="text"
                          value={this.state.distanceToPin}
                          name="getDist"
                          onChange={this.handleChangeDistanceToPinBox}
                        />
                      </label>
                      <br />
                    </div>
                  </form>

                  {
                    <ValidationDistanceToThePin
                      formErrorsDistanceToPin={
                        this.state.formErrorsDistanceToPin
                      }
                    />
                  }
                  <hr />
                  <h5>Please choose your current lie</h5>

                  <button class="btn btn-light" onClick={this.handleTeeClick}>
                    Tee
                  </button>
                  <button
                    class="btn btn-light"
                    onClick={this.handleFairwayClick}
                  >
                    Fairway
                  </button>
                  <button class="btn btn-light" onClick={this.handleRoughClick}>
                    Rough
                  </button>
                  <button class="btn btn-light" onClick={this.handleSandClick}>
                    Sand
                  </button>
                  <hr />

                  <h5>Please choose current wind strength</h5>
                  <button class="btn btn-light" onClick={this.handleCalmClick}>
                    Calm
                  </button>
                  <button
                    class="btn btn-light"
                    onClick={this.handleBreezyClick}
                  >
                    Breezy
                  </button>
                  <button
                    class="btn btn-light"
                    onClick={this.handleStrongClick}
                  >
                    Strong
                  </button>
                  <hr />
                  <h5>Please choose wind direction</h5>

                  <div className="container">
                    <div className="row">
                      {" "}
                      <button onClick={this.handleFrontLeftWindClick}>
                        {" "}
                        <img
                          alt="South-East Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/se.svg"
                        ></img>
                      </button>
                      <button onClick={this.handleFrontWindClick}>
                        {" "}
                        <img
                          alt="South Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/s.svg"
                        ></img>
                      </button>
                      <button onClick={this.handleFrontRightWindClick}>
                        {" "}
                        <img
                          alt="South-West Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/sw.svg"
                        ></img>
                      </button>
                    </div>
                    <div className="row">
                      <button onClick={this.handleLeftWindClick}>
                        {" "}
                        <img
                          alt="East Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/e.svg"
                        ></img>
                      </button>
                      <button>
                        <img
                          alt="Wind Direction"
                          height="20vh"
                          src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/compass_lez6hq.jpg"
                        ></img>
                      </button>
                      <button onClick={this.handleRightWindClick}>
                        {" "}
                        <img
                          alt="West Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/w.svg"
                        ></img>
                      </button>
                    </div>
                    <div className="row">
                      <button onClick={this.handleBackLeftWindClick}>
                        {" "}
                        <img
                          alt="North-East Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/ne.svg"
                        ></img>
                      </button>
                      <button onClick={this.handleBackWindClick}>
                        {" "}
                        <img
                          alt="North Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/n.svg"
                        ></img>
                      </button>
                      <button onClick={this.handleBackRightWindClick}>
                        {" "}
                        <img
                          alt="North-West Arrow"
                          height="20vh"
                          src="https://raw.githubusercontent.com/fps1610/golfApp/main/arrows/nw.svg"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/*PocketCaddy's advice!*/}
              {this.state.readyToPlay === true && (
                <div className="bg-success text-white rounded p-3">
                  <h5>Pocket Caddys advice is</h5>
                  {this.state.distanceToPinValid === false && (
                    <p>You should reconsider your distance</p>
                  )}
                  {this.state.distanceToPinValid === true && (
                    <p>
                      <p>
                        The distance to the hole is currently{" "}
                        {this.state.distanceToPin} yards.{" "}
                      </p>
                      <p>
                        <p>
                          You are playing from the{" "}
                          <b>{this.state.currentLie}.</b>
                        </p>
                        The wind is <b>{this.state.currentWind}</b> and it's
                        coming from the <b>{this.state.windDirection}.</b>
                      </p>
                      <p>
                        So you <i>actually</i> need a club that can hit{" "}
                        {this.feelsLikeDistance()} yards.
                      </p>

                      <p>
                        You should play the <b>{this.idealClub()}.</b>
                      </p>
                      {this.leftOrRightOfPin()}

                      {this.state.distanceToPinValid === true &&
                        this.state.readyToPlay === true &&
                        this.state.windDirection !== "Front" &&
                        this.state.windDirection !== "Back" &&
                        this.state.currentWind !== "Calm" && (
                          <span> by {this.aimAmount()} yards.</span>
                        )}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
  }
}
export default App;
