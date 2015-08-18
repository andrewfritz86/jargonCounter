
var Word = React.createClass({
  getInitialState: function(){
    return {
      matched: false,
      content: " "
    }
  },

  render: function(){
    return <span className={"plain " + (this.props.matched ? "animated rubberBand special" : "plain")}> {this.props.content} </span>
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
    "stand-up",
    "flow",
    "feature",
    "features",
    "product",
    "testing",
    "mongo",
    "firebase",
    "MEAN",
    "sql",
    "nosql",
    "cloud"
    ];
  },

  getInitialState: function(){
    return {text: "Enter your Jargon!", jargonCount: 0};
  },

  render: function(){
    return (
          <div><input type="text" onChange={this.handleChange} className="form-control arrow" value={this.state.text} /> 
            <h3> {this.markupJargon()} </h3>
            <h4> Current Jargon Count: <span className="special"> {this.state.jargonCount} </span> </h4> 
          </div> 
          );
  },

  markupJargon: function(){

    var arrayOfWordComponents = [];
    var words = this.state.text.split(" ");
    var buzzwords = this.buzzwords;

    words.forEach(function(word){
      var buzzy;
        buzzwords.forEach(function(buzzword){
        if(word.toLowerCase().replace(/[^a-zA-Z]/g, "") === buzzword){
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
        if(word.toLowerCase().replace(/[^a-zA-Z]/g, "") === buzzword){
          matchCount++
        }
      });
    });
    this.setState({text: event.target.value, jargonCount: matchCount});
  }
});

React.render(<Tracker />, document.querySelector("#target"));
