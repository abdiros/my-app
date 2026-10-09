"use client";

import { useRef, useState, type DragEvent, type ChangeEvent, type KeyboardEvent } from "react";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

type DropZoneProps = {
  onFileSelect: (file: File) => void;
};

function validate(file: File): string | null {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return "Please choose a JPG, PNG, or WebP image.";
  }
  if (file.size > MAX_SIZE) {
    return "Image must be under 5MB.";
  }
  return null;
}

export default function DropZone({ onFileSelect }: DropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // dragenter/dragleave fire for child elements, so track nesting depth
  // to avoid flickering the highlight when the cursor moves over the icon/text.
  const dragDepth = useRef(0);

  function handleFile(file: File) {
    const message = validate(file);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    onFileSelect(file);
  }

  function handleDragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragDepth.current += 1;
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragDepth.current -= 1;
    if (dragDepth.current <= 0) {
      dragDepth.current = 0;
      setIsDragging(false);
    }
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    dragDepth.current = 0;
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) handleFile(file);
    // Reset so selecting the same file again re-triggers change.
    event.target.value = "";
  }

  function openPicker() {
    inputRef.current?.click();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPicker();
    }
  }

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        aria-label="Drop your art image here or click to upload"
        onClick={openPicker}
        onKeyDown={handleKeyDown}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 text-center transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
          isDragging
            ? "border-sky-500 bg-sky-500/10"
            : "border-zinc-700 bg-zinc-900/50 hover:border-zinc-500 hover:bg-zinc-900"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-10 w-10 ${isDragging ? "text-sky-400" : "text-zinc-500"}`}
          aria-hidden="true"
        >
          <path d="M12 16V4m0 0L8 8m4-4 4 4" />
          <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </svg>

        <p className="text-sm text-zinc-300">
          Drop your art image here or click to upload
        </p>
        <p className="text-xs text-zinc-500">JPG, PNG, or WebP · max 5MB</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
