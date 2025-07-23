import SingleBook from "./SingleBook";
import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

const BookList = ({ books }) => {
    const [search, setSearch] = useState("");

    const BooksFiltered = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log("books:", books);
    return (
        <>
            <Form.Group className="my-3">
                <Form.Control
                    type="text"
                    placeholder="Scrivi il titolo del libro che cerchi"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </Form.Group>
            <Row>
                {BooksFiltered.map((book) => (
                    <Col xs={12} md={6} lg={3} key={book.asin}>
                        <SingleBook book={book} />
                    </Col>
                ))}
                {console.log(books)}
            </Row>
        </>
    );
};

export default BookList;
