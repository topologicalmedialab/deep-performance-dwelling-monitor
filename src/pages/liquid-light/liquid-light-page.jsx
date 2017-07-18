import React, { Component } from 'react';

// constants
import Pages from '../../constants/pages';
import LiquidLightModes from './constants/liquid-light-modes';
import LiquidLightPages from './constants/liquid-light-pages';

// services
import PageService from '../../services/page-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';
import LiquidLightModel from './models/liquid-light-model';

// components
import HeaderNavButton from '../../components/header-nav-button/header-nav-button.jsx';
import ListButton from '../../components/list-button/list-button.jsx';
import Slider from '../../components/slider/slider.jsx';


require('../../styles/main.scss');


export default class LiquidLightPage extends Component {
  constructor() {
    super();
    this.state = new PageModel(Pages.LIQUID_LIGHT);
  }

  // react method definitions
  render() {
    let pageClasses = PageService.getPageClasses(
      this.state.id,
      this.state.position
    );

    return (
      <div id="liquidLightPage" className={pageClasses}>
        <header className="header">
          <div className="centered-content">
            <HeaderNavButton
              direction="left"
              onClick={this.gotoIndex}
            />
            <h1>Liquid Light</h1>
          </div>
        </header>

        <section className="fixed-height">
          <div className="centered-content">
            <div className="column left"></div>
            <div className="column right fixed">
              <div className="column-content aligned-bottom">
                <ul>
                  <li>
                    <ListButton
                      label="Mode"
                      currentValue={this.state.mode}
                      onClick={this.gotoModesPage}
                    />
                  </li>
                </ul>
                <ul className="has-separator">
                  <li>
                    <div className="li-header">Light Intensity</div>
                    <Slider
                      id="lightIntensitySlider"
                      onUpdated={this.onLightIntensityUpdated}
                    />
                  </li>
                </ul>
                <ul className="has-separator">
                  <li>
                    <ListButton
                      label="Shut Down"
                      hasArrow="false"
                      isDisabled="true"
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
    LiquidLightModel.changeMode(LiquidLightModes.ON);
    this.setState({
      position: 1,
      mode: LiquidLightModel.getCurrentMode()
    });

    // add signal handler
    AppModel.pageChanged.add(this.onPageChanged, this);
    LiquidLightModel.modeChanged.add(this.onModeChanged, this);
  }

  componentWillUnmount() {
    AppModel.pageChanged.remove(this.onPageChanged, this);
    LiquidLightModel.modeChanged.add(this.onModeChanged, this);
  }


  // methods definitions
  gotoIndex() {
    AppModel.changePage(Pages.INDEX);
  }

  gotoModesPage() {
    AppModel.changePage(LiquidLightPages.MODES);
  }

  onLightIntensityUpdated(signal) {
    // TODO: call webservice to send signal.ratio
  }

  onModeChanged() {
    // TODO: call webservice (display spinner?)
    this.setState({
      mode: LiquidLightModel.getCurrentMode()
    });
  }

  onPageChanged() {
    if (AppModel.getCurrentPage() === this.state.id) {
      this.setState({
        position: 0
      });
    } else {
      this.setState({
        position: 1
      });
    }
  }
}
