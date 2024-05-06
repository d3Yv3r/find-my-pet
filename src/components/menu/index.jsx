import { CiUser } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";
// import logoNoBg from "@/assets/images/logo_no_bg.svg";
import logoName from "@/assets/images/logo_name.svg";

export default function Menu() {
  return (
    <header className="bg-secondary-200 py-4 px-8">
      <div className="flex items-center justify-between max-w-[1440px]">
        <img src={logoName} alt="logo" className="w-[200px]" />

        <div className="flex items-center gap-4">
          <button className="border rounded py-2 px-4 text-white flex items-center gap-1">
            <MdOutlinePets />
            Add
          </button>
          <button className="text-white border-2 rounded-full p-2">
            <CiUser size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
