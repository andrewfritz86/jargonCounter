
var Tracker = React.createClass({
  componentDidMount: function(){
    this.buzzwords = [
    "disrupt",
    "dynamic",
    "thought-leader",
    "iterate",
    "agile",
    "disruptive",
    "tech",
    "angular",
    "backbone",
    "react",
    "stack",
    "dev",
    "DRY",
    "circle-up",
    "connect",
    "ping",
    "sprint",
    "achieve",
    "deep-dive",
    "deck",
    "bleeding-edge",
    "isomorphic",
    "javascript"
    ]
  },

  getInitialState: function(){
    return {text: "type some jargon here", jargonCount: 0}
  },

  render: function(){
    return (
          <div> <input type="text" onChange={this.handleChange} className="form-control" value={this.state.text} /> 
            <h1 className="special">{this.state.text}</h1>
            <h2> Current Jargon Count {this.state.jargonCount} </h2> 
          </div> 
          )
  },

  handleChange: function(event){
    var words = event.target.value.split(" ");
    var myString = "";
    var buzzwords = this.buzzwords;
    var matchCount = 0;

    words.forEach(function(word){
      buzzwords.forEach(function(buzzword){
        if(word === buzzword){
          matchCount++
        }else{

        }
      })
    });
    console.log(matchCount);
    //should set state to be an arry?
    this.setState({text: event.target.value, jargonCount: matchCount});
  }

})

React.render(<Tracker />, document.querySelector("#target"));
