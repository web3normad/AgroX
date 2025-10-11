"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Calendar, Camera, Save, Edit, Shield, Bell } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: "Adebayo Oluwaseun",
    email: "adebayo@farms.ng",
    phone: "+234 901 234 5678",
    location: "Kano State, Nigeria",
    businessName: "Adebayo Farms",
    businessType: "Agricultural Producer",
    joinDate: "January 2024",
    bio: "Experienced farmer specializing in premium rice production. Committed to quality and sustainable farming practices.",
    verificationStatus: "verified"
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save logic here
    console.log("Profile saved:", profileData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-base text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm mb-6">
          {/* Cover Section */}
          <div className="relative h-32 bg-gradient-to-r from-green-600 to-green-700 rounded-t-3xl">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl bg-white border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {profileData.fullName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{profileData.fullName}</h2>
                  {profileData.verificationStatus === "verified" && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-1">{profileData.businessName}</p>
                <p className="text-sm text-gray-500">Member since {profileData.joinDate}</p>
              </div>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </>
                )}
              </button>
            </div>

            {/* Bio */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none resize-none"
                  rows={3}
                />
              ) : (
                <p className="text-gray-700 text-sm leading-relaxed">{profileData.bio}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{profileData.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{profileData.phone}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{profileData.location}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Business Details</h3>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Business Name</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.businessName}
                        onChange={(e) => setProfileData({ ...profileData, businessName: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{profileData.businessName}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Business Type</p>
                    <p className="text-sm font-semibold text-gray-900">{profileData.businessType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Verification Status</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-100">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Settings */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Security */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Security</h3>
                <p className="text-sm text-gray-600">Manage your password and 2FA</p>
              </div>
            </div>
            <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-semibold text-sm transition-colors">
              Change Password
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-600">Manage your notification preferences</p>
              </div>
            </div>
            <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-semibold text-sm transition-colors">
              Notification Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}