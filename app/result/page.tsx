"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { personalityTypes } from "@/lib/personality-types";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeId = searchParams.get("type");
  const persona = typeId ? personalityTypes[typeId] : null;

  if (!typeId || !persona) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center flex-1 gap-6 py-20 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-slate-700 font-semibold text-lg mb-1">
              未匹配到结果数据
            </p>
            <p className="text-slate-400 text-sm">
              看起来测试结果丢失了，请重新挑战一次！
            </p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="mt-2 px-8 py-3 rounded-full border border-slate-300 text-slate-600 text-sm font-medium bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors duration-200 cursor-pointer"
          >
            返回首页
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 py-6 animate-fade-in">

        {/* ── 主卡片容器 ── */}
        <div className="w-full bg-white rounded-[2.5rem] p-6 shadow-sm flex flex-col gap-5">

          {/* 顶部标题区 */}
          <div className="flex flex-col gap-1">
            <p className="text-slate-400 text-xs tracking-widest font-medium">
              你的人格类型是：
            </p>
            <h1 className="text-[2.25rem] font-black text-slate-900 leading-[1.1] tracking-tight">
              {persona.name}
            </h1>
            <p className="text-sm font-semibold text-blue-400 tracking-wide mt-0.5">
              {persona.subtitle}
            </p>
          </div>

          {/* 核心图片区 */}
          <div className="w-full flex flex-col gap-3">
            <img
              src={persona.imagePath}
              alt={`${persona.name} 人格证书`}
              className="w-full rounded-2xl object-cover"
              draggable={false}
            />

            {/* 金句框 */}
            <div className="w-full bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <p className="text-sm text-slate-500 text-center leading-snug">
                <span className="text-slate-300 font-serif text-base mr-1">"</span>
                {persona.goldQuote}
                <span className="text-slate-300 font-serif text-base ml-1">"</span>
              </p>
            </div>
          </div>

          {/* 数据详情卡 */}
          <div className="w-full bg-slate-50 rounded-2xl px-4 py-4 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                你的主类型
              </span>
              <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">
                {persona.id}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                （{persona.name}）
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100">
                <span>匹配度 {persona.matchPct}%</span>
              </span>
              <span className="text-[11px] text-slate-400 text-right pr-1">
                精准命中 {persona.hitCount}/15 维
              </span>
            </div>
          </div>

          {/* 简单解读区 */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-400 rounded-full" />
              <span className="text-sm font-bold text-slate-700 tracking-wide">
                该人格的简单解读
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {persona.description}
            </p>
          </div>

        </div>
        {/* ── 卡片结束 ── */}

        {/* 分享提示 */}
        <p className="text-slate-400 text-xs bg-white py-2 px-4 rounded-full border border-slate-100">
          💡 长按图片可保存分享
        </p>

        {/* 重新测试按钮 */}
        <button
          onClick={() => router.push("/")}
          className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-500 text-sm font-semibold bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors duration-200 cursor-pointer"
        >
          重新测试
        </button>

      </div>
    </Layout>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <Layout>
          <div className="flex items-center justify-center flex-1 py-20">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
              <p className="text-slate-400 text-sm">正在加载结果…</p>
            </div>
          </div>
        </Layout>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
