import React, { Component } from 'react';
import './App.css';
const styles = {
  body: {
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 246,
    marginBottom: 246,
    height: 480,
    width: 640,
    border: '1px solid white',
    fontSize: 80,
    fontFamily: 'Indie Flower, cursive',
    backgroundColor: 'white',
  },
  video: {
    display: 'none',
  },
}
const cards = ['SAY IT\'S CAROL SINGERS', 'HI...', 'JUST BECAUSE ITS CHRISTMAS-', '(AND AT CHRISTMAS YOU TELL THE TRUTH)', 'JUST WANTED TO SAY', 'THAT YOU ARE WONDERFUL', 'AND I AM HAPPY TO HAVE MET YOU', 'I REALLY ENJOY SPENDING TIME WITH YOU', 'I KNOW I DON\'T SAY A LOT', 'BUT YOU SHOULD KNOW HOW I FEEL', 'JUST FROM MY ACTIONS', 'WISH YOU MERRY CHRISTMAS', 'AND A HAPPY NEW YEAR', '=)', 'Sincerely, Mike', 'MERRY CHRISTMAS'];

class App extends Component {
  state = {
    index: 0,
    card: '',
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 3000);
  }

  tick = () => {
    const { index } = this.state;
    if (index < cards.length) {
      this.setState({
        card: cards[index],
        index: index + 1,
      })
    } 
  }

  render() {
    const { card } = this.state;
    return (  
      <body background='http://wallpaper-gallery.net/images/free-christmas-widescreen-wallpaper/free-christmas-widescreen-wallpaper-26.jpg' style={styles.body}>
        <div style={styles.container}> 
          <div style={styles.card}>
            {card}
          </div>
          <div style={styles.video}>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/B7u6bMBlCXw?autoplay=1&start=26&end=120" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
