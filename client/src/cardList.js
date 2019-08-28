import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './cardList.css';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    }
    // queries[0], queries[1]
    // console.log(queries[0], queries[1]);
    // console.log("cardlist props:", this.props);

  }

  async componentDidMount() {
    console.log("Mounted");
    console.log("willUpdate:", this.props);
    console.log(this.props.match.params);

    let res;
    // 서치일경우 > /search/:value 링크로 접근시.
    if (this.props.match.params.value) {
      const split = String(this.props.location.search).split("?");
      // split[1] 값이 존재하면 카테고리 필터링 검색 수행
      if (split[1] !== null || split[1] !== undefined) {
        const queries = String(split[1]).split("=");
        res = await axios.get(`/mongo/searchCategory/${queries[1]}/${this.props.match.params.value}`);
      } else
        res = await axios.get(`/mongo/search/${this.props.match.params.value}`);
      // console.log("search: ",this.props.match.params.value);
    }
    else {
      res = await axios.get("/mongo/itemlist");
    }
    this.setState({ data: res.data, isLoaded: true });
    console.log("cardlist state:", this.state);
  }

  // getItems = async () => {
  //   console.log("did getcha");
  //   return await axios.get("/mongo/itemlist");
  // }

  testClick = (event) => {
    console.log(event.target);
    console.log(event.srcElement);
  }

  render() {
    const { data } = this.state;

    const Styles = makeStyles(theme => ({
      icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    }));

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container className={Styles.cardGrid} maxWidth="md">
            {/* <h1>{props.data[0].name}</h1> */}
            <Grid container spacing={4}>
              {
                data.length > 0 ?
                  data.map((index) => (

                    <Grid item key={index._id} xs={12} sm={6} md={4}>
                      <Card className={Styles.card}>
                        <CardMedia
                          className={Styles.cardMedia}
                          image={index.imgUrl}
                          title="Image title"
                        >
                          <CardContent className={Styles.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {index.name}
                            </Typography>
                          </CardContent>
                        </CardMedia>
                        <CardActions >
                          <Link to={`/detail/${index._id}`} >
                            {/* <Button size="small" color="primary" float="right" > */}
                            More
                      {/* </Button> */}
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                  : ("isLoading...")
              }
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}