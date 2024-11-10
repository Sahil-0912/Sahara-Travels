import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const Search = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search data:', searchData);
  };

  return (
    <div className="container">
      <div className="bg-white p-4 shadow rounded">
        <Form onSubmit={handleSubmit}>
          <div className="row">
            {/* From Field */}
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>From</Form.Label>
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-bus"></i></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter departure city"
                    value={searchData.from}
                    onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </div>

            {/* Swap Button */}
            <div className="col-md-1 d-flex align-items-end justify-content-center">
              <Button
                variant="light"
                className="rounded-circle"
                onClick={() => setSearchData({ ...searchData, from: searchData.to, to: searchData.from })}
              >
                <i className="bi bi-arrow-left-right"></i>
              </Button>
            </div>

            {/* To Field */}
            <div className="col-md-4">
              <Form.Group>
                <Form.Label>To</Form.Label>
                <InputGroup>
                  <InputGroup.Text><i className="bi bi-bus"></i></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter destination city"
                    value={searchData.to}
                    onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                  />
                </InputGroup>
              </Form.Group>
            </div>

            {/* Date Field */}
            <div className="col-md-3">
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                />
              </Form.Group>
            </div>

            {/* Search Button */}
            <div className="col-md-12 text-center mt-3">
              <Button type="submit" variant="primary">
                Search Buses
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Search;