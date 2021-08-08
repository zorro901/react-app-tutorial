import { Button, Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <DrawerBody p={0} gb="gray.100">
          <Button w="100%">TOP</Button>
          <Button w="100%">ユーザー一覧</Button>
          <Button w="100%">設定</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
