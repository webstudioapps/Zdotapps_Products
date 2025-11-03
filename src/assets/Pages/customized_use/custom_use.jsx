import React, { useMemo, useState } from "react";
import styles from "./custom_use.module.css";
// External images per step (provided by user)
const hero1Url = "https://res.cloudinary.com/dgq3d45tf/image/upload/c_pad,b_gen_fill,h_1000,ar_4:3/v1760002886/freepik__what-type-of-website-do-you-want-to-build-related-__59816_ibo8bt.png"; // Step 1 - Type (padded 4:3)
const hero2Url = "https://res.cloudinary.com/dgq3d45tf/image/upload/v1760002889/freepik__what-type-of-website-do-you-want-to-build-related-__59817_mnghbv.png"; // Step 2 - Style
const hero3Url = "https://res.cloudinary.com/dgq3d45tf/image/upload/v1760003261/freepik__a-thoughtful-individual-explores-various-website-s__59818_h3h54m.png"; // Step 3 - Pages
import hero4 from "../../images/custom_build.png"; // Step 4 - Contact

function RadioOption({ id, name, label, value, selected, onChange }) {
  return (
    <label className={styles.optionRow} htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
      />
      <span className={styles.customRadio} />
      <span className={styles.optionLabel}>{label}</span>
    </label>
  );
}

function CheckboxOption({ id, label, checked, onChange }) {
  return (
    <label className={styles.optionRow} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.customCheckbox} />
      <span className={styles.optionLabel}>{label}</span>
    </label>
  );
}

const STEP = {
  TYPE: 0,
  STYLE: 1,
  PAGES: 2,
  CONTACT: 3,
};

export default function CustomUse() {
  const [step, setStep] = useState(STEP.TYPE);

  // Step 1
  const [websiteType, setWebsiteType] = useState("");

  // Step 2
  const [websiteStyle, setWebsiteStyle] = useState("");

  // Step 3
  const [selectedPages, setSelectedPages] = useState({
    home: false,
    products: false,
    login: false,
    wishlist: false,
    about: false,
    contact: false,
    trackOrder: false,
    refund: false,
    reviews: false,
    other: false,
  });

  // Step 4
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const canGoNext = useMemo(() => {
    if (step === STEP.TYPE) return Boolean(websiteType);
    if (step === STEP.STYLE) return Boolean(websiteStyle);
    if (step === STEP.PAGES) return Object.values(selectedPages).some(Boolean);
    if (step === STEP.CONTACT)
      return Boolean(form.name && form.email && form.message);
    return false;
  }, [step, websiteType, websiteStyle, selectedPages, form]);

  function next() {
    if (!canGoNext) return;
    if (step < STEP.CONTACT) setStep((s) => s + 1);
    else handleSubmit();
  }

  function back() {
    if (step > STEP.TYPE) setStep((s) => s - 1);
  }

  function handleSubmit() {
    // Pretend to submit; in a real app we'd call an API here
    setSubmitted(true);
  }

  function togglePage(key, value) {
    setSelectedPages((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section className={` ${styles.pageWrap}`}>
      <div className={styles.container}>
        <div
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: "14px",
            zIndex: 2,
          }}
        >
          <h1 className={`mt-5 pt-3 ${styles.title}`} style={{ margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            Your idea, <span className={styles.accent}>our expertise</span> build
            your site now.
          </h1>
        </div>

        <div className={styles.card}>
          <div className={styles.mediaWrap}>
            {/* swap images per step for visual parity with reference */}
            <img
              src={step === 0 ? hero1Url : step === 1 ? hero2Url : step === 2 ? hero3Url : hero4}
              alt={step === 0 ? "Choose website type" : step === 1 ? "Choose website style" : step === 2 ? "Pick your pages" : "Contact / custom build"}
            />
          </div>
          
          <div className={styles.formWrap}>
            {step === STEP.TYPE && (
              <>
                <h2 className={styles.question}>What type of website do you want to build?</h2>
                <div className={styles.options}>
                  <RadioOption
                    id="type-personal"
                    name="type"
                    label="Personal / Portfolio"
                    value="personal"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-business"
                    name="type"
                    label="Business / Corporate"
                    value="business"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-ecom"
                    name="type"
                    label="E-commerce / Online Store"
                    value="ecommerce"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-blog"
                    name="type"
                    label="Blog / Content Website"
                    value="blog"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                  <RadioOption
                    id="type-other"
                    name="type"
                    label="Other (Please specify)"
                    value="other"
                    selected={websiteType}
                    onChange={setWebsiteType}
                  />
                </div>
              </>
            )}

            {step === STEP.STYLE && (
              <>
                <h2 className={styles.question}>What is your preferred website style</h2>
                <div className={styles.options}>
                  <RadioOption
                    id="style-modern"
                    name="style"
                    label="Modern / Minimalist"
                    value="modern"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-corporate"
                    name="style"
                    label="Professional / Corporate"
                    value="corporate"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-creative"
                    name="style"
                    label="Creative / Artistic"
                    value="creative"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-bold"
                    name="style"
                    label="Bold / Vibrant"
                    value="bold"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                  <RadioOption
                    id="style-other"
                    name="style"
                    label="Other (Please specify)"
                    value="other"
                    selected={websiteStyle}
                    onChange={setWebsiteStyle}
                  />
                </div>
              </>
            )}

            {step === STEP.PAGES && (
              <>
                <h2 className={styles.question}>Pick the pages you'd like on your site</h2>
                <div className={styles.gridTwo}>
                  <CheckboxOption
                    id="pg-home"
                    label="Home Page"
                    checked={selectedPages.home}
                    onChange={(v) => togglePage("home", v)}
                  />
                  <CheckboxOption
                    id="pg-products"
                    label="Products Page"
                    checked={selectedPages.products}
                    onChange={(v) => togglePage("products", v)}
                  />
                  <CheckboxOption
                    id="pg-login"
                    label="Login / Sign Up"
                    checked={selectedPages.login}
                    onChange={(v) => togglePage("login", v)}
                  />
                  <CheckboxOption
                    id="pg-wishlist"
                    label="Wishlist Page"
                    checked={selectedPages.wishlist}
                    onChange={(v) => togglePage("wishlist", v)}
                  />
                  <CheckboxOption
                    id="pg-about"
                    label="About Us"
                    checked={selectedPages.about}
                    onChange={(v) => togglePage("about", v)}
                  />
                  <CheckboxOption
                    id="pg-contact"
                    label="Contact Us"
                    checked={selectedPages.contact}
                    onChange={(v) => togglePage("contact", v)}
                  />
                  <CheckboxOption
                    id="pg-track"
                    label="Track Order Page"
                    checked={selectedPages.trackOrder}
                    onChange={(v) => togglePage("trackOrder", v)}
                  />
                  <CheckboxOption
                    id="pg-refund"
                    label="Refund Policy"
                    checked={selectedPages.refund}
                    onChange={(v) => togglePage("refund", v)}
                  />
                  <CheckboxOption
                    id="pg-reviews"
                    label="Reviews Page"
                    checked={selectedPages.reviews}
                    onChange={(v) => togglePage("reviews", v)}
                  />
                  <CheckboxOption
                    id="pg-other"
                    label="Other (Please specify)"
                    checked={selectedPages.other}
                    onChange={(v) => togglePage("other", v)}
                  />
                </div>
              </>
            )}

            {step === STEP.CONTACT && (
              <>
                <h2 className={styles.question}>zdotapps</h2>
                {!submitted ? (
                  <form
                    className={styles.contactForm}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <input
                      className={styles.input}
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      className={styles.input}
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <textarea
                      className={styles.textarea}
                      placeholder="Message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </form>
                ) : (
                  <div className={styles.successBox}>
                    <p>Thanks! We received your preferences and will reach out soon.</p>
                  </div>
                )}
              </>
            )}
              
            {/* Footer controls - hide after submission */}
            {!submitted && (
              <div className={styles.controls}>
                <div className={styles.progressCount}>
                  <span></span>
                </div>
                <div className={styles.buttonRow}>
                  <button className={styles.secondaryBtn} disabled={step === STEP.TYPE} onClick={back}>
                    Back
                  </button>
                  <button
                    className={styles.nextBtn}
                    onClick={next}
                    disabled={!canGoNext}
                  >
                    {step === STEP.CONTACT ? "Submit" : "Next →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
      
      </div>
    </section>
  );
}


