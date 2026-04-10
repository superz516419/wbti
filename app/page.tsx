import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center flex-1 gap-10 py-16 px-2">
        {/* Valorant-style geometric emblem */}
        <div
          className="animate-[fadeUp_0.6s_ease-out_both] relative flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-14 h-14 rotate-45 bg-red-500/10 border-2 border-red-500/40 rounded-sm" />
          <div className="absolute w-5 h-5 rotate-45 bg-red-500 rounded-[3px]" />
        </div>

        {/* Title block */}
        <div className="animate-[fadeUp_0.6s_ease-out_0.15s_both] text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-none">
            瓦村人格测试
          </h1>
          <p className="text-xl font-bold text-slate-400 tracking-[0.25em] uppercase">
            WBTI
          </p>
          <p className="text-base text-slate-500 leading-relaxed max-w-[280px] mx-auto pt-1">
            你是真性情蕾娜，还是上朝幽影？
            <br />
            15 道题测出你的瓦村专属人设。
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/quiz"
          className="animate-[fadeUp_0.6s_ease-out_0.3s_both] w-full max-w-xs block"
        >
          <div className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold text-lg py-4 rounded-2xl text-center transition-colors duration-200 cursor-pointer select-none shadow-lg shadow-red-500/30">
            开始测试
          </div>
        </Link>

        {/* Footer hint */}
        <p className="animate-[fadeUp_0.6s_ease-out_0.5s_both] text-xs text-slate-400 text-center">
          约 3 分钟完成 · 结果图片可保存分享
        </p>
      </div>
    </Layout>
  );
}
