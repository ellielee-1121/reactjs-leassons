import React, { Component } from 'react';
import zipCodes from '../data/zipCodes';

class RegionSelect extends Component {
  state = {
    cityIdx: 0,
    areaIdx: 0,
  }

  onChangeCity = (e) => {
    this.setState({
      cityIdx: e.target.value,
      areaIdx: 0,
    });
  }

  onChangeArea = (e) => {
    this.setState({
      areaIdx: e.target.value,
    });
  }

  getRegion = () => {
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];
    return {
      city: city.name,
      area: area.name,
      zipCode: area.zip,
    };
  }

  render() {
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];

    return (
      <div>
        <select value={cityIdx} onChange={this.onChangeCity}>
          {zipCodes.map(({ name }, idx) => (
            <option value={idx} key={name}>{name}</option>
          ))}
        </select>
        <select value={areaIdx} onChange={this.onChangeArea}>
          {city.areas.map(({ name }, idx) => (
            <option value={idx} key={name}>{name}</option>
          ))}
        </select>
        <span>{area.zip}</span>
      </div>
    );
  }
}

export default RegionSelect;
