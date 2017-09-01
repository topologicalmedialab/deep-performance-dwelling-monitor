import React, { Component } from 'react';

// constants
import PassingLightPages from './constants/passing-light-pages';
import Pages from '../../constants/pages';
import PresentationModes from '../../constants/presentation-modes';

// services
import PageService from '../../services/page-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';
import PassingLightModel from './models/passing-light-model';

// components
import HeaderNavButton from '../../components/header-nav-button/header-nav-button.jsx';
import ListButton from '../../components/list-button/list-button.jsx';


require('../../styles/main.scss');


export default class PassingLightModesPage extends Component {
  constructor() {
    super();
    this.uid = 'passingLightModesPage';
    this.state = new PageModel(PassingLightPages.MODES);
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
              onClick={this.gotoPassingLightPage}
            />
            <h1>Modes</h1>
          </div>
        </header>

        <section className="fixed-height">
          <div className="centered-content">
            <div className="column left"></div>
            <div className="column right fixed">
              <div className="column-content">
                <ul>
                  <li>
                    <ListButton
                      label={PresentationModes.ON}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, PresentationModes.ON)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={PresentationModes.OFF}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, PresentationModes.OFF)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={PresentationModes.AUTOMATION}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, PresentationModes.AUTOMATION)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={PresentationModes.DEMO}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, PresentationModes.DEMO)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={PresentationModes.PARTY}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, PresentationModes.PARTY)}
                    />
                  </li>
                  <li>
                    <ListButton
                      label={PresentationModes.PASSIVE}
                      hasArrow="false"
                      onClick={this.selectMode.bind(this, PresentationModes.PASSIVE)}
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
  gotoPassingLightPage() {
    AppModel.changePage(Pages.PASSING_LIGHT);
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
    PassingLightModel.changeMode(mode);
    AppModel.changePage(Pages.PASSING_LIGHT);
  }
}
