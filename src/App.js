import React, { Component } from 'react';
import { random, startsWith } from 'lodash'
import words from './words.json'

const MIN_LENGTH = 4
const MAX_LENGTH = 16
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
  'x', 'y', 'z']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      letter: this.setRandomLetter(),
      number: this.setRandomNumber()
    }
  }

  componentWillMount () {
    const { letter, number } = this.state
    this.setState({
      wordlist: words.filter(w => startsWith(w, letter) && w.length === number)
    })
  }

  componentDidMount () {
    const { wordlist } = this.state
    if (wordlist.length === 0) {
      this.reset
    }
  }

  reset = () => {
    this.state = {
      letter: this.setRandomLetter(),
      number: this.setRandomNumber()
    }
  }

  setRandomLetter = () => alphabet[random(0, 25)]
  
  setRandomNumber = () => random(MIN_LENGTH, MAX_LENGTH)
  

  render() {
    console.log(this.state)

    return (
      <div className=''>

        
      </div>
    );
  }
}

export default App;
