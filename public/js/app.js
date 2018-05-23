class Episodes extends React.Component{
    render(){
    return (
    <div className='ui unstackable items'>
        <EpisodeList />
    </div>);
}
}


class EpisodeList extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='images/products/image-aqua.png' />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Grow Fast or Die Slow</a>
                        <p>
                            The pressure to get things right stymies Richard and forces him to grow the company in a way he had not planned. Dinesh and Gilfoyle question their ability to make good decisions.
                            Gavin returns to Hooli and worries about becoming antiquated.
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src='images/avatars/daniel.jpg'
                        />
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Episodes />, document.getElementById("content"));


