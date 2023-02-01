import React, { useState } from "react";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface AnnotationProps {
  startTime: number;
  description: string;
  thumbnail: string;
}

const Annotation = (props: AnnotationProps) => {
  const { startTime, description, thumbnail } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      position="relative"
    >
      <Box
        as="span"
        display="inline-block"
        width="5px"
        height="5px"
        borderRadius="50%"
        backgroundColor="yellow"
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Annotation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{description}</p>
            <img src={thumbnail} alt="Frame thumbnail" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
