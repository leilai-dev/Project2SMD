import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
import {Link} from 'react-router-dom';
// import Link from '@material-ui/core/Link';

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Built with love by the '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {' team.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));


export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    }
    console.log(this.state);

  }

  async componentDidMount() {
    console.log("Mounted");
    let res = await axios.get("/mongo/itemlist");
    console.log(res);
    this.setState( {data: res.data, isLoaded: true });
    console.log(this.state);
  }

  getItems = async () => {
    console.log("did getcha");
    return await axios.get("/mongo/itemlist");
    // .then((res) => {
    //   this.setState( {data: res.data, isLoaded: true } );
    // })
    // console.log(this.state);
  }

  testClick = (event) => {
    console.log(event.target)

    console.log(event.srcElement);
  }
  
  // let classes = useStyles();
  // let whatni;
  // let cards = [1, 2, 3, 4, 5, 6];
  // for(let i=0; i<props.data.length; i++){
  //   cards.push(i);
  // }
  // console.log(props.data);
  // // console.log(this.props.data[0]);
  // if(props.data.name == "a") {
  //   whatni = false;
  //   console.log('아직안바꼈는데?',whatni,'     ',props.data);
  // } else {
  //   whatni = true;
  //   console.log('바꼈는데?  ', props);
  // }
  render() {
    const {data} = this.state;

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
                data.length ? 
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
                      <Typography>
                        {index.kcal}
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