import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import eulogo from "../../img/eu-anime.png"

export const Aprecentacao: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        bgColor: string;
        textColor: string;
        textColor2: string;
        buttonBg: string;
        apresentar: string;
        githubButton: string;
        linkedinButton: string;
    }


    // Definindo o tema claro
    const claro: Tema = {
        bgColor: "bg-[#fff] py-10",
        textColor: "text-7xl flex w-full text-[#1f1f1f] transition duration-400 ease-in-out",
        textColor2: "text-7xl text-[#7f5af0] flex justify-end transition duration-400 ease-in-out",
        apresentar: "text-3xl text-[#000] transition duration-400 ease-in-out",
        buttonBg: "text-3xl bg-[#7f5af0] py-3  text-[#fff] px-10 rounded-2xl flex items-center transition duration-400 ease-in-out hover:bg-[#a48bee]",
        githubButton: "text-[#7f5af0] h-15 w-15 transition duration-400 ease-in-out hover:text-[#a48bee]",
        linkedinButton: "text-[#7f5af0] h-15 w-15 transition duration-400 ease-in-out hover:text-[#a48bee]"
    };
    const escuro: Tema = {
        bgColor: "bg-[#1f1f1f] py-10 transition duration-400 ease-in-out",
        textColor: "text-7xl text-[#fff] flex w-full transition duration-400 ease-in-out",
        textColor2: "text-7xl text-[#0400ff] flex justify-end transition duration-400 ease-in-out",
        apresentar: "text-3xl text-[#fff] transition duration-400 ease-in-out",
        buttonBg: "text-3xl bg-[#0400ff] hover:bg-[#423eff] py-3 text-[#fff] px-10 rounded-2xl flex items-center transition duration-400 ease-in-out",
        githubButton: "text-[#0400ff] h-15 w-15 transition duration-400 ease-in-out hover:text-[#423eff]",
        linkedinButton: "text-[#0400ff] h-15 w-15 transition duration-400 ease-in-out hover:text-[#423eff]"
    };

    return (
        <main >
            <div className={`${darkMode ? claro.bgColor : escuro.bgColor} transition duration-300 ease-in-out flex mx-10`}>
                <div className="w-1/2 p-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-1 ">
                        <div>
                            <h1 className={darkMode ? claro.textColor : escuro.textColor}>Gustavo Lima</h1>
                        </div>
                        <div>
                            <h1 className={darkMode ? claro.textColor2 : escuro.textColor2}>Dev front-end</h1>
                        </div>
                    </div>

                    <h3 className={darkMode ? claro.apresentar : escuro.apresentar}>
                        Olá! Bem-vindo ao meu portfólio. Sinta-se à vontade para explorar!</h3>
                    <div className="gap-5 flex ">
                        <a href="projects" className={darkMode ? claro.buttonBg : escuro.buttonBg}>Projetos</a>
                        <a href="https://www.linkedin.com/in/gustavo-dvp/" className="flex items-end"><FaLinkedin className={darkMode ? claro.linkedinButton : escuro.linkedinButton} /></a>
                        <a href="https://github.com/gustavoLim4" className="flex items-end"><FaGithub className={darkMode ? claro.githubButton : escuro.githubButton} /></a>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={eulogo} alt="eu logo"/>
                </div>
            </div>
        </main>
    );
};
