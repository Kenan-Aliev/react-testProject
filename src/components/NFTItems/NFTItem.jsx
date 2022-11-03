import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./nftItems.css";

function NFTItem({ asset }) {
  return (
    <div className="asset">
      <Card sx={{ maxWidth: 345, margin: "20px 0" }}>
        <CardMedia
          component="img"
          image={asset.image_url}
          height="400px"
          alt="green iguana"
          width="auto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {asset.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {asset.desctiption}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/${asset.asset_contract.address}/${asset.token_id}`}>
            <Button size="small">Подробнее</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default NFTItem;
