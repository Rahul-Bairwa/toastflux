"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

const frameworks = [
  {
    id: "react",
    name: "React",
    title: "Using ToastFlux in React",
    files: [
      {
        name: "App.js",
        code: `import { Toaster } from "toastflux";\nimport "toastflux/styles/toast.css";\nimport MyComponent from "./MyComponent";\n\nfunction App() {\n  return (\n    <div className="app-container">\n      <Toaster position="top-right" theme="dark" />\n      <MyComponent />\n    </div>\n  );\n}\n\nexport default App;`,
        language: "jsx"
      },
      {
        name: "MyComponent.js",
        code: `import { toast } from "toastflux";\n\nfunction MyComponent() {\n  return (\n    <button onClick={() => toast.success("Event created 🚀")}>\n      Show Toast\n    </button>\n  );\n}\n\nexport default MyComponent;`,
        language: "jsx"
      }
    ]
  },
  {
    id: "nextjs",
    name: "Next.js",
    title: "Using ToastFlux in Next.js (App Router)",
    files: [
      {
        name: "layout.tsx",
        code: `// app/layout.tsx\nimport { Toaster } from "toastflux";\nimport "toastflux/styles/toast.css";\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en">\n      <body>\n        {children}\n        <Toaster theme="dark" />\n      </body>\n    </html>\n  );\n}`,
        language: "tsx"
      },
      {
        name: "page.tsx",
        code: `"use client";\n\nimport { toast } from "toastflux";\n\nexport default function HomePage() {\n  return (\n    <button onClick={() => toast.success("It works in Next.js too! 🚀")}>\n      Show Toast\n    </button>\n  );\n}`,
        language: "tsx"
      }
    ]
  }
];

export function FrameworkUsage() {
  const [activeTab, setActiveTab] = useState("react");
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const activeFramework = frameworks.find((f) => f.id === activeTab)!;
  const activeFile = activeFramework.files[activeFileIndex];

  const handleFrameworkChange = (id: string) => {
    setActiveTab(id);
    setActiveFileIndex(0);
  };

  return (
    <div className="w-full rounded-2xl border border-[#222] bg-[#050505] overflow-hidden">
      {/* Main Framework Tabs */}
      <div className="flex bg-[#0a0a0a] border-b border-[#222]">
        {frameworks.map((f) => (
          <button
            key={f.id}
            onClick={() => handleFrameworkChange(f.id)}
            className={`px-8 py-4 text-sm font-semibold transition-all border-b-2 cursor-pointer ${
              activeTab === f.id
                ? "border-purple-500 text-white bg-white/[0.02]"
                : "border-transparent text-zinc-500 hover:text-white"
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>
      
      <div className="p-8 space-y-6">
        <h4 className="text-lg font-bold text-white">
          {activeFramework.title}
        </h4>

        {/* Sub-tabs for Files */}
        <div className="flex gap-2">
           {activeFramework.files.map((file, i) => (
              <button
                 key={file.name}
                 onClick={() => setActiveFileIndex(i)}
                 className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    activeFileIndex === i
                       ? "bg-[#111] text-purple-400 border border-purple-500/30"
                       : "text-zinc-500 hover:bg-[#111] hover:text-zinc-300 border border-transparent"
                 }`}
              >
                 {file.name}
              </button>
           ))}
        </div>

        <CodeBlock 
          code={activeFile.code} 
          language={activeFile.language} 
        />
      </div>
    </div>
  );
}
