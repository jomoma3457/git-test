class RanQuoMach extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      quote: [],
      quote: ''
    }
    this.JSON = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';
    this.getRanQuo =
      this.getRanQuo.bind(this);
  }
  componentDidMount() {
    fetch(this.JSON)
      .then(data => data.json())
      .then(quotes => this.setState({quotes}, () => {
      this.setState({quote: this.getRanQuo()})
    }))
}
  
getRanQuo = (e) => {
    const ranInd = Math.floor((Math.random() * 100 - 1) + 1);
    this.setState({quote: this.state.quotes[ranInd]});
    return this.state.quotes[ranInd];
};
  render(){
    const tweetLink = "twitter.com/intent/tweet" +
          this.state.quote.quote + ' - ' + this.state.quote.author;
   
    return (
    <div id="quote-box">
        <h1 id="title">Random Quote Machine</h1>
        <p id="text">"{this.state.quote.quote}"</p>
        <p id="author">-{this.state.quote.author}</p>
        <a id="tweet-quote" href={tweetLink}>Share!</a>
        <button id="new-quote" onClick={this.getRanQuo}>Click Here!</button>
    </div>
    );
  }
}
ReactDOM.render(<RanQuoMach />,
document.getElementById("ranquomach"));