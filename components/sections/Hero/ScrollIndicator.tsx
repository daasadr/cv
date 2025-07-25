export default function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
      aria-hidden="true"
      role="presentation"
    >
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
      </div>
    </div>
  );
}
