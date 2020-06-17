import React, {useEffect} from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";
import classes from './index.module.css';
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const eula = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('eula-page-caption')
      }}>
        <h2 className={classes.bold}>
          {t("eula-heading-2")}
        </h2>
        <p>
          {t("eula-effective-date")}
        </p>
        <p>
          <span className={classes.bold}>
            {t("eula-read-carefully-t1")}
          </span>
          {" "}
          {t("eula-read-carefully-t2")}
        </p>
        <p>
          {t("eula-read-carefully-p1")}
        </p>
        <p>
          {t("eula-read-carefully-p2")}
        </p>
        <p>
          {t("eula-read-carefully-p3")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-01-title")}
        </h3>
        <p>
          {"1.1 "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-0101-title")}
          </span>
          {" "}
          {t("eula-license-0101-para")}
        </p>
        <p>
          {"1.2 "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-0102-title")}
          </span>
        </p>
        <p>
          {"1.2.1 "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-01021-title")}
          </span>
          {" "}
          {t("eula-license-01021-para")}
        </p>
        <p>
          {"1.2.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-01022-title")}
          </span>
          {" "}
          {t("eula-license-01022-para")}
        </p>
        <p>
          {"1.3 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0103-title")}
          </span>
          {" "}
          {t("eula-license-0103-para")}
        </p>
        <p>
          {"1.4 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0104-title")}
          </span>
          {" "}
          {t("eula-license-0104-para")}
        </p>
        <p>
          {"1.5 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0105-title")}
          </span>
          {" "}
          {t("eula-license-0105-para")}
        </p>
        <p>
          {"1.6 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0106-title")}
          </span>
          {" "}
          {t("eula-license-0106-para")}
        </p>
        <p>
          {"1.7 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0107-title")}
          </span>
          {" "}
          {t("eula-license-0107-para")}
        </p>
        <p>
          {"1.8 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0108-title")}
          </span>
          {" "}
          {t("eula-license-0108-para")}
        </p>
        <p>
          {"1.9 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0109-title")}
          </span>
          {" "}
          {t("eula-license-0109-para")}
        </p>
        <p>
          {"1.10 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0110-title")}
          </span>
          {" "}
          {t("eula-license-0110-para")}
        </p>
        <p>
          {"1.11 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0110-title")}
          </span>
          {" "}
          {t("eula-license-0111-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-02-title")}
        </h3>
        <p>
          {"2.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0201-title")}
          </span>
        </p>
        <p>
          {"2.1.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-02011-title")}
          </span>
          {" "}
          {t("eula-license-02011-para")}
        </p>
        <p>
          {"2.1.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-02012-title")}
          </span>
          {" "}
          {t("eula-license-02012-para")}
        </p>
        <p>
          {"2.1.3 "}
          <span className={classes.paraTitle}>
            {t("eula-license-02013-title")}
          </span>
          {" "}
          {t("eula-license-02013-para")}
        </p>
        <p>
          {"2.1.4 "}
          <span className={classes.paraTitle}>
            {t("eula-license-02014-title")}
          </span>
          {" "}
          {t("eula-license-02014-para")}
        </p>
        <p>
          {"2.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0202-title")}
          </span>
        </p>
        <p>
          {"2.2.1 "}
          {t("eula-license-02021-para")}
        </p>
        <p>
          {"2.2.2 "}
          {t("eula-license-02022-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-03-title")}
        </h3>
        <p>
          {t("eula-license-03-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-04-title")}
        </h3>
        <p>
          {"4.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0401-title")}
          </span>
          {" "}
          {t("eula-license-0401-para")}
        </p>
        <p>
          {"4.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0402-title")}
          </span>
          {" "}
          {t("eula-license-0402-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-05-title")}
        </h3>
        <p>
          {"5.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0501-title")}
          </span>
          {" "}
          {t("eula-license-0501-para")}
        </p>
        <p>
          {"5.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0502-title")}
          </span>
          {" "}
          {t("eula-license-0502-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-06-title")}
        </h3>
        <p>
          {"6.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0601-title")}
          </span>
          {" "}
          {t("eula-license-0601-para")}
        </p>
        <p>
          {"6.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0602-title")}
          </span>
        </p>
        <p>
          {"6.2.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-06021-title")}
          </span>
          {t("eula-license-06021-para")}
        </p>
        <p>
          {"6.2.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-06022-title")}
          </span>
          {t("eula-license-06022-para")}
        </p>
        <p>
          {"6.2.3 "}
          <span className={classes.paraTitle}>
            {t("eula-license-06023-title")}
          </span>
          {t("eula-license-06023-para")}
        </p>
        <p>
          {"6.3 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0603-title")}
          </span>
          {" "}
          {t("eula-license-0603-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-07-title")}
        </h3>
        <p>
          {"7.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0701-title")}
          </span>
          {" "}
          {t("eula-license-0701-para")}
        </p>
        <p>
          {"7.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0702-title")}
          </span>
          {" "}
          {t("eula-license-0702-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-08-title")}
        </h3>
        <p>
          {"8.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0801-title")}
          </span>
          {" "}
          {t("eula-license-0801-para-1")}
        </p>
        <p>
          {t("eula-license-0801-para-2")}
        </p>
        <p>
          {"8.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0802-title")}
          </span>
          {" "}
          {t("eula-license-0802-para")}
        </p>
        <p>
          {"8.3 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0803-title")}
          </span>
          {" "}
          {t("eula-license-0803-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-09-title")}
        </h3>
        <p>
          {"9.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0901-title")}
          </span>
          {" "}
          {t("eula-license-0901-para")}
        </p>
        <p>
          {"9.2 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0902-title")}
          </span>
          {" "}
          {t("eula-license-0902-para")}
        </p>
        <p>
          {"9.3 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0903-title")}
          </span>
          {" "}
          {t("eula-license-0903-para")}
        </p>
        <p>
          {"9.4 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0904-title")}
          </span>
          {" "}
          {t("eula-license-0904-para")}
        </p>
        <p>
          {"9.5 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0905-title")}
          </span>
        </p>
        <p>
          {"9.5.1 "}
          {t("eula-license-09051-para")}
        </p>
        <p>
          {"9.5.2 "}
          {t("eula-license-09052-para")}
        </p>
        <p>
          {"9.6 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0906-title")}
          </span>
          {" "}
          {t("eula-license-0906-para")}
        </p>
        <p>
          {"9.7 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0907-title")}
          </span>
          {" "}
          {t("eula-license-0907-para")}
        </p>
        <p>
          {"9.8 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0908-title")}
          </span>
          {" "}
          {t("eula-license-0908-para")}
        </p>
        <p>
          {"9.9 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0909-title")}
          </span>
          {" "}
          {t("eula-license-0909-para")}
        </p>
        <p>
          {"9.10 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0910-title")}
          </span>
          {" "}
          {t("eula-license-0910-para")}
        </p>
        <p>
          {"9.11 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0911-title")}
          </span>
          {" "}
          {t("eula-license-0911-para")}
        </p>
        <p>
          {"9.12 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0912-title")}
          </span>
          {" "}
          {t("eula-license-0912-para")}
        </p>
        <p>
          {"9.13 "}
          <span className={classes.paraTitle}>
            {t("eula-license-0913-title")}
          </span>
          {" "}
          {t("eula-license-0913-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-10-title")}
        </h3>
        <p>
          {"10.1 "}
          <span className={classes.paraTitle}>
            {t("eula-license-1001-title")}
          </span>
        </p>
        <p>
          {"A. "}
          {t("eula-license-1001-para-1")}
        </p>
        <p>
          {"B. "}
          {t("eula-license-1001-para-2")}
        </p>
        <p>
          {"C. "}
          {t("eula-license-1001-para-3")}
        </p>
        <p>
          {"D. "}
          {t("eula-license-1001-para-4")}
        </p>


        <p>
          <span className={classes.paraTitle}>
            {t("eula-license-11-title")}
          </span>
          {" "}
          {t("eula-license-11-para")}
        </p>
        <p>
          {"11.1 "}
          {t("eula-license-1101-para")}
        </p>
        <p>
          {"11.1.1 "}
          {t("eula-license-11011-para")}
        </p>
        <p>
          {"11.1.2 "}
          {t("eula-license-11012-para")}
        </p>
        <p>
          {"11.1.3 "}
          {t("eula-license-11013-para")}
        </p>
        <p>
          {"11.1.4 "}
          {t("eula-license-11014-para")}
        </p>
        <p>
          {"11.1.5 "}
          {t("eula-license-11015-para")}
        </p>
        <p>
          {"11.2 "}
          {t("eula-license-1102-para")}
        </p>
        <p>
          {"11.2.1 "}
          {t("eula-license-11021-para")}
        </p>
        <p>
          {"11.3 "}
          {t("eula-license-1103-para")}
        </p>

        <p>
          {t("eula-license-12-para")}
        </p>

        <h3 className={classes.mainTitle}>
          {t("eula-license-exhibition-a")}
        </h3>
        <h3 className="mainTitle paraTitle">
          {t("eula-license-exhibition-a-title")}
        </h3>
        <p>
          {"1. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a1-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a1-para")}
        </p>
        <p>
          {"2. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a2-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a2-para")}
        </p>
        <p>
          {"3. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a3-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a3-para")}
        </p>
        <p>
          {"4. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a4-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a4-para")}
        </p>
        <p>
          {"5. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a5-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a5-para")}
        </p>
        <p>
          {"6. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a6-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a6-para")}
        </p>
        <p>
          {"7. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a7-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a7-para")}
        </p>
        <p>
          {"8. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a8-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a8-para")}
        </p>
        <p>
          {"9. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a9-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a9-para")}
        </p>
        <p>
          {"10. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a10-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a10-para")}
        </p>
        <p>
          {"11. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a11-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a11-para")}
        </p>
        <p>
          {"12. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a12-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a12-para")}
        </p>
        <p>
          {"13. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a13-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a13-para")}
        </p>
        <p>
          {"14. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a14-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a14-para")}
        </p>
        <p>
          {"15. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a15-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a15-para")}
        </p>
        <p>
          {"16. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a16-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a16-para")}
        </p>
        <p>
          {"17. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a17-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a17-para")}
        </p>
        <p>
          {"18. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a18-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a18-para")}
        </p>
        <p>
          {"19. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a19-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a19-para")}
        </p>
        <p>
          {"20. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a20-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a20-para")}
        </p>
        <p>
          {"21. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a21-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a21-para")}
        </p>
        <p>
          {"22. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a22-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a22-para")}
        </p>
        <p>
          {"23. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a23-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a23-para")}
        </p>
        <p>
          {"24. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a24-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a24-para")}
        </p>
        <p>
          {"25. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a25-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a25-para")}
        </p>
        <p>
          {"26. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a26-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a26-para")}
        </p>
        <p>
          {"27. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a27-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a27-para")}
        </p>
        <p>
          {"28. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a28-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a27-para")}
        </p>
        <p>
          {"29. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a29-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a29-para")}
        </p>
        <p>
          {"30. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a30-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a30-para")}
        </p>
        <p>
          {"31. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a31-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a31-para")}
        </p>
        <p>
          {"32. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a32-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a32-para")}
        </p>
        <p>
          {"33. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a33-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a33-para")}
        </p>
        <p>
          {"34. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a34-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a34-para")}
        </p>
        <p>
          {"35. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a35-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a35-para")}
        </p>
        <p>
          {"36. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a36-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a36-para")}
        </p>
        <p>
          {"37. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a37-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a37-para")}
        </p>
        <p>
          {"38. "}
          <span className={classes.paraTitle}>
            {t("eula-license-exhibition-a38-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-a38-para")}
        </p>


        <h3 className={classes.mainTitle}>
          {t("eula-license-exhibition-b")}
        </h3>
        <h3 className="mainTitle paraTitle">
          {t("eula-license-exhibition-b-title")}
        </h3>
        <p>
          {"1. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b1-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b1-para")}
        </p>
        <p>
          {"2. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b2-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b2-para")}
        </p>
        <p>
          {"3. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b3-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b3-para")}
        </p>
        <p>
          {"4. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b4-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b4-para")}
        </p>
        <p>
          {"5. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b5-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b5-para")}
        </p>
        <p>
          {"6. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b6-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b6-para")}
        </p>
        <p>
          {"7. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b7-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b7-para")}
        </p>
        <p>
          {"8. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b8-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b8-para")}
        </p>
        <p>
          {"9. "}
          <span className={`${classes.paraTitle} ${classes.bold}`}>
            {t("eula-license-exhibition-b9-title")}
          </span>
          {" "}
          {t("eula-license-exhibition-b9-para")}
        </p>
      </Layout>
  );
};

export default withLocale(eula);
