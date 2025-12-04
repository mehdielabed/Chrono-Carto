'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  MessageSquare, 
  FileText,
  TrendingUp,
  Activity,
  Clock,
  Award,
  Shield,
  Database,
  Zap,
  Globe,
  Monitor,
  Smartphone,
  Eye,
  Download,
  Upload,
  Star,
  Heart,
  Target,
  PieChart,
  LineChart,
  RefreshCw,
  Plus,
  Search,
  Filter,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Home,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Loader2,
  Save,
  Edit,
  Trash2,
  Copy,
  Share2,
  ExternalLink,
  Maximize2,
  Minimize2
} from 'lucide-react';

// Import du composant AdminDashboard complet
import AdminDashboard from './AdminDashboard';
import { useRealStats } from '@/hooks/useRealStats';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'parent' | 'admin';
  lastActivity: string;
  isActive: boolean;
}

interface Quiz {
  id: string;
  title: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completions: number;
  averageScore: number;
  createdAt: string;
}

interface Message {
  id: string;
  from: string;
  subject: string;
  timestamp: string;
  isRead: boolean;
  priority: 'low' | 'normal' | 'high' | 'urgent';
}

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalQuizzes: number;
  completedQuizzes: number;
  unreadMessages: number;
  averageScore: number;
  userGrowth: number;
  engagementRate: number;
}

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { stats: realStats } = useRealStats();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeUsers: 0,
    totalQuizzes: 0,
    completedQuizzes: 0,
    unreadMessages: 0,
    averageScore: 0,
    userGrowth: 0,
    engagementRate: 0
  });

  // Simulation du chargement des données
  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        // Simulation d'un appel API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Données réelles
        setStats({
          totalUsers: realStats.totalUsers,
          activeUsers: realStats.totalUsers,
          totalQuizzes: realStats.totalQuizzes,
          completedQuizzes: realStats.completedQuizzes,
          unreadMessages: realStats.userUnreadMessages,
          averageScore: realStats.averageScore,
          userGrowth: 0,
          engagementRate: 0
        });
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Écran de chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-3 mx-auto">
            <Loader2 className="w-5 h-5 text-white animate-spin" />
          </div>
          <h2 className="text-base font-bold text-white mb-2">Chargement du tableau de bord</h2>
          <p className="text-blue-200">Initialisation de l'interface d'administration...</p>
          
          {/* Barre de progression animée */}
          <div className="w-64 h-2 bg-white/10 rounded-full mt-3 mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // Interface d'administration complète
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col">
      {/* Composant AdminDashboard complet */}
      <div className="flex-1 overflow-y-auto">
        <AdminDashboard />
      </div>

    </div>
  );
};

export default AdminPage;


