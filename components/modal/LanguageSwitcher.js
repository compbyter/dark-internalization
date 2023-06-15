"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { usePathname } from "next/navigation";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function LanguageSwitcher({ languages, lng }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Trans>Switch from</Trans>
      <Button onClick={handleOpen}>{lng}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h1>Dili Değiştir.</h1>
          <div className="grid grid-cols-4">
            {languages
              .filter((l) => lng !== l)
              .map((l, index) => {
                return (
                  <div className="p-2">
                    <Link href={`/${l}`}>{l}</Link>
                  </div>
                );
              })}
          </div>
        </Box>
      </Modal>
      <p>result</p>
    </div>
  );
}
