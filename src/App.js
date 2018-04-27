import React, { Component } from 'react'
import './App.css'
import TimelineItem from './TimelineItem/TimelineItem'
import data from './data'

class App extends Component {
  render() {
    return (
      <div>
        <div className="example-header">
          <h1 className="text-center">Chaowarat Tangrueng Developer Timeline</h1>
          <p><a href="">2015-2018</a></p>
        </div>

        <div className="container-fluid">
          <div className="row example-split">
            <div className="col-md-12 example-title">
              <p>--- 2015 --- 2016 --- 2017 --- 2018 ---</p>
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
              <ul className="timeline timeline-split">
                {
                  data.map((item, index) => (<TimelineItem key={index} data={item} />))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
