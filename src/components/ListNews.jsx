import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNews from "../hooks/useNews";
import News_ from "./News_";

const ListNews = () => {
  const { news, totalNews, handleChangePage, page } = useNews();

  const totalPages = Math.ceil(totalNews / 20);
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Last News
      </Typography>
      <Grid container spacing={5}>
        {news.map((news_) => (
          <News_ key={news_.url} news_={news_} />
        ))}
      </Grid>
      <Stack
        sx={{ marginY: 5 }}
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};

export default ListNews;
