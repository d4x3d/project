import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose Your Community',
    description: 'Decide which area best suits your interests and goals'
  },
  {
    number: '02',
    title: 'Join the WhatsApp Community',
    description: 'Click the button to join instantly and connect with others'
  },
  {
    number: '03',
    title: 'Engage and Thrive',
    description: 'Participate in discussions, access resources, and achieve your goals'
  }
];

export default function GetStartedSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to begin your journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 left-6 bg-brand-blue-600 text-white text-sm font-bold px-3 py-1 rounded">
                {step.number}
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <ArrowRight className="absolute right-4 bottom-4 h-5 w-5 text-brand-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}