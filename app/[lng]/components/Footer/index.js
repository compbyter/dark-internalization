"use server";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n";
import LanguageSwitcher from "@/components/modal/LanguageSwitcher";

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>

      <LanguageSwitcher languages={languages} lng={lng} />
    </footer>
  );
};
