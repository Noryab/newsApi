import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const News_ = ({ news_ }) => {
  const { urlToImage, url, title, description, source } = news_;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Image of News ${title}`}
            image={urlToImage}
            height={250}
          />
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>

          <CardActions>
            <Link
              href={url}
              target="_blank"
              variant="button"
              width={"100%"}
              textAlign={"center"}
              sx={{ textDecoration: "none" }}
            >
              Read News
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default News_;
