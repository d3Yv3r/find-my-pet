import { ModalWrap } from "@/components/modal";
import { Button } from "@/components/common/form";

export const SignInModal = ({ isOpen, onClose }) => {
  return (
    <ModalWrap
      isOpen={isOpen}
      onClose={onClose}
      title="Bem-vindo de Volta!"
      textButton="Entrar"
      footerChildren={
        <>
          <Button text="Entrar" disabled />
        </>
      }
    >
      <form action="" onSubmit={() => {}} className="flex flex-col gap-4">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ex.: joao@email.com"
            className="border border-secondary-200 rounded p-3"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            className="border border-black rounded p-2"
          />
        </div>
      </form>
    </ModalWrap>
  );
};
