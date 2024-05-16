import { CiUser } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";
import logoName from "@/assets/images/logo_name.svg";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <header className="flex justify-center bg-secondary-200 py-4 px-8">
        <div className="flex items-center justify-between max-w-[90rem] w-full">
          <img src={logoName} alt="logo" className="w-[12.5rem]" />

          <div className="flex items-center gap-4">
            <button className="border rounded py-2 px-4 text-white flex items-center gap-1">
              <MdOutlinePets />
              Add
            </button>

            <Menu>
              <MenuButton>
                <div className="text-white border-2 rounded-full p-2">
                  <CiUser size={24} />
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem>Sign In</MenuItem>
                <MenuItem onClick={() => console.log("Abriu Sign Up")}>
                  Sign Up
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}
