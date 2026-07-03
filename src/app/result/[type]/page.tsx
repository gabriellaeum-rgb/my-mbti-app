import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPersona, personas } from "@/data/personas";
import ResultCard from "@/components/result/ResultCard";

interface ResultPageProps {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return Object.keys(personas).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { type } = await params;
  const persona = getPersona(type);

  if (!persona) {
    return { title: "결과를 찾을 수 없어요 | IT 부캐 테스트" };
  }

  return {
    title: `${persona.title} (${persona.code}) | 내 IT 부캐 테스트 결과`,
    description: persona.tagline,
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const persona = getPersona(type);

  if (!persona) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-16">
      <ResultCard persona={persona} />
    </main>
  );
}
