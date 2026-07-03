import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata = {
  title: "IT 부캐 테스트 진행 중 | 출근길 내 모습",
};

export default function QuizPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16">
      <div className="glass-card w-full max-w-md p-8 shadow-glow sm:p-10">
        <QuizFlow />
      </div>
    </main>
  );
}
