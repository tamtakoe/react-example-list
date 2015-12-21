var Card = React.createClass({
    displayName: "Card",

    render: function () {
        return React.createElement(
            "div",
            { className: "col col-lg-3 col-md-4 col-sm-6 col-xs-12" },
            React.createElement(
                "div",
                { className: "editor" },
                React.createElement(
                    "div",
                    { className: "editor-panel" },
                    React.createElement(
                        "a",
                        { href: this.props.url, className: "btn btn-default" },
                        "Open"
                    ),
                    " ",
                    React.createElement(
                        "button",
                        { type: "button", className: "btn btn-default" },
                        "Print"
                    ),
                    React.createElement(
                        "button",
                        { type: "button", className: "btn btn-danger pull-right" },
                        "Delete"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "card" },
                React.createElement(
                    "h1",
                    { className: "card-title" },
                    React.createElement("span", { className: "glyphicon glyphicon-film" }),
                    " ",
                    this.props.title
                ),
                React.createElement(
                    "p",
                    { className: "card-description" },
                    this.props.description
                )
            ),
            React.createElement(
                "div",
                { className: "background" },
                React.createElement("img", { className: "background-image", src: this.props.src })
            )
        );
    }
});

var Cards = React.createClass({
    displayName: "Cards",

    getInitialState: function () {
        return { data: [] };
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (function (data) {
                this.setState({ data: data });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },
    render: function () {
        var cards = this.state.data.map(function (card) {
            return React.createElement(Card, { key: card.id, src: card.backgroundUrl, url: card.url, title: card.title, description: card.description });
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.title
            ),
            React.createElement(
                "div",
                { className: "row cards" },
                cards
            )
        );
    }
});

ReactDOM.render(React.createElement(Cards, { title: "In Theaters", url: "data/films.json" }), document.getElementById('collection'));