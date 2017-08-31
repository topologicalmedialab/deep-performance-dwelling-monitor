import React, { Component } from 'react';

// constants
import PassingLightPages from './constants/passing-light-pages';
import Pages from '../../constants/pages';
import PresentationModes from '../../constants/presentation-modes';

// services
import PageService from '../../services/page-service';
import PassingLightService from './services/passing-light-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';
import PassingLightModel from './models/passing-light-model';

// components
import HeaderNavButton from '../../components/header-nav-button/header-nav-button.jsx';
import ListButton from '../../components/list-button/list-button.jsx';
import Slider from '../../components/slider/slider.jsx';


require('../../styles/main.scss');


export default class PassingLightPage extends Component {
  constructor() {
    super();
    this.uid = 'liquidLightPage';
    this.state = new PageModel(Pages.PASSING_LIGHT);
  }

  // react method definitions
  render() {
    let pageClasses = PageService.getPageClasses(
      this.state.uid,
      this.state.position
    );

    return (
      <div id={this.uid} className={pageClasses}>
        <header className="header">
          <div className="centered-content">
            <HeaderNavButton
              direction="left"
              onClick={this.gotoIndex}
            />
            <h1>Passing Light</h1>
          </div>
        </header>

        <section className="fixed-height">
          <div className="centered-content">
            <div className="column left"></div>
            <div className="column right fixed">
              <div className="column-content aligned-bottom">
                <ul>
                  <li>
                    <div className="li-ui-label">Light Intensity</div>
                    <Slider
                      id="plIntensitySlider"
                      onUpdated={this.onLightIntensityUpdated}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <ListButton
                      label="Mode"
                      currentValue={this.state.mode}
                      onClick={this.gotoModesPage}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer"></footer>
      </div>
    );
  }

  componentDidMount() {
    // set initial state
    PassingLightModel.changeMode(PresentationModes.ON);
    this.setState({
      position: 1,
      mode: PassingLightModel.getCurrentMode()
    });

    // add signal handler
    AppModel.pageChanged.add(this.onPageChanged, this);
    PassingLightModel.modeChanged.add(this.onModeChanged, this);
  }

  componentWillUnmount() {
    AppModel.pageChanged.remove(this.onPageChanged, this);
    PassingLightModel.modeChanged.add(this.onModeChanged, this);
  }


  // methods definitions
  gotoIndex() {
    AppModel.changePage(Pages.INDEX);
  }

  gotoModesPage() {
    AppModel.changePage(PassingLightPages.MODES);
  }

  onLightIntensityUpdated(signal) {
    PassingLightService.setLightIntensity(signal.ratio);
  }

  onModeChanged() {
    this.setState({
      mode: PassingLightModel.getCurrentMode()
    });
    PassingLightService.setMode(PassingLightModel.getCurrentMode());
  }

  onPageChanged() {
    if (AppModel.getCurrentPage() === this.state.id) {
      // set current page on screen
      this.setState({
        position: 0
      });

      // set current page height
      AppModel.toggleScroll(PageService.getPageHeight(this.uid));

    } else {
      // set current page at right of screen
      this.setState({
        position: 1
      });
    }
  }
}
