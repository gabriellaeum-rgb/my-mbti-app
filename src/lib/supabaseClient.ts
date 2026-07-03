import { createClient } from "@supabase/supabase-js";

// docs/supabase-info.md 에 기재된 프로젝트 정보를 그대로 사용한다.
// 클라이언트에 노출되는 publishable key이므로 소스에 직접 포함해도 안전하며,
// 실제 데이터 접근 권한은 Supabase RLS 정책(database/schema.sql)이 통제한다.
const SUPABASE_PROJECT_ID = "cewrylhzigimwosisdkp";
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ng3q1vILtghLM5LmwhPIXw_xSfHec-8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const MBTI_RESULTS_TABLE = "mbti_results";
