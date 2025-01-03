import { FunctionComponent } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MenuIcon } from "../icons/MenuIcon";

interface Props {}

export const OptionsMenu: FunctionComponent<Props> = () => {
  return (
    <Menu>
      <MenuButton>
        <MenuIcon />
      </MenuButton>
      <MenuItems className='w-min-[120px] p-3 bg-white flex flex-col items-center justify-center border rounded-lg' anchor="bottom">
        <MenuItem>
          <div className="cursor-pointer">Редактировать</div>
        </MenuItem>
        <MenuItem>
          <div className="cursor-pointer">Удалить</div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
