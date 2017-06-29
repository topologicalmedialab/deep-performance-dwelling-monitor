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
                <li>Option 01</li>
                <li>Option 02</li>
                <li>Option 03</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="centered-content">
            <div className="column left">
              <ul>
                <li>Option 01</li>
                <li>Option 02</li>
                <li>Option 03</li>
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
