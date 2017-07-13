import React, { Component } from 'react';

// constants
import Pages from '../../constants/pages';

// services
import PageService from '../../services/page-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';

// components
import HeaderNavButton from '../../components/header-nav-button/header-nav-button.jsx';
import ListButton from '../../components/list-button/list-button.jsx';


require('../../styles/main.scss');


export default class LiquidLightPage extends Component {
  constructor() {
    super();
    this.state = new PageModel(Pages.LIQUID_LIGHT);
    this.state.position = 1;
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
    AppModel.pageChanged.add(this.onPageChanged, this);
  }

  componentWillUnmount() {
    AppModel.pageChanged.remove(this.onPageChanged, this);
  }


  // methods definitions
  gotoIndex() {
    AppModel.changePage(Pages.INDEX);
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
