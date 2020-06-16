import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from "../utils/hooks/useTranslation";

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
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;