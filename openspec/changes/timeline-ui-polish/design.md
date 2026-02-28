## Context

時間軸首頁（`timeline-homepage` change）已完成實作。本次 polish 針對兩個純視覺問題進行修正，不涉及邏輯或元件結構變動，變更範圍限於 `src/styles/timeline.css`。

## Goals / Non-Goals

**Goals:**
- 拿掉年份水平線（`::before` / `::after` pseudo-elements）
- 消除手機版 tap highlight 黑框
- 修正移除水平線後衍生的定位與間距回歸問題
- 調整時間線左右比例（`--line-pos`），改善中文標題顯示

**Non-Goals:**
- 時間軸結構或元件邏輯的變動
- 年份 divider 外觀的重新設計（字體、顏色、樣式等）

## Decisions

### 1. 年份水平線移除方式

**選擇：** 直接刪除 `.timeline-year-divider::before` 與 `.timeline-year-divider::after` 的 CSS 規則（包含 `timeline-year-divider` 的 `gap` 屬性若不再需要也可移除）

**替代方案：**
- 改 `display: none`：保留 CSS 結構但隱藏，未來可輕易復原
- 直接刪除：更乾淨

**理由：** 直接刪除，沒有復原需求。手機版的 `::before { flex: 0 0 0 }` override 也同時移除。連帶移除 `gap: 0.75rem`（線移除後 gap 已無意義）。

### 2. 手機 tap highlight 修正

**選擇：** 在 `.timeline-card-inner` 加入 `-webkit-tap-highlight-color: transparent`

**理由：** 這是 WebKit/Blink 行動瀏覽器對可點擊元素的預設 tap 遮罩，設為 `transparent` 是標準做法，不影響鍵盤 focus 或 hover 樣式。

### 3. 移除水平線的連帶回歸修正

移除 `::before` spacer 後衍生三項定位與間距問題，於同次修改一併處理：

- **年份文字定位：** `.timeline-year-divider` 加入 `padding-left: calc(var(--line-pos) - 1.5rem)`，補回原本 spacer 提供的水平位移。
- **左側卡片貼線：** `.entry-left` 加入 `box-sizing: border-box`，修正 content-box 模型下 `padding-right` 超出寬度導致卡片延伸至時間線的問題。
- **年份上下間距：** `.timeline-year-divider` 改為 `padding: 1rem 0`，移除 `.timeline-entries` 的 `padding-top: 0.5rem`，使年份文字上下各留 1rem 等距。

### 4. 時間線左右比例調整

**選擇：** `--line-pos` 從 `35%` 調整為 `45%`

**理由：** 原始 35/65 左右比例對中文標題過窄，調整為 45/55 後左欄有足夠空間顯示較長的中文文字，同時不影響右欄內容排版。
