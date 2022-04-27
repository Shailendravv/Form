import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput, FormRadioGroup, FormTextArea } from './form-components';
import { nameValidator, requiredValidator } from './validators';
import { genders } from './data';
export const PersonalDetails = (
  <div>
    <Field
      key={'fullName'}
      id={'fullName'}
      name={'fullName'}
      label={'Full Name'}
      component={FormInput}
      validator={nameValidator}
    />

    <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
    />
    <Field
      key={'about'}
      id={'about'}
      name={'about'}
      label={'About'}
      optional={true}
      component={FormTextArea}
    />
  </div>
);
