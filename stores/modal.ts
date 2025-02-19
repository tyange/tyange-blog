import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: (): {
    id: string | null;
    isOpen: boolean;
    message: string;
    callback: (() => void) | null;
  } => ({
    id: null,
    isOpen: false,
    message: "",
    callback: null,
  }),
  actions: {
    setMessage(message?: string) {
      if (message && message !== "") {
        this.message = message;
      }
    },
    setModalCallback(callback: () => void) {
      this.callback = callback;
    },
    openModal(modalId: string) {
      this.id = modalId;
      this.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      if (!this.isOpen) {
        return;
      }

      this.id = null;
      this.isOpen = false;
      document.body.style.overflow = "auto";

      if (this.callback) {
        this.callback();
      }
    },
  },
});
