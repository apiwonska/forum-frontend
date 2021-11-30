import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import PropTypes from 'prop-types';
import { LiveMessage } from 'react-aria-live';

import {
  ModalButton as Button,
  ModalFormWrapper as FormWrapper,
  ModalInput as Input,
  ModalLabel as Label,
  ModalInputGroup as InputGroup,
  FormGroup,
  FormError,
} from 'layout';
import {
  required,
  passwordValidator,
  password2Validator,
} from 'utils/validators';

const ChangePasswordForm = ({ onSubmit }) => {
  const formId = 'prc';

  return (
    <FinalForm onSubmit={onSubmit}>
      {({
        handleSubmit,
        submitErrors,
        form,
        submitSucceeded,
        values,
        hasValidationErrors,
        hasSubmitErrors,
        dirtySinceLastSubmit,
      }) => {
        if (submitSucceeded) {
          form.reset();
          Object.keys(values).forEach((field) => form.resetFieldState(field));
        }

        const disabled =
          hasValidationErrors || (hasSubmitErrors && !dirtySinceLastSubmit);

        return (
          <form onSubmit={handleSubmit} id={formId} autoComplete="off">
            <FormWrapper>
              {submitErrors && submitErrors.status && (
                <FormGroup>
                  <FormError role="alert">The token is not valid</FormError>
                </FormGroup>
              )}

              <Field name="token" validate={required}>
                {({ input, meta: { touched, error, submitError, dirty } }) => (
                  <InputGroup>
                    <Label htmlFor={`token-${formId}`} dirty={dirty}>
                      Token:
                    </Label>
                    <Input
                      {...input}
                      id={`token-${formId}`}
                      type="text"
                      aria-describedby={`token-error-${formId}`}
                    />
                    {touched && (error || submitError) && (
                      <>
                        <FormError id={`token-error-${formId}`}>
                          {error || submitError[0]}
                        </FormError>
                        <LiveMessage
                          message={error || submitError[0]}
                          aria-live="polite"
                        />
                      </>
                    )}
                  </InputGroup>
                )}
              </Field>

              <Field name="password" validate={passwordValidator}>
                {({ input, meta: { touched, error, submitError, dirty } }) => (
                  <InputGroup>
                    <Label htmlFor={`password-${formId}`} dirty={dirty}>
                      New password:
                    </Label>
                    <Input
                      {...input}
                      id={`password-${formId}`}
                      type="password"
                      autoComplete="new-password"
                      aria-describedby={`password-error-${formId}`}
                    />
                    {touched && (error || submitError) && (
                      <>
                        <FormError id={`password-error-${formId}`}>
                          {error || submitError[0]}
                        </FormError>
                        <LiveMessage
                          message={error || submitError[0]}
                          aria-live="polite"
                        />
                      </>
                    )}
                  </InputGroup>
                )}
              </Field>

              <Field
                name="password2"
                validate={password2Validator(values.password)}
              >
                {({ input, meta: { touched, error, dirty } }) => (
                  <InputGroup>
                    <Label htmlFor={`password2-${formId}`} dirty={dirty}>
                      Confirm password:
                    </Label>
                    <Input
                      {...input}
                      id={`password2-${formId}`}
                      type="password"
                      aria-describedby={`password2-error-${formId}`}
                    />
                    {touched && error && (
                      <>
                        <FormError id={`password2-error-${formId}`}>
                          {error}
                        </FormError>
                        <LiveMessage message={error} aria-live="polite" />
                      </>
                    )}
                  </InputGroup>
                )}
              </Field>
              <Button
                type="submit"
                styleDisabled={disabled}
                aria-disabled={disabled}
              >
                Change Password
              </Button>
            </FormWrapper>
          </form>
        );
      }}
    </FinalForm>
  );
};

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChangePasswordForm;
