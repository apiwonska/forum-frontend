import React from 'react';
import { connect } from 'react-redux';
import { Field, Form as FinalForm } from 'react-final-form';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LiveMessage } from 'react-aria-live';

import {
  Modal,
  ModalButton as Button,
  ModalFormWrapper as FormWrapper,
  ModalInput as Input,
  ModalLabel as Label,
  ModalInputGroup as InputGroup,
  FormError,
} from 'layout';
import { register as register_ } from 'redux/actions';
import {
  usernameValidator,
  emailValidator,
  passwordValidator,
  password2Validator,
} from 'utils/validators';
import { CONSTANTS } from 'utils';

class RegistrationModal extends React.Component {
  onSubmit = async (values) => {
    const { register } = this.props;
    await register(values);

    const { auth } = this.props;
    const { errors } = auth;
    if (errors.data) return errors.data;
    return null;
  };

  render() {
    const { history } = this.props;
    const formId = 'reg';

    return (
      <>
        <Helmet>
          <title>Register - {CONSTANTS.appName}</title>
        </Helmet>
        <LiveMessage message="Registration Modal" aria-live="polite" />

        <Modal title="Register" handleDismiss={() => history.push('/')}>
          <FinalForm onSubmit={this.onSubmit}>
            {({
              handleSubmit,
              values,
              hasValidationErrors,
              hasSubmitErrors,
              dirtySinceLastSubmit,
            }) => {
              const disabled =
                hasValidationErrors ||
                (hasSubmitErrors && !dirtySinceLastSubmit);

              return (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <FormWrapper>
                    <Field name="username" validate={usernameValidator}>
                      {({
                        input,
                        meta: { touched, error, submitError, dirty },
                      }) => (
                        <InputGroup>
                          <Label htmlFor={`username-${formId}`} dirty={dirty}>
                            Username:
                          </Label>
                          <Input
                            {...input}
                            id={`username-${formId}`}
                            type="text"
                            aria-describedby={`username-error-${formId}`}
                          />
                          {touched && (error || submitError) && (
                            <>
                              <FormError id={`username-error-${formId}`}>
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

                    <Field name="email" validate={emailValidator}>
                      {({
                        input,
                        meta: { touched, error, submitError, dirty },
                      }) => (
                        <InputGroup>
                          <Label htmlFor={`email-${formId}`} dirty={dirty}>
                            Email:
                          </Label>
                          <Input
                            {...input}
                            id={`email-${formId}`}
                            type="email"
                            aria-describedby={`email-error-${formId}`}
                          />
                          {touched && (error || submitError) && (
                            <>
                              <FormError id={`email-error-${formId}`}>
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
                      {({
                        input,
                        meta: { touched, error, submitError, dirty },
                      }) => (
                        <InputGroup>
                          <Label htmlFor={`password-${formId}`} dirty={dirty}>
                            Password:
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
                      {({
                        input,
                        meta: { touched, error, submitError, dirty },
                      }) => (
                        <InputGroup>
                          <Label htmlFor={`password2-${formId}`} dirty={dirty}>
                            Confirm Password:
                          </Label>
                          <Input
                            {...input}
                            id={`password2-${formId}`}
                            type="password"
                            aria-describedby={`password2-error-${formId}`}
                          />
                          {touched && (error || submitError) && (
                            <>
                              <FormError id={`password2-error-${formId}`}>
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

                    <Button
                      type="submit"
                      styleDisabled={disabled}
                      aria-disabled={disabled}
                    >
                      Register
                    </Button>
                  </FormWrapper>
                </form>
              );
            }}
          </FinalForm>
        </Modal>
      </>
    );
  }
}

RegistrationModal.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    errors: PropTypes.shape({
      data: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register: register_ })(
  RegistrationModal
);
