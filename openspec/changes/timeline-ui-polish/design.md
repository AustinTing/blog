## Context

時間軸首頁（`timeline-homepage` change）已完成實作。本次 polish 針對兩個純視覺問題進行修正，不涉及邏輯或元件結構變動，變更範圍限於 `src/styles/timeline.css`。

## Goals / Non-Goals

**Goals:**
- 拿掉年份水平線（`::before` / `::after` pseudo-elements）
- 消除手機版 tap highlight 黑框

**Non-Goals:**
- 其他 UI 調整
- 年份 divider 的重新設計

## Decisions

### 1. 年份水平線移除方式

**選擇：** 直接刪除 `.timeline-year-divider::before` 與 `.timeline-year-divider::after` 的 CSS 規則（包含 `timeline-year-divider` 的 `gap` 屬性若不再需要也可移除）

**替代方案：**
- 改 `display: none`：保留 CSS 結構但隱藏，未來可輕易復原
- 直接刪除：更乾淨

**理由：** 直接刪除，沒有復原需求。手機版的 `::before { flex: 0 0 0 }` override 也同時移除。

### 2. 手機 tap highlight 修正

**選擇：** 在 `.timeline-card-inner` 加入 `-webkit-tap-highlight-color: transparent`

**理由：** 這是 WebKit/Blink 行動瀏覽器對可點擊元素的預設 tap 遮罩，設為 `transparent` 是標準做法，不影響鍵盤 focus 或 hover 樣式。
