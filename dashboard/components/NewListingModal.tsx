'use client';

import React, { useState } from 'react';
import { X, Upload, Tag, Box, DollarSign, Package, ArrowUpRight } from 'lucide-react';

interface NewListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ListingFormData {
  name: string;
  variety: string;
  description: string;
  price: string;
  quantity: string;
  unit: string;
  category: string;
  image: File | null;
}

const NewListingModal: React.FC<NewListingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ListingFormData>({
    name: '',
    variety: '',
    description: '',
    price: '',
    quantity: '',
    unit: 'bags',
    category: 'grains',
    image: null
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('New listing:', formData);
    onClose();
    // Reset form
    setFormData({
      name: '',
      variety: '',
      description: '',
      price: '',
      quantity: '',
      unit: 'bags',
      category: 'grains',
      image: null
    });
    setImagePreview(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Decorative curved header */}
        <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-8 pb-16">
          {/* Noise texture */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />

          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[3rem]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header content */}
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Create New Listing
            </h2>
            <p className="text-green-100 text-sm">
              Add your commodity to the marketplace
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 pt-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="w-full h-40 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center hover:border-green-500 transition-colors cursor-pointer"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-2xl" />
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Premium Rice"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Variety */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Variety/Type
                </label>
                <div className="relative">
                  <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.variety}
                    onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                    placeholder="Basmati"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your product quality, origin, and any certifications..."
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors resize-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                  required
                >
                  <option value="grains">Grains</option>
                  <option value="tubers">Tubers</option>
                  <option value="legumes">Legumes</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="livestock">Livestock</option>
                </select>
              </div>

              {/* Unit */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Unit Type
                </label>
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                  required
                >
                  <option value="bags">Bags</option>
                  <option value="tons">Tons</option>
                  <option value="kg">Kilograms</option>
                  <option value="crates">Crates</option>
                  <option value="baskets">Baskets</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price per Unit ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="450"
                    min="0"
                    step="0.01"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity Available
                </label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="500"
                    min="1"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                required
              />
              <span className="text-xs text-gray-600">
                I confirm that this product meets quality standards and complies with{' '}
                <button type="button" className="text-green-600 hover:text-green-700 font-semibold">
                  marketplace policies
                </button>
              </span>
            </label>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-2xl font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Create Listing
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewListingModal;