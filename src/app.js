class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: undefined
    }

    this.saySomething = this.saySomething.bind(this);
    this.sayNothing = this.sayNothing.bind(this);
    this.sendMessageToDB = this.sendMessageToDB.bind(this);
  }

  saySomething(message) {

    this.setState((prevState) => {
      if (prevState.message){
        return {
        message: prevState.message.concat(" " + message)
        };
      } else {
        return {
          message
        };
      };
    });
  };

  sayNothing() {
    this.setState(() => {
      return {
        message: undefined
      };
    });
  };

  sendMessageToDB() {
    alert(this.state.message);
  };

  render () {
    return (
      <div>
        HI MOM
        <AddWords getMessage = {this.saySomething}/>
        <RemoveWords removeMessage = {this.sayNothing} />
        <AddToDB  toDB = {this.sendMessageToDB} />

        {this.state.message && <p>{this.state.message}</p>}
      </div>
    )
  }
};

class AddWords extends React.Component {
  constructor (props) {
    super(props);

    this.relayMessage = this.relayMessage.bind(this);
  }

  relayMessage(e){
    e.preventDefault();
    const message = e.target.elements.message.value;
    this.props.getMessage(message);
    e.target.elements.message.value = "";
  };

  render(){
    return (
      <div>
        <form onSubmit = {this.relayMessage}>
          <input
            type = "text"
            name = "message"
          />
          <button>
            Add words to page
          </button>
        </form>
      </div>
    );
  };
};

const RemoveWords = (props) => {
  return (
    <div>
      <button onClick = {props.removeMessage}>
        Remove the words
      </button>
    </div>
  )
}

const AddToDB = (props) => {
  return (
    <div>
      <button onClick = {props.toDB}>
        Add this message to the database
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
