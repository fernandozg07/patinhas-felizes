import React, { useState } from 'react';
import PetTracker from './PetTracker';
import FinancialIntegration from './FinancialIntegration';

const Dashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics] = useState({
    totalPets: 247,
    monthlyRevenue: 198093,
    activeCollars: 89,
    satisfaction: 4.8
  });

  const [alerts] = useState([
    { id: 1, type: 'success', message: 'Meta mensal atingida: +15%', time: '2 min' },
    { id: 2, type: 'warning', message: 'Pet "Thor" - Atividade baixa detectada', time: '5 min' },
    { id: 3, type: 'info', message: '12 novos agendamentos hoje', time: '10 min' }
  ]);

  return (
    <div className="min-h-screen p-2 sm:p-4 lg:p-6" style={{
      fontFamily: 'Poppins, sans-serif',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      minHeight: '100vh'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8" style={{
          background: '#ffffff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb',
          position: 'relative',
          zIndex: 10
        }}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl">🐾</span>
                <span className="hidden sm:inline" style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Dashboard Patinhas Felizes</span>
                <span className="sm:hidden" style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Dashboard</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Gestão Inteligente em Tempo Real</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                onClick={() => setActiveTab('overview')}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base"
                style={activeTab === 'overview' ? {
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  border: 'none'
                } : {
                  background: 'white',
                  color: '#374151',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="hidden sm:inline">📊 Visão Geral</span>
                <span className="sm:hidden">📊 Geral</span>
              </button>
              <button 
                onClick={() => setActiveTab('pets')}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base"
                style={activeTab === 'pets' ? {
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                  border: 'none'
                } : {
                  background: 'white',
                  color: '#374151',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="hidden sm:inline">🐾 Monitoramento</span>
                <span className="sm:hidden">🐾 Pets</span>
              </button>
              <button 
                onClick={() => setActiveTab('financial')}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base"
                style={activeTab === 'financial' ? {
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  border: 'none'
                } : {
                  background: 'white',
                  color: '#374151',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="hidden sm:inline">💰 Financeiro</span>
                <span className="sm:hidden">💰 $</span>
              </button>
            </div>
          </div>
        </div>

        {/* Conteúdo baseado na aba ativa */}
        {activeTab === 'overview' && (
          <>
            {/* Métricas Principais */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
              <MetricCard 
                title="Pets Cadastrados" 
                value={metrics.totalPets} 
                icon="🐾" 
                color="blue"
                growth="+12%"
              />
              <MetricCard 
                title="Receita Mensal" 
                value={`R$ ${metrics.monthlyRevenue.toLocaleString()}`} 
                icon="💰" 
                color="green"
                growth="+15%"
              />
              <MetricCard 
                title="Coleiras Ativas" 
                value={metrics.activeCollars} 
                icon="📡" 
                color="purple"
                growth="+8%"
              />
              <MetricCard 
                title="Satisfação" 
                value={`${metrics.satisfaction}/5.0`} 
                icon="⭐" 
                color="yellow"
                growth="+0.2"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Gráfico Principal */}
              <div className="lg:col-span-2 rounded-2xl p-4 sm:p-6 lg:p-8" style={{
                background: '#ffffff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb'
              }}>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="text-lg sm:text-xl lg:text-2xl">📈</span>
                  <span style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Performance Financeira</span>
                </h2>
                <div className="h-48 sm:h-56 lg:h-64 rounded-2xl p-2 sm:p-4" style={{
                  background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0, #cbd5e1)',
                  border: '1px solid rgba(226, 232, 240, 0.8)'
                }}>
                  <FinancialChart />
                </div>
              </div>

              {/* Alertas em Tempo Real */}
              <div className="rounded-2xl p-4 sm:p-6" style={{
                background: '#ffffff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb'
              }}>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="text-lg sm:text-xl lg:text-2xl">🔔</span>
                  <span style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Alertas</span>
                </h2>
                <div className="space-y-3">
                  {alerts.map(alert => (
                    <AlertItem key={alert.id} alert={alert} />
                  ))}
                </div>
              </div>
            </div>

            {/* Resumo de Monitoramento */}
            <div className="mt-6 sm:mt-8 rounded-2xl p-4 sm:p-6 lg:p-8" style={{
              background: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl">🐕</span>
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Resumo de Monitoramento</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <PetMonitor name="Thor" status="normal" activity="Alta" location="Casa" />
                <PetMonitor name="Luna" status="alert" activity="Baixa" location="Parque" />
                <PetMonitor name="Buddy" status="normal" activity="Média" location="Casa" />
              </div>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => setActiveTab('pets')}
                  className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full text-white transition-all duration-300 w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <span className="hidden sm:inline">Ver Monitoramento Completo 🐾</span>
                  <span className="sm:hidden">Monitoramento Completo 🐾</span>
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'pets' && <PetTracker />}
        {activeTab === 'financial' && <FinancialIntegration />}

      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon, color, growth }) => {
  const cardStyles = {
    blue: { borderLeft: '4px solid #3b82f6', background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' },
    green: { borderLeft: '4px solid #10b981', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' },
    purple: { borderLeft: '4px solid #8b5cf6', background: 'linear-gradient(135deg, #e9d5ff, #ddd6fe)' },
    yellow: { borderLeft: '4px solid #f59e0b', background: 'linear-gradient(135deg, #fef3c7, #fed7aa)' }
  };

  return (
    <div 
      className="rounded-2xl p-3 sm:p-4 lg:p-6 cursor-pointer transition-all duration-300"
      style={{
        background: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb',
        ...cardStyles[color]
      }}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase truncate">{title}</p>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{value}</p>
          <p className="text-xs text-green-600 mt-1">↗ {growth}</p>
        </div>
        <div className="text-xl sm:text-2xl lg:text-3xl ml-2">{icon}</div>
      </div>
    </div>
  );
};

const AlertItem = ({ alert }) => {
  const typeColors = {
    success: 'bg-green-50 text-green-800 border-green-200 border-l-green-500',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 border-l-yellow-500',
    info: 'bg-blue-50 text-blue-800 border-blue-200 border-l-blue-500'
  };

  return (
    <div className={`p-3 sm:p-4 rounded-xl border border-l-4 ${typeColors[alert.type]} hover:shadow-md transition-all`}>
      <p className="text-xs sm:text-sm font-medium">{alert.message}</p>
      <p className="text-xs opacity-75">{alert.time} atrás</p>
    </div>
  );
};

const PetMonitor = ({ name, status, activity, location }) => {
  const statusColors = {
    normal: { bg: '#d1fae5', text: '#065f46', border: '#10b981' },
    alert: { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' }
  };

  const petIcon = name === 'Luna' ? '🐱' : '🐶';

  return (
    <div className="rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105" style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0" style={{
            background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
            border: '2px solid #d1d5db'
          }}>{petIcon}</div>
          <h3 className="font-bold text-gray-800 text-base sm:text-lg truncate">{name}</h3>
        </div>
        <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap" style={{
          backgroundColor: statusColors[status].bg,
          color: statusColors[status].text,
          border: `1px solid ${statusColors[status].border}`
        }}>
          {status === 'normal' ? '✅ Normal' : '⚠️ Alerta'}
        </span>
      </div>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg">🏃</span>
          <span className="text-gray-700 truncate">Atividade: <strong>{activity}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg">📍</span>
          <span className="text-gray-700 truncate">Local: <strong>{location}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg">🕐</span>
          <span className="text-gray-700 truncate">Última atualização: <strong>agora</strong></span>
        </div>
      </div>
    </div>
  );
};

// Componente de gráfico financeiro
const FinancialChart = () => {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const revenue = [123, 135, 149, 164, 180, 198];
  const costs = [129, 129, 129, 129, 129, 129];
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
        <div className="flex gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}></div>
            <span className="text-xs sm:text-sm font-medium text-gray-700">Receita</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{background: 'linear-gradient(135deg, #ef4444, #dc2626)'}}></div>
            <span className="text-xs sm:text-sm font-medium text-gray-700">Custos</span>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xs sm:text-sm text-gray-600">ROI: <strong className="text-green-600">+245%</strong></p>
          <p className="text-xs sm:text-sm text-gray-600">Break-even: <strong className="text-blue-600">Mês 2</strong></p>
        </div>
      </div>
      
      <div className="flex-1 flex items-end justify-between px-2 sm:px-4">
        {months.map((month, index) => {
          const revenueHeight = (revenue[index] / 200) * 100;
          const costHeight = (costs[index] / 200) * 100;
          
          return (
            <div key={month} className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="flex items-end gap-1" style={{height: '80px', '@media (min-width: 640px)': {height: '120px'}}}>
                <div 
                  className="w-2 sm:w-3 lg:w-4 rounded-t" 
                  style={{
                    height: `${revenueHeight}%`,
                    background: 'linear-gradient(135deg, #10b981, #059669)'
                  }}
                ></div>
                <div 
                  className="w-2 sm:w-3 lg:w-4 rounded-t" 
                  style={{
                    height: `${costHeight}%`,
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                ></div>
              </div>
              <span className="text-xs font-medium text-gray-600">{month}</span>
              <span className="text-xs text-gray-500 hidden sm:inline">R${revenue[index]}k</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;