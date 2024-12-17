import { Input } from "./input/input";
import { Submit } from "./input/submit";

export const Login = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-center">Sistema de Login</h1>
      <form action="" method="post">
        <Input
          labelFor="email"
          labelText="Endereço de e-mail"
          inputType="email"
          inputId="email"
          isRequired={true}
        />
        <Input
          labelFor="pwd"
          labelText="Senha"
          inputType="password"
          inputId="pwd"
          isRequired={true}
        />
        <Submit inputId="send" inputValue="Login" />
      </form>
      <div className="text-center text-gray-400 mt-2">
        Não é mebro?
        <a href="#" className="text-amber-700 underline">
          Faça seu cadastro
        </a>
      </div>
    </div>
  );
};
