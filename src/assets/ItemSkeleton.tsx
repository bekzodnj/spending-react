export function ItemSkeleton() {
  return (
    <div className="mb-1 mt-2 flex items-center justify-between gap-2 rounded-lg border bg-white p-3 shadow-sm">
      <div
        className="flex items-center gap-3"
        data-attribute="item-description"
      >
        <div
          data-label="icon"
          className="inline-block self-start rounded-lg bg-[#d1e7fb] p-2 px-4 text-2xl font-normal text-[#307ccc]"
        >
          <span>$</span>
        </div>

        <div data-label="spending-info">
          <h2 className="break-words text-xs font-bold text-[#2e2e2e] sm:text-base">
            Loading...
          </h2>
          <p className="text-xs text-[#adadad] sm:text-base">...</p>
        </div>
      </div>
    </div>
  );
}
