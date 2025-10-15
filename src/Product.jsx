import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Product({ title, image, description, link }) {
  return (
    <div className="Product">
      <Card className="mui-card">
        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={image}
          className="card-media"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={link}>
            <Button size="small">LEARN MORE</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Product;