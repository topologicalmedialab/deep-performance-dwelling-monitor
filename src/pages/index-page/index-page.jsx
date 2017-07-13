import React, { Component } from 'react';

// constants
import Pages from '../../constants/pages';

// services
import PageService from '../../services/page-service';

// models
import AppModel from '../../models/app-model';
import PageModel from '../../models/page-model';

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
                    <button
                      className="li-btn"
                      type="button"
                      onClick={this.gotoLiquidLightPage}
                    >Liquid Light</button>
                  </li>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
                      onClick={this.gotoPassingLightPage}
                    >Passing Light</button>
                  </li>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
                      onClick={this.gotoShadowPlayPage}
                    >Shadow Play</button>
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
