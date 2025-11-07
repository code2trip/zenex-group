let gsapInstance;
let scrollTriggerInstance;

function normalizeGsapModule(mod) {
  if (!mod) return undefined;
  if (mod.gsap) return mod.gsap;
  if (mod.default) return mod.default;
  return mod;
}

function normalizeScrollTriggerModule(mod) {
  if (!mod) return undefined;
  if (mod.ScrollTrigger) return mod.ScrollTrigger;
  if (mod.default) return mod.default;
  return mod;
}

export async function getGsap() {
  if (!gsapInstance) {
    const mod = await import('gsap');
    gsapInstance = normalizeGsapModule(mod);
  }
  return gsapInstance;
}

export async function getGsapWithScrollTrigger() {
  const gsap = await getGsap();
  if (!scrollTriggerInstance) {
    const mod = await import('gsap/ScrollTrigger');
    const ScrollTrigger = normalizeScrollTriggerModule(mod);
    if (ScrollTrigger && gsap) {
      const globals = typeof window !== 'undefined' ? gsap.core?.globals?.() : undefined;
      if (!globals || !globals.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
    }
    scrollTriggerInstance = ScrollTrigger;
  }
  return { gsap, ScrollTrigger: scrollTriggerInstance };
}

