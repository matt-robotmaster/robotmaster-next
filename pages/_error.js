import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from "../hooks/useTranslation";
import withLocale from "../hocs/withLocale";

const Error = ({ statusCode }) => {
  const { t } = useTranslation();
  return (
      <p>
        {statusCode
            ? t('error-with-status', {statusCode})
            : t('error-without-status')}
      </p>
  )
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ({ statusCode } = res)
  } else if (err) {
    ({ statusCode } = err)
  }
  return {
    statusCode,
  }
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default withLocale(Error);