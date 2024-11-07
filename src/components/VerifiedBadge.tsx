import { Check } from 'lucide-react';

export default function VerifiedBadge() {
  return (
    <div className="inline-flex items-center justify-center w-[18px] h-[18px] bg-[#0095F6] rounded-full">
      <Check className="w-3 h-3 text-white stroke-[3]" />
    </div>
  );
}