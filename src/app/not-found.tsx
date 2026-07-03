import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <span className="text-5xl">🧭</span>
      <h1 className="text-xl font-bold text-white">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-sm text-slate-400">
        요청하신 결과 유형이 존재하지 않거나 주소가 잘못됐어요.
      </p>
      <Link
        href="/"
        className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-indigo-500 active:scale-95"
      >
        메인으로 돌아가기
      </Link>
    </main>
  );
}
