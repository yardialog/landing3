'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import {
  Rocket,
  Target,
  BarChart3,
  CheckCircle2,
  XCircle,
  Users,
  TrendingUp,
  Zap,
  Award,
  Briefcase,
  Calculator,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  HeartHandshake,
  FileText,
  Layout,
  Megaphone,
  PenTool,
  LineChart,
  UserPlus,
  Package,
} from 'lucide-react'

// Hero Section Component
function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-slate-200/30 to-slate-300/30 dark:from-slate-800/30 dark:to-slate-700/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">15 лет опыта • Бюджеты 20+ млн ₽</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
              Лендинг бесплатно
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              за 3 дня
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Платите только за результат — продвижение в Яндекс.Директ или ВК-таргет, 
            <br className="hidden sm:block" />
            <span className="font-semibold text-slate-800 dark:text-slate-200"> которое приводит клиентов</span>
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span className="text-sm sm:text-base">B2B-эксперт</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span className="text-sm sm:text-base">Data-driven подход</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <span className="text-sm sm:text-base">Под ключ</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Получить стратегию бесплатно
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              onClick={() => document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть тарифы
            </Button>
          </div>

          {/* Small text */}
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-6 animate-in fade-in duration-700 delay-500">
            Ответим в течение 2 часов • Без обязательств
          </p>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Получить бесплатную стратегию</DialogTitle>
            <DialogDescription>
              Оставьте заявку, и мы свяжемся с вами в течение 2 часов
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Разрабатываем стратегию',
      description: 'Анализируем вашу аудиторию, конкурентов, находим точки роста. Определяем оптимальные каналы привлечения клиентов.',
      icon: Target,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      number: '02',
      title: 'Создаём лендинг',
      description: 'Разрабатываем конверсионный сайт, заточенный под вашу целевую аудиторию и уникальное торговое предложение.',
      icon: Rocket,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      number: '03',
      title: 'Запускаем продвижение',
      description: 'Настраиваем рекламу в Яндекс.Директ или ВК-таргет, приводим целевых клиентов и оптимизируем конверсию.',
      icon: TrendingUp,
      color: 'from-blue-700 to-indigo-700',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Как это работает
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Три шага к новым клиентам
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Прозрачный процесс, понятные сроки, измеримый результат
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 z-0" />
              )}

              <Card className="relative z-10 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 group-hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-2">
                    Шаг {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparison Section
function ComparisonSection() {
  const features = [
    { old: 'Лендинг: 50-150 тыс. ₽', new: 'Лендинг: 0 ₽', highlight: true },
    { old: 'Реклама вслепую', new: 'Стратегия на основе данных' },
    { old: 'Нет гарантий результата', new: 'Оплата за результат' },
    { old: 'Долгий запуск (2-4 недели)', new: 'Запуск за 3 дня' },
    { old: 'Разные исполнители', new: 'Один эксперт под ключ' },
    { old: 'Непонятная отчётность', new: 'Прозрачные метрики и отчёты' },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Сравнение подходов
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Почему это выгодно?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Сравните обычный подход с нашей моделью работы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Old approach */}
            <Card className="border-2 border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/20">
              <CardHeader className="text-center border-b border-red-100 dark:border-red-900/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <CardTitle className="text-red-600 dark:text-red-400">Обычный подход</CardTitle>
                </div>
                <CardDescription className="text-red-600/70 dark:text-red-400/70">
                  Тратите больше, получаете меньше
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span>{feature.old}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* New approach */}
            <Card className="border-2 border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/20">
              <CardHeader className="text-center border-b border-blue-100 dark:border-blue-900/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Наш подход</CardTitle>
                </div>
                <CardDescription className="text-blue-600/70 dark:text-blue-400/70">
                  Платите за результат, а не за обещания
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className={`flex items-start gap-3 ${feature.highlight ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feature.new}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Highlight box */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl shadow-blue-500/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="w-8 h-8" />
              <span className="text-xl md:text-2xl font-bold">Экономия на старте: 50 000 - 150 000 ₽</span>
            </div>
            <p className="text-blue-100 text-lg">
              Вы платите только за продвижение, которое приносит клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Tariffs Section
function TariffsSection() {
  const tariffs = [
    {
      name: 'Старт',
      price: '45 000',
      period: '/мес',
      description: 'Для малого бизнеса и локальных услуг',
      features: [
        'Лендинг до 7 блоков',
        'Яндекс.Директ ИЛИ ВК-таргет',
        'Бюджет рекламы от 15 000 ₽/мес',
        'Минимальный договор: 3 месяца',
        'Отчётность раз в 2 недели',
        '1 A/B-тест в месяц',
      ],
      recommended: false,
      color: 'border-slate-200 dark:border-slate-700',
      buttonText: 'Выбрать',
    },
    {
      name: 'Рост',
      price: '75 000',
      period: '/мес',
      description: 'Для среднего бизнеса и B2B-услуг',
      features: [
        'Лендинг до 12 блоков + лид-магнит',
        'Яндекс.Директ + ВК-таргет',
        'Бюджет рекламы от 30 000 ₽/мес',
        'Минимальный договор: 3 месяца',
        'Еженедельная отчётность',
        '2 A/B-теста в месяц',
        'Ретаргетинг и look-alike',
      ],
      recommended: true,
      color: 'border-blue-500 dark:border-blue-400',
      buttonText: 'Рекомендуем',
    },
    {
      name: 'Масштаб',
      price: '120 000',
      period: '/мес',
      description: 'Для крупных B2B и сложных продуктов',
      features: [
        'Лендинг без ограничений + CRM',
        'Все каналы: Яндекс, ВК, Telegram',
        'Бюджет рекламы от 50 000 ₽/мес',
        'Минимальный договор: 4 месяца',
        'Еженедельные созвоны + отчёты',
        'Непрерывные A/B-тесты',
        'Email и мессенджер-воронки',
      ],
      recommended: false,
      color: 'border-slate-200 dark:border-slate-700',
      buttonText: 'Выбрать',
    },
  ]

  return (
    <section id="tariffs" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800">
            Тарифы
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Три варианта сотрудничества
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Выберите тариф под ваши задачи и бюджет. Лендинг включён во все тарифы.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tariffs.map((tariff, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border-2 ${tariff.color} ${tariff.recommended ? 'shadow-xl shadow-blue-500/10 scale-105 z-10' : 'shadow-lg'} transition-all duration-300 hover:-translate-y-1`}
            >
              {tariff.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">
                    Популярный выбор
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                <CardDescription className="text-base">{tariff.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl lg:text-5xl font-bold">{tariff.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-lg">{tariff.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {tariff.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="p-6 pt-0 mt-auto">
                <Button
                  className={`w-full ${tariff.recommended ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white' : ''}`}
                  variant={tariff.recommended ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {tariff.buttonText}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            Не уверены, какой тариф выбрать?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Получите бесплатную консультацию
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const stats = [
    { value: '15+', label: 'лет в маркетинге' },
    { value: '20+ млн', label: 'управляемые бюджеты' },
    { value: '100+', label: 'реализованных проектов' },
    { value: '3x', label: 'средний рост конверсии' },
  ]

  const expertise = [
    { icon: Briefcase, title: 'Сложные B2B-продукты', description: 'Работаю с длинными циклами сделки и высокими чеками' },
    { icon: Rocket, title: 'Запуск новых продуктов', description: 'Помогаю выходить на новые рынки и сегменты' },
    { icon: BarChart3, title: 'Data-driven подход', description: 'Все решения основаны на цифрах и аналитике' },
    { icon: Users, title: 'Работа с аудиторией', description: 'Глубокое понимание вашей ЦА и её потребностей' },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Обо мне
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Почему я?
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Expertise grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto">
              &laquo;Не продаю услуги — решаю бизнес-задачи. Если не могу помочь, скажу честно&raquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                М
              </div>
              <div className="text-left">
                <div className="font-semibold">247System.ru</div>
                <div className="text-slate-400 text-sm">Эксперт по B2B-маркетингу</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// What You Get Section
function WhatYouGetSection() {
  const items = [
    {
      icon: FileText,
      title: 'Маркетинговая стратегия',
      description: 'Под ваш бизнес и нишу',
    },
    {
      icon: Layout,
      title: 'Продающий лендинг',
      description: 'С высокой конверсией',
    },
    {
      icon: Megaphone,
      title: 'Настройка рекламы',
      description: 'Яндекс Директ / ВК Реклама',
    },
    {
      icon: PenTool,
      title: 'Тексты и офферы',
      description: 'Продающие заголовки',
    },
    {
      icon: LineChart,
      title: 'Аналитика',
      description: 'Отслеживание результатов',
    },
    {
      icon: UserPlus,
      title: 'Заявки',
      description: 'Уже в первую неделю',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Что вы получаете
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Полный комплект для привлечения клиентов
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Всё необходимое для запуска и масштабирования продаж
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-bl-full rounded-tr-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Готовы начать получать заявки?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить комплект бесплатно
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Cases Section
function CasesSection() {
  const cases = [
    {
      title: 'B2B-сервис автоматизации',
      industry: 'IT / SaaS',
      situation: 'Низкая конверсия сайта, высокая стоимость лида',
      solution: 'Новый лендинг + Яндекс.Директ + ретаргетинг',
      result: '+200%',
      resultText: 'рост заявок за 2 месяца',
    },
    {
      title: 'Производственное оборудование',
      industry: 'Промышленность',
      situation: 'Нет онлайн-заявок, только холодные звонки',
      solution: 'Лендинг с калькулятором + ВК-таргет',
      result: '85',
      resultText: 'заявок в месяц со средней ценой 12 000 ₽',
    },
    {
      title: 'Консалтинговая компания',
      industry: 'B2B-услуги',
      situation: 'Сложный продукт, длинный цикл сделки',
      solution: 'Воронка из 3-х лендингов + email-маркетинг',
      result: 'x3',
      resultText: 'увеличение конверсии в консультацию',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Кейсы
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Результаты в цифрах
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Реальные проекты с измеримыми результатами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              {/* Result banner */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
                <div className="text-4xl md:text-5xl font-bold mb-1">{caseItem.result}</div>
                <div className="text-blue-100 text-sm">{caseItem.resultText}</div>
              </div>

              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">{caseItem.industry}</Badge>
                <h3 className="font-bold text-lg mb-4">{caseItem.title}</h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">Было:</span>
                    <p className="text-slate-700 dark:text-slate-300">{caseItem.situation}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">Сделали:</span>
                    <p className="text-slate-700 dark:text-slate-300">{caseItem.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: 'В чём подвох? Почему лендинг бесплатно?',
      answer: 'Заинтересован в долгосрочном сотрудничестве. Лендинг — это входной билет к работе с вами. Зарабатываю на продвижении, которое приносит вам клиентов. Если не будет результата — вы не продлите договор, и я потеряю время. Поэтому мотивирован сделать всё качественно.',
    },
    {
      question: 'Что если лендинг не понравится?',
      answer: 'Переделываю до тех пор, пока не будет доволен. Условие одно: правки должны быть обоснованными с точки зрения маркетинга, а не просто «нравится/не нравится». Обычно хватает 1-2 итераций, так как исходно делаю на основе анализа вашей аудитории.',
    },
    {
      question: 'Почему минимум 3-4 месяца?',
      answer: 'Меньший срок не позволит получить ощутимый результат. Первый месяц уходит на запуск и тестирование гипотез. Второй-третий — на оптимизацию и масштабирование. Меньше — деньги на ветер, а мне важна репутация и результаты клиентов.',
    },
    {
      question: 'Подойдёт ли мне, если у меня сложный B2B-продукт?',
      answer: 'Да, это моя специализация. 15 лет работаю со сложными продуктами: IT, промышленность, консалтинг, финансовые услуги. Понимаю, как продавать длинные циклы сделки и высокие чеки.',
    },
    {
      question: 'Сколько нужно на рекламу дополнительно?',
      answer: 'Зависит от ниши и конкуренции. Минимум — от 15 000 ₽/мес для локальных услуг. Для B2B — от 30 000 ₽/мес. Точную сумму озвучу после анализа вашей ниши и конкурентов.',
    },
    {
      question: 'Какие гарантии результата?',
      answer: 'Гарантирую: профессиональный подход, прозрачную отчётность, постоянную оптимизацию. Конкретных цифр заранее не обещаю — это признак непрофессионализма. Но после тестового периода смогу прогнозировать на основе реальных данных.',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-slate-900 rounded-xl px-6 shadow-md border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Contact Form Component
function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: 'Заявка отправлена!',
      description: 'Свяжусь с вами в течение 2 часов',
    })

    setIsSubmitting(false)
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <Input
          placeholder="Ваше имя"
          required
          className="h-12"
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Телефон"
          required
          className="h-12"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          className="h-12"
        />
      </div>
      <div>
        <Input
          placeholder="Ссылка на текущий сайт (если есть)"
          className="h-12"
        />
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправляем...' : 'Получить стратегию бесплатно'}
      </Button>
      <p className="text-xs text-center text-slate-500">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-blue-400 border-blue-700 bg-blue-950/50">
              Начнём работу
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Узнайте, сколько клиентов вы упускаете
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Оставьте заявку, и я проведу бесплатный аудит вашего текущего маркетинга
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white dark:bg-slate-900">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>

          {/* Alternative contacts */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-slate-400">
            <a href="tel:+79273572345" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>+7 (927) 357-23-45</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@example.com</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#tariffs', label: 'Тарифы' },
    { href: '#about', label: 'Обо мне' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            247System.ru
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Оставить заявку
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & description */}
          <div>
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              247System.ru
            </div>
            <p className="text-sm">
              Лендинг бесплатно за 3 дня. Платите только за продвижение, которое приносит клиентов.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold text-white mb-4">Навигация</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Как это работает</a></li>
              <li><a href="#tariffs" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="font-semibold text-white mb-4">Контакты</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+7 (927) 357-23-45</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Telegram</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <HeroSection />
        <HowItWorksSection />
        <ComparisonSection />
        <TariffsSection />
        <AboutSection />
        <WhatYouGetSection />
        <CasesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
