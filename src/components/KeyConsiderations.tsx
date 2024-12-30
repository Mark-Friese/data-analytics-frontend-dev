export function KeyConsiderations() {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <h3 className="font-semibold text-gray-900 mb-3">Key Considerations</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
        <li>Methods can be combined for more robust analysis</li>
        <li>Choice of method depends on data availability and uncertainty levels</li>
        <li>Consider computational requirements and implementation complexity</li>
        <li>Regular validation and calibration is essential</li>
      </ul>
    </div>
  );
}