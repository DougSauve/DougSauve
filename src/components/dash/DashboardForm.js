import React from 'react';

import DashboardMessage from './DashboardMessage';
import DashboardNameInput from './DashboardNameInput';
import DashboardContentInput from './DashboardContentInput';
import DashboardActionInput from './DashboardActionInput';
import DashboardSubmitButton from './DashboardSubmitButton';

export default (props) => (
  <form
    id = "dash__post__form"
    method = "POST"
  >
    <DashboardMessage message = {props.message} />
    <DashboardNameInput />
    <DashboardContentInput />
    <DashboardActionInput />
    <DashboardSubmitButton handleSubmitPost = {props.handleSubmitPost} />
  </form>
);
