

//below is the word component constructor. Each word will be appended to the dom. The words are created as child components of the below tracker component
var Word = React.createClass({
  //the initial state of each word is an empty string, and it's matched property is false
  getInitialState: function(){
    return {
      matched: false,
      content: " "
    }
  },

  //return function. if the matched boolean is true, we add the 'animated rubberband special' class. Also display the content of this.props within the span
  render: function(){
    return <span className={"plain " + (this.props.matched ? "animated rubberBand special" : "plain")}> {this.props.content} </span>
  }

});



//This is the tracker component that owns the form
var Tracker = React.createClass({
  componentWillMount: function(){
    //before the componenet mounts, we add buzzwords as a property.
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

  //set the initial state of text (which will be the val of the form) and the jargoncount
  getInitialState: function(){
    return {text: "Enter your Jargon!", jargonCount: 0};
  },
  // the render function creates an input, adds the handle change handler, sets the default value to the text property of the component's state
  //we also call the markupjargon function within
  render: function(){
    return (
          <div><input type="text" onChange={this.handleChange} className="form-control arrow" value={this.state.text} /> 
            <h3> {this.markupJargon()} </h3>
            <h4> Current Jargon Count: <span className="special"> {this.state.jargonCount} </span> </h4> 
          </div> 
          );
  },
  //the below function handles actually looping through the text and checking each word to see if it matches anything in the above jargon array
  markupJargon: function(){
    //create an empty array of componeents
    var arrayOfWordComponents = [];
    //split up state words
    var words = this.state.text.split(" ");
    //reassign buzzwords (won't be accessible within a callback)
    var buzzwords = this.buzzwords;
    //loop
    words.forEach(function(word){
      //buzzy is a boolean, flip it to true if the word matches
      var buzzy;
        buzzwords.forEach(function(buzzword){
        if(word.toLowerCase().replace(/[^a-zA-Z]/g, "") === buzzword){
          //belowe we are creating a new word component for the word
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
    //this returns an array of componenets, which react can work with when it renders
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
