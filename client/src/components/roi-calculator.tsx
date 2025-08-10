import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ROIData {
  hoursPerTask: number;
  tasksPerWeek: number;
  hourlyRate: number;
  errorRate: number;
}

interface ROIResults {
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  timesSaved: number;
}

export default function ROICalculator() {
  const [formData, setFormData] = useState<ROIData>({
    hoursPerTask: 2,
    tasksPerWeek: 50,
    hourlyRate: 25,
    errorRate: 5,
  });

  const [results, setResults] = useState<ROIResults>({
    annualSavings: 65000,
    roi: 300,
    paybackPeriod: 4,
    timesSaved: 100,
  });

  const { toast } = useToast();

  const saveCalculationMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/roi-calculation", data),
    onSuccess: () => {
      toast({
        title: "Calculation Saved",
        description: "Your ROI calculation has been saved successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save calculation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const calculateROI = () => {
    const { hoursPerTask, tasksPerWeek, hourlyRate, errorRate } = formData;
    
    // Calculate current costs
    const weeklyHours = hoursPerTask * tasksPerWeek;
    const annualHours = weeklyHours * 52;
    const annualCost = annualHours * hourlyRate;
    
    // Calculate automation benefits (assuming 80% automation efficiency)
    const automationEfficiency = 0.8;
    const errorReductionBenefit = 0.95; // 95% error reduction
    
    const laborSavings = annualCost * automationEfficiency;
    const errorCostSavings = annualCost * (errorRate / 100) * errorReductionBenefit;
    const totalAnnualSavings = laborSavings + errorCostSavings;
    
    // Assuming implementation cost of £20,000
    const implementationCost = 20000;
    const roiPercentage = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = Math.max(1, Math.round((implementationCost / totalAnnualSavings) * 12));
    const weeklyTimeSaved = weeklyHours * automationEfficiency;

    const newResults = {
      annualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(roiPercentage),
      paybackPeriod: paybackMonths,
      timesSaved: Math.round(weeklyTimeSaved),
    };

    setResults(newResults);

    // Save calculation to backend
    saveCalculationMutation.mutate({
      hoursPerTask: formData.hoursPerTask.toString(),
      tasksPerWeek: formData.tasksPerWeek.toString(),
      hourlyRate: formData.hourlyRate.toString(),
      errorRate: formData.errorRate.toString(),
      annualSavings: newResults.annualSavings.toString(),
      roi: newResults.roi.toString(),
      paybackPeriod: newResults.paybackPeriod.toString(),
      timesSaved: newResults.timesSaved.toString(),
    });
  };

  return (
    <section id="roi-calculator" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">RPA ROI Calculator</h2>
          <p className="text-xl text-gray-600">
            Calculate the potential return on investment for your automation project.
          </p>
        </div>

        <Card className="bg-gray-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Current Process Details
                </h3>

                <div>
                  <Label htmlFor="hoursPerTask">Hours per task</Label>
                  <Input
                    id="hoursPerTask"
                    type="number"
                    value={formData.hoursPerTask}
                    onChange={(e) =>
                      setFormData({ ...formData, hoursPerTask: Number(e.target.value) })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="tasksPerWeek">Tasks per week</Label>
                  <Input
                    id="tasksPerWeek"
                    type="number"
                    value={formData.tasksPerWeek}
                    onChange={(e) =>
                      setFormData({ ...formData, tasksPerWeek: Number(e.target.value) })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="hourlyRate">Hourly rate (£)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) =>
                      setFormData({ ...formData, hourlyRate: Number(e.target.value) })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="errorRate">Error rate (%)</Label>
                  <Input
                    id="errorRate"
                    type="number"
                    value={formData.errorRate}
                    onChange={(e) =>
                      setFormData({ ...formData, errorRate: Number(e.target.value) })
                    }
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full bg-brand-blue hover:bg-blue-700"
                  disabled={saveCalculationMutation.isPending}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate ROI
                </Button>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Projected Savings
                </h3>

                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-brand-green">
                          £{results.annualSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Annual Savings</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-brand-blue">
                          {results.roi}%
                        </div>
                        <div className="text-sm text-gray-600">ROI in Year 1</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-brand-orange">
                          {results.paybackPeriod}
                        </div>
                        <div className="text-sm text-gray-600">Payback (Months)</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-500">
                          {results.timesSaved}
                        </div>
                        <div className="text-sm text-gray-600">Hours Saved/Week</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-blue mb-2">
                    Additional Benefits
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-brand-green mr-2" />
                      95% reduction in errors
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-brand-green mr-2" />
                      24/7 processing capability
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-brand-green mr-2" />
                      Improved compliance
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-brand-green mr-2" />
                      Enhanced employee satisfaction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
