import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function BAcards(props: any) {
  const { data } = props;

  return (
    <div className="container">
      <div className="row justify-content-center">
        {data.map((v: any, i: any) => {
          return (
            <>
              <div key={i} className="col-lg-4">
                <Link to={`${v.id}`}>
                  <div>
                    <Card>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={v.image}
                        title={v.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {v.title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                  {v.description}
                </Typography> */}
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
