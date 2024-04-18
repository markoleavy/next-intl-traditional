import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React, { useEffect } from "react";

const ClientComponent: React.FC = () => {
  const t = useTranslations("ClientComponent");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Link href={t("link")}>{t("cta")}</Link>
    </div>
  );
};

export default ClientComponent;
