import React, { useState } from 'react';
import {
  Coffee,
  LayoutTemplate,
  BookOpen,
  Image as ImageIcon,
  Layers,
  Mail,
  MapPin,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  Download,
  Upload,
  ArrowLeft,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdminPanel({ content, onSave, onReset, onExitAdmin }) {
  const [activeTab, setActiveTab] = useState('signature');
  const [formData, setFormData] = useState(content);
  const [saveToast, setSaveToast] = useState(false);

  const handleFieldChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setSaveToast(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.1 },
        colors: ['#C5A059', '#E8D8C8', '#4E2E1F']
      });
    } catch (e) {}
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all content to the original defaults? Custom edits will be cleared.')) {
      const reset = onReset();
      setFormData(reset);
      alert('Content reset to defaults successfully!');
    }
  };

  // Coffee CRUD
  const handleAddCoffee = () => {
    const newCoffee = {
      id: `sig-${Date.now()}`,
      name: 'New Artisan Brew',
      category: 'Coffee',
      origin: 'Single Origin Microlot',
      notes: 'Floral aroma, balanced sweetness, silky crema',
      price: 350,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      badge: 'New'
    };
    setFormData((prev) => ({
      ...prev,
      signatureCoffees: [newCoffee, ...prev.signatureCoffees]
    }));
  };

  const handleUpdateCoffee = (index, field, value) => {
    const updated = [...formData.signatureCoffees];
    updated[index] = {
      ...updated[index],
      [field]: field === 'price' ? Number(value) : value
    };
    setFormData((prev) => ({ ...prev, signatureCoffees: updated }));
  };

  const handleDeleteCoffee = (index) => {
    if (window.confirm('Delete this coffee item from the menu?')) {
      const updated = formData.signatureCoffees.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, signatureCoffees: updated }));
    }
  };

  // Export / Import
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'coffee_peyala_cms_backup.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        setFormData(imported);
        onSave(imported);
        alert('Backup data imported successfully!');
      } catch (err) {
        alert('Invalid JSON backup file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-[#0E0705] text-[#F5EDE4] flex flex-col font-sans">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#160D08]/95 backdrop-blur-md border-b border-[#3B2418] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <img
            src={formData.brand.logoUrl}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full shadow ring-1 ring-[#C5A059]/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-editorial text-xl font-bold text-[#F5EDE4]">Coffee Peyala</span>
              <span className="bg-[#C5A059] text-[#1A0E08] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Admin CMS
              </span>
            </div>
            <p className="text-[11px] text-[#A69588]">Full Page Content & Media Management</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Exit to Live Site */}
          <button
            onClick={onExitAdmin}
            className="flex items-center gap-1.5 bg-[#20120B] hover:bg-[#2F1A0F] text-[#E8D8C8] border border-[#482A1B] text-xs font-medium px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Live Website</span>
          </button>

          {/* Reset Defaults */}
          <button
            onClick={handleReset}
            className="p-2 text-[#A69588] hover:text-red-400 hover:bg-[#20120B] rounded-xl border border-transparent hover:border-[#482A1B] transition-colors cursor-pointer"
            title="Reset to Original Defaults"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-[#C5A059] hover:bg-[#D5B069] text-[#1A0E08] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg transition-all cursor-pointer hover:scale-103"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </header>

      {/* Save Success Toast */}
      {saveToast && (
        <div className="fixed top-18 right-8 z-50 bg-[#261710] border-2 border-[#C5A059] text-[#F5EDE4] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
          <div>
            <div className="text-xs font-bold">Changes Saved Live!</div>
            <div className="text-[11px] text-[#A69588]">Website content updated in real-time.</div>
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-1.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7A6A5E] px-3 pb-2">
            CMS Sections
          </div>

          {[
            { id: 'signature', label: 'Signature Coffee Menu', icon: Coffee },
            { id: 'hero', label: 'Hero Section', icon: LayoutTemplate },
            { id: 'about', label: 'About & Heritage', icon: BookOpen },
            { id: 'atmosphere', label: 'Atmosphere Banner', icon: ImageIcon },
            { id: 'collections', label: 'Popular Collections', icon: Layers },
            { id: 'newsletter', label: 'Newsletter', icon: Mail },
            { id: 'contact', label: 'Outlet & Footer Info', icon: MapPin },
            { id: 'backup', label: 'Backup & Restore', icon: Download }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all text-left cursor-pointer ${
                  active
                    ? 'bg-[#C5A059] text-[#1A0E08] shadow-lg'
                    : 'bg-[#180E09] text-[#A69588] hover:text-[#F5EDE4] hover:bg-[#22130C] border border-[#2D180F]'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-[#1A0E08]' : 'text-[#C5A059]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Content Editor Panel */}
        <main className="flex-1 bg-[#160D08] border border-[#3B2418] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          {/* TAB 1: SIGNATURE COFFEES */}
          {activeTab === 'signature' && (
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A180E]">
                <div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Signature Coffee Menu</h2>
                  <p className="text-xs text-[#A69588]">Add, edit, change prices or remove coffees from the carousel.</p>
                </div>
                <button
                  onClick={handleAddCoffee}
                  className="flex items-center gap-1.5 bg-[#C5A059] hover:bg-[#D5B069] text-[#1A0E08] text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Coffee</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.signatureCoffees.map((coffee, idx) => (
                  <div
                    key={coffee.id || idx}
                    className="bg-[#1D110A] border border-[#382217] rounded-2xl p-5 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={coffee.image}
                          alt={coffee.name}
                          className="w-16 h-16 object-cover rounded-xl border border-[#482A1B] bg-[#2A180E]"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=150&q=80';
                          }}
                        />
                        <div>
                          <span className="text-[10px] bg-[#2A180E] text-[#C5A059] font-mono px-2 py-0.5 rounded uppercase">
                            {coffee.badge || 'Item'}
                          </span>
                          <h4 className="font-editorial text-xl text-[#F5EDE4] mt-1">{coffee.name}</h4>
                          <span className="text-xs font-bold text-[#C5A059]">৳{coffee.price}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteCoffee(idx)}
                        className="p-2 text-[#7A6A5E] hover:text-red-400 hover:bg-[#2A180E] rounded-lg transition-colors cursor-pointer"
                        title="Delete this coffee"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                      <div>
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Coffee Name</label>
                        <input
                          type="text"
                          value={coffee.name}
                          onChange={(e) => handleUpdateCoffee(idx, 'name', e.target.value)}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Price (৳ BDT)</label>
                        <input
                          type="number"
                          value={coffee.price}
                          onChange={(e) => handleUpdateCoffee(idx, 'price', e.target.value)}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Origin Country / Region</label>
                        <input
                          type="text"
                          value={coffee.origin}
                          onChange={(e) => handleUpdateCoffee(idx, 'origin', e.target.value)}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Badge Tag</label>
                        <input
                          type="text"
                          value={coffee.badge || ''}
                          placeholder="e.g. Bestseller, Staff Pick"
                          onChange={(e) => handleUpdateCoffee(idx, 'badge', e.target.value)}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Image URL</label>
                        <input
                          type="text"
                          value={coffee.image}
                          onChange={(e) => handleUpdateCoffee(idx, 'image', e.target.value)}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Tasting Notes & Description</label>
                        <input
                          type="text"
                          value={coffee.notes}
                          onChange={(e) => handleUpdateCoffee(idx, 'notes', e.target.value)}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HERO SECTION */}
          {activeTab === 'hero' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Hero Section Editor</h2>
                <p className="text-xs text-[#A69588]">Edit the opening banner, headlines, description, and visual assets.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Tagline Pill</label>
                  <input
                    type="text"
                    value={formData.hero.tagline}
                    onChange={(e) => handleFieldChange('hero', 'tagline', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Headline Part 1</label>
                  <input
                    type="text"
                    value={formData.hero.headlinePart1}
                    onChange={(e) => handleFieldChange('hero', 'headlinePart1', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Headline Part 2</label>
                  <input
                    type="text"
                    value={formData.hero.headlinePart2}
                    onChange={(e) => handleFieldChange('hero', 'headlinePart2', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Headline Second Line (Italic)</label>
                  <input
                    type="text"
                    value={formData.hero.headlineItalic}
                    onChange={(e) => handleFieldChange('hero', 'headlineItalic', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Main Description Paragraph</label>
                  <textarea
                    rows={3}
                    value={formData.hero.description}
                    onChange={(e) => handleFieldChange('hero', 'description', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl p-3 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Primary Button Text</label>
                  <input
                    type="text"
                    value={formData.hero.exploreBtnText}
                    onChange={(e) => handleFieldChange('hero', 'exploreBtnText', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Secondary Button Text</label>
                  <input
                    type="text"
                    value={formData.hero.deliveryBtnText}
                    onChange={(e) => handleFieldChange('hero', 'deliveryBtnText', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Hero Cup Splash Image URL</label>
                  <input
                    type="text"
                    value={formData.hero.heroCupImage}
                    onChange={(e) => handleFieldChange('hero', 'heroCupImage', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Origin Footnote</label>
                  <input
                    type="text"
                    value={formData.hero.originFootnote}
                    onChange={(e) => handleFieldChange('hero', 'originFootnote', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ABOUT & HERITAGE */}
          {activeTab === 'about' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">About & Heritage Section</h2>
                <p className="text-xs text-[#A69588]">Manage the café history, 3 feature pillars, and performance metrics.</p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Heading</label>
                  <input
                    type="text"
                    value={formData.about.headline}
                    onChange={(e) => handleFieldChange('about', 'headline', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Story Text</label>
                  <textarea
                    rows={4}
                    value={formData.about.description}
                    onChange={(e) => handleFieldChange('about', 'description', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl p-3 text-[#F5EDE4]"
                  />
                </div>

                {/* 3 Features */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">3 Feature Pillars</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {formData.about.features.map((feat, idx) => (
                      <div key={idx} className="bg-[#1D110A] p-3 rounded-xl border border-[#382217] space-y-2">
                        <input
                          type="text"
                          value={feat.title}
                          onChange={(e) => {
                            const updated = [...formData.about.features];
                            updated[idx].title = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              about: { ...prev.about, features: updated }
                            }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-lg px-2 py-1 text-xs font-bold text-[#C5A059]"
                        />
                        <textarea
                          rows={3}
                          value={feat.desc}
                          onChange={(e) => {
                            const updated = [...formData.about.features];
                            updated[idx].desc = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              about: { ...prev.about, features: updated }
                            }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-lg p-2 text-[11px] text-[#F5EDE4]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Stats */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">4 Metric Badges</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {formData.about.stats.map((st, idx) => (
                      <div key={idx} className="bg-[#1D110A] p-3 rounded-xl border border-[#382217] space-y-1.5">
                        <input
                          type="text"
                          value={st.number}
                          onChange={(e) => {
                            const updated = [...formData.about.stats];
                            updated[idx].number = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              about: { ...prev.about, stats: updated }
                            }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-lg px-2 py-1 text-base font-editorial font-bold text-[#F5EDE4]"
                        />
                        <input
                          type="text"
                          value={st.label}
                          onChange={(e) => {
                            const updated = [...formData.about.stats];
                            updated[idx].label = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              about: { ...prev.about, stats: updated }
                            }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-lg px-2 py-1 text-[10px] text-[#A69588]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ATMOSPHERE BANNER */}
          {activeTab === 'atmosphere' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Atmosphere & Interior Banner</h2>
                <p className="text-xs text-[#A69588]">Customize the full-width dining interior showcase and table booking CTA.</p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Headline</label>
                  <input
                    type="text"
                    value={formData.atmosphere.headline}
                    onChange={(e) => handleFieldChange('atmosphere', 'headline', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Subheadline (Italic)</label>
                  <input
                    type="text"
                    value={formData.atmosphere.subheadline}
                    onChange={(e) => handleFieldChange('atmosphere', 'subheadline', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Button Text</label>
                  <input
                    type="text"
                    value={formData.atmosphere.buttonText}
                    onChange={(e) => handleFieldChange('atmosphere', 'buttonText', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Background Interior Photo URL</label>
                  <input
                    type="text"
                    value={formData.atmosphere.backgroundImage}
                    onChange={(e) => handleFieldChange('atmosphere', 'backgroundImage', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                {formData.atmosphere.backgroundImage && (
                  <div className="mt-2">
                    <span className="text-[10px] text-[#A69588] block mb-1">Current Preview:</span>
                    <img
                      src={formData.atmosphere.backgroundImage}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-xl border border-[#382217]"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: COLLECTIONS */}
          {activeTab === 'collections' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Popular Collections</h2>
                <p className="text-xs text-[#A69588]">Modify collection categories, item counts, and descriptions.</p>
              </div>

              <div className="space-y-4">
                {formData.popularCollections.All.map((col, idx) => (
                  <div key={col.id || idx} className="bg-[#1D110A] p-4 rounded-xl border border-[#382217] space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-lg text-[#F5EDE4]">{col.title}</span>
                      <span className="text-xs text-[#C5A059] font-mono">{col.count}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Collection Title</label>
                        <input
                          type="text"
                          value={col.title}
                          onChange={(e) => {
                            const updated = { ...formData.popularCollections };
                            updated.All[idx].title = e.target.value;
                            setFormData((prev) => ({ ...prev, popularCollections: updated }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Count Display</label>
                        <input
                          type="text"
                          value={col.count}
                          onChange={(e) => {
                            const updated = { ...formData.popularCollections };
                            updated.All[idx].count = e.target.value;
                            setFormData((prev) => ({ ...prev, popularCollections: updated }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[10px] text-[#A69588] uppercase block mb-1">Main Cover Image URL</label>
                        <input
                          type="text"
                          value={col.mainImage}
                          onChange={(e) => {
                            const updated = { ...formData.popularCollections };
                            updated.All[idx].mainImage = e.target.value;
                            setFormData((prev) => ({ ...prev, popularCollections: updated }));
                          }}
                          className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: NEWSLETTER */}
          {activeTab === 'newsletter' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Newsletter Section</h2>
                <p className="text-xs text-[#A69588]">Edit the email subscription banner headlines and copy.</p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Headline</label>
                  <input
                    type="text"
                    value={formData.newsletter.headline}
                    onChange={(e) => handleFieldChange('newsletter', 'headline', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={formData.newsletter.description}
                    onChange={(e) => handleFieldChange('newsletter', 'description', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl p-3 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Button Text</label>
                  <input
                    type="text"
                    value={formData.newsletter.buttonText}
                    onChange={(e) => handleFieldChange('newsletter', 'buttonText', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CONTACT & FOOTER */}
          {activeTab === 'contact' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Outlet & Footer Info</h2>
                <p className="text-xs text-[#A69588]">Update Mirpur location address, phone hotline, email, opening hours, and socials.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Detailed Mirpur Address</label>
                  <input
                    type="text"
                    value={formData.contact.address}
                    onChange={(e) => handleFieldChange('contact', 'address', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Contact Phone Numbers</label>
                  <input
                    type="text"
                    value={formData.contact.phone}
                    onChange={(e) => handleFieldChange('contact', 'phone', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Official Email</label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => handleFieldChange('contact', 'email', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Opening Hours</label>
                  <input
                    type="text"
                    value={formData.contact.hours}
                    onChange={(e) => handleFieldChange('contact', 'hours', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Facebook URL</label>
                  <input
                    type="text"
                    value={formData.contact.facebook}
                    onChange={(e) => handleFieldChange('contact', 'facebook', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Instagram URL</label>
                  <input
                    type="text"
                    value={formData.contact.instagram}
                    onChange={(e) => handleFieldChange('contact', 'instagram', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#A69588] uppercase block mb-1">Twitter / X URL</label>
                  <input
                    type="text"
                    value={formData.contact.twitter}
                    onChange={(e) => handleFieldChange('contact', 'twitter', e.target.value)}
                    className="w-full bg-[#120B08] border border-[#382217] rounded-xl px-3 py-2 text-[#F5EDE4]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: BACKUP & RESTORE */}
          {activeTab === 'backup' && (
            <div className="space-y-6 text-left">
              <div className="pb-4 border-b border-[#2A180E]">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#F5EDE4]">Backup & Restore Content</h2>
                <p className="text-xs text-[#A69588]">Download a complete JSON backup of your website content or restore from a file.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1D110A] p-6 rounded-2xl border border-[#382217] space-y-4">
                  <Download className="w-8 h-8 text-[#C5A059]" />
                  <h4 className="font-editorial text-xl text-[#F5EDE4]">Export Website Backup</h4>
                  <p className="text-xs text-[#A69588] leading-relaxed">
                    Save all current texts, images, menu prices, and contact details as a single `.json` file on your device.
                  </p>
                  <button
                    onClick={handleExportJSON}
                    className="flex items-center gap-2 bg-[#2E1A10] hover:bg-[#C5A059] text-[#E8D8C8] hover:text-[#1A0E08] border border-[#482A1B] text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                <div className="bg-[#1D110A] p-6 rounded-2xl border border-[#382217] space-y-4">
                  <Upload className="w-8 h-8 text-[#C5A059]" />
                  <h4 className="font-editorial text-xl text-[#F5EDE4]">Restore from Backup</h4>
                  <p className="text-xs text-[#A69588] leading-relaxed">
                    Upload a previously saved `.json` file to instantly restore your entire website's content.
                  </p>
                  <label className="inline-flex items-center gap-2 bg-[#2E1A10] hover:bg-[#C5A059] text-[#E8D8C8] hover:text-[#1A0E08] border border-[#482A1B] text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer">
                    <Upload className="w-4 h-4" />
                    <span>Upload JSON File</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportJSON}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
