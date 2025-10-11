'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultMode = 'signup' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
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
              <div className="w-8 h-8 bg-green-600 rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-green-100 text-sm">
              {mode === 'signup' 
                ? 'Join Nigeria\'s leading commodity exchange' 
                : 'Sign in to continue trading'
              }
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            {mode === 'signin' && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-green-600 hover:text-green-700 font-semibold">
                  Forgot password?
                </button>
              </div>
            )}

            {mode === 'signup' && (
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  required
                />
                <span className="text-xs text-gray-600">
                  I agree to the{' '}
                  <button type="button" className="text-green-600 hover:text-green-700 font-semibold">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-green-600 hover:text-green-700 font-semibold">
                    Privacy Policy
                  </button>
                </span>
              </label>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              {mode === 'signup' ? 'Create Account' : 'Sign In'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-2xl font-semibold text-gray-700 transition-colors"
            >
              <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-2xl font-semibold text-gray-700 transition-colors"
            >
              <div className="w-5 h-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded" />
              Apple
            </button>
          </div>

          {/* Toggle mode */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">
              {mode === 'signup' ? 'Already have an account? ' : "Don't have an account? "}
            </span>
            <button
              type="button"
              onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
              className="text-green-600 hover:text-green-700 font-bold"
            >
              {mode === 'signup' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;