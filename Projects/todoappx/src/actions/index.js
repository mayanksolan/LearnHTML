//action creator
export const selectBucket = num => {
  return {
    type: "BUCKET_SELECTED",
    payload: num
  };
};
