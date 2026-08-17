const FollowersGrowthTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  return (
 <div className="relative rounded-2xl bg-white px-6 py-4 shadow-[0_12px_30px_rgba(31,41,55,0.12)]">
  <p className="text-[12px] font-normal text-[#3F434A]">
    {payload[0].value}
  </p>

  {/* Bottom Arrow */}
  <div className="absolute left-1/2 top-full -translate-x-1/2">
    <div className="h-3 w-3 rotate-45 bg-white shadow-[3px_3px_3px_rgba(31,41,55,0.08)]"></div>
  </div>
</div>
  );
};

export default FollowersGrowthTooltip;