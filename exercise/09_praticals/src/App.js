import React, { Component } from 'react';
import ImagePreview from './components/ImagePreview';
import RegionSelect from './components/RegionSelect';
import Password from './components/Password';
import FilterList from './components/FilterList';
import reps from './data/repos.json';
import MenuBar from './components/MenuBar';
import InfiniteScroll from './components/InfiniteScroll';
import Loan from './components/Loan';
import ImageSlider from './components/ImageSlider';
import streamers from './data/streamers.json';


// const App = () => (
//   <RegionSelect/>
// );

// class App extends Component {
//   submit = () => {
//     alert(JSON.stringify(this.region.getRegion()));
//   }
//   render() {
//     return (
//       <div>
//         <RegionSelect ref={r => (this.region = r)} />
//         <button onClick={this.submit}> Submit</button>
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {
    page: 'Loan',
  }
  getPage = () => {
    switch (this.state.page) {
      case 'Loan':
        return <Loan />;
      case 'InfiniteScroll':
        return <InfiniteScroll />;
      case 'ImageSlider':
        return <ImageSlider imgs={streamers} />;
      default:
        return null;
    }
  }
  setPage = (page) => {
    this.setState({ page });
  }
  render() {
    return (
      <div>
        {/* <ImagePreview />
        <br />
        <RegionSelect />
        <br />
        <Password />
        <br /> */}
        {/* <FilterList item={reps} /> */}

        {/* <InfiniteScroll /> */}
        {/* <ImageSlider imgs={streamers} /> */}
        <MenuBar
          items={[
            'Loan',
            'InfiniteScroll',
            'ImageSlider',
          ]}
          setPage={this.setPage}
        />
        <div>
          {this.getPage()}
        </div>
      </div>
    );
  }
}
export default App;

