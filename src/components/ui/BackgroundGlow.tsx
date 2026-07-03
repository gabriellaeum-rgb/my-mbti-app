export default function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05061a]"
    >
      <div className="absolute left-1/2 top-[-10%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl animate-blob" />
      <div className="absolute right-[-10%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
