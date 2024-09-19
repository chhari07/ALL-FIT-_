import React, { useState } from 'react';

const MentalHealth = () => {
  const [MentalHealthData] = useState({
    "title": "Meditation for Mindfulness and Clarity: A Holistic Approach",
    "focus": "Meditation is a powerful practice that goes beyond relaxation; it fosters mindfulness, mental clarity, and emotional balance. By consistently practicing meditation, individuals can enhance their focus, reduce stress, and cultivate a sense of inner peace. The practice involves focusing the mind, regulating the breath, and creating awareness of the present moment, leading to improved emotional regulation and overall mental well-being.",
    "practiceType": [
      {
        "style": "Mindfulness Meditation",
        "description": "This practice involves paying attention to the present moment without judgment. It encourages awareness of thoughts, emotions, and sensations, fostering a non-reactive mindset.",
        "benefits": "Reduces stress, enhances emotional regulation, and increases mental clarity. It also improves focus, attention, and self-awareness."
      },
      {
        "style": "Loving-Kindness Meditation (Metta)",
        "description": "Loving-kindness meditation focuses on cultivating feelings of compassion and kindness towards oneself and others. Practitioners silently repeat phrases of goodwill and imagine sending love to those around them.",
        "benefits": "Promotes emotional healing, reduces negative emotions, and increases empathy and compassion. It also helps improve social connections and emotional resilience."
      },
      {
        "style": "Transcendental Meditation",
        "description": "A technique where practitioners silently repeat a mantra for 20 minutes, twice a day. It allows the mind to settle into a state of restful alertness.",
        "benefits": "Reduces stress and anxiety, promotes deep relaxation, and improves mental focus. It also helps in reducing blood pressure and improving cardiovascular health."
      }
    ],
    "techniques": [
      {
        "technique": "Breath Awareness Meditation",
        "description": "This foundational technique involves focusing attention on the breath, observing its natural rhythm, and returning focus when the mind wanders.",
        "benefits": "Improves concentration, reduces mental clutter, and helps alleviate anxiety. It also promotes relaxation and increases awareness of the present moment."
      },
      {
        "technique": "Body Scan Meditation",
        "description": "A guided technique where practitioners bring awareness to different parts of the body, noticing sensations and tensions to promote relaxation.",
        "benefits": "Enhances body awareness, reduces physical tension, and alleviates stress. It also improves the connection between mind and body."
      },
      {
        "technique": "Walking Meditation",
        "description": "Combines the awareness of walking with mindfulness, focusing on the movement of the body and the sensation of each step.",
        "benefits": "Improves mindfulness during everyday activities, promotes physical and mental relaxation, and enhances awareness of the environment."
      }
    ],
    "schedule": "For optimal mental clarity and emotional balance, integrate meditation into your routine 10-20 minutes daily, preferably in the morning or evening. Consistent practice will gradually enhance mindfulness and emotional well-being. Meditation can be practiced on its own or as a complement to other wellness practices such as yoga or deep breathing. Ensure to create a quiet space to minimize distractions and promote deep focus."
  });

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: '500px',
            backgroundImage: "url(' https://aihms.in/blog/wp-content/uploads/2020/08/mental1.jpg   ')",
          }}
          title="Meditation Image"
        ></div>
        <div className="max-w-full  mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                {MentalHealthData.title}
              </h1>
              <p className="text-gray-700 text-base my-5">
                {MentalHealthData.focus}
              </p>

              <h3 className="text-2xl font-bold my-5">Practice Type:</h3>
              {MentalHealthData.practiceType.map((type, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{type.style}</h4>
                  <p>{type.description}</p>
                  <p className="text-red-700 font-extrabold">
                    Benefits: {type.benefits}
                  </p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Techniques:</h3>
              {MentalHealthData.techniques.map((technique, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{technique.technique}</h4>
                  <p>{technique.description}</p>
                  <p className="text-red-700 font-extrabold">
                    Benefits: {technique.benefits}
                  </p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Suggested Schedule:</h3>
              <p>{MentalHealthData.schedule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
