import { useEffect } from "react";

const useTranslateObserver = () => {
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList" || mutation.type === "subtree") {
          const h2Element = document.querySelector(
            "h2.MuiTypography-root.MuiTypography-h6.MuiDialogTitle-root.Layout-title"
          );
          if (
            h2Element &&
            h2Element.textContent.trim() ===
              "Are you sure you want to delete this appointment?"
          ) {
            h2Element.textContent = "Czy na pewno chcesz usunąć tę wizytę?";
          }

          const cancelButton = Array.from(
            document.querySelectorAll("button")
          ).find((button) => button.textContent.trim() === "Cancel");
          if (cancelButton) {
            cancelButton.textContent = "Anuluj";
          }

          const deleteButton = Array.from(
            document.querySelectorAll("button")
          ).find((button) => button.textContent.trim() === "Delete");
          if (deleteButton) {
            deleteButton.textContent = "Usuń";
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
};

export default useTranslateObserver;
