import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getNFTAsset } from "../../redux/nftActions";
import Loader from "../../components/Loader/Loader";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import "./nft.css";

function NFT() {
  const { contract_address, token_id } = useParams();
  const dispatch = useDispatch();
  const asset = useSelector((s) => s.nftReducer.asset);
  const assetIsLoading = useSelector((s) => s.nftReducer.getAsset.loading);
  useEffect(() => {
    dispatch(
      getNFTAsset({
        contract_address,
        token_id,
      })
    );
  }, []);
  if (assetIsLoading) {
    return <Loader isAssetsFirstLoad={true} />;
  }

  return (
    <>
      {Object.keys(asset).length > 0 && (
        <div className="nftPage">
          <div className="nftPage-left">
            <Card sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                height="500px"
                width="100%"
                image={asset.image_url}
              />
            </Card>
          </div>
          <div className="nftPage-right">
            <h1>{asset.name}</h1>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Создатель</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                }}
              >
                <Avatar
                  src={asset.creator.profile_img_url}
                  sx={{ width: 56, height: 56, marginRight: "20px" }}
                />
                <h3>{asset.creator.user.username}</h3>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Владелец</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                }}
              >
                <Avatar
                  src={asset.owner.profile_img_url}
                  sx={{ width: 56, height: 56, marginRight: "20px" }}
                />
                <h3>{asset.owner.user.username}</h3>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}

export default NFT;
