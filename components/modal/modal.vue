<template>
  <dialog
    ref="dialogRef"
    class="fixed m-0 max-h-screen max-w-screen border-none bg-transparent p-0 outline-0"
    :style="{
      top: `${top}`,
      right: `${right}`,
      bottom: `${bottom}`,
      left: `${left}`,
    }"
    @close="closeModal"
  >
    <div class="relative flex h-screen w-screen items-center justify-center">
      <div class="relative h-fit w-fit">
        <slot />
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
const { top, right, bottom, left } = useScreenSafeArea();

interface ModalProps {
  modalId: string;
  isCloseButtonEnable?: boolean;
  closeButtonPosition?: {
    top: number | string;
    left: number | string;
    bottom: number | string;
    right: number | string;
  };
  backdropColor?: string;
  backdropOpacity?: number;
}

const props = withDefaults(defineProps<ModalProps>(), {
  isCloseButtonEnable: true,
  closeButtonPosition: () => ({ top: 0, left: 0, right: 0, bottom: 0 }),
  backdropColor: "#000000",
  backdropOpacity: 0.7,
});

const modalStore = useModalStore();
const { id, isOpen } = storeToRefs(modalStore);
const { closeModal } = modalStore;

const dialogRef = ref<HTMLDialogElement | null>(null);

const shouldShowModal = computed(
  () => id.value && props.modalId === id.value && isOpen.value,
);

watch(shouldShowModal, (newValue) => {
  if (!dialogRef.value) return;

  if (newValue) {
    dialogRef.value.showModal();
  } else {
    dialogRef.value.close();
  }
});
</script>
