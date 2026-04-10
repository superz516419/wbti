export type DimensionWeights = {
  W?: number; // Warrior — 战士型 (独狼、冲锋、carry欲)
  S?: number; // Support — 辅助型 (治愈、保护、团队)
  V?: number; // Vigilance — 侦察型 (信息、监控、谨慎)
  M?: number; // Mind — 谋略型 (战术、计划、理性)
  A?: number; // Aggression — 侵略型 (进攻、压制、气势)
  B?: number; // Balance — 均衡型 (稳健、多面、适应)
  K?: number; // Knowledge — 技术型 (机关、设备、工程)
  O?: number; // Outgoing — 社交型 (队内活跃、大声、社牛)
};

export type Option = {
  text: string;
  weights: DimensionWeights;
};

export type Question = {
  id: number;
  text: string;
  options: [Option, Option, Option]; // 每题固定三个选项
};

export type PersonaType = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  goldQuote: string;
  imagePath: string;
  dominantDimensions: (keyof DimensionWeights)[];
  matchPct: number;
  hitCount: number;
};
