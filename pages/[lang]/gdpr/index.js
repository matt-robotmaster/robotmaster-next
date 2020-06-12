import React from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";

const gdpr = () => {
  const { t } = useTranslation();

  return (
      <Layout banner={{
        caption: t('gdpr.page.caption')
      }}>
        <h2>
          {t('gdpr.title')}
        </h2>
        <h3>
          {t('gdpr.sect1.heading')}
        </h3>
        <p>
          {t('gdpr.sect1.para')}
        </p>
        <h3>
          {t('gdpr.sect2.heading')}
        </h3>
        <p>
          {t('gdpr.sect2.para')}
        </p>
        <h3>
          {t('gdpr.sect3.heading')}
        </h3>
        <p>
          {t('gdpr.sect3.para')}
        </p>
        <ul>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list1.heading')}
            </b>
            {t('gdpr.sect3.list1.para')}
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list2.heading')}
            </b>
            {t('gdpr.sect3.list2.para')}
            <ul>
              <li>
                <b style={{marginRight: '3px'}}>
                  {t('gdpr.sect3.list2.sub1.heading')}
                </b>
                {t('gdpr.sect3.list2.sub1.para')}
              </li>
              <li>
                <b style={{marginRight: '3px'}}>
                  {t('gdpr.sect3.list2.sub2.heading')}
                </b>
                {t('gdpr.sect3.list2.sub2.para')}
              </li>
              <li>
                <b style={{marginRight: '3px'}}>
                  {t('gdpr.sect3.list2.sub3.heading')}
                </b>
                {t('gdpr.sect3.list2.sub3.para')}
              </li>
              <li>
                <b style={{marginRight: '3px'}}>
                  {t('gdpr.sect3.list2.sub4.heading')}
                </b>
                {t('gdpr.sect3.list2.sub4.para')}
              </li>
              <li>
                <b style={{marginRight: '3px'}}>
                  {t('gdpr.sect3.list2.sub5.heading')}
                </b>
                {t('gdpr.sect3.list2.sub5.para')}
              </li>
            </ul>
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list3.heading')}
            </b>
            {t('gdpr.sect3.list3.para')}
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list4.heading')}
            </b>
            {t('gdpr.sect3.list4.para')}
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list5.heading')}
            </b>
            {t('gdpr.sect3.list5.para')}
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list6.heading')}
            </b>
            {t('gdpr.sect3.list6.para')}
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list7.heading')}
            </b>
            {t('gdpr.sect3.list7.para')}
          </li>
          <li>
            <b style={{marginRight: '3px'}}>
              {t('gdpr.sect3.list8.heading')}
            </b>
            {t('gdpr.sect3.list8.para')}
          </li>
        </ul>
        <h3>
          {t('gdpr.sect4.heading')}
        </h3>
        <p>
          {t('gdpr.sect4.para')}
        </p>
        <ul>
          <li>
            {t('gdpr.sect4.list1')}
          </li>
          <li>
            {t('gdpr.sect4.list2')}
          </li>
          <li>
            {t('gdpr.sect4.list3')}
          </li>
          <li>
            {t('gdpr.sect4.list4')}
          </li>
          <li>
            {t('gdpr.sect4.list5')}
          </li>
          <li>
            {t('gdpr.sect4.list6')}
          </li>
          <li>
            {t('gdpr.sect4.list7')}
          </li>
          <li>
            {t('gdpr.sect4.list8')}
          </li>
        </ul>
        <h3>
          {t('gdpr.sect5.heading')}
        </h3>
        <p>
          {t('gdpr.sect1.para')}
        </p>
        <h3>
          {t('gdpr.sect6.heading')}
        </h3>
        <p>
          {t('gdpr.sect6.para1')}
        </p>
        <p>
          {t('gdpr.sect6.para2')}
        </p>
        <h3>
          {t('gdpr.sect7.heading')}
        </h3>
        <p>
          {t('gdpr.sect7.para1')}
        </p>
        <a href={'mailto:' + t('gdpr.sect7.link')}>
          {t('gdpr.sect7.link')}
        </a>
        <p>
          {t('gdpr.sect7.para2')}
        </p>
      </Layout>
  );
};

export default withLocale(gdpr);
