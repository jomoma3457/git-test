function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class RanQuoMach extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getRanQuo",
















    e => {
      const ranInd = Math.floor(Math.random() * 100 - 1 + 1);
      this.setState({ quote: this.state.quotes[ranInd] });
      return this.state.quotes[ranInd];
    });this.state = { quote: [], quote: '' };this.JSON = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';this.getRanQuo = this.getRanQuo.bind(this);}componentDidMount() {fetch(this.JSON).then(data => data.json()).then(quotes => this.setState({ quotes }, () => {this.setState({ quote: this.getRanQuo() });}));}
  render() {
    const tweetLink = "twitter.com/intent/tweet" +
    this.state.quote.quote + ' - ' + this.state.quote.author;

    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Random Quote Machine"), /*#__PURE__*/
      React.createElement("p", { id: "text" }, "\"", this.state.quote.quote, "\""), /*#__PURE__*/
      React.createElement("p", { id: "author" }, "-", this.state.quote.author), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: tweetLink }, "Share!"), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.getRanQuo }, "Click Here!")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(RanQuoMach, null),
document.getElementById("ranquomach"));