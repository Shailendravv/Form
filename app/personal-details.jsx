import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormRadioGroup, FormCheckbox } from './form-components';
import { requiredValidator } from './validators';
import { pushNotifications, emailNotifications } from './data';
export const PersonalDetails = (
  <div>
    {/* <Field
      key={'fullName'}
      id={'fullName'}
      name={'fullName'}
      label={'Full Name'}
      component={FormInput}
      validator={nameValidator}
    /> */}

    <Field
      key={'emailNotification'}
      id={'emailNotification'}
      name={'emailNotification'}
      label={<h6>By Email</h6>}
      layout={'vertical'}
      component={FormCheckbox}
      data={emailNotifications}
      validator={requiredValidator}
    />
    <Field
      key={'pushNotification'}
      id={'pushNotification'}
      name={'pushNotification'}
      label={
        <>
          <h6>Push Notification</h6>
          <p>These are delivered via SMS to your mobile phone</p>
        </>
      }
      layout={'vertical'}
      component={FormRadioGroup}
      data={pushNotifications}
      validator={requiredValidator}
    />
    {/* <Field
      key={'about'}
      id={'about'}
      name={'about'}
      label={'About'}
      optional={true}
      component={FormTextArea}
    /> */}
  </div>
);
