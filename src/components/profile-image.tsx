import Image from "next/image";

const Avatar = () => (
  <Image
    src="/profile.webp"
    quality={95}
    width={64}
    height={64}
    priority={true}
    className="rounded-full"
    alt="Foto de"
  />
);

export const ProfileImage = () => {
  return (
    <div className="group transform rounded-full bg-gradient-to-tl from-blue-600/60 to-black/60 p-0.5 shadow-lg transition ease-out hover:scale-105 hover:from-purple-700 hover:to-blue-400 hover:shadow-blue-500/25 active:translate-y-px">
      <div className="h-[36px] w-[36px] rounded-full p-px transition duration-300 group-hover:scale-105">
        <Avatar />
      </div>
    </div>
  );
};

export const ProfileImageLarge = () => {
  return (
    <div className="rounded-full bg-gradient-to-tl from-blue-600/60 to-black/60 p-1 shadow-lg ring-[5px] ring-purple-500/10">
      <Avatar />
    </div>
  );
};
