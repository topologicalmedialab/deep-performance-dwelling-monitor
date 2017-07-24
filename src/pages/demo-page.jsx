import React, { Component } from 'react';

import ScreenGuides from '../components/screen-guides/screen-guides.jsx';
import HeaderNavButton from '../components/header-nav-button/header-nav-button.jsx';

require('../styles/main.scss');


export default class DemoPage extends Component {
  constructor() {
    super();
  }

  // react method definitions
  render() {
    return (
      <div className="demo-page">
        <header className="header">
          <div className="centered-content">
            <h1>
              <HeaderNavButton direction="left"/>
              <span>Page Header</span>
              <HeaderNavButton direction="right"/>
            </h1>
          </div>
        </header>

        <section>
          <div className="centered-content">
            <div className="column left">
              <div className="column-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis illo provident, officiis tenetur placeat debitis, consequuntur, consectetur id assumenda suscipit repellat necessitatibus rem sint laudantium deleniti incidunt atque.
                </p>
              </div>
            </div>
            <div className="column right">
              <div className="column-content">
                <ul>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
                    >Button 01</button>
                  </li>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
                    >Button 02</button>
                  </li>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
                    >Button 03</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="centered-content">
            <div className="column left">
              <div className="column-content">
                <ul>
                  <li>
                    <div className="li-label">Option 01</div>
                  </li>
                  <li>
                    <div className="li-label">Option 02</div>
                  </li>
                  <li>
                    <div className="li-label">Option 03</div>
                  </li>
                  <li>
                    <div className="li-label">Option 04</div>
                  </li>
                  <li>
                    <div className="li-label">Option 05</div>
                  </li>
                  <li>
                    <div className="li-label">Option 06</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column right">
              <div className="column-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis illo provident, officiis tenetur placeat debitis, consequuntur, consectetur id assumenda suscipit repellat necessitatibus rem sint laudantium deleniti incidunt atque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis illo provident, officiis tenetur placeat debitis, consequuntur, consectetur id assumenda suscipit repellat necessitatibus rem sint laudantium deleniti incidunt atque.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer"></footer>

        <ScreenGuides/>
      </div>
    );
  }

  componentDidMount() {}
}
