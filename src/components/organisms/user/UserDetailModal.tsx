import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter
} from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target);

  const onClickUpdate = () => alert();

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                Value={username}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>フルネーム</FormLabel>
              <Input
                Value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>MAIL</FormLabel>
              <Input
                Value={email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
              <FormLabel>TEL</FormLabel>
              <Input
                Value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
