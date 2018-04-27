import React, { Component } from 'react'
import './TimelineItem.css'
import { Card, Carousel } from 'element-react'
import 'element-theme-default'

class TimelineItem extends Component {
  render() {
    const { data } = this.props
    if (!data) return null
    if (data.type === "year") {
      return <li className="timeline-item period">
        <div className="timeline-info"></div>
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <h2 className="timeline-title">{(new Date(data.date)).getFullYear()}</h2>
        </div>
      </li>
    }
    return (
      <li className="timeline-item">
        <div className="timeline-info">
          <span>{data.date}</span>
        </div>
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <h3 className="timeline-title">{data.title}</h3>
          <Card
            className='box-card'
            header={data.images.length === 0 ? null :
              <div className='demo-4 medium'>
                <Carousel interval='3000' type='card' height='200px'>
                  {
                    data.images.map((item, index) => (
                      <Carousel.Item key={index}>
                        <div style={{ textAlign: 'center' }}>
                          <img src={item.thumbnail} alt={'carousel'} />
                        </div>
                      </Carousel.Item>
                    ))
                  }
                </Carousel>
              </div>
            }
          >
            {
              data.items.map((item, index) => {
                switch (item.type) {
                  case 'subtitle': return <div key={index} className='text item' style={{ paddingLeft: 20 }}>&#9702; {item.text}</div>
                  case 'link': return <a key={index} style={{ color: '#2196F3', paddingLeft: 20 }} href={item.link}>&#9702; link</a>
                  default: return <div key={index} className='text item'>{item.text}</div>
                }
              })
            }
          </Card>
        </div>
      </li>
    )
  }
}

export default TimelineItem