import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React, { useEffect } from "react";

const ServerComponent: React.FC = async () => {
  const t = await getTranslations("ServerComponent");
  // alternative you can use:
  // const t = useTranslations("ServerComponent");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Link href={t("link")}>{t("cta")}</Link>
    </div>
  );
};

export default ServerComponent;
