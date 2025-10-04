export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  walletAddress?: string;
  verified: boolean;
  createdAt: Date;
}

export interface Commodity {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  quantity: number;
  location: string;
  seller: string;
  sellerId: string;
  rating: number;
  description: string;
  harvestDate: string;
  qualityGrade: string;
  certifications: string[];
  images: string[];
  createdAt: Date;
}

export interface Order {
  id: string;
  commodityId: string;
  buyerId: string;
  sellerId: string;
  quantity: number;
  totalValue: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  deliveryDate?: string;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  orderId: string;
  type: 'payment' | 'refund' | 'escrow';
  amount: number;
  currency: 'USDC' | 'HBAR';
  status: 'pending' | 'completed' | 'failed';
  txHash?: string;
  createdAt: Date;
}
