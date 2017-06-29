import React, { Component } from 'react';

require('../styles/main.scss');


export default class IndexPage extends Component {
  constructor() {
    super();
  }

  // react method definitions
  render() {
    return (
      <div className="index-page">
        <header className="header">
          <div className="centered-content">
            <h1>Page Header</h1>
          </div>
        </header>

        <section>
          <div className="centered-content">
            <div className="column left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis illo provident, officiis tenetur placeat debitis, consequuntur, consectetur id assumenda suscipit repellat necessitatibus rem sint laudantium deleniti incidunt atque.
              </p>
            </div>
            <div className="column right">
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
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="centered-content">
            <div className="column left">
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
            <div className="column right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis illo provident, officiis tenetur placeat debitis, consequuntur, consectetur id assumenda suscipit repellat necessitatibus rem sint laudantium deleniti incidunt atque.
              </p>
            </div>
          </div>
        </section>

      </div>
    );
  }

  componentDidMount() {

  }
}
