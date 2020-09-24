import React from 'react';
import { connect } from 'react-redux';
import { Field, Form as FinalForm } from 'react-final-form';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LiveMessage } from 'react-aria-live';

import {
  Modal,
  ModalButton as Button,
  ModalContentGroup as ContentGroup,
  ModalFormWrapper as FormWrapper,
  ModalInput as Input,
  ModalLabel as Label,
  ModalLink as Link,
  ModalParagraph as Paragraph,
  ModalInputGroup as InputGroup,
  FormError,
} from 'layout';
import { resetPassword as resetPassword_ } from 'redux/actions';
import { emailValidator } from 'utils/validators';
import { CONSTANTS } from 'utils';

class PasswordResetModal extends React.Component {
  onSubmit = async (formProps) => {
    const { resetPassword, history } = this.props;
    await resetPassword(formProps);

    const { passwordReset } = this.props;
    const errors = passwordReset.emailErrors;
    if (errors.data) return errors.data;
    if (passwordReset.emailSent) {
      history.push('/password-reset/confirm', {
        emailSent: true,
      });
    }
    return null;
  };

  render() {
    const { history } = this.props;
    const formId = 'pr';
    return (
      <>
        <Helmet>
          <title>Password Reset - {CONSTANTS.appName}</title>
        </Helmet>
        <LiveMessage message="Password Reset Modal" aria-live="polite" />

        <Modal title="Password Reset" handleDismiss={() => history.push('/')}>
          <ContentGroup>
            <Paragraph>
              We will send you an authentication token to your email.
            </Paragraph>
          </ContentGroup>
          <FinalForm onSubmit={this.onSubmit}>
            {({
              handleSubmit,
              hasValidationErrors,
              hasSubmitErrors,
              dirtySinceLastSubmit,
            }) => {
              const disabled =
                hasValidationErrors ||
                (hasSubmitErrors && !dirtySinceLastSubmit);

              return (
                <form onSubmit={handleSubmit}>
                  <FormWrapper>
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
                    <Button
                      type="submit"
                      styleDisabled={disabled}
                      aria-disabled={disabled}
                    >
                      Reset Password
                    </Button>
                  </FormWrapper>
                </form>
              );
            }}
          </FinalForm>
          <ContentGroup>
            <Paragraph>
              If you already have a token click this{' '}
              <Link
                to="/password-reset/confirm"
                aria-label="Password reset confirm"
              >
                link
              </Link>
              .
            </Paragraph>
          </ContentGroup>
        </Modal>
      </>
    );
  }
}

PasswordResetModal.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  resetPassword: PropTypes.func.isRequired,
  passwordReset: PropTypes.shape({
    emailErrors: PropTypes.shape({
      data: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    }).isRequired,
    emailSent: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  passwordReset: state.passwordReset,
});

export default connect(mapStateToProps, { resetPassword: resetPassword_ })(
  PasswordResetModal
);
