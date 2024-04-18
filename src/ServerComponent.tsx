import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const ServerComponent: React.FC = async () => {
  const t = await getTranslations("ServerComponent");
  // alternative you can use:
  // const t = useTranslations("ServerComponent");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Button link={t("button.link")} cta={t("button.cta")} />
    </div>
  );
};

export default ServerComponent;
