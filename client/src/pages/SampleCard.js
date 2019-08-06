import React from 'react';
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


const useStyles = makeStyles(theme => ({
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
    paddingTop: theme.spacing(2),
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


export default function Album(props) {
  let classes = useStyles();
  let whatni;
  let cards = [1, 2, 3, 4, 5, 6];
  // for(let i=0; i<props.data.length; i++){
  //   cards.push(i);
  // }
  // console.log(props);
  // console.log(this.props.data[0]);
  if(props.data[0].name == "a") {
    whatni = false;
    console.log('아직안바꼈는데?',whatni,'     ',props.data);
  } else {
    whatni = true;
    console.log('바꼈는데?  ', props);
  }
  return (
    <React.Fragment>
      <CssBaseline />


        <Container className={classes.cardGrid} maxWidth="md">
          {/* <h1>{props.data[0].name}</h1> */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardMedia
                    className={classes.cardMedia}
                    image={whatni? props.data[index].imgUrl:''}
                    title="Image title"
                  />


                  <CardContent className={classes.cardContent}>
                    
                    <Typography gutterBottom variant="h5" component="h2">
                    {whatni? props.data[index].name:''}
                    </Typography>


                    <Typography>
                    {whatni? props.data[index].kcal+'Kcal':''}
                    </Typography>

                  </CardContent>

                  
                  <CardActions>
                    <Button size="small" color="primary" float="right">
                      More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}


          </Grid>
        </Container>
    </React.Fragment>
  );
}