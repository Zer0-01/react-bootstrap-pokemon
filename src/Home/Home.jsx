import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setPokemon(actualData.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPokemon(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  let handleClick = () => {
    navigate("/details");
  };

  if (loading) return "Loading...";
  if (error) return "Error: " + error;
  if (!pokemon) return "No data found";

  return (
    <div>
      <Container>
        <h1>Your Pokemon Info</h1>
      </Container>
      <Container>
        <Row>
          {pokemon.map((pokemon, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <Card className="mb-3 custom-card">
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Button variant="dark" onClick={handleClick}>Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
