import { motion } from 'framer-motion';
import { Satellite, Brain, Database, Cpu, Target, Zap, Shield, Globe2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutPage = () => {
  const aiSteps = [
    {
      icon: Satellite,
      title: 'Satellite Data Ingestion',
      description: 'Collecting real-time observations from Earth observation satellites monitoring atmospheric composition and pollutant concentrations.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Database,
      title: 'Weather Data Fusion',
      description: 'Integrating meteorological parameters including temperature, humidity, wind patterns, and atmospheric pressure for comprehensive analysis.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Brain,
      title: 'AI Pattern Learning',
      description: 'Advanced machine learning models analyze historical patterns, identifying correlations between atmospheric conditions and pollution levels.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cpu,
      title: 'Future Forecasting',
      description: 'Neural networks process current conditions and learned patterns to predict NO₂ and O₃ concentrations for the next 48 hours.',
      color: 'from-pink-500 to-cyan-500',
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'High Accuracy',
      description: 'AI models trained on extensive historical data provide reliable 48-hour forecasts',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Continuous data updates ensure forecasts reflect the latest atmospheric conditions',
    },
    {
      icon: Shield,
      title: 'Scientific Credibility',
      description: 'Methodology based on established atmospheric science and validated prediction models',
    },
    {
      icon: Globe2,
      title: 'Pan-India Coverage',
      description: 'Forecasts available for major Indian cities with plans for nationwide expansion',
    },
  ];

  const technologies = [
    'Satellite Remote Sensing',
    'Deep Learning',
    'Time Series Analysis',
    'Atmospheric Modeling',
    'Weather Intelligence',
    'Data Fusion',
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="glass-card px-4 py-2 text-sm mb-6">
            <Satellite className="w-4 h-4 mr-2 text-primary inline" />
            Powered by Satellite & Weather Intelligence
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            How <span className="text-gradient">AirCastAI</span> Works
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining cutting-edge satellite technology, meteorological intelligence, and artificial
            intelligence to forecast air pollution levels with unprecedented accuracy.
          </p>
        </motion.div>

        {/* AI Process Steps */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              The AI <span className="text-gradient">Forecasting Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A four-stage pipeline that transforms raw satellite and weather data into accurate pollution forecasts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                    {/* Step number */}
                    <div className="absolute top-4 right-4 text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {index + 1}
                    </div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="relative flex-shrink-0">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity`}
                          />
                          <div className="relative bg-muted/50 p-4 rounded-xl">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Platform <span className="text-gradient">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for accuracy, reliability, and accessibility
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full text-center">
                    <CardContent className="p-6">
                      <div className="inline-block mb-4">
                        <div className="bg-primary/10 p-4 rounded-xl">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card neon-border">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl font-display">
                  Technologies <span className="text-gradient">Powering</span> AirCastAI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="glass px-4 py-2 text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Trust & Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                Research & Awareness Platform
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                This platform demonstrates AI-based air quality forecasting using satellite and
                meteorological intelligence for research, awareness, and decision support. Forecasts are
                generated using machine learning models and should be used as guidance alongside official
                air quality monitoring sources. This is a demonstration project showcasing the potential
                of AI and satellite technology in environmental monitoring.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
