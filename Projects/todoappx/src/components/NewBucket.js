import React, { Component } from "react";
import { connect } from "react-redux";

class NewBucket extends Component {
  zeroBucket() {
    return <option value="Create new Bucket">Create new Bucket</option>;
  }
  someBucket() {
    return this.props.bucket.map(item => (
      <option value={item.name}>{item.name}</option>
    ));
  }
  renderOption() {
    return this.props.bucket.length <= 2
      ? this.zeroBucket()
      : this.someBucket();
  }
  render() {
    return (
      <div>
        <div className="new_bucket_button">
          <select>{this.renderOption()}</select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bucket: state.bucket
  };
};

export default connect(mapStateToProps)(NewBucket);
