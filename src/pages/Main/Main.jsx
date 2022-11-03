import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NFTItems from "../../components/NFTItems/NFTItems";
import { getNFTAssets } from "../../redux//nftActions";
import Loader from "../../components/Loader/Loader";

function Main() {
  const dispatch = useDispatch();
  const assets = useSelector((s) => s.nftReducer.assets);
  const cursor = useSelector((s) => s.nftReducer.cursor);
  const assetsIsLoading = useSelector((s) => s.nftReducer.getAssets.loading);

  useEffect(() => {
    if (!cursor) {
      dispatch(getNFTAssets());
      window.scrollTo({
        top: 0,
      });
    }
  }, [cursor]);

  if (!cursor && assetsIsLoading) {
    return <Loader isAssetsFirstLoad={true} />;
  }

  return <NFTItems assets={assets} />;
}

export default Main;
