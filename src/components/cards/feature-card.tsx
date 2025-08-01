export default function FeatureCard({ feature }) {
  return (
    <div>
      <div className="border border-[#E2E8F0] dark:bg-gray-800/30 p-6 rounded-2xl max-w-[400px] w-full flex flex-col gap-4">
        <div>
          <div
            className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
          >
            <feature.icon className="w-6 h-6 dark:text-white" />
          </div>
          <div className="font-medium text-2xl dark:text-white">{feature.title}</div>
        </div>
        <div>
          <div className="text-md dark:text-[#94A3B8]">{feature.description}</div>
        </div>
      </div>
    </div>
  );
}
