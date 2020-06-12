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
          {t('whats-new-v65-title')}
        </h1>
        <p>
          {t('whats-new-v65-para')}
        </p>
        <h3>
          {t('whats-new-v65-heading-1')}
        </h3>
        <ul>
          <li>
            {t('whats-new-v65-list-1-item-1')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-2')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-3')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-4')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-5')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-6')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-7')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-8')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-9')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-10')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-11')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-12')}
          </li>
          <li>
            {t('whats-new-v65-list-1-item-13')}
          </li>
        </ul>
        <h3>
          {t('whats-new-v65-heading-2')}
        </h3>
        <ul>
          <li>
            {t('whats-new-v65-list-2-item-1')}
          </li>
          <li>
            {t('whats-new-v65-list-2-item-2')}
            <ul>
              <li>
                {t('whats-new-v65-list-2-item-2-subitem-1')}
              </li>
              <li>
                {t('whats-new-v65-list-2-item-2-subitem-2')}
              </li>
            </ul>
          </li>
          <li>
            {t('whats-new-v65-list-2-item-3')}
            <ul>
              <li>
                {t('whats-new-v65-list-2-item-3-subitem-1')}
              </li>
              <li>
                {t('whats-new-v65-list-2-item-3-subitem-2')}
              </li>
            </ul>
          </li>
          <li>
            {t('whats-new-v65-list-2-item-4')}
            <ul>
              <li>
                {t('whats-new-v65-list-2-item-4-subitem-1')}
              </li>
            </ul>
          </li>
          <li>
            {t('whats-new-v65-list-2-item-5')}
            <ul>
              <li>
                {t('whats-new-v65-list-2-item-5-subitem-1')}
              </li>
            </ul>
          </li>
        </ul>
        <h3>
          {t('whats-new-v65-heading-3')}
        </h3>
        <ul>
          <li>
            {t('whats-new-v65-list-3-item-1')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-2')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-3')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-4')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-5')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-6')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-7')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-8')}
          </li>
          <li>
            {t('whats-new-v65-list-3-item-9')}
          </li>
        </ul>
      </Layout>
  );
};

export default withLocale(whatsNew);
