export default function GeometricDivider() {
  return (
    <div className="relative w-full py-12 xl:hidden overflow-hidden bg-secondary-50">
      {/* Center Ornament */}
      <div className="flex items-center justify-center gap-3">
        {/* Left Line */}
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-600/40" />
        
        {/* Diamond Shape */}
        <div className="relative w-3 h-3 rotate-45 bg-primary-600" />
        
        {/* Center Line */}
        <div className="h-px w-24 bg-primary-600/40" />
        
        {/* Diamond Shape */}
        <div className="relative w-3 h-3 rotate-45 bg-primary-600" />
        
        {/* Right Line */}
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-600/40" />
      </div>
    </div>
  );
}
