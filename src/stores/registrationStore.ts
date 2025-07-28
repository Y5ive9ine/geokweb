/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-28 15:22:01
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 持久化状态接口
interface PersistedState {
  brandData: {
    name: string;
    domain: string;
    keywords: string;
    description: string;
  } | null;
  prompts: string[];
  currentStep:
    | "onboarding"
    | "brand-info"
    | "verification"
    | "add-prompts"
    | "completed";
  isVerified: boolean;
}

// 注册流程状态接口
interface RegistrationState extends PersistedState {
  // Actions
  setBrandData: (data: {
    name: string;
    domain: string;
    keywords: string;
    description: string;
  }) => void;

  setPrompts: (prompts: string[]) => void;
  addPrompt: (prompt: string) => void;
  removePrompt: (index: number) => void;
  updatePrompt: (index: number, prompt: string) => void;

  setCurrentStep: (
    step:
      | "onboarding"
      | "brand-info"
      | "verification"
      | "add-prompts"
      | "completed"
  ) => void;
  setVerified: (verified: boolean) => void;

  // 重置状态
  reset: () => void;
}

// 初始状态
const initialState = {
  brandData: null,
  prompts: [""],
  currentStep: "onboarding" as const,
  isVerified: false,
};

// 创建store
export const useRegistrationStore = create<RegistrationState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setBrandData: (data) => set({ brandData: data }),

      setPrompts: (prompts) => set({ prompts }),

      addPrompt: (prompt) => {
        const { prompts } = get();
        if (prompts.length < 10) {
          set({ prompts: [...prompts, prompt] });
        }
      },

      removePrompt: (index) => {
        const { prompts } = get();
        if (prompts.length > 1) {
          set({ prompts: prompts.filter((_, i) => i !== index) });
        }
      },

      updatePrompt: (index, prompt) => {
        const { prompts } = get();
        const newPrompts = [...prompts];
        newPrompts[index] = prompt;
        set({ prompts: newPrompts });
      },

      setCurrentStep: (step) => set({ currentStep: step }),

      setVerified: (verified) => set({ isVerified: verified }),

      reset: () => set(initialState),
    }),
    {
      name: "registration-storage", // sessionStorage key
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
