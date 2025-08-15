import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Link } from "wouter";
import { Calculator, TrendingUp, Clock, DollarSign, Users, Building, ArrowRight, Download, BarChart3, PieChart, CheckCircle } from "lucide-react";

interface CalculatorInputs {
  companySize: string;
  industry: string;
  processesCount: number;
  employeesPerProcess: number;
  hoursPerDay: number;
  costPerHour: number;
  automationPercentage: number;
  implementationCost: number;
  maintenanceCost: number;
  licenseCount: number;
}

interface ROIResults {
  currentAnnualCost: number;
  automatedAnnualCost: number;
  annualSavings: number;
  threeYearSavings: number;
  roiPercentage: number;
  paybackPeriod: number;
  netPresentValue: number;
  productivityGain: number;
  timesSaved: number;
  breakEvenMonth: number;
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    companySize: "",
    industry: "",
    processesCount: 5,
    employeesPerProcess: 2,
    hoursPerDay: 4,
    costPerHour: 25,
    automationPercentage: 80,
    implementationCost: 50000,
    maintenanceCost: 10000,
    licenseCount: 3
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCalculating, setIsCalculating] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const companySizes = [
    { value: "startup", label: "Startup (1-50 employees)" },
    { value: "small", label: "Small Business (51-200 employees)" },
    { value: "medium", label: "Medium Business (201-1000 employees)" },
    { value: "large", label: "Large Enterprise (1000+ employees)" }
  ];

  const industries = [
    { value: "financial", label: "Financial Services" },
    { value: "healthcare", label: "Healthcare" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "insurance", label: "Insurance" },
    { value: "logistics", label: "Logistics & Supply Chain" },
    { value: "telecom", label: "Telecommunications" },
    { value: "government", label: "Government & Public Sector" },
    { value: "education", label: "Education" },
    { value: "other", label: "Other" }
  ];

  const validateInputs = (): string[] => {
    const errors: string[] = [];
    
    if (!inputs.companySize) errors.push("Please select your company size");
    if (!inputs.industry) errors.push("Please select your industry");
    if (inputs.processesCount <= 0) errors.push("Number of processes must be greater than 0");
    if (inputs.employeesPerProcess <= 0) errors.push("Employees per process must be greater than 0");
    if (inputs.hoursPerDay <= 0) errors.push("Hours per day must be greater than 0");
    if (inputs.costPerHour < 10) errors.push("Cost per hour seems too low (minimum £10)");
    if (inputs.automationPercentage < 10 || inputs.automationPercentage > 100) errors.push("Automation percentage must be between 10% and 100%");
    if (inputs.implementationCost < 5000) errors.push("Implementation cost seems too low for RPA project");
    if (inputs.licenseCount <= 0) errors.push("Number of licenses must be at least 1");
    
    return errors;
  };

  const calculateROI = () => {
    setIsCalculating(true);
    const errors = validateInputs();
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      setIsCalculating(false);
      return;
    }
    
    setValidationErrors([]);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const workingDaysPerYear = 250;
    const discountRate = 0.08; // 8% discount rate for NPV calculation

    // Current costs
    const dailyCostPerProcess = inputs.employeesPerProcess * inputs.hoursPerDay * inputs.costPerHour;
    const annualCostPerProcess = dailyCostPerProcess * workingDaysPerYear;
    const currentAnnualCost = annualCostPerProcess * inputs.processesCount;

    // Automated costs
    const automationSavingsPerProcess = annualCostPerProcess * (inputs.automationPercentage / 100);
    const totalAutomationSavings = automationSavingsPerProcess * inputs.processesCount;
    const annualLicenseCost = inputs.licenseCount * 12000; // Average annual license cost
    const automatedAnnualCost = currentAnnualCost - totalAutomationSavings + annualLicenseCost + inputs.maintenanceCost;

    // Calculations
    const annualSavings = currentAnnualCost - automatedAnnualCost;
    const threeYearSavings = (annualSavings * 3) - inputs.implementationCost;
    const totalInvestment = inputs.implementationCost + inputs.maintenanceCost;
    const roiPercentage = ((annualSavings * 3 - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = inputs.implementationCost / annualSavings;
    
    // NPV calculation (3 years)
    let npv = -inputs.implementationCost;
    for (let year = 1; year <= 3; year++) {
      npv += (annualSavings - inputs.maintenanceCost) / Math.pow(1 + discountRate, year);
    }

    const productivityGain = (inputs.automationPercentage / 100) * inputs.processesCount * inputs.employeesPerProcess;
    const dailyTimeSaved = inputs.processesCount * inputs.hoursPerDay * (inputs.automationPercentage / 100);
    const timesSaved = dailyTimeSaved * workingDaysPerYear;
    const breakEvenMonth = Math.ceil(paybackPeriod * 12);

    const calculatedResults: ROIResults = {
      currentAnnualCost,
      automatedAnnualCost,
      annualSavings,
      threeYearSavings,
      roiPercentage,
      paybackPeriod,
      netPresentValue: npv,
      productivityGain,
      timesSaved,
      breakEvenMonth
    };

    setResults(calculatedResults);
    setShowResults(true);
    setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-GB').format(Math.round(num));
  };

  const updateInput = (key: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [key]: value
    }));
    
    // Clear validation errors when inputs change
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const resetCalculator = () => {
    setInputs({
      companySize: "",
      industry: "",
      processesCount: 5,
      employeesPerProcess: 2,
      hoursPerDay: 4,
      costPerHour: 25,
      automationPercentage: 80,
      implementationCost: 50000,
      maintenanceCost: 10000,
      licenseCount: 3
    });
    setResults(null);
    setShowResults(false);
    setValidationErrors([]);
    setIsCalculating(false);
  };

  // Pre-populate defaults based on company size
  const handleCompanySizeChange = (size: string) => {
    updateInput('companySize', size);
    
    // Auto-adjust defaults based on company size
    switch(size) {
      case 'startup':
        updateInput('processesCount', 3);
        updateInput('employeesPerProcess', 1);
        updateInput('implementationCost', 25000);
        updateInput('licenseCount', 2);
        break;
      case 'small':
        updateInput('processesCount', 5);
        updateInput('employeesPerProcess', 2);
        updateInput('implementationCost', 50000);
        updateInput('licenseCount', 3);
        break;
      case 'medium':
        updateInput('processesCount', 8);
        updateInput('employeesPerProcess', 3);
        updateInput('implementationCost', 100000);
        updateInput('licenseCount', 5);
        break;
      case 'large':
        updateInput('processesCount', 15);
        updateInput('employeesPerProcess', 5);
        updateInput('implementationCost', 200000);
        updateInput('licenseCount', 10);
        break;
    }
  };

  const exportResults = () => {
    if (!results) return;
    
    const exportData = {
      companyInfo: {
        size: inputs.companySize,
        industry: inputs.industry
      },
      processDetails: {
        processesCount: inputs.processesCount,
        employeesPerProcess: inputs.employeesPerProcess,
        hoursPerDay: inputs.hoursPerDay,
        costPerHour: inputs.costPerHour,
        automationPercentage: inputs.automationPercentage
      },
      costs: {
        implementationCost: inputs.implementationCost,
        maintenanceCost: inputs.maintenanceCost,
        licenseCount: inputs.licenseCount
      },
      results: {
        annualSavings: formatCurrency(results.annualSavings),
        threeYearSavings: formatCurrency(results.threeYearSavings),
        roiPercentage: `${results.roiPercentage.toFixed(1)}%`,
        paybackPeriod: `${results.paybackPeriod.toFixed(1)} years`,
        breakEvenMonth: `${results.breakEvenMonth} months`,
        timesSaved: `${formatNumber(results.timesSaved)} hours/year`
      }
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rpa-roi-analysis.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.4%22%3E%3Cpath opacity=%22.5%22 d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-gentle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                RPA ROI Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Calculate the return on investment for your robotic process automation initiative. 
                Get instant insights into cost savings, payback period, and productivity gains.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Free Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Industry-Specific</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Instant Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Export Report</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="animate-slideInRight">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4 bg-gradient-to-br from-brand-blue to-blue-600 text-white">
                  <CardContent className="p-0">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">300%+</div>
                    <div className="text-sm opacity-90">Average ROI</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-gradient-to-br from-brand-green to-green-600 text-white">
                  <CardContent className="p-0">
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">12</div>
                    <div className="text-sm opacity-90">Month Payback</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-gradient-to-br from-brand-orange to-orange-600 text-white">
                  <CardContent className="p-0">
                    <DollarSign className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">£200k+</div>
                    <div className="text-sm opacity-90">Annual Savings</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-0">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">80%</div>
                    <div className="text-sm opacity-90">Time Reduction</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-brand-blue" />
                  Calculate Your ROI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select value={inputs.companySize} onValueChange={handleCompanySizeChange}>
                        <SelectTrigger data-testid="select-company-size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={inputs.industry} onValueChange={(value) => updateInput('industry', value)}>
                        <SelectTrigger data-testid="select-industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.value} value={industry.value}>{industry.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Process Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Process Details</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="processesCount">Number of Processes</Label>
                      <Input
                        id="processesCount"
                        type="number"
                        min="1"
                        value={inputs.processesCount}
                        onChange={(e) => updateInput('processesCount', parseInt(e.target.value) || 0)}
                        data-testid="input-processes-count"
                      />
                    </div>

                    <div>
                      <Label htmlFor="employeesPerProcess">Employees per Process</Label>
                      <Input
                        id="employeesPerProcess"
                        type="number"
                        min="1"
                        value={inputs.employeesPerProcess}
                        onChange={(e) => updateInput('employeesPerProcess', parseInt(e.target.value) || 0)}
                        data-testid="input-employees-per-process"
                      />
                    </div>

                    <div>
                      <Label htmlFor="hoursPerDay">Hours per Day (per process)</Label>
                      <Input
                        id="hoursPerDay"
                        type="number"
                        min="0.5"
                        step="0.5"
                        value={inputs.hoursPerDay}
                        onChange={(e) => updateInput('hoursPerDay', parseFloat(e.target.value) || 0)}
                        data-testid="input-hours-per-day"
                      />
                    </div>

                    <div>
                      <Label htmlFor="costPerHour">Cost per Hour (£)</Label>
                      <Input
                        id="costPerHour"
                        type="number"
                        min="10"
                        value={inputs.costPerHour}
                        onChange={(e) => updateInput('costPerHour', parseInt(e.target.value) || 0)}
                        data-testid="input-cost-per-hour"
                      />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="automationPercentage">
                        Automation Percentage: 
                        <span className={`ml-1 font-bold ${inputs.automationPercentage >= 80 ? 'text-green-600' : inputs.automationPercentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {inputs.automationPercentage}%
                        </span>
                      </Label>
                      <div className="mt-2">
                        <Slider
                          value={[inputs.automationPercentage]}
                          onValueChange={(value) => updateInput('automationPercentage', value[0])}
                          max={100}
                          min={10}
                          step={5}
                          className="mb-2"
                          data-testid="slider-automation"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>10% (Low)</span>
                          <span>50% (Medium)</span>
                          <span>100% (Full)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Implementation Costs */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Implementation Costs</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="implementationCost">Implementation Cost (£)</Label>
                      <Input
                        id="implementationCost"
                        type="number"
                        min="10000"
                        value={inputs.implementationCost}
                        onChange={(e) => updateInput('implementationCost', parseInt(e.target.value) || 0)}
                        data-testid="input-implementation-cost"
                      />
                    </div>

                    <div>
                      <Label htmlFor="maintenanceCost">Annual Maintenance (£)</Label>
                      <Input
                        id="maintenanceCost"
                        type="number"
                        min="1000"
                        value={inputs.maintenanceCost}
                        onChange={(e) => updateInput('maintenanceCost', parseInt(e.target.value) || 0)}
                        data-testid="input-maintenance-cost"
                      />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="licenseCount">Number of UiPath Licenses</Label>
                      <Input
                        id="licenseCount"
                        type="number"
                        min="1"
                        value={inputs.licenseCount}
                        onChange={(e) => updateInput('licenseCount', parseInt(e.target.value) || 0)}
                        data-testid="input-license-count"
                      />
                    </div>
                  </div>
                </div>

                {/* Validation Errors */}
                {validationErrors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Please fix the following issues:</h4>
                    <ul className="space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index} className="text-sm text-red-700">• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={calculateROI} 
                    className="flex-1 bg-brand-blue hover:bg-blue-700"
                    data-testid="button-calculate"
                    disabled={isCalculating}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    {isCalculating ? 'Calculating...' : 'Calculate ROI'}
                  </Button>
                  <Button 
                    onClick={resetCalculator} 
                    variant="outline"
                    data-testid="button-reset"
                    disabled={isCalculating}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Loading State */}
            {isCalculating && (
              <div className="flex items-center justify-center p-12 animate-fadeInUp">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto mb-4"></div>
                  <p className="text-gray-600">Calculating your ROI analysis...</p>
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && results && !isCalculating && (
              <div className="space-y-6 animate-fadeInUp">
                <Card className="border-brand-green">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-brand-green" />
                        ROI Analysis Results
                      </div>
                      <Badge className="bg-brand-green">
                        {results.roiPercentage > 200 ? "Excellent" : results.roiPercentage > 100 ? "Good" : "Consider"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-brand-blue to-blue-600 rounded-lg text-white">
                        <div className="text-2xl font-bold mb-1">{formatCurrency(results.annualSavings)}</div>
                        <div className="text-sm opacity-90">Annual Savings</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-brand-green to-green-600 rounded-lg text-white">
                        <div className="text-2xl font-bold mb-1">{results.roiPercentage.toFixed(1)}%</div>
                        <div className="text-sm opacity-90">3-Year ROI</div>
                      </div>
                    </div>

                    {/* Detailed Results */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Current Annual Cost:</span>
                        <span className="font-semibold text-red-600">{formatCurrency(results.currentAnnualCost)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Automated Annual Cost:</span>
                        <span className="font-semibold text-blue-600">{formatCurrency(results.automatedAnnualCost)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">3-Year Total Savings:</span>
                        <span className="font-semibold text-brand-green">{formatCurrency(results.threeYearSavings)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Payback Period:</span>
                        <span className="font-semibold">{results.paybackPeriod.toFixed(1)} years</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Break-Even Point:</span>
                        <span className="font-semibold">{results.breakEvenMonth} months</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Time Saved Annually:</span>
                        <span className="font-semibold">{formatNumber(results.timesSaved)} hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Net Present Value:</span>
                        <span className="font-semibold text-brand-green">{formatCurrency(results.netPresentValue)}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        onClick={exportResults} 
                        variant="outline" 
                        className="flex-1"
                        data-testid="button-export"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                      </Button>
                      <Link href="/contact">
                        <Button className="flex-1 bg-brand-green hover:bg-green-600">
                          <Users className="w-4 h-4 mr-2" />
                          Get Consultation
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Summary Card */}
                <Card className="bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Summary</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Your investment will pay for itself in</span>
                        <Badge variant="outline" className="text-brand-blue border-brand-blue">
                          {results.breakEvenMonth} months
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">After 3 years, you will have saved</span>
                        <Badge className="bg-brand-green">
                          {formatCurrency(results.threeYearSavings)}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Your return on investment is</span>
                        <Badge className="bg-brand-blue">
                          {results.roiPercentage.toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our RPA experts are ready to help you achieve these results. Get a free consultation to discuss your automation strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}