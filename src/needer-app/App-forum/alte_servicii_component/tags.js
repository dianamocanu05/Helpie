import React from 'react';
import { COUNTRIES } from './countries';
import './style-tags.css';
import { WithContext as ReactTags } from 'react-tag-input';
const suggestions = COUNTRIES.map((country) => {
  return {
    id: country,
    text: country,
  }
}) 

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


export default class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //default exemple de tag-uri
      suggestions: suggestions,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);

  }


  handleDelete(i) {
    const { tags } = this.props;
    this.props.giveTags(tags.filter((tag,index)=> index !== i));//, this.props.parentCallback);
    //this.props.parentCallback(tags.filter((tag, index) => index !== i));
  }

  handleAddition(tag) {
    this.props.giveTags([...this.props.tags,tag]);
  //, this.props.parentCallback);
    //this.props.parentCallback([...this.state.tags, tag] );
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.props.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.props.giveTags(newTags);//, this.props.parentCallback);
    //this.props.parentCallback(newTags);
  }

  handleTagClick(index) {
    console.log('The tag at index ' + index + ' was clicked');
  }

  render() {
    const { suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={this.props.tags}
          suggestions={this.props.suggest}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}