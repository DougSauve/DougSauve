import React from 'react';
import moment from 'moment';

export default class BlogPost extends React.Component {

  createHTMLContent = () => {
    return { __html: this.props.content }
  }

  render () {
    return (
      <div className = "BlogPost">
        <div className = "BlogPost__TitleBar">

          {/* Title */}
          <div className = "BlogPost__Title">
            {this.props.title}
          </div>
          <div className = "BlogPost__Timestamp">

            {/* Created at */}
            <div className = "BlogPost__Timestamp__CreatedAt">
              {moment(this.props.createdAt).format('dddd, MMMM Do, YYYY')}
            </div>

            {/* Edited at */}
            {(this.props.editedAt) &&
              <div className = "BlogPost__Timestamp__EditedAt">
                <span className = "BlogPost__Timestamp__EditedAt__Text">
                  edited
                </span>
                {moment(this.props.editedAt).format('dddd, MMMM Do, YYYY')}
              </div>
            }

          </div>
        </div>

        {/* Content */}
        <div
          className = "BlogPost__Content"
          dangerouslySetInnerHTML = {this.createHTMLContent()}
        />
      </div>
    )
  }
}
