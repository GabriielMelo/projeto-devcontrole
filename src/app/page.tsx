import Image from "next/image";
import heroimg from "../assets/hero.png";
export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <Image
        src={heroimg}
        alt="Imagem hero do dev controle"
        width={500}
        className="max-w-sm md:max-w-xl"
      ></Image>
    </main>
  );
}
