import React, { useState } from 'react';
import './Workout.css';


const goalsData = {
  goals: [
    {
      name: "Muscle Building (Hypertrophy)",
      focus: "Increase muscle mass",
      workout_type: "Weightlifting with moderate-heavy weights, 8-12 reps, 3-4 sets per exercise",
      examples: ["Bench press", "Squats", "Deadlifts", "Shoulder press", "Bicep curls"],
      schedule: "4-5 days per week (split routine)",
      image_url: "  https://outlift.com/wp-content/uploads/2020/12/hypertrophy-training-1024x584.jpg  "
    },
    {
      name: "Strength Training",
      focus: "Increase overall strength and power",
      workout_type: "Low-rep, high-weight exercises, 4-6 reps, 3-5 sets per exercise",
      examples: ["Powerlifting (bench press, squats, deadlifts)", "Olympic lifts (cleans, snatches)"],
      schedule: "3-4 days per week",
      image_url: " https://as1.ftcdn.net/v2/jpg/02/82/19/18/1000_F_282191865_VQfRHmOGHK9HcxpBt66dYcFFiQSlUE8p.jpg "
    },
    {
      name: "Fat Loss (Cutting)",
      focus: "Burn fat while maintaining muscle",
      workout_type: "Combination of cardio and strength training, higher reps (12-15), moderate weights",
      examples: ["Circuit training", "HIIT (High-Intensity Interval Training)", "Steady-state cardio"],
      schedule: "5-6 days per week",
      image_url: " https://longevity.technology/lifestyle/wp-content/uploads/2023/07/personholding-pair-of-scissors-attempting-to-cut-the-fat-in-the-stomach_Cr_anatoliy_gleb_Envato.jpg   "
    },
    {
      name: "Endurance Training",
      focus: "Improve cardiovascular and muscular endurance",
      workout_type: "Long-duration, low-intensity exercises, high reps (15+), or long cardio sessions",
      examples: ["Distance running", "Cycling", "Swimming", "High-rep circuit training"],
      schedule: "4-6 days per week",
      image_url: "  https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/12/cardio-or-weights-first-scaled.jpg?w=1400&ssl=1"
    },
    {
      name: "Functional Fitness",
      focus: "Improve movement, flexibility, and overall athleticism",
      workout_type: "Full-body workouts, bodyweight exercises, plyometrics, balance work",
      examples: ["Burpees", "Kettlebell swings", "Box jumps", "Pull-ups", "Yoga"],
      schedule: "3-5 days per week",
      image_url: " https://www.technogym.com/wpress/wp-content/uploads/2020/04/header_functional_training_classes.jpg"
    },
    {
      name: "Mobility and Flexibility",
      focus: "Improve range of motion and reduce injury risk",
      workout_type: "Stretching, yoga, Pilates, mobility drills",
      examples: ["Static and dynamic stretching", "Foam rolling", "Yoga poses"],
      schedule: "3-4 days per week (can be combined with other goals)",
      image_url: "https://www.specsavers.co.za/images/cmsimages/images/Blog/flexibility-main.jpg"
    },
    {
      name: "Sports-Specific Training",
      focus: "Enhance performance in a particular sport",
      workout_type: "Movements that mimic the sport, agility drills, plyometrics, and strength exercises specific to the sport's needs",
      examples: ["Agility ladder drills for soccer", "Explosive box jumps for basketball", "Resistance sprints for football"],
      schedule: "4-6 days per week, depending on sport and season",
      image_url: " https://www.superfituk.co.uk/wp-content/uploads/shutterstock_2124644804-scaled.jpg"
    },
    {
      name: "Rehabilitation & Recovery",
      focus: "Recover from injury or prevent injury",
      workout_type: "Low-impact exercises, stability work, and corrective exercises",
      examples: ["Resistance band work", "Physical therapy exercises", "Swimming", "Light stretching"],
      schedule: "3-5 days per week, depending on injury and recovery status",
      image_url: "   "
    },
    {
      name: "Body Recomposition",
      focus: "Lose fat while gaining muscle simultaneously",
      workout_type: "Moderate weights with medium reps (8-10), compound movements, mixed with some cardio",
      examples: ["Compound lifts (squats, deadlifts)", "Moderate cardio (cycling, jogging)", "Core exercises"],
      schedule: "4-5 days per week (balanced between lifting and cardio)",
      image_url: "https://outlift.com/wp-content/uploads/2023/11/body-recomposition-how-to-recomp-1024x576.webp   "
    }
  ]
};


const Workout = () => {
  const [selectedGoal, setSelectedGoal] = useState('All');

  // Filter goals based on the dropdown selection
  const filteredGoals = selectedGoal === 'All'
    ? goalsData.goals
    : goalsData.goals.filter(goal => goal.name === selectedGoal);

  return (
    <div>
      <h1 className='text-white bg-black text-center py-4'>Workout Goals</h1>

      {/* Dropdown Filter */}
      <select
        className="bg-black text-white w-72 block mx-auto mb-4"
        onChange={(e) => setSelectedGoal(e.target.value)}
        value={selectedGoal}
      >
        <option value="All">All</option>
        {goalsData.goals.map((goal, index) => (
          <option key={index} value={goal.name}>
            {goal.name}
          </option>
        ))}
      </select>

      {/* Display Filtered Goals */}
      <div className="card-container">
        <div className="card-grid">
          {filteredGoals.map((goal, index) => (
            <div key={index} className="card">
              <div className="image" style={{ backgroundImage: `url(${goal.image_url})` }}></div>
              <div className="content">
                <a href="#">
                  <span className="title">{goal.name}</span>
                </a>
                <p className="desc">
                  <strong>Focus:</strong> {goal.focus}
                  <br />
                  <strong>Workout Type:</strong> {goal.workout_type}
                </p>
                <a className="action" href="#">
                  Find out more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;