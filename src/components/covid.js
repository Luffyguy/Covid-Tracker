import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ".././App.css";

const useStyles = makeStyles({
  ul: {
    listStyleType: "none",
  },
  list: {
    margin: 30,
    textAlign: "center",
  },
  large: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 10,
    borderBlockColor: "black",
    borderRadius: 50,
    maxWidth: 500,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textAlign: "center",
    height: 100,
    padding: "0 30px",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 10,
    borderBlockColor: "black",
    borderRadius: 50,
    maxWidth: 500,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textAlign: "center",
    height: 100,
    padding: "0 30px",
  },
  p: {
    fontSize: 20,
    fontWeight: 500,
  },
});

const Covid = () => {
  const [data, setData] = useState([]);

  const classes = useStyles();

  const getData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const covidData = await res.json();
      console.log(covidData.statewise[0]);
      setData(covidData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="all">
      <h1 className="title">Covid Tracker</h1>

      <marquee class="marq" bgcolor="darkgreen" direction="left" loop="">
        <h3 className="subtitle">📍 Latest Data 📍</h3>
      </marquee>
      <div className="container">
        <section>
          <ul className={classes.ul}>
            <li className={classes.list}>
              <Card className={classes.large}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Country : India
                  </Typography>
                </CardContent>
              </Card>
            </li>
            <li className={classes.list}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Total Confirmed
                  </Typography>
                  <Typography
                    className={classes.p}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.confirmed}
                  </Typography>
                </CardContent>
              </Card>
            </li>
            <li className={classes.list}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Total Active
                  </Typography>
                  <Typography
                    className={classes.p}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.active}
                  </Typography>
                </CardContent>
              </Card>
            </li>
            <li className={classes.list}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Total Recovered
                  </Typography>
                  <Typography
                    className={classes.p}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.recovered}
                  </Typography>
                </CardContent>
              </Card>
            </li>
            <li className={classes.list}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Total Deaths
                  </Typography>
                  <Typography
                    className={classes.p}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.deaths}
                  </Typography>
                </CardContent>
              </Card>
            </li>
            <li className={classes.list}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Last Updated
                  </Typography>
                  <Typography
                    className={classes.p}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.lastupdatedtime}
                  </Typography>
                </CardContent>
              </Card>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Covid;
