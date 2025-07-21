import { useRef, useState, useEffect } from "react";
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/contact/ContactExperience";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

gsap.registerPlugin(SplitText, ScrollTrigger);
const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef();
  const headlineRef = useRef();
  const formContainerRef = useRef();
  const experienceRef = useRef();
  const gradientProps = useRef({ angle: 0 });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      alert("Thank you for your message! I will get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [revealed, setRevealed] = useState(false);
  const hasAnimatedRef = useRef(false);
  useEffect(() => {
    if (!sectionRef.current) return;
    // Animate gradient background on scroll
    const updateGradient = () => {
      sectionRef.current.style.backgroundImage = `conic-gradient(from ${gradientProps.current.angle}deg at center, var(--color-primary), var(--color-background))`;
    };
    updateGradient();
    let splitHeadline = null;
    let triggerInstance = null;
    triggerInstance = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      onEnter: () => {
        setRevealed(true);
        if (!hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          gsap.to(gradientProps.current, {
            angle: -60,
            duration: 2,
            ease: 'power2.out',
            onUpdate: updateGradient,
            onComplete: () => {
              // Animate headline
              if (headlineRef.current) {
                if (splitHeadline) splitHeadline.revert();
                splitHeadline = SplitText.create(headlineRef.current, { type: 'chars' });
                gsap.fromTo(splitHeadline.chars,
                  { yPercent: "random(-120, 120)", rotation: "random(-360,360)", autoAlpha: 0 },
                  {
                    yPercent: 0,
                    rotation: 0,
                    autoAlpha: 1,
                    stagger: { amount: 0.5, from: "start", ease: "power3.out" }
                  }
                );
              }
              // Animate form and experience panel
              gsap.fromTo([
                formContainerRef.current,
                experienceRef.current
              ],
                { y: 40, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.2,
                  duration: 1.2,
                  ease: 'power4.inOut',
                  delay: 0.2
                }
              );
            }
          });
        }
      },
      onLeaveBack: () => {
        setRevealed(false);
        hasAnimatedRef.current = false;
        gsap.to(gradientProps.current, {
          angle: 0,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: updateGradient
        });
        // Revert headline
        if (splitHeadline) {
          splitHeadline.revert();
          splitHeadline = null;
        }
        // Hide form and experience panel
        gsap.to([
          formContainerRef.current,
          experienceRef.current
        ], {
          opacity: 0,
          y: 40,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    });
    // Cleanup
    return () => {
      if (triggerInstance) triggerInstance.kill();
      if (splitHeadline) splitHeadline.revert();
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="flex justify-center items-center bg-conic-0 from-primary to-background w-full p-4 min-h-screen">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
          headlineRef={headlineRef}
        />
        {/* Only render children when revealed by scroll */}
        {revealed && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
            <div className="xl:col-span-5">
              {/* Form Container with Glassmorphism */}
              <div
                ref={formContainerRef}
                className="flex justify-center items-center rounded-xl p-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg opacity-0"
              >
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  {/* ...existing code... */}
                  <div>
                    <label htmlFor="name" className="text-text text-base font-medium mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What’s your good name?"
                      required
                      className="w-full py-3 px-4 rounded-lg bg-white/5 text-text placeholder-gray-400 border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-text text-base font-medium mb-2 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                      className="w-full py-3 px-4 rounded-lg bg-white/5 text-text placeholder-gray-400 border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-text text-base font-medium mb-2 block">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows="5"
                      required
                      className="w-full py-3 px-4 rounded-lg bg-white/5 text-text placeholder-gray-400 border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 resize-y"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary py-3 px-6 rounded-lg font-bold text-lg text-white uppercase tracking-wider relative group overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center"
                    disabled={loading}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-4">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <ArrowDownwardIcon className="text-text text-2xl" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="xl:col-span-7 min-h-96">
              <div
                ref={experienceRef}
                className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden opacity-0"
              >
                <ContactExperience />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
