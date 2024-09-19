import React, { useState } from 'react';

const Mindfulness = () => {
  const [ayurvedicFitnessData] = useState({
    title: "Ayurvedic Fitness Plan: Balancing Your Health with Ancient Wisdom",
    introduction: "Ayurveda, an ancient system of medicine from India, emphasizes balance in all aspects of life to achieve optimal health. Central to Ayurveda is the concept of doshas—three fundamental energies that govern physiological and psychological processes in the body. Understanding your dosha can help tailor fitness and dietary plans to promote balance and well-being.",
    doshas: [
      {
        type: "Vata",
        characteristics: "Vata is characterized by qualities such as dryness, coldness, and lightness. People with a dominant Vata dosha are typically energetic, creative, and quick-thinking but may also be prone to anxiety and irregular digestion.",
        fitnessRecommendations: "Gentle yoga, stretching, and grounding exercises to promote stability and warmth. Avoid overly vigorous or erratic workouts that may increase dryness.",
        diet: "Warm, moist, and oily foods like soups, stews, and avocados. Incorporate spices such as ginger and cinnamon to stimulate digestion and maintain warmth."
      },
      {
        type: "Pitta",
        characteristics: "Pitta is associated with heat, intensity, and transformation. Individuals with a dominant Pitta dosha are often ambitious, driven, and focused but may be prone to irritability and inflammation.",
        fitnessRecommendations: "Cooling exercises such as swimming, yoga with calming postures, and relaxation techniques. Avoid high-intensity workouts that may exacerbate heat.",
        diet: "Cooling and hydrating foods like cucumbers, melons, and leafy greens. Use cooling herbs such as cilantro and mint to balance internal heat."
      },
      {
        type: "Kapha",
        characteristics: "Kapha is characterized by stability, heaviness, and solidity. People with a dominant Kapha dosha are usually calm, loyal, and resilient but may struggle with lethargy and weight gain.",
        fitnessRecommendations: "High-intensity interval training (HIIT), cardio exercises, and strength training to stimulate circulation and reduce excess heaviness. Incorporate dynamic and challenging routines to invigorate the body.",
        diet: "Light and spicy foods like salads, soups with ginger and turmeric, and meals that stimulate digestion. Avoid heavy, oily foods that can increase Kapha."
      }
    ],
    creatingPlan: {
      title: "Creating Your Personalized Ayurvedic Fitness Plan",
      steps: [
        {
          step: "Identify Your Dosha",
          description: "Take an Ayurvedic quiz or consult with an Ayurvedic practitioner to determine your dominant dosha(s). This will help tailor your fitness plan to address your unique needs."
        },
        {
          step: "Design Your Workout Routine",
          description: "Choose exercises that align with your dosha's characteristics. For instance, a Vata type might benefit from calming yoga, while a Kapha type might thrive on more vigorous activities."
        },
        {
          step: "Plan Your Diet",
          description: "Incorporate foods and spices that balance your dosha. A balanced diet will support your fitness goals and enhance overall well-being."
        },
        {
          step: "Incorporate Ayurvedic Practices",
          description: "Include practices such as self-massage with warm oils, daily routines (Dinacharya), and mindful eating to complement your fitness plan."
        }
      ]
    },
    conclusion: "Integrating Ayurveda into your fitness plan can offer a holistic approach to health and well-being. By aligning your workouts and diet with your dosha type, you can achieve a balanced, personalized fitness regime that supports your physical and mental health. Embrace the wisdom of Ayurveda to create a sustainable and enriching fitness journey."
  });

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: '500px',
            backgroundImage: "url(' https://fazlaninaturesnest.com/wp-content/uploads/2024/01/Ayurveda-body-types-1.jpg ')",
          }}
          title="Ayurvedic Fitness Plan"
        ></div>
        <div className="max-w-full mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                {ayurvedicFitnessData.title}
              </h1>
              <p className="text-gray-700 text-base my-5">
                {ayurvedicFitnessData.introduction}
              </p>

              <h3 className="text-2xl font-bold my-5">The Three Doshas:</h3>
              {ayurvedicFitnessData.doshas.map((dosha, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{dosha.type}</h4>
                  <p><strong>Characteristics:</strong> {dosha.characteristics}</p>
                  <p><strong>Fitness Recommendations:</strong> {dosha.fitnessRecommendations}</p>
                  <p><strong>Diet:</strong> {dosha.diet}</p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">{ayurvedicFitnessData.creatingPlan.title}</h3>
              {ayurvedicFitnessData.creatingPlan.steps.map((step, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{step.step}</h4>
                  <p>{step.description}</p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Conclusion:</h3>
              <p>{ayurvedicFitnessData.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Mindfulness;
