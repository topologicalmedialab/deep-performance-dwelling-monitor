import React, { Component } from 'react';

// constants
import LiquidLightModes from './constants/liquid-light-modes';
import LiquidLightPages from './constants/liquid-light-pages';
import Pages from '../../constants/pages';

// services
import PageService from '../../services/page-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';
import LiquidLightModel from './models/liquid-light-model';

// components
import HeaderNavButton from '../../components/header-nav-button/header-nav-button.jsx';
import ListButton from '../../components/list-button/list-button.jsx';


require('../../styles/main.scss');


export default class LiquidLightModesPage extends Component {
  constructor() {
    super();
    this.uid = 'liquidLightModesPage';
    this.state = new PageModel(LiquidLightPages.MODES);
  }

  // react method definitions
  render() {
    let pageClasses = PageService.getPageClasses(
      this.state.id,
      this.state.position
    );

    return (
      <div id={this.uid} className={pageClasses}>
        <header className="header">
          <div className="centered-content">
            <HeaderNavButton
              direction="left"
              hasArrow="false"
              onClick={this.gotoLiquidLightPage}
            />
            <h1>Liquid Light</h1>
          </div>
        </header>

        <section className="scrollable">
          <div className="centered-content">
            <div className="column left"></div>
            <div className="column right">
              <div className="column-content">
                <ul>
                  <li>
                    <ListButton
                      label={LiquidLightModes.ON}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, LiquidLightModes.ON)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={LiquidLightModes.OFF}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, LiquidLightModes.OFF)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={LiquidLightModes.AUTOMATION}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, LiquidLightModes.AUTOMATION)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={LiquidLightModes.DEMO}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, LiquidLightModes.DEMO)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={LiquidLightModes.PARTY}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, LiquidLightModes.PARTY)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={LiquidLightModes.PASSIVE}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, LiquidLightModes.PASSIVE)}
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
    this.setState({
      position: 1,
    });

    // add signal handler
    AppModel.pageChanged.add(this.onPageChanged, this);
  }

  componentWillUnmount() {
    AppModel.pageChanged.remove(this.onPageChanged, this);
  }


  // methods definitions
  gotoLiquidLightPage() {
    AppModel.changePage(Pages.LIQUID_LIGHT);
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

  selectMode(mode) {
    LiquidLightModel.changeMode(mode);
    AppModel.changePage(Pages.LIQUID_LIGHT);
  }
}
