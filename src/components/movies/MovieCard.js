import React from "react";
import { Card, Button } from "react-bootstrap";
import { ListItemIcon, List, ListItem, ListItemText } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const MovieCard = ({ movie, subscriptions }) => {
  const findDate = (subscriber) => {
    let { date } = subscriber.Movies.filter((m) => m._id === movie._id)[0];
    let dateFormat = new Date(date);
    return `${dateFormat.getDate()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}`;
  };
  return (
    <>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ height: "25rem" }} src={movie.Image} />
        <Card.Body>
          <Card.Title>{movie.Name}</Card.Title>
          <Card.Text>Genres: {movie.Genres.toString()}</Card.Text>
          {subscriptions.length > 0 && (
            <>
              <Card.Title>Subscriptions Watched:</Card.Title>
              <List
                className="m-3"
                dense
                style={{ backgroundColor: "#e3e3e3" }}
              >
                {subscriptions.map((subscriber, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <Person />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${subscriber.name} ${findDate(subscriber)}`}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}
          <Button variant="primary">Edit</Button>{" "}
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
