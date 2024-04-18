import { useTranslations } from "next-intl";
import React from "react";
import Button from "./Button";

const ClientComponent: React.FC = () => {
  const t = useTranslations("ClientComponent");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Button link={t("button.link")} cta={t("button.cta")} />
    </div>
  );
};

export default ClientComponent;
