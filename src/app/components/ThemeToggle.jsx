// // components/ThemeToggle.jsx
// "use client";

// import { useTheme } from "next-themes";
// import { useSyncExternalStore } from "react";
// import { Sun, Moon } from "lucide-react";
// import { Button } from "@heroui/react";

// // Safe hydration check without triggering React Linter warnings
// const emptySubscribe = () => () => {};
// function useIsMounted() {
//   return useSyncExternalStore(
//     emptySubscribe,
//     () => true,
//     () => false
//   );
// }

// export default function ThemeToggle() {
//   const isMounted = useIsMounted();
//   const { theme, setTheme } = useTheme();

//   if (!isMounted) {
//     return <div className="w-10 h-10" />;
//   }

//   const isDark = theme === "dark";

//   return (
//     <Button
//       isIconOnly
//       variant="light"
//       radius="full"
//       aria-label="Toggle theme"
//       onPress={() => setTheme(isDark ? "light" : "dark")}
//       className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//     >
//       {isDark ? (
//         <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-45" />
//       ) : (
//         <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
//       )}
//     </Button>
//   );
// }