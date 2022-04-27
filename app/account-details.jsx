import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput, FormAutoComplete } from './form-components';
import { countries } from './data';
import {
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  requiredValidator,
  // passwordValidator,
} from './validators';
export const AccountDetails = (
  <div>
    <Field
      key={'firstName'}
      id={'firstName'}
      name={'firstName'}
      label={'First name'}
      component={FormInput}
      validator={firstNameValidator}
    />
    <Field
      key={'lastName'}
      id={'lastName'}
      name={'lastName'}
      label={'Last name'}
      component={FormInput}
      validator={lastNameValidator}
    />
    <Field
      key={'email'}
      id={'email'}
      name={'email'}
      label={'Email address'}
      hint={'Hint: Enter your personal email address.'}
      type={'email'}
      component={FormInput}
      validator={emailValidator}
    />

    <Field
      key={'countryselected'}
      id={'countryselected'}
      name={'countryselected'}
      label={'Country / Region'}
      hint={'Hint: Only European countries'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
    />
    <Field
      key={'street'}
      id={'street'}
      name={'street'}
      label={'Street address'}
      hint={'Hint: Enter your street address.'}
      type={'email'}
      component={FormInput}
    />
    <Field
      key={'city'}
      id={'city'}
      name={'city'}
      label={'City'}
      hint={'Hint: Enter your city .'}
      type={'email'}
      component={FormInput}
    />
    <Field
      key={'stateselected'}
      id={'stateselected'}
      name={'stateselected'}
      label={'State / Province'}
      hint={'Hint: Only Us State'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
    />
    <Field
      key={'stateselected'}
      id={'stateselected'}
      name={'stateselected'}
      label={'State / Province'}
      hint={'Hint: Only Us State'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
    />
    {/* <Field
      key={'password'}
      id={'password'}
      name={'password'}
      label={'Password'}
      type={'password'}
      component={FormInput}
      validator={passwordValidator}
    /> */}
    {/* <Field
      key={'avatar'}
      id={'avatar'}
      name={'avatar'}
      label={'Avatar'}
      optional={true}
      hint={'Hint: Upload your avatar picture'}
      component={FormUpload}
    /> */}
  </div>
);
