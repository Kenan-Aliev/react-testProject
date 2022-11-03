import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTAssets } from "../../redux/nftActions";
import { useIntersected } from "../../hooks/useIntersected";
import NFTItem from "./NFTItem";
import "./nftItems.css";
import Loader from "../Loader/Loader";

function NFTItems({ assets }) {
  const containerRef = useRef();
  const isVisible = useIntersected(containerRef);
  const dispatch = useDispatch();
  const cursor = useSelector((s) => s.nftReducer.cursor);
  const isAssetsLoading = useSelector((s) => s.nftReducer.getAssets.loading);
  useEffect(() => {
    if (isVisible) {
      dispatch(getNFTAssets(cursor));
    }
  }, [isVisible]);

  return (
    <div className="assets">
      {assets.map((asset) => {
        return <NFTItem asset={asset} />;
      })}
      {isAssetsLoading && <Loader isAssetsFirstLoad={false} />}
      <div ref={containerRef}></div>
    </div>
  );
}

export default NFTItems;
