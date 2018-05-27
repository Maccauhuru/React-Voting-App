class EpisodesList extends React.Component {
    render() {
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
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.episodeImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon' />
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


