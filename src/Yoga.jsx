import React, { useState } from 'react';

const Yoga = () => {
  const [yogaData] = useState({
    title: 'Yoga for Flexibility and Strength: A Holistic Approach',
    focus: `Yoga is a comprehensive practice that offers far more than just physical exercise. It provides a holistic approach to enhancing both flexibility and strength. Through consistent practice, yoga can improve your body awareness, posture, and overall well-being. This practice integrates physical postures with breath control, meditation, and mindful awareness, leading to a balanced development of both the body and mind. Yoga is particularly beneficial for those seeking to increase their physical strength, improve flexibility, and cultivate mental calm.`,
    practiceType: [
      {
        style: 'Vinyasa Yoga',
        description: `Known for its dynamic and flowing sequences, Vinyasa Yoga synchronizes breath with movement. This style emphasizes a continuous flow from one pose to the next, incorporating both strength-building and flexibility-enhancing postures.`,
        benefits: `Improves cardiovascular endurance, increases muscle strength, and enhances flexibility through its fluid movements.`,
      },
      {
        style: 'Hatha Yoga',
        description: `Hatha Yoga focuses on physical postures (asanas) and breath control (pranayama). It’s often slower-paced compared to other styles, allowing for a deep exploration of each pose and its benefits.`,
        benefits: `Enhances physical strength, flexibility, and alignment. It’s also effective for stress reduction and promoting relaxation.`,
      },
      {
        style: 'Ashtanga Yoga',
        description: `A more rigorous form of yoga, Ashtanga follows a set sequence of poses performed in a specific order. This style is characterized by its emphasis on strength, flexibility, and stamina.`,
        benefits: `Builds significant muscle strength, increases flexibility, and improves endurance. It also fosters discipline and mental focus through its structured practice.`,
      },
    ],
    poses: [
      {
        pose: 'Downward Dog (Adho Mukha Svanasana)',
        description: `This foundational pose involves lifting the hips and straightening the legs to form an inverted V-shape. It stretches the hamstrings, calves, and spine while strengthening the arms and shoulders.`,
        benefits: `Enhances flexibility in the lower body, strengthens the upper body, and improves overall posture. It also helps alleviate back pain and reduces stress.`,
      },
      {
        pose: 'Warrior Pose (Virabhadrasana)',
        description: `A standing pose with several variations, Warrior Pose involves lunging forward with one leg while the other leg is extended back, and arms are outstretched. It engages the legs, glutes, core, and arms.`,
        benefits: `Builds strength in the legs, glutes, and core while improving balance and stability. It also boosts confidence and helps with focus.`,
      },
      {
        pose: 'Tree Pose (Vrikshasana)',
        description: `A balancing pose where one foot is placed on the inner thigh or calf of the standing leg while the arms are extended overhead or in a prayer position. It challenges your balance and stability.`,
        benefits: `Improves balance and coordination, strengthens the legs and core, and enhances mental focus and concentration. It also aids in developing flexibility in the hips.`,
      },
    ],
    schedule: `For optimal results, integrate yoga into your routine 4-5 days a week, with each session lasting 45-60 minutes. This regular practice allows your body to gradually adapt and improve its strength and flexibility. Yoga sessions can be complemented with other forms of exercise such as cardio or strength training for a balanced fitness regimen. Ensure that you include rest days to allow your body to recover and prevent overtraining.`,
  });

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: '500px',
            backgroundImage: "url('https://images.indianexpress.com/2023/03/yoga-for-beginners.jpg?w=640')",
          }}
          title="Yoga Image"
        ></div>
        <div className="max-w-full   mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900  font-extrabold   text-3xl mb-2">
                {yogaData.title}
              </h1>
              <p className="text-gray-700 text-base my-5">
                {yogaData.focus}
              </p>

              <h3 className="text-2xl font-bold my-5">Practice Type:</h3>
              {yogaData.practiceType.map((type, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{type.style}</h4>
                  <p>{type.description}</p>
                  <p className="text-red-700  font-extrabold">
                    Benefits: {type.benefits}
                  </p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Examples of Poses:</h3>
              {yogaData.poses.map((pose, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-xl font-semibold">{pose.pose}</h4>
                  <p>{pose.description}</p>
                  <p className="text-red-700  font-extrabold">
                    Benefits: {pose.benefits}
                  </p>
                </div>
              ))}

              <h3 className="text-2xl font-bold my-5">Suggested Schedule:</h3>
              <p>{yogaData.schedule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
