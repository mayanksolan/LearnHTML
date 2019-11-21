//action creator
export const selectBucket = bucket => {
  return {
    type: "BUCKET_SELECTED",
    payload: bucket
  };
};
