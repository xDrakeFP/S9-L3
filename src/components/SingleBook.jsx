import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
    state = { selected: false };

    toggleSelected = () => {
        this.setState({ selected: !this.state.selected });
    };

    render() {
        const { book } = this.props;
        const { selected } = this.state;
        return (
            <Card
                onClick={this.toggleSelected}
                className={selected ? "card-selected" : "card-normal"}
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
