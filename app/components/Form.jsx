'use client'
import React, { Component } from 'react';
import CoinSelector from './CoinSelector'; // Import your CoinSelector component
import RingFit from './RingFit'; // Import your RingFit component

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      coin: 2, // Default value for coin
      fitting: 'loose', // Default value for fitting
    };
  }

  handleCoinChange = (value) => {
    this.setState({ coin: value });
  }

  handleFittingChange = (value) => {
    this.setState({ fitting: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { coin, fitting } = this.state;

    // Create a POST request
    fetch(`https://test.aitaca.io/Aitaca/1.0.0/calculator?coin=${coin}&fitting=${fitting}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CoinSelector value={this.state.coin} onChange={this.handleCoinChange} />
        <RingFit value={this.state.fitting} onChange={this.handleFittingChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;
