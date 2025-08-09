import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [showLocation, setShowLocation] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/ce2789fc-443f-48a7-bd1d-dc39b3e4385b.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="font-montserrat text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Свой лес
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Инвестиция в будущее свое и своих детей. Станьте собственником леса от 1 гектара
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-forest-green hover:bg-dark-forest text-white px-8 py-4 text-lg font-montserrat">
              Начать инвестировать
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark-forest px-8 py-4 text-lg font-montserrat">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* О проекте */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-dark-forest mb-6">
            О проекте
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Мы занимаемся высадкой деревьев на земле и её продажей. Это уникальная возможность 
            стать владельцем собственного леса и получить стабильный доход в долгосрочной перспективе.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <Button 
              onClick={() => setShowLocation(!showLocation)}
              variant="outline" 
              className="mx-auto flex items-center gap-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white"
            >
              <Icon name="MapPin" size={20} />
              {showLocation ? 'Скрыть локацию' : 'Показать локацию проекта'}
              <Icon name={showLocation ? "ChevronUp" : "ChevronDown"} size={16} />
            </Button>
            
            {showLocation && (
              <div className="bg-forest-green/5 rounded-2xl p-6 mt-4 border border-forest-green/20 animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Icon name="MapPin" size={24} className="text-forest-green" />
                  <h3 className="font-montserrat text-lg font-semibold text-dark-forest">
                    Локация проекта
                  </h3>
                </div>
                <p className="font-open-sans text-gray-700 text-center">
                  <strong>Урал, Пермский край</strong> — земли с благоприятными условиями для лесной отрасли. 
                  Богатые почвы, оптимальный климат и многовековые традиции лесоводства создают 
                  идеальные условия для выращивания качественной древесины.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Trees" size={32} className="text-forest-green" />
              </div>
              <CardTitle className="font-montserrat text-xl">600 деревьев</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open-sans text-gray-600">
                На каждом гектаре высаживается 600 качественных саженцев с гарантией приживаемости
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={32} className="text-forest-green" />
              </div>
              <CardTitle className="font-montserrat text-xl">Рост стоимости</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open-sans text-gray-600">
                Древесина растёт в цене каждый год, обеспечивая стабильный рост инвестиций
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" size={32} className="text-forest-green" />
              </div>
              <CardTitle className="font-montserrat text-xl">Надёжность</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-open-sans text-gray-600">
                Земля и лес - самые надёжные активы, защищённые от инфляции и экономических кризисов
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Преимущества */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="font-montserrat text-3xl font-bold text-dark-forest text-center mb-8">
            Почему выбирают нас?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-forest-green rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="Gift" size={24} className="text-white" />
              </div>
              <h4 className="font-montserrat font-semibold text-lg mb-2">Подарок</h4>
              <p className="font-open-sans text-gray-600 text-sm">
                Идеальный подарок для близких и будущих поколений
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-forest-green rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="DollarSign" size={24} className="text-white" />
              </div>
              <h4 className="font-montserrat font-semibold text-lg mb-2">Вложение</h4>
              <p className="font-open-sans text-gray-600 text-sm">
                Стабильная доходность и рост стоимости актива
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-forest-green rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="PiggyBank" size={24} className="text-white" />
              </div>
              <h4 className="font-montserrat font-semibold text-lg mb-2">Инвестиция</h4>
              <p className="font-open-sans text-gray-600 text-sm">
                Долгосрочное накопление капитала для семьи
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-forest-green rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <h4 className="font-montserrat font-semibold text-lg mb-2">Экология</h4>
              <p className="font-open-sans text-gray-600 text-sm">
                Вклад в сохранение природы и чистый воздух
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Инвестиционные пакеты */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-dark-forest mb-6">
              Инвестиционные пакеты
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий пакет инвестиций в лесные угодья. 
              От небольшого участка до крупных лесных владений.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Базовый пакет */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <Badge className="w-fit mx-auto mb-3 bg-forest-green text-white">
                  Популярный
                </Badge>
                <CardTitle className="font-montserrat text-2xl text-dark-forest">
                  Стартовый лес
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Идеально для начинающих инвесторов
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-forest-green mb-2">1 га</div>
                  <div className="text-sm text-gray-500">600 деревьев</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">600 саженцев хвойных пород</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Оформление документов</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Уход первые 3 года</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Страхование от пожаров</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-forest-green/10 rounded-lg p-4 mb-6 border-2 border-green-200">
                  <div className="text-base text-gray-800 mb-2">Прогноз через 20-25 лет:</div>
                  <div className="text-xl font-bold text-dark-forest mb-2">₽12,000,000</div>
                  <div className="text-lg font-bold text-green-600 bg-white px-3 py-1 rounded-full inline-block shadow-sm border border-green-200">+1100% прибыль</div>
                </div>

                <div className="mt-auto">
                  <Button className="w-full bg-forest-green hover:bg-dark-forest text-white font-montserrat py-4 text-lg">
                    Купить за ₽1,000,000
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Средний пакет */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-forest-green">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-green to-dark-forest"></div>
              <CardHeader className="text-center pb-4">
                <Badge className="w-fit mx-auto mb-3 bg-forest-brown text-white">
                  Рекомендуем
                </Badge>
                <CardTitle className="font-montserrat text-2xl text-dark-forest">
                  Семейный лес
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Оптимальный выбор для семьи
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-forest-green mb-2">5 га</div>
                  <div className="text-sm text-gray-500">3,000 деревьев</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">3,000 саженцев хвойных пород</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Смешанные породы деревьев</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Уход первые 5 лет</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Полное страхование</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Консультации специалиста</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-forest-green/10 rounded-lg p-4 mb-6 border-2 border-green-200">
                  <div className="text-base text-gray-800 mb-2">Прогноз через 20-25 лет:</div>
                  <div className="text-xl font-bold text-dark-forest mb-2">₽60,000,000</div>
                  <div className="text-lg font-bold text-green-600 bg-white px-3 py-1 rounded-full inline-block shadow-sm border border-green-200">+1100% прибыль</div>
                </div>

                <div className="mt-auto">
                  <Button className="w-full bg-forest-green hover:bg-dark-forest text-white font-montserrat py-4 text-lg">
                    Купить за ₽5,000,000
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Расширенный пакет */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <Badge className="w-fit mx-auto mb-3 bg-blue-600 text-white">
                  Оптимальный
                </Badge>
                <CardTitle className="font-montserrat text-2xl text-dark-forest">
                  Расширенный лес
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Увеличенный участок для роста
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-forest-green mb-2">10 га</div>
                  <div className="text-sm text-gray-500">6,000 деревьев</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">6,000 саженцев смешанных пород</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Хвойные и лиственные породы</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Полный уход 7 лет</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Расширенное страхование</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-forest-green mr-2 flex-shrink-0" />
                    <span className="font-open-sans">Регулярные отчёты</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-forest-green/10 rounded-lg p-4 mb-6 border-2 border-green-200">
                  <div className="text-base text-gray-800 mb-2">Прогноз через 20-25 лет:</div>
                  <div className="text-xl font-bold text-dark-forest mb-2">₽120,000,000</div>
                  <div className="text-lg font-bold text-green-600 bg-white px-3 py-1 rounded-full inline-block shadow-sm border border-green-200">+1100% прибыль</div>
                </div>

                <div className="mt-auto">
                  <Button className="w-full bg-forest-green hover:bg-dark-forest text-white font-montserrat py-4 text-lg">
                    Купить за ₽10,000,000
                  </Button>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-forest text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Начните инвестировать в лес уже сегодня
          </h2>
          <p className="font-open-sans text-xl mb-8 text-gray-200">
            Создайте наследство для своих детей и внуков. 
            Лес — это инвестиция, которая растёт вместе с деревьями.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-forest-green hover:bg-green-600 text-white px-8 py-4 text-lg font-montserrat">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark-forest px-8 py-4 text-lg font-montserrat">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;