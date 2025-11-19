import React, { useState, useEffect } from 'react';

const FinancialIntegration = () => {
  const [financialData, setFinancialData] = useState({
    realTimeRevenue: 198093,
    monthlyGrowth: 15.2,
    activeCustomers: 247,
    averageTicket: 185,
    projectedROI: 245,
    breakEvenMonth: 2
  });

  const [expenses] = useState([
    { id: 1, category: 'Pessoal', amount: 113840, percentage: 88, color: 'red' },
    { id: 2, category: 'Estrutura', amount: 11300, percentage: 9, color: 'blue' },
    { id: 3, category: 'Insumos', amount: 4012, percentage: 3, color: 'green' }
  ]);

  const [revenueStreams] = useState([
    { id: 1, source: 'Consultas Veterinárias', amount: 89250, percentage: 45, trend: '+12%' },
    { id: 2, source: 'Coleiras Inteligentes', amount: 62430, percentage: 31.5, trend: '+28%' },
    { id: 3, source: 'Produtos Pet', amount: 28650, percentage: 14.5, trend: '+8%' },
    { id: 4, source: 'Serviços Especiais', amount: 17763, percentage: 9, trend: '+15%' }
  ]);

  const [alerts] = useState([
    { id: 1, type: 'success', message: 'Meta mensal superada em 15%', priority: 'high' },
    { id: 2, type: 'warning', message: 'Estoque de coleiras baixo (12 unidades)', priority: 'medium' },
    { id: 3, type: 'info', message: 'Novo cliente premium cadastrado', priority: 'low' }
  ]);

  // Simulação de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setFinancialData(prev => ({
        ...prev,
        realTimeRevenue: prev.realTimeRevenue + Math.floor(Math.random() * 500),
        activeCustomers: prev.activeCustomers + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(value);
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100 border-green-500 text-green-800';
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'info': return 'bg-blue-100 border-blue-500 text-blue-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 lg:p-6" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Financeiro */}
        <div className="rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8" style={{
          background: '#ffffff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold flex items-center gap-2">
                <span className="text-xl sm:text-2xl lg:text-4xl">💰</span>
                <span className="hidden sm:inline" style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Central Financeira Integrada</span>
                <span className="sm:hidden" style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Financeiro</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">Gestão Financeira em Tempo Real - Patinhas Felizes</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl text-white font-semibold transition-all duration-300 text-sm sm:text-base" style={{
                background: 'linear-gradient(135deg, #10b981, #059669)'
              }}>
                <span className="hidden sm:inline">📊 Exportar Dados</span>
                <span className="sm:hidden">📊 Exportar</span>
              </button>
              <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl text-white font-semibold transition-all duration-300 text-sm sm:text-base" style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
              }}>
                <span className="hidden sm:inline">📈 Projeções</span>
                <span className="sm:hidden">📈 Proj.</span>
              </button>
            </div>
          </div>
        </div>

        {/* KPIs Principais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
          <KPICard 
            title="Receita Atual"
            value={formatCurrency(financialData.realTimeRevenue)}
            subtitle="Este mês"
            trend={`+${financialData.monthlyGrowth}%`}
            icon="💰"
            color="green"
          />
          <KPICard 
            title="Clientes Ativos"
            value={financialData.activeCustomers}
            subtitle="Total cadastrados"
            trend="+12%"
            icon="👥"
            color="blue"
          />
          <KPICard 
            title="Ticket Médio"
            value={formatCurrency(financialData.averageTicket)}
            subtitle="Por atendimento"
            trend="+8%"
            icon="🎫"
            color="purple"
          />
          <KPICard 
            title="ROI Projetado"
            value={`${financialData.projectedROI}%`}
            subtitle="12 meses"
            trend="Meta atingida"
            icon="📈"
            color="yellow"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Análise de Receitas */}
          <div className="lg:col-span-2 rounded-2xl p-4 sm:p-6 lg:p-8" style={{
            background: '#ffffff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb'
          }}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl">📊</span>
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Fontes de Receita</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {revenueStreams.map(stream => (
                <div key={stream.id} className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105" style={{
                  background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                  border: '1px solid #bbf7d0'
                }}>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base truncate">{stream.source}</h3>
                      <span className="px-2 py-1 rounded-full text-xs font-medium self-start sm:self-auto" style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        color: 'white'
                      }}>{stream.trend}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#059669' }}>{formatCurrency(stream.amount)}</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-600">{stream.percentage}% do total</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <div 
                        className="h-2 sm:h-3 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${stream.percentage * 2}%`,
                          background: 'linear-gradient(135deg, #10b981, #059669)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #d1fae5, #a7f3d0, #6ee7b7)',
              border: '1px solid #10b981'
            }}>
              <div className="flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">Total de Receitas</h3>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold truncate" style={{ color: '#059669' }}>
                    {formatCurrency(revenueStreams.reduce((sum, stream) => sum + stream.amount, 0))}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Meta mensal atingida: +15%</p>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl ml-2">🎯</div>
              </div>
            </div>
          </div>

          {/* Alertas Financeiros */}
          <div className="rounded-2xl p-4 sm:p-6" style={{
            background: '#ffffff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb'
          }}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl">🚨</span>
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Alertas Financeiros</span>
            </h2>
            <div className="space-y-3">
              {alerts.map(alert => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${getAlertColor(alert.type)}`}>
                  <p className="text-xs sm:text-sm font-medium">{alert.message}</p>
                  <p className="text-xs opacity-75 mt-1">Prioridade: {alert.priority}</p>
                </div>
              ))}
            </div>

            {/* Métricas Rápidas */}
            <div className="mt-4 sm:mt-6 space-y-3">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base">⚡ Métricas Rápidas</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-lg text-center">
                  <p className="text-base sm:text-lg font-bold text-blue-600">2.4</p>
                  <p className="text-xs text-blue-500">Payback (meses)</p>
                </div>
                <div className="bg-green-50 p-2 sm:p-3 rounded-lg text-center">
                  <p className="text-base sm:text-lg font-bold text-green-600">18.3%</p>
                  <p className="text-xs text-green-500">Margem Líquida</p>
                </div>
                <div className="bg-purple-50 p-2 sm:p-3 rounded-lg text-center">
                  <p className="text-base sm:text-lg font-bold text-purple-600">89</p>
                  <p className="text-xs text-purple-500">Coleiras Vendidas</p>
                </div>
                <div className="bg-yellow-50 p-2 sm:p-3 rounded-lg text-center">
                  <p className="text-base sm:text-lg font-bold text-yellow-600">4.8</p>
                  <p className="text-xs text-yellow-500">NPS Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Análise de Custos Detalhada */}
        <div className="mt-4 sm:mt-6 rounded-2xl p-4 sm:p-6 lg:p-8" style={{
          background: '#ffffff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-lg sm:text-xl lg:text-2xl">💸</span>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Análise de Custos</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {expenses.map(expense => {
              const colors = {
                red: { bg: 'linear-gradient(135deg, #fee2e2, #fecaca)', border: '#ef4444', text: '#dc2626' },
                blue: { bg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', border: '#3b82f6', text: '#1d4ed8' },
                green: { bg: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', border: '#10b981', text: '#059669' }
              };
              
              return (
                <div key={expense.id} className="p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-105" style={{
                  background: colors[expense.color].bg,
                  border: `1px solid ${colors[expense.color].border}`
                }}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base truncate">{expense.category}</h3>
                    <span className="font-bold text-base sm:text-lg ml-2" style={{ color: colors[expense.color].text }}>{expense.percentage}%</span>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 truncate" style={{ color: colors[expense.color].text }}>{formatCurrency(expense.amount)}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
                    <div 
                      className="h-3 sm:h-4 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${expense.percentage}%`,
                        background: `linear-gradient(135deg, ${colors[expense.color].border}, ${colors[expense.color].text})`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl" style={{
            background: 'linear-gradient(135deg, #fee2e2, #fecaca, #f87171)',
            border: '1px solid #ef4444'
          }}>
            <div className="flex justify-between items-center">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg">Total de Custos Mensais</h3>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold truncate" style={{ color: '#dc2626' }}>
                  {formatCurrency(expenses.reduce((sum, expense) => sum + expense.amount, 0))}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">88% Pessoal | 9% Estrutura | 3% Insumos</p>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl ml-2">📊</div>
            </div>
          </div>
        </div>

        {/* Projeção Financeira */}
        <div className="mt-4 sm:mt-6 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4">🔮 Projeção Financeira - Próximos 6 Meses</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 sm:p-3 text-left">Mês</th>
                  <th className="p-2 sm:p-3 text-right text-green-600">Receita Projetada</th>
                  <th className="p-2 sm:p-3 text-right text-red-600">Custos</th>
                  <th className="p-2 sm:p-3 text-right text-blue-600">Lucro Líquido</th>
                  <th className="p-2 sm:p-3 text-center">Margem</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { month: 'Jan/2024', revenue: 198093, cost: 129152, profit: 68941, margin: 34.8 },
                  { month: 'Fev/2024', revenue: 227907, cost: 129152, profit: 98755, margin: 43.3 },
                  { month: 'Mar/2024', revenue: 262093, cost: 129152, profit: 132941, margin: 50.7 },
                  { month: 'Abr/2024', revenue: 301407, cost: 129152, profit: 172255, margin: 57.1 },
                  { month: 'Mai/2024', revenue: 346618, cost: 129152, profit: 217466, margin: 62.7 },
                  { month: 'Jun/2024', revenue: 398611, cost: 129152, profit: 269459, margin: 67.6 }
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 sm:p-3 font-medium">{row.month}</td>
                    <td className="p-2 sm:p-3 text-right text-green-600 font-bold">{formatCurrency(row.revenue)}</td>
                    <td className="p-2 sm:p-3 text-right text-red-600">{formatCurrency(row.cost)}</td>
                    <td className="p-2 sm:p-3 text-right text-blue-600 font-bold">{formatCurrency(row.profit)}</td>
                    <td className="p-2 sm:p-3 text-center">
                      <span className="bg-green-100 text-green-800 px-1 sm:px-2 py-1 rounded text-xs">
                        {row.margin}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, subtitle, trend, icon, color }) => {
  const cardStyles = {
    green: { borderLeft: '4px solid #10b981', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' },
    blue: { borderLeft: '4px solid #3b82f6', background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' },
    purple: { borderLeft: '4px solid #8b5cf6', background: 'linear-gradient(135deg, #e9d5ff, #ddd6fe)' },
    yellow: { borderLeft: '4px solid #f59e0b', background: 'linear-gradient(135deg, #fef3c7, #fed7aa)' }
  };

  return (
    <div 
      className="rounded-2xl p-3 sm:p-4 lg:p-6 cursor-pointer transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        ...cardStyles[color]
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase truncate">{title}</p>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{value}</p>
          <p className="text-xs text-gray-500 truncate">{subtitle}</p>
          <p className="text-xs text-green-600 mt-1">↗ {trend}</p>
        </div>
        <div className="text-xl sm:text-2xl lg:text-3xl ml-2">{icon}</div>
      </div>
    </div>
  );
};

export default FinancialIntegration;