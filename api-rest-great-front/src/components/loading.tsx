import { CircleNotch } from "phosphor-react";

function Loading() {
  return (
    <div className="w-100vw h-100vh bg-slate-900 opacity-40  flex justify-center items-center">
      <CircleNotch
        weight="bold"
        size={128}
        className="w-[128px] h-[128px] rounded-xl text-white animate-spin"
      />
    </div>
  );
}

export default Loading;
