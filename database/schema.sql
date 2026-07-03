-- =========================================================
-- IT 부캐 찾기 MBTI 테스트 : Supabase 데이터베이스 초기화 스크립트
-- Supabase 대시보드 > SQL Editor 에서 전체 내용을 실행하세요.
-- =========================================================

-- gen_random_uuid() 사용을 위한 확장
create extension if not exists "pgcrypto";

-- 1. 테스트 결과 저장 테이블
create table if not exists public.mbti_results (
  id uuid primary key default gen_random_uuid(),
  mbti_type text not null check (char_length(mbti_type) = 4),
  answers jsonb not null,
  created_at timestamptz not null default now()
);

comment on table public.mbti_results is 'IT 부캐 찾기 테스트 결과 적재 테이블';
comment on column public.mbti_results.mbti_type is '최종 산출된 4자리 MBTI 코드 (예: INTJ)';
comment on column public.mbti_results.answers is '8개 문항에 대한 사용자 선택(알파벳) 리스트';

create index if not exists mbti_results_mbti_type_idx on public.mbti_results (mbti_type);

-- 2. Row Level Security 활성화
alter table public.mbti_results enable row level security;

-- 3. 익명(anon) 사용자의 결과 저장 허용 (테스트 완료 시 insert)
drop policy if exists "Allow public insert" on public.mbti_results;
create policy "Allow public insert"
  on public.mbti_results
  for insert
  to anon
  with check (true);

-- 4. 익명(anon) 사용자의 조회 허용 (메인 화면 누적 참여자 수 집계용)
drop policy if exists "Allow public read" on public.mbti_results;
create policy "Allow public read"
  on public.mbti_results
  for select
  to anon
  using (true);

-- 5. 실시간(Realtime) 구독을 위해 테이블을 publication에 등록
--    이미 등록되어 있다면 아래 명령은 에러가 날 수 있으니, 에러 시 무시해도 무방합니다.
alter publication supabase_realtime add table public.mbti_results;
