import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Cloud, Wind, Droplets, ThermometerSun, AlertTriangle, TrendingUp, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ForecastingPage = () => {
  const [selectedCity, setSelectedCity] = useState('delhi');
  const [selectedPollutant, setSelectedPollutant] = useState('no2');

  // Mock data for 48-hour forecast
  const forecastData = [
    { time: '00:00', no2: 45, o3: 35, aqi: 68, temp: 18, humidity: 65 },
    { time: '03:00', no2: 42, o3: 32, aqi: 65, temp: 17, humidity: 68 },
    { time: '06:00', no2: 48, o3: 38, aqi: 72, temp: 16, humidity: 72 },
    { time: '09:00', no2: 55, o3: 42, aqi: 78, temp: 22, humidity: 58 },
    { time: '12:00', no2: 62, o3: 48, aqi: 85, temp: 28, humidity: 45 },
    { time: '15:00', no2: 68, o3: 52, aqi: 92, temp: 31, humidity: 38 },
    { time: '18:00', no2: 72, o3: 55, aqi: 98, temp: 27, humidity: 42 },
    { time: '21:00', no2: 65, o3: 48, aqi: 88, temp: 23, humidity: 52 },
    { time: '24:00', no2: 52, o3: 40, aqi: 75, temp: 20, humidity: 60 },
    { time: '27:00', no2: 48, o3: 36, aqi: 70, temp: 18, humidity: 65 },
    { time: '30:00', no2: 50, o3: 38, aqi: 72, temp: 17, humidity: 68 },
    { time: '33:00', no2: 58, o3: 44, aqi: 80, temp: 23, humidity: 55 },
    { time: '36:00', no2: 65, o3: 50, aqi: 88, temp: 29, humidity: 42 },
    { time: '39:00', no2: 70, o3: 54, aqi: 95, temp: 32, humidity: 36 },
    { time: '42:00', no2: 66, o3: 51, aqi: 90, temp: 28, humidity: 40 },
    { time: '45:00', no2: 58, o3: 45, aqi: 82, temp: 24, humidity: 48 },
    { time: '48:00', no2: 50, o3: 38, aqi: 72, temp: 21, humidity: 58 },
  ];

  // Weekly pattern data
  const weeklyData = [
    { day: 'Mon', avg: 65, peak: 85 },
    { day: 'Tue', avg: 68, peak: 88 },
    { day: 'Wed', avg: 72, peak: 92 },
    { day: 'Thu', avg: 70, peak: 90 },
    { day: 'Fri', avg: 75, peak: 95 },
    { day: 'Sat', avg: 62, peak: 78 },
    { day: 'Sun', avg: 58, peak: 72 },
  ];

  const cities = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
  ];

  const getAQILevel = (aqi) => {
    if (aqi <= 50) return { label: 'Good', color: 'text-chart-1', bg: 'bg-chart-1/10' };
    if (aqi <= 100) return { label: 'Moderate', color: 'text-chart-2', bg: 'bg-chart-2/10' };
    if (aqi <= 150) return { label: 'Unhealthy', color: 'text-chart-3', bg: 'bg-chart-3/10' };
    if (aqi <= 200) return { label: 'Very Unhealthy', color: 'text-chart-4', bg: 'bg-chart-4/10' };
    return { label: 'Hazardous', color: 'text-chart-5', bg: 'bg-chart-5/10' };
  };

  const currentAQI = forecastData[0].aqi;
  const aqiLevel = getAQILevel(currentAQI);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-4 border border-primary/20 shadow-lg">
          <p className="text-sm font-medium text-foreground mb-2">{payload[0].payload.time}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value} μg/m³
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-2">
                Air Quality <span className="text-gradient">Forecast</span>
              </h1>
              <p className="text-muted-foreground">48-hour pollution prediction using AI & satellite data</p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-[180px] glass-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  {cities.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Current Status Alert */}
          <Alert className="glass-card border-primary/30">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <AlertDescription className="text-foreground">
              Current AQI: <span className="font-bold">{currentAQI}</span> - {aqiLevel.label}. Sensitive groups should limit outdoor activities during peak hours (12 PM - 6 PM).
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Current Conditions Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <Card className="glass-card neon-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Cloud className="w-8 h-8 text-primary" />
                <Badge className={`${aqiLevel.bg} ${aqiLevel.color} border-none`}>{aqiLevel.label}</Badge>
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">{currentAQI}</div>
              <div className="text-sm text-muted-foreground">Air Quality Index</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">{forecastData[0].no2}</div>
              <div className="text-sm text-muted-foreground">NO₂ Level (μg/m³)</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <ThermometerSun className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">{forecastData[0].temp}°C</div>
              <div className="text-sm text-muted-foreground">Temperature</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">{forecastData[0].humidity}%</div>
              <div className="text-sm text-muted-foreground">Humidity</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Forecast Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass-card mb-8">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-display">48-Hour Pollution Forecast</CardTitle>
                  <CardDescription>Predicted pollution levels for the next two days</CardDescription>
                </div>
                <Tabs value={selectedPollutant} onValueChange={setSelectedPollutant} className="w-auto">
                  <TabsList className="glass">
                    <TabsTrigger value="no2">NO₂</TabsTrigger>
                    <TabsTrigger value="o3">O₃</TabsTrigger>
                    <TabsTrigger value="both">Both</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient id="colorNo2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorO3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(195, 75%, 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(195, 75%, 50%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                  <XAxis
                    dataKey="time"
                    stroke="hsl(180, 8%, 65%)"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis
                    stroke="hsl(180, 8%, 65%)"
                    style={{ fontSize: '12px' }}
                    label={{ value: 'μg/m³', angle: -90, position: 'insideLeft', fill: 'hsl(180, 8%, 65%)' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  {(selectedPollutant === 'no2' || selectedPollutant === 'both') && (
                    <Area
                      type="monotone"
                      dataKey="no2"
                      stroke="hsl(175, 80%, 50%)"
                      strokeWidth={2}
                      fill="url(#colorNo2)"
                      name="NO₂"
                    />
                  )}
                  {(selectedPollutant === 'o3' || selectedPollutant === 'both') && (
                    <Area
                      type="monotone"
                      dataKey="o3"
                      stroke="hsl(195, 75%, 50%)"
                      strokeWidth={2}
                      fill="url(#colorO3)"
                      name="O₃"
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Secondary Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weekly Pattern */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-display">
                  <Calendar className="w-5 h-5 text-primary" />
                  Weekly Pattern
                </CardTitle>
                <CardDescription>Average pollution levels by day of week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                    <XAxis dataKey="day" stroke="hsl(180, 8%, 65%)" style={{ fontSize: '12px' }} />
                    <YAxis stroke="hsl(180, 8%, 65%)" style={{ fontSize: '12px' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="avg" stroke="hsl(175, 80%, 50%)" strokeWidth={2} name="Average" />
                    <Line type="monotone" dataKey="peak" stroke="hsl(30, 90%, 55%)" strokeWidth={2} strokeDasharray="5 5" name="Peak" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Health Advisory */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-display">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Health Advisory
                </CardTitle>
                <CardDescription>Recommendations based on current forecast</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Peak Pollution Hours</div>
                    <div className="text-sm text-muted-foreground">Expected between 12 PM - 6 PM today. Plan outdoor activities before or after.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Sensitive Groups</div>
                    <div className="text-sm text-muted-foreground">Children, elderly, and people with respiratory conditions should limit prolonged outdoor exposure.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <Wind className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Air Quality Improvement</div>
                    <div className="text-sm text-muted-foreground">Conditions expected to improve by evening due to favorable wind patterns.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForecastingPage;
