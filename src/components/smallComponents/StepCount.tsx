import { PRIMARY_BG_COLOR, PRIMARY_COLOR } from "../../helper/contants";

function StepCount({ step }: { step: string }) {
  return (
    <div className="flex align-middle justify-center">
      <span className="rounded-full w-8 h-8 text-center content-center" style={{backgroundColor: PRIMARY_COLOR, color: PRIMARY_BG_COLOR}}>
        {step}
      </span>
    </div>
  );
}

export default StepCount;
