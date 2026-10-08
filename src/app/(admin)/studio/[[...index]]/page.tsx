"use client";

import { NextStudio } from "next-sanity/studio";
import config, { projectId } from "../../../../../sanity/sanity.config";
import React, { useState } from "react";
import { ShieldCheck, ExternalLink, X } from "lucide-react";
import Link from "next/link";

export default function StudioPage() {
  const [showHelper, setShowHelper] = useState(true);

  return (
    <div className="relative min-h-screen">
      {/* Floating Sanity Assistant Banner */}
      {showHelper && (
        <aside aria-label="Hướng dẫn kết nối Sanity" className="fixed top-4 right-4 z-50 max-w-sm bg-zinc-900/95 text-white p-4 rounded-2xl shadow-2xl border border-zinc-700/80 backdrop-blur-md text-xs space-y-2.5 animate-fadeIn">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Project ID: {projectId}</span>
            </div>
            <button
              onClick={() => setShowHelper(false)}
              className="text-gray-400 hover:text-white p-1"
              title="Đóng thông báo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-300 leading-relaxed text-[11px]">
            Nếu Sanity yêu cầu thêm CORS origin <code className="text-amber-300">http://localhost:3000</code>, hãy bấm nút <strong>Continue</strong> trên thông báo để Sanity tự động thêm cho bạn.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <a
              href={`https://manage.sanity.io/projects/${projectId}/api#cors`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2.5 bg-toyota-red text-white font-bold rounded-lg hover:bg-toyota-hover transition-colors text-[11px]"
            >
              <span>Quản lý CORS API</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <Link
              href="/"
              className="py-1.5 px-2.5 bg-zinc-800 text-gray-300 font-bold rounded-lg hover:bg-zinc-700 transition-colors text-[11px]"
            >
              Về Trang Chủ
            </Link>
          </div>
        </aside>
      )}

      {/* Main Sanity Studio */}
      <NextStudio config={config} />
    </div>
  );
}
