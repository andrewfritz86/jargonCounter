
var Word = React.createClass({
  getInitialState: function(){
    return {
      matched: false,
      content: " "
    }
  },

  render: function(){
    return <span className={"plain " + (this.props.matched ? "special" : "plain")}> {this.props.content} </span>
  }

});


var Tracker = React.createClass({
  componentWillMount: function(){
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
    "javascript",
    "bandwidth",
    "learnings",
    "disrupting",
    "iteration",
    "stand-up"
    ]
  },

  getInitialState: function(){
    return {text: "Who wants some jargon?", jargonCount: 0}
  },

  render: function(){
    return (
          <div> <input type="text" onChange={this.handleChange} className="form-control" value={this.state.text} /> 
            <h1> {this.markupJargon()} </h1>
            <h2> Current Jargon Count {this.state.jargonCount} </h2> 
          </div> 
          )
  },

  markupJargon: function(){

    var arrayOfWordComponents = [];
    var words = this.state.text.split(" ");
    var buzzwords = this.buzzwords;

    words.forEach(function(word){
      var buzzy;
        buzzwords.forEach(function(buzzword){
        if(word === buzzword){
          var newWord = <Word matched={true} content={word} />;
          arrayOfWordComponents.push(newWord);
          buzzy = true;
        }
      });
      if(!buzzy){
        var noMatch = <Word matched={false} content={word} />;
        arrayOfWordComponents.push(noMatch);
      }
    });

    return arrayOfWordComponents;

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
        }
      });
    });
    this.setState({text: event.target.value, jargonCount: matchCount});
  }
});

React.render(<Tracker />, document.querySelector("#target"));
