var Card = React.createClass({
    render: function() {
        return (
            <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="editor">
                    <div className="editor-panel">
                        <a href={this.props.url} className="btn btn-default">Open</a>&nbsp;
                        <button type="button" className="btn btn-default">Print</button>
                        <button type="button" className="btn btn-danger pull-right">Delete</button>
                    </div>
                </div>
                <div className="card">
                    <h1 className="card-title">
                        <span className="glyphicon glyphicon-film"></span> {this.props.title}
                    </h1>
                    <p className="card-description">{this.props.description}</p>
                </div>
                <div className="background">
                    <img className="background-image" src={this.props.src} />
                </div>
            </div>
        )
    }
});

var Cards = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        var cards = this.state.data.map(function(card) {
            return <Card key={card.id} src={card.backgroundUrl} url={card.url} title={card.title} description={card.description}/>
        });

        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className='row cards'>
                    {cards}
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Cards title='In Theaters' url='data/films.json'/>, document.getElementById('collection'));