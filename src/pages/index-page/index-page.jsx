import React, { Component } from 'react';

// constants
import Pages from '../../constants/pages';

// services
import PageService from '../../services/page-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';

// components
import ListButton from '../../components/list-button/list-button.jsx';

require('../../styles/main.scss');


export default class IndexPage extends Component {
  constructor() {
    super();
    this.state = new PageModel(Pages.INDEX);
  }

  // react method definitions
  render() {
    let pageClasses = PageService.getPageClasses(
      this.state.id,
      this.state.position
    );

    return (
      <div id="indexPage" className={pageClasses}>
        <header className="header">
          <div className="centered-content">
            <h1>Deep-Performance Dwelling</h1>
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
                      label="Liquid Light"
                      onClick={this.gotoLiquidLightPage}
                    />
                  </li>
                  <li>
                    <ListButton
                      label="Passing Light"
                      isDisabled="true"
                      onClick={this.gotoPassingLightPage}
                    />
                  </li>
                  <li>
                    <ListButton
                      label="Shadow Play"
                      isDisabled="true"
                      onClick={this.gotoShadowPlayPage}
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
  gotoLiquidLightPage() {
    AppModel.changePage(Pages.LIQUID_LIGHT);
  }

  gotoPassingLightPage() {
    AppModel.changePage(Pages.PASSING_LIGHT);
  }

  gotoShadowPlayPage() {
    AppModel.changePage(Pages.SHADOW_PLAY);
  }

  onPageChanged() {
    // global scroll on page change
    window.scrollTo(0, 0);

    if (AppModel.getCurrentPage() === this.state.id) {
      this.setState({
        position: 0
      });
    } else {
      this.setState({
        position: -1
      });
    }
  }
}
