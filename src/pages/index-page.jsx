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
                    >Liquid Light</button>
                  </li>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
                    >Passing Light</button>
                  </li>
                  <li>
                    <button
                      className="li-btn"
                      type="button"
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

  componentDidMount() {}
}
