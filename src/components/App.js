import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogGrid from './HogGrid'
// import *from '../hog-imgs'
import hogs from '../porkers_data';
import DetailHog from './DetailHog'
import Underscore from 'underscore'
// function to add the imgaed to each hog in hogs array
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../hog-imgs', false, /\.(png|jpe?g|svg)$/));
// class App
class App extends Component {
  state = {
    hogs: this.addImagesToHogs(),
    detailhog : "",
    showGreased:true,
    sortBy: "name"
  }
  componentDidMount() {
    this.setState(prevState => {
      return {...prevState,
      detailhog: prevState.hogs[0]}
    })
  }
  handleHogClick = (hogname) => {
    const hog = this.state.hogs.find((hog) => hog.name === hogname)
    this.setState(prevState => {
      return {...prevState,
      detailhog: hog }
    })
  }
  sortByValue = (value) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        sortBy: value
      }
    })
  }
  render() {
    return (
      <div className="App">
          < Nav />
          <HogGrid hogs={this.showHogs()} handleHogClick={this.handleHogClick} /> {/*to show only the hogs based on the toggle state */}
          {/* <HogGrid hogs={this.state.hogs} handleHogClick={this.handleHogClick} /> */}
          <DetailHog detailhog={this.state.detailhog}/>
          <div>
            <button onClick={this.toggleGreased}>Toggle Greased</button> 
            <button onClick={() => this.sortByValue("name")}>Sort by name</button> 
            <button onClick={() => this.sortByValue("weight")}>Sort by weight</button> 
          </div>
      </div>
    )
  }
//to set the toggle greased status
  toggleGreased = () =>
  {
    this.setState((prevState)=>{
      return {
        ...prevState,
        showGreased: !prevState.showGreased
      }
    },() => console.log(this.state.showGreased))
  }
// to shoe the hogs based on the toggle function
  showHogs()
  {
    if (!this.state.showGreased)
    {
      return Underscore.sortBy(this.state.hogs.filter(hog => !hog.greased ), this.state.sortBy)
    }
    else
    {
      return Underscore.sortBy(this.state.hogs, this.state.sortBy)
    }
  }
  addImagesToHogs()
  {
   return hogs.map(hog => ({...hog, imgurl: Underscore.sample(images)}))
  }
}
export default App;