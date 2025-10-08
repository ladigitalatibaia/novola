import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  MapPin, 
  Clock, 
  Mail,
  Smartphone,
  Wrench,
  Zap,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import laboratorioImg from './assets/laboratorio.jpg'
import bancadaImg from './assets/bancada.jpg'
import tecnicoImg from './assets/tecnico.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Análise Completa",
      description: "Utilizamos tecnologia de ponta para um diagnóstico preciso, identificando a causa raiz de qualquer instabilidade no seu aparelho."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Manutenção Especializada",
      description: "Nossas soluções são realizadas com componentes de alta qualidade, garantindo a durabilidade e a performance que você espera."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Otimização de Performance",
      description: "Deixe seu dispositivo mais rápido e responsivo. Removemos a lentidão para que você aproveite todo o potencial do seu aparelho."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Atualização e Segurança",
      description: "Mantenha seu sistema seguro e atualizado com as últimas melhorias, protegendo seus dados e garantindo a estabilidade."
    }
  ]

  const differentials = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Técnicos Qualificados",
      description: "Nossa equipe é altamente capacitada e atualizada com as últimas tecnologias de reparo."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Tecnologia de Ponta",
      description: "Investimos em equipamentos modernos para diagnósticos precisos e reparos eficientes."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Atendimento Ágil",
      description: "Serviço rápido, com comunicação clara e honesta em todas as etapas."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Garantia de Qualidade",
      description: "Utilizamos peças de alta qualidade e oferecemos garantia em todos os nossos serviços."
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Excelente atendimento! Meu celular ficou como novo após o reparo. Recomendo a todos!",
      rating: 5
    },
    {
      name: "Maria Santos",
      text: "Profissionais muito competentes. Resolveram o problema do meu smartphone rapidamente.",
      rating: 5
    },
    {
      name: "João Oliveira",
      text: "Preço justo e serviço de qualidade. Já indiquei para vários amigos.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-2 text-sm border-b">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>(11) 98083-3734</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>WhatsApp</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram className="w-4 h-4 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Facebook className="w-4 h-4 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              Digital LA
              <span className="text-sm text-gray-500 block">Atibaia - SP</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('servicos')} className="hover:text-blue-600 transition-colors">Nossos Serviços</button>
              <button onClick={() => scrollToSection('seminovos')} className="hover:text-blue-600 transition-colors">Seminovos</button>
              <button onClick={() => scrollToSection('depoimentos')} className="hover:text-blue-600 transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-blue-600 transition-colors">Contato</button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => window.open('https://wa.me/5511980833734', '_blank')}
                className="hidden md:flex bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => scrollToSection('servicos')} className="text-left hover:text-blue-600 transition-colors">Nossos Serviços</button>
                <button onClick={() => scrollToSection('seminovos')} className="text-left hover:text-blue-600 transition-colors">Seminovos</button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-left hover:text-blue-600 transition-colors">Depoimentos</button>
                <button onClick={() => scrollToSection('contato')} className="text-left hover:text-blue-600 transition-colors">Contato</button>
                <Button 
                  onClick={() => window.open('https://wa.me/5511980833734', '_blank')}
                  className="bg-green-600 hover:bg-green-700 w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale Conosco
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Soluções Inteligentes para Seus Dispositivos
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Análise técnica precisa, manutenção especializada e dispositivos seminovos com garantia. 
                Cuidamos da saúde do seu aparelho com a agilidade e a qualidade que você merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511980833734', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicite seu Orçamento Gratuito
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('servicos')}
                  className="text-lg px-8 py-3"
                >
                  Conheça Nossos Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">(11) 98083-3734</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src={laboratorioImg} 
                alt="Laboratório Digital LA" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Atendimento Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Cuidados Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos a solução ideal para manter seu dispositivo sempre em perfeito funcionamento, 
              com agilidade e transparência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={bancadaImg} 
                alt="Bancada de trabalho" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tecnologia de Ponta e Expertise Comprovada
              </h3>
              <p className="text-gray-600 mb-6">
                Investimos constantemente em equipamentos modernos e inovadores, cuja alta tecnologia 
                proporciona reparos perfeitos e a qualidade desejada pelo cliente. Nossa equipe 
                especializada garante que cada serviço seja executado com a máxima precisão.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {differentials.map((diff, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {diff.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900">{diff.title}</h4>
                      <p className="text-sm text-gray-600">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seminovos Section */}
      <section id="seminovos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dispositivos Seminovos com Garantia
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Procurando um novo aparelho com preço justo e total confiança? Nossa curadoria de 
                dispositivos seminovos passa por uma revisão técnica completa de mais de 30 itens, 
                garantindo a performance e a qualidade de um produto novo para você.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>Revisão completa de mais de 30 itens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>Garantia de 3 meses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>Preços competitivos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>Qualidade garantida</span>
                </div>
              </div>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5511980833734', '_blank')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Ver Catálogo de Seminovos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div>
              <img 
                src={tecnicoImg} 
                alt="Técnico trabalhando" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              A satisfação dos nossos clientes é a nossa maior recompensa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              ⭐ Avaliação 5.0 no Google
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fale com um Especialista Agora
            </h2>
            <p className="text-xl text-gray-600">
              Estamos prontos para te ajudar. Escolha o melhor canal para você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Atibaia - SP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 98083-3734</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">Atendimento rápido e direto</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Entre em Contato</CardTitle>
                  <CardDescription>
                    Envie sua mensagem e entraremos em contato o mais breve possível.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Descreva seu problema ou dúvida"
                    ></textarea>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('https://wa.me/5511980833734', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Digital LA</h3>
              <p className="text-gray-300 mb-4">
                Soluções inteligentes para seus dispositivos em Atibaia.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Análise Completa</li>
                <li>Manutenção Especializada</li>
                <li>Otimização de Performance</li>
                <li>Atualização e Segurança</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-400">Home</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-blue-400">Serviços</button></li>
                <li><button onClick={() => scrollToSection('seminovos')} className="hover:text-blue-400">Seminovos</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-blue-400">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 98083-3734</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Atibaia - SP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Digital LA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => window.open('https://wa.me/5511980833734', '_blank')}
          className="bg-green-600 hover:bg-green-700 rounded-full w-16 h-16 shadow-lg animate-bounce"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}

export default App
