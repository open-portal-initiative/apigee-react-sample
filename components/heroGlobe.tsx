import { Globe } from "@/components/magicui/globe";

export function HeroGlobe() {
  return (
    <div style={{
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "44px",
      maxWidth: "1000px",
      width: "100%",
      height: "700px"
    }}>
      <span
        style={{
          textAlign: "center"
        }} 
        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Grow Engagement with Apigee Portals
      </span>

      <Globe className="top-55 opacity-90" />
      
      {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
    </div>
  );
}
