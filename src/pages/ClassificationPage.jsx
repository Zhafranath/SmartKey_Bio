// src/pages/ClassificationPage.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Image as ImageIcon,
  Loader2,
  AlertTriangle,
  ShieldCheck,
  Info,
  Leaf,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buildClassificationPrompt, SYSTEM_PROMPT } from "../prompt";

// helper: convert file -> data URL (base64)
const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result); // e.g. data:image/jpeg;base64,...
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const ClassificationPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const cameraInputRef = useRef(null); // for mobile camera input
  const galleryInputRef = useRef(null); // gallery picker

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // (Optional) You can add a size check here if needed
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
    setErrorMsg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setErrorMsg("Please upload or capture an image first.");
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setResult(null);

    try {
      const dataUrl = await fileToDataUrl(imageFile);
      const userPrompt = buildClassificationPrompt();

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            // Vision model that supports image input
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              {
                role: "user",
                content: [
                  { type: "text", text: userPrompt },
                  {
                    type: "image_url",
                    image_url: {
                      url: dataUrl, // data:image/jpeg;base64,...
                    },
                  },
                ],
              },
            ],
            temperature: 0.2,
            // JSON mode so we can safely JSON.parse
            response_format: { type: "json_object" },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content ?? "";

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (parseErr) {
        console.error("Failed to parse JSON from Groq:", content);
        throw new Error("Invalid JSON from Groq response.");
      }

      setResult(parsed);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "Failed to analyze the image. Please try again or check your Groq API key."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100 pt-24 pb-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#a7f3d0_0,_transparent_60%)]" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_#bbf7d0_0,_transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <Leaf className="w-9 h-9 text-emerald-600" />
              Species Classification
            </h1>
            <p className="text-slate-600 mt-2 max-w-2xl">
              Upload or capture a photo of an organism. The system will analyze
              the image and generate a dichotomous hierarchy, endangered status,
              key characteristics, habitat, common &amp; scientific names, and
              information on where it is usually found.
            </p>
          </div>
          <Link
            to="/"
            className="hidden md:inline-flex px-4 py-2 rounded-full border border-emerald-300 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-100 p-6 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Hidden inputs for gallery & camera */}
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Upload / Camera */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                1. Choose an image
              </label>
              <div className="flex gap-4">
                {/* Gallery */}
                <button
                  type="button"
                  onClick={() => galleryInputRef.current?.click()}
                  className="flex-1 border-2 border-dashed border-emerald-200 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/60 transition"
                >
                  <ImageIcon className="w-8 h-8 text-emerald-500 mb-1" />
                  <span className="text-sm font-semibold text-slate-700">
                    Upload from gallery
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1">
                    PNG / JPG, preferably &lt; 4 MB
                  </span>
                </button>

                {/* Camera (mobile-friendly) */}
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="w-28 h-24 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-slate-600 bg-slate-50 hover:bg-slate-100 transition"
                >
                  <Camera className="w-7 h-7 mb-1" />
                  <span className="text-xs font-semibold">Camera</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    Uses phone camera
                  </span>
                </button>
              </div>

              {previewUrl && (
                <div className="mt-4">
                  <p className="text-xs text-slate-500 mb-1">Image preview:</p>
                  <img
                    src={previewUrl}
                    alt="Organism preview"
                    className="w-full h-48 object-cover rounded-2xl border border-slate-200 shadow-sm"
                  />
                </div>
              )}
            </div>

            {/* Info: no text input needed */}
            <p className="text-xs text-slate-500">
              Upload an image of a living organism for species analysis.
            </p>

            {/* Error */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-2xl px-3 py-2"
                >
                  <AlertTriangle className="w-4 h-4 mt-0.5" />
                  <p>{errorMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 text-sm shadow-lg shadow-emerald-200 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing species...
                </>
              ) : (
                <>Analyze Species</>
              )}
            </button>
          </motion.form>

          {/* RIGHT: analysis result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {result && !loading && (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="space-y-6"
  >
    {/* Header Card: Nama & Status */}
    <div className="bg-white rounded-[2rem] border border-emerald-100 p-8 shadow-xl shadow-emerald-100/50 relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-10 -mt-10 opacity-50" />
      
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-emerald-50 rounded-full">
            Identified Species
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2 italic">
            {result.scientificName || "Unknown"}
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            {result.speciesCommonName || "Unknown"}
          </p>
        </div>
        
        {/* Badge Status Konservasi */}
        <div className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 ${
          result.isEndangered 
            ? "bg-red-50 border-red-100 text-red-600" 
            : "bg-emerald-50 border-emerald-100 text-emerald-600"
        }`}>
          <ShieldCheck className="w-8 h-8 mb-1" />
          <span className="text-[10px] font-black uppercase tracking-tighter">Conservation Status</span>
          <span className="text-sm font-bold">
            {result.isEndangered ? result.endangeredCategory || "Endangered" : "Secure / LC"}
          </span>
        </div>
      </div>
    </div>

    {/* Visual Stepper: Hierarki Taksonomi */}
    <div className="bg-slate-900 rounded-[2rem] p-6 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />
      <h3 className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Dichotomous Hierarchy</h3>
      <div className="flex flex-wrap gap-3">
        {result.dichotomousHierarchy?.map((step, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-emerald-400 font-mono">{step.level}</span>
              <span className="text-white font-medium text-sm">{step.value}</span>
            </div>
            {idx < result.dichotomousHierarchy.length - 1 && (
              <span className="text-white/20 font-light mx-1">/</span>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Bento Grid Info */}
    <div className="grid md:grid-cols-2 gap-4">
      {/* Karakteristik Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
          <Info className="w-5 h-5 text-blue-500" />
        </div>
        <h3 className="font-bold text-slate-900 mb-3">Key Characteristics</h3>
        <ul className="space-y-2">
          {result.characteristics?.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* Habitat Card */}
 <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
    <Leaf className="w-5 h-5 text-amber-500" />
  </div>
  <h3 className="font-bold text-slate-900 mb-3">Habitat & Ecology</h3>

  <div className="space-y-3 text-sm">
    {/* pakai dl + grid supaya rapi */}
    <dl className="grid grid-cols-[110px,1fr] gap-y-1 gap-x-3">
      <dt className="text-slate-500">Environment</dt>
      <dd className="text-slate-900 font-medium">
        {result.habitat?.environment || "-"}
      </dd>

      <dt className="text-slate-500">Region</dt>
      <dd className="text-slate-900 font-medium">
        {result.habitat?.region || "-"}
      </dd>
    </dl>

    <p className="text-slate-600 text-xs italic leading-relaxed mt-2">
      "{result.ecologicalRole}"
    </p>
  </div>
</div>

    </div>

    {/* Footer Detail: Lokasi & Info Tambahan */}
    <div className="bg-emerald-600 rounded-[2rem] p-8 text-white shadow-lg shadow-emerald-200">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <span className="p-1 bg-white/20 rounded-lg">📍</span> 
            Typical Locations
          </h4>
          <div className="flex flex-wrap gap-2">
            {result.typicalLocations?.map((loc, idx) => (
              <span key={idx} className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-xs transition">
                {loc}
              </span>
            ))}
          </div>
        </div>
        {result.recommendedAction && (
          <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
            <h4 className="font-bold text-sm mb-1 text-emerald-100">Recommended Action</h4>
            <p className="text-sm leading-relaxed">{result.recommendedAction}</p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
)}
    {loading && (
        <div className="bg-white/80 border border-emerald-100 rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mb-3" />
        <p className="text-sm font-semibold text-slate-700">
            Analyzing dichotomous hierarchy...
        </p>
        <p className="text-xs text-slate-500 mt-1">
            The model is inferring taxonomic levels and checking
            endangered status based on the image.
        </p>
        </div>
    )}
    {result && !loading && (
        <div className="space-y-4">
        {/* Additional info */}
        {result.additionalInfo && (
            <div className="bg-white/90 rounded-3xl border border-slate-200 p-5 shadow-md text-xs md:text-sm">
            <h3 className="font-semibold text-slate-900 mb-2">
                Additional Information
            </h3>
            <p className="text-slate-700 whitespace-pre-wrap">
                {result.additionalInfo}
            </p>
            </div>
        )}
        </div>
    )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassificationPage;
