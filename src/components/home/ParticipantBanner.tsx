"use client";

import { useEffect, useState } from "react";
import { MBTI_RESULTS_TABLE, supabase } from "@/lib/supabaseClient";

export default function ParticipantBanner() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchCount() {
      const { count: totalCount, error } = await supabase
        .from(MBTI_RESULTS_TABLE)
        .select("*", { count: "exact", head: true });

      if (!error && isMounted) {
        setCount(totalCount ?? 0);
      }
    }

    fetchCount();

    const channel = supabase
      .channel("mbti_results_realtime_counter")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: MBTI_RESULTS_TABLE },
        () => {
          if (isMounted) {
            setCount((prev) => (prev === null ? 1 : prev + 1));
          }
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-5 py-2.5 text-sm font-medium text-indigo-100 shadow-glow sm:text-base">
      <span aria-hidden>👥</span>
      {count === null ? (
        <span className="flex items-center gap-1.5">
          참여 인원 집계 중
          <span className="inline-block h-1.5 w-1.5 animate-pulse-slow rounded-full bg-cyan-300" />
        </span>
      ) : (
        <span>
          이미{" "}
          <strong className="font-extrabold text-cyan-300">
            {count.toLocaleString()}명
          </strong>
          의 동료들이 자신의 부캐를 확인했어요!
        </span>
      )}
    </div>
  );
}
