import { CiUser } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";
import logoName from "@/assets/images/logo_name.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

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

            <button
              className="text-white border-2 rounded-full p-2"
              onClick={handleOpenMenu}
            >
              <CiUser size={24} />
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="flex flex-col gap-2 px-8 py-4 bg-secondary-100 rounded absolute z-50 right-2 top-20 translate-y-2">
          <span>Login</span>
          <span>Perfil</span>
        </div>
      )}
    </>
  );
}
