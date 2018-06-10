/* eslint-disable no-param-reassign, operator-assignment */
const AppContent = document.getElementById('content');

class EpisodeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
    };

    this.handleEpisodeUpVote = this.handleEpisodeUpVote.bind(this);
    this.handleEpisodeDownVote = this.handleEpisodeDownVote.bind(this);
  }

  componentDidMount() {
    this.setState({ episodes: Seed.episodes });
  }

   handleEpisodeUpVote(episodeId) {
     const nextEpisodes = this.state.episodes.map((episode) => {
       if (episode.id === episodeId) {
         return Object.assign({}, episode, {
           votes: episode.votes + 1,
         });
       } else {
         return episode;
       }
     });
     this.setState({
       episodes: nextEpisodes,
     });
   }

   handleEpisodeDownVote(episodeId) {
     const nextEpisodes = this.state.episodes.map((episode) => {
       if (episode.id === episodeId) {
         return Object.assign({}, episode, {
           votes: episode.votes - 1,
         });
       } else {
         return episode;
       }
     });
     this.setState({
       episodes: nextEpisodes,
     });
   }

  render() {
    const episodes = this.state.episodes.sort((a, b) => (
      b.votes - a.votes
    ));
    const episodeComponents = episodes.map((episode) => (
      <Episode
        key={'episode-' + episode.id}
        id={episode.id}
        title={episode.title}
        description={episode.description}
        url={episode.url}
        votes={episode.votes}
        submitterAvatarUrl={episode.submitterAvatarUrl}
        episodeImageUrl={episode.episodeImageUrl}
        onUpVote={this.handleEpisodeUpVote}
        onDownVote={this.handleEpisodeDownVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        {episodeComponents}
      </div>
    );
  }
}

class Episode extends React.Component {
  constructor(props) {
    super(props);
this.handleUpVote = this.handleUpVote.bind(this); 
this.handleDownVote = this.handleDownVote.bind(this); 
  }

  handleUpVote(){
    this.props.onUpVote(this.props.id);
  }

  handleDownVote() {
      this.props.onDownVote(this.props.id);
    }

  render() {
    let redBtnStyle = {
      color: "red"
    };
    let greenBtnStyle = {
      color: "green"
    };
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.episodeImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" style={greenBtnStyle} />
            </a>
            {this.props.votes}
            <a onClick={this.handleDownVote}>
              <i className="large caret down icon" style={redBtnStyle} />
            </a>
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <EpisodeList />,AppContent
);
