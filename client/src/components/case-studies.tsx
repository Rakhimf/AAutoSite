import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Factory, Truck, Building } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      company: "Global Flooring Manufacturer",
      description:
        "Automated inventory management and production scheduling processes, reducing manual workload by 80% and improving accuracy to 99.5%.",
      stats: [
        { value: "80%", label: "Time Saved", color: "text-brand-green" },
        { value: "99.5%", label: "Accuracy", color: "text-brand-blue" },
        { value: "6", label: "Months ROI", color: "text-brand-orange" },
      ],
      quote:
        "A Automation transformed our production planning. We now have real-time visibility and our team can focus on strategic initiatives.",
      color: "brand-blue",
    },
    {
      icon: Truck,
      title: "Supply Chain Optimization",
      company: "International Logistics Provider",
      description:
        "Streamlined order processing and shipment tracking across multiple systems, reducing processing time from hours to minutes.",
      stats: [
        { value: "90%", label: "Faster Processing", color: "text-brand-green" },
        { value: "24/7", label: "Operation", color: "text-brand-blue" },
        { value: "£250K", label: "Annual Savings", color: "text-brand-orange" },
      ],
      quote:
        "Our customers now receive instant updates and our operations team has complete visibility across the supply chain.",
      color: "brand-green",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across industries achieve remarkable
            results through intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-${study.color} bg-opacity-10 rounded-lg flex items-center justify-center mr-4`}>
                    <study.icon className={`text-${study.color} text-xl`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600">{study.company}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-6">{study.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className={`border-l-4 border-${study.color} pl-4 italic text-gray-600`}>
                  "{study.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
