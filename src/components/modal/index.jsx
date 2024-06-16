import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { twMerge } from "tailwind-merge";

export const ModalWrap = ({
  isOpen,
  onClose,
  children,
  title,
  hasValidation,
  onClick,
  textButton,
  buttonCn,
  cancelButton,
  textCancelButton,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>

        {hasValidation && (
          <ModalFooter>
            <Button
              colorScheme="green"
              size="lg"
              onClick={onClick}
              className={twMerge("w-full", buttonCn)}
            >
              {textButton}
            </Button>
            {cancelButton && (
              <Button size="lg" onClick={onClose}>
                {textCancelButton}
              </Button>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
