class RQM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      data: '',
      quote: ''
    };
  }

  getQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  componentDidMount() {
    this.getQuote(this.state);
  }

  tweetQuote() {
    window.open(
      `https://twitter.com/intent/tweet?text=${this.state.data.quote}  -${
        this.state.data.author
      }`
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div id="quote-box">
        <figure>
          <q id="text">{data.quote}</q>
          <figcaption id="author">-{data.author}</figcaption>
        </figure>
        <div className="button-container">
          <button id="new-quote" onClick={this.getQuote}>
            new Quote
          </button>
          <button id="tweet-quote" onClick={this.tweetQuote}>
            Tweet Quote
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<RQM />, document.getElementById('app'));
