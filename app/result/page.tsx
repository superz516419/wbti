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
      <div className="flex flex-col items-center gap-5 py-8 animate-fade-in">
        {/* 顶部标签 */}
        <div className="text-center space-y-2">
          <p className="text-slate-400 text-sm tracking-wider uppercase">
            你的瓦村专属人设是：
          </p>
          <h1 className="text-3xl font-black text-slate-800 leading-tight tracking-tight">
            {persona.name}
          </h1>
          {persona.subtitle && (
            <p className="text-slate-500 text-base font-medium">
              {persona.subtitle}
            </p>
          )}
        </div>

        {/* 核心图片区 */}
        <div className="w-full relative">
          <img
            src={persona.imagePath}
            alt={`${persona.name} 人格证书`}
            className="w-full rounded-2xl shadow-xl object-cover"
            draggable={false}
          />
        </div>

        {/* 分享引导提示 */}
        <p className="text-slate-500 text-sm bg-slate-100 py-2 px-4 rounded-full mt-1">
          💡 长按上方图片即可保存并分享
        </p>

        {/* 重新测试按钮 */}
        <button
          onClick={() => router.push("/")}
          className="mt-2 px-8 py-3 rounded-full border border-slate-300 text-slate-600 text-sm font-medium bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors duration-200 cursor-pointer"
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
