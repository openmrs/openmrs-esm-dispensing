import React from "react";
import { useTranslation } from "react-i18next";
import { Tile, Button } from "carbon-components-react";
import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";
import styles from "./dispensing-tile.scss";

interface DispensingTileProps {
  label: string;
  value: number;
  headerLabel: string;
  children?: React.ReactNode;
}

const DispensingTile: React.FC<DispensingTileProps> = ({
  label,
  value,
  headerLabel,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <Tile className={styles.tileContainer} light={true}>
      <div className={styles.tileHeader}>
        <div className={styles.headerLabelContainer}>
          <label className={styles.headerLabel}>{headerLabel}</label>
          {children}
        </div>
        <Button
          kind="ghost"
          renderIcon={ArrowRight16}
          iconDescription={t("view", "View")}
        >
          {t("view", "View")}
        </Button>
      </div>
      <div>
        <label className={styles.totalsLabel}>{label}</label>
        <p className={styles.totalsValue}>{value}</p>
      </div>
    </Tile>
  );
};

export default DispensingTile;
