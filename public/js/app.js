class EpisodesList extends React.Component {
    handleUpvoteBtnClick(episodeId) {
        console.log(`${episodeId} was clicked.`)  
    };

    render() { 
       const episodes = Seeds.episodes.sort((a,b)=>(
           b.votes - a.votes
        ));
        const episodeComponents = Seeds.episodes.map((episode) =>
            (
                <Episode
                    key={'episode' + episode.id}
                    id={episode.id}
                    title={episode.title}
                    description={episode.description}
                    url={episode.url}
                    votes={episode.votes}
                    submitterAvatarUrl={episode.submitterAvatarUrl}
                    episodeImageUrl={episode.episodeImageUrl}
                    onUpVote= {this.handleUpvoteBtnClick}
                />
            ));
        return (
            <div className="ui unstackable items">
                {episodeComponents}
            </div>
        );
    }
}

class Episode extends React.Component {
    constructor(props){
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }

    //Inside 'Episode'
    handleUpVote(){
        this.props.onUpVote(this.props.id)
    }
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.episodeImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'  />
                        </a>
                        {this.props.votes}
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

ReactDOM.render(<EpisodesList />, document.getElementById("content"));


