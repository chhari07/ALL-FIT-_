import React, { useState } from 'react';

const GoodFood = () => {
  const [GoodFoodData] = useState({
    "title": "Nourishing Your Body: The Benefits of Healthy Eating",
    "focus": "Good food plays a crucial role in maintaining overall health and well-being. A balanced diet supports bodily functions, boosts energy levels, and improves mental clarity. Healthy eating involves incorporating a variety of nutrient-rich foods, managing portion sizes, and making informed choices to support long-term health. By prioritizing good food, individuals can enhance their quality of life and reduce the risk of chronic diseases.",
    "practiceType": [
      {
        "style": "Mediterranean Diet",
        "description": "The Mediterranean diet emphasizes whole grains, healthy fats, lean proteins, and plenty of fruits and vegetables. It includes foods like olive oil, nuts, seeds, and fish, with moderate wine consumption.",
        "benefits": "Supports heart health, reduces inflammation, and promotes longevity. It also helps in managing weight and preventing chronic diseases."
      },
      {
        "style": "Plant-Based Diet",
        "description": "A plant-based diet focuses on consuming plant foods such as fruits, vegetables, legumes, nuts, and seeds while minimizing animal products. It encourages the consumption of whole, unprocessed foods.",
        "benefits": "Reduces the risk of heart disease, diabetes, and certain cancers. It promotes weight loss, improves digestion, and supports overall health."
      },
      {
        "style": "Balanced Diet",
        "description": "A balanced diet includes a variety of food groups in appropriate proportions: proteins, carbohydrates, fats, vitamins, and minerals. It aims to provide all essential nutrients for optimal health.",
        "benefits": "Ensures adequate intake of essential nutrients, supports overall health, and maintains energy levels. It helps in preventing nutritional deficiencies and chronic diseases."
      }
    ],
    "techniques": [
      {
        "technique": "Meal Planning",
        "description": "Meal planning involves preparing meals in advance to ensure a balanced diet and prevent unhealthy eating choices. It helps in managing portion sizes and controlling food quality.",
        "benefits": "Saves time, reduces food waste, and supports healthier eating habits. It also helps in managing dietary needs and preferences effectively."
      },
      {
        "technique": "Mindful Eating",
        "description": "Mindful eating focuses on paying attention to the sensory experience of eating. It involves eating slowly, savoring flavors, and being aware of hunger and fullness cues.",
        "benefits": "Improves digestion, reduces overeating, and enhances the enjoyment of food. It helps in making conscious food choices and fostering a healthier relationship with food."
      },
      {
        "technique": "Hydration",
        "description": "Maintaining proper hydration involves drinking sufficient water throughout the day to support bodily functions and overall health.",
        "benefits": "Promotes optimal bodily functions, improves skin health, and enhances energy levels. It also supports digestion and helps in maintaining healthy weight."
      }
    ],
    "schedule": "To maintain a healthy diet, incorporate a variety of nutritious foods into your daily routine. Plan meals ahead of time, practice mindful eating, and ensure adequate hydration throughout the day. Consistency in making balanced food choices and managing portion sizes is key to achieving and sustaining good health. Consider incorporating regular physical activity to complement a healthy diet and support overall well-being."
  });

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: '500px',
            backgroundImage: "url(' https://images.telegram.hr/-sKsaK_uU3OHgsNSwvtN8i_-U3G33MAkcc4uyDSotGQ/preset:s1single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzMvMjAyMS8wNS85LWdvb2QtZm9vZC1zcGVjaWFsdGllcy1ieS1tYXRlLWphbmtvdmljLmpwZw.webp')",
          }}
          title="Good Food Image"
        ></div>
        <div className="max-w-full  mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                {GoodFoodData.title}
              </h1>
              <p className="text-gray-700 text-base my-5">
                {GoodFoodData.focus}
              </p>

              <h3 className="text-2xl font-bold my-5">Practice Type:</h3>
              {GoodFoodData.practiceType.map((type, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{type.style}</h4>
                  <p>{type.description}</p>
                  <p className="text-red-700 font-extrabold">
                    Benefits: {type.benefits}
                  </p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Techniques:</h3>
              {GoodFoodData.techniques.map((technique, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{technique.technique}</h4>
                  <p>{technique.description}</p>
                  <p className="text-red-700 font-extrabold">
                    Benefits: {technique.benefits}
                  </p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Suggested Schedule:</h3>
              <p>{GoodFoodData.schedule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodFood;
