import React from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";

const whatsNew = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('whats-new-page-caption')
      }}>
        <h1 className="page-header">
          {t('whats-new-page-title-v64')}
        </h1>
        <p>
          {t('whats-new-v64-para-1')}
        </p>
        <h3>
          {t('whats-new-v64-sub-heading')}
        </h3>
        <ul>
          <li>
            {t('whats-new-v64-listitem-1')}
          </li>
          <li>
            {t('whats-new-v64-listitem-2')}
          </li>
          <li>
            {t('whats-new-v64-listitem-3')}
          </li>
          <li>
            {t('whats-new-v64-listitem-4')}
          </li>
          <li>
            {t('whats-new-v64-listitem-5')}
          </li>
          <li>
            {t('whats-new-v64-listitem-6')}
          </li>
          <li>
            {t('whats-new-v64-listitem-7')}
          </li>
          <li>
            {t('whats-new-v64-listitem-8')}
          </li>
          <li>
            {t('whats-new-v64-listitem-9')}
          </li>
        </ul>
        <h1 className="page-header">
          {t('whats-new-page-title-v63')}
        </h1>
        <p>
          {t('whats-new-description')}
        </p>
        <h3>
          {t('whats-new-sub-heading')}
        </h3>
        <ul>
          <li>
            {t('whats-new-listitem-1')}
            <ul>
              <li>
                {t('whats-new-listitem-1-subitem')}
              </li>
            </ul>
          </li>
          <li>
            {t('whats-new-listitem-2')}
            <ul>
              <li>
                {t('whats-new-listitem-2-subitem')}
              </li>
            </ul>
          </li>
          <li>
            {t('whats-new-listitem-3')}
            <ul>
              <li>
                {t('whats-new-listitem-3-subitem')}
              </li>
            </ul>
          </li>
        </ul>
        <p>
          {t('whats-new-para-1', {
            supportPage: <a href="https://support.robotmaster.com/" target="_blank">
              {t('whats-new-para-1-supportPage')}
            </a>
          })}
        </p>
        <p>
          {t('whats-new-para-2', {
            salesEmail: <a href="mailto:sales@robotmaster.com" target="_blank">
              {t('whats-new-para-2-salesEmail')}
            </a>
          })}
        </p>
        <p>
          {t('whats-new-para-3')}
        </p>
        <p>
          <strong>
            {t('whats-new-para-4')}
          </strong>
        </p>
      </Layout>
  );
};

export default withLocale(whatsNew);
