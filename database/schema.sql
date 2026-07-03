-- IT 부캐 찾기 MBTI 테스트 : 결과 저장 테이블
-- Supabase SQL Editor에서 실행하세요.

create extension if not exists "pgcrypto";

create table if not exists public.mbti_results (
  id uuid primary key default gen_random_uuid(),
  mbti_type text not null check (char_length(mbti_type) = 4),
  answers jsonb not null,
  created_at timestamptz not null default now()
);

-- Row Level Security 활성화
alter table public.mbti_results enable row level security;

-- 누구나(익명 포함) 결과를 저장할 수 있도록 허용
drop policy if exists "Allow public insert" on public.mbti_results;
create policy "Allow public insert"
  on public.mbti_results
  for insert
  to anon
  with check (true);

-- 메인 화면의 실시간 참여자 수 배너를 위해 누구나 조회할 수 있도록 허용
drop policy if exists "Allow public read" on public.mbti_results;
create policy "Allow public read"
  on public.mbti_results
  for select
  to anon
  using (true);

-- 실시간 카운터(Realtime) 갱신을 위해 테이블을 publication에 추가
alter publication supabase_realtime add table public.mbti_results;

create index if not exists mbti_results_mbti_type_idx on public.mbti_results (mbti_type);
