import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBucket } from "../actions";

class NewBucket extends Component {
  zeroBucket() {
    return <option value="Create new Bucket">Create new Bucket</option>;
  }
  someBucket() {
    return this.props.bucket.map(item => (
      <option key={item.num} value={item.num}>
        {item.name}
      </option>
    ));
  }
  renderOption() {
    return this.props.bucket.length <= 2
      ? this.zeroBucket()
      : this.someBucket();
  }
  selectBucket = e => {
    //console.log(e.target.value);
    this.props.selectBucket(e.target.value);
  };
  render() {
    //console.log(this.props);
    return (
      <div>
        <div className="new_bucket_button">
          <select onChange={this.selectBucket}>{this.renderOption()}</select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    bucket: state.bucket,
    selectedBucket: state.selectedBucket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectBucket: num => {
      dispatch(selectBucket(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBucket);
