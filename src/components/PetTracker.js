import React, { useState, useEffect } from 'react';

const PetTracker = ({ onBack }) => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Thor',
      owner: 'Maria Silva',
      breed: 'Golden Retriever',
      age: 3,
      status: 'normal',
      location: { lat: -23.5505, lng: -46.6333, address: 'Casa - Jardim Aurora' },
      vitals: {
        heartRate: 85,
        temperature: 38.2,
        activity: 'Alta',
        steps: 8420
      },
      lastUpdate: new Date(),
      collar: {
        battery: 78,
        connected: true,
        model: 'PatinhasTech Pro'
      }
    },
    {
      id: 2,
      name: 'Luna',
      owner: 'João Santos',
      breed: 'Persa',
      age: 2,
      status: 'alert',
      location: { lat: -23.5489, lng: -46.6388, address: 'Parque Ibirapuera' },
      vitals: {
        heartRate: 140,
        temperature: 39.1,
        activity: 'Baixa',
        steps: 1200
      },
      lastUpdate: new Date(Date.now() - 300000), // 5 min atrás
      collar: {
        battery: 45,
        connected: true,
        model: 'PatinhasTech Lite'
      }
    },
    {
      id: 3,
      name: 'Buddy',
      owner: 'Ana Costa',
      breed: 'Labrador',
      age: 5,
      status: 'normal',
      location: { lat: -23.5525, lng: -46.6355, address: 'Casa - Vila Madalena' },
      vitals: {
        heartRate: 92,
        temperature: 38.5,
        activity: 'Média',
        steps: 5680
      },
      lastUpdate: new Date(Date.now() - 60000), // 1 min atrás
      collar: {
        battery: 92,
        connected: true,
        model: 'PatinhasTech Pro'
      }
    }
  ]);

  const [selectedPet, setSelectedPet] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simular atualizações em tempo real
    const interval = setInterval(() => {
      setPets(prevPets => 
        prevPets.map(pet => ({
          ...pet,
          vitals: {
            ...pet.vitals,
            heartRate: pet.vitals.heartRate + Math.floor(Math.random() * 10 - 5),
            steps: pet.vitals.steps + Math.floor(Math.random() * 50)
          },
          lastUpdate: new Date()
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Verificar alertas
    const newAlerts = [];
    pets.forEach(pet => {
      if (pet.vitals.heartRate > 120) {
        newAlerts.push({
          id: `hr-${pet.id}`,
          petName: pet.name,
          type: 'warning',
          message: 'Frequência cardíaca elevada',
          value: `${pet.vitals.heartRate} bpm`
        });
      }
      if (pet.collar.battery < 20) {
        newAlerts.push({
          id: `bat-${pet.id}`,
          petName: pet.name,
          type: 'info',
          message: 'Bateria da coleira baixa',
          value: `${pet.collar.battery}%`
        });
      }
      if (pet.vitals.activity === 'Baixa' && pet.vitals.steps < 2000) {
        newAlerts.push({
          id: `act-${pet.id}`,
          petName: pet.name,
          type: 'warning',
          message: 'Atividade muito baixa hoje',
          value: `${pet.vitals.steps} passos`
        });
      }
    });
    setAlerts(newAlerts);
  }, [pets]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'alert': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityColor = (activity) => {
    switch (activity) {
      case 'Alta': return 'text-green-600';
      case 'Média': return 'text-yellow-600';
      case 'Baixa': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen p-6" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="rounded-2xl p-8 mb-8" style={{
          background: '#ffffff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <span className="text-4xl">🐾</span>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Monitoramento de Pets em Tempo Real</span>
          </h1>
          <p className="text-gray-600">Sistema PatinhasTech - Coleiras Inteligentes</p>
          <div className="flex gap-4 mt-4">
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-green-800 font-medium">✅ {pets.filter(p => p.status === 'normal').length} Normais</span>
            </div>
            <div className="bg-red-100 px-4 py-2 rounded-lg">
              <span className="text-red-800 font-medium">⚠️ {pets.filter(p => p.status === 'alert').length} Alertas</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <span className="text-blue-800 font-medium">📡 {pets.filter(p => p.collar.connected).length} Conectados</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Lista de Pets */}
          <div className="lg:col-span-2 space-y-4">
            {pets.map(pet => (
              <div key={pet.id} className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
                   style={{
                     background: 'rgba(255, 255, 255, 0.98)',
                     backdropFilter: 'blur(10px)',
                     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                     border: '1px solid rgba(226, 232, 240, 0.8)'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-8px)';
                     e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.2)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                   }}
                   onClick={() => setSelectedPet(pet)}>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style={{
                      background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                      border: '2px solid #d1d5db'
                    }}>
                      {pet.breed.includes('Gato') || pet.breed.includes('Persa') ? '🐱' : '🐕'}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                      <p className="text-gray-600">{pet.breed} • {pet.age} anos</p>
                      <p className="text-sm text-gray-500">Tutor: {pet.owner}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pet.status)}`}>
                    {pet.status === 'normal' ? '✅ Normal' : '⚠️ Alerta'}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-500">{pet.vitals.heartRate}</p>
                    <p className="text-xs text-gray-500">❤️ BPM</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-500">{pet.vitals.temperature}°</p>
                    <p className="text-xs text-gray-500">🌡️ Temp</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${getActivityColor(pet.vitals.activity)}`}>{pet.vitals.activity}</p>
                    <p className="text-xs text-gray-500">🏃 Atividade</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-500">{pet.vitals.steps.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">👣 Passos</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>📍 {pet.location.address}</span>
                  <span>🔋 {pet.collar.battery}%</span>
                  <span>🕐 {pet.lastUpdate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Painel de Alertas */}
          <div className="space-y-6">
            
            {/* Alertas Ativos */}
            <div className="rounded-2xl p-6" style={{
              background: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🚨</span>
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Alertas Ativos</span>
              </h2>
              <div className="space-y-3">
                {alerts.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">✅ Nenhum alerta ativo</p>
                ) : (
                  alerts.map(alert => (
                    <div key={alert.id} className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-yellow-800">{alert.petName}</p>
                          <p className="text-sm text-yellow-700">{alert.message}</p>
                          <p className="text-xs text-yellow-600">{alert.value}</p>
                        </div>
                        <button className="text-yellow-600 hover:text-yellow-800">
                          ⚠️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Estatísticas Gerais */}
            <div className="rounded-2xl p-6" style={{
              background: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Estatísticas</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                <StatItem label="Pets monitorados" value={pets.length} color="#8b5cf6" />
                <StatItem label="Média de passos/dia" value={Math.round(pets.reduce((sum, pet) => sum + pet.vitals.steps, 0) / pets.length).toLocaleString()} color="#10b981" />
                <StatItem label="Bateria média" value={`${Math.round(pets.reduce((sum, pet) => sum + pet.collar.battery, 0) / pets.length)}%`} color="#f59e0b" />
                <StatItem label="Conexão ativa" value="100%" color="#10b981" />
              </div>
              
              {/* Mini gráfico de atividade */}
              <div>
                <h3 className="font-bold text-gray-700 mb-3">📈 Atividade dos Pets</h3>
                <div className="flex items-end justify-between h-20 px-2">
                  {pets.map((pet) => (
                    <div key={pet.id} className="flex flex-col items-center gap-1">
                      <div 
                        className="w-8 rounded-t transition-all duration-500"
                        style={{
                          height: `${Math.max((pet.vitals.steps / 10000) * 100, 15)}%`,
                          background: pet.status === 'normal' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
                          minHeight: '15px'
                        }}
                      ></div>
                      <span className="text-xs font-medium">{pet.name}</span>
                      <span className="text-xs text-gray-500">{(pet.vitals.steps/1000).toFixed(1)}k</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">⚡ Ações Rápidas</h2>
              <div className="space-y-2">
                <button className="w-full py-3 rounded-xl text-white font-semibold transition-all duration-300" style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                }}>
                  📞 Contatar Tutores
                </button>
                <button className="w-full py-3 rounded-xl text-white font-semibold transition-all duration-300" style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)'
                }}>
                  📋 Gerar Relatório
                </button>
                <button className="w-full py-3 rounded-xl text-white font-semibold transition-all duration-300" style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                }}>
                  🔧 Configurações
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Detalhes do Pet */}
        {selectedPet && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl" style={{
                      background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                      border: '2px solid #d1d5db'
                    }}>
                      {selectedPet.breed.includes('Gato') || selectedPet.breed.includes('Persa') ? '🐱' : '🐕'}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{selectedPet.name}</h2>
                      <p className="text-gray-600">{selectedPet.breed} • {selectedPet.age} anos</p>
                      <p className="text-sm text-gray-500">Tutor: {selectedPet.owner}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPet(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">📊 Sinais Vitais</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                        <span>❤️ Frequência Cardíaca</span>
                        <span className="font-bold">{selectedPet.vitals.heartRate} BPM</span>
                      </div>
                      <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                        <span>🌡️ Temperatura</span>
                        <span className="font-bold">{selectedPet.vitals.temperature}°C</span>
                      </div>
                      <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                        <span>🏃 Atividade</span>
                        <span className={`font-bold ${getActivityColor(selectedPet.vitals.activity)}`}>
                          {selectedPet.vitals.activity}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                        <span>👣 Passos Hoje</span>
                        <span className="font-bold">{selectedPet.vitals.steps.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">📡 Coleira Inteligente</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span>📱 Modelo</span>
                        <span className="font-bold">{selectedPet.collar.model}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span>🔋 Bateria</span>
                        <span className="font-bold">{selectedPet.collar.battery}%</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span>📶 Conexão</span>
                        <span className="font-bold text-green-600">
                          {selectedPet.collar.connected ? '✅ Conectado' : '❌ Desconectado'}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span>📍 Localização</span>
                        <span className="font-bold text-sm">{selectedPet.location.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all">
                    📞 Contatar Tutor
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all">
                    📋 Ver Histórico
                  </button>
                  <button className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-all">
                    ⚙️ Configurar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Componente para itens de estatística
const StatItem = ({ label, value, color }) => (
  <div className="flex justify-between items-center p-3 rounded-lg" style={{
    background: `${color}15`,
    border: `1px solid ${color}30`
  }}>
    <span className="text-gray-700 font-medium">{label}:</span>
    <div className="flex items-center gap-2">
      <span className="font-bold text-gray-800">{value}</span>
      <div className="w-3 h-3 rounded-full" style={{ background: color }}></div>
    </div>
  </div>
);

export default PetTracker;