import CareerCard from "./components/CareerCard";
import SigninForm from "./components/SigninForm";
const careers = [
  {
    title: "Software Development",
    description:
      "Design, develop, and maintain software applications across various platforms and industries.",
    tags: ["JavaScript", "Python", "Java"],
  },
  {
    title: "Cybersecurity",
    description:
      "Protect systems, networks, and data from digital attacks and unauthorized access.",
    tags: ["Ethical Hacking", "Network Security"],
  },
  {
    title: "Data Science",
    description:
      "Extract insights from complex data sets to drive business decisions and strategy.",
    tags: ["Python", "SQL"],
  },
  {
    title: "Cloud Computing",
    description:"Design, implement, and manage cloud-based solutions for businesses and organizations.",
    tags: ["AWS","Azure"],
  },
  {
    title: "AI/ML Engineering",
    description: "Build intelligent systems and algorithms that can learn from and make decisions based on data.",
    tags: ["Python","TensorFlow"],
  },
  {
    title:"UI/UX Design",
    description: "Create intuitive and visually appealing user interfaces and experiences for digital products.",
    tags: ["Figma","Adobe XD"]
  }
];




function App() {
  return (
    <>
    <div className="career-list">
      {careers.map((career, index) => (
        <CareerCard
          key={index}
          title={career.title}
          description={career.description}
          tags={career.tags}
        />
      ))}
    </div>
    <SigninForm
    title="Welcome to Dalan"
     para="If You’re Lost in the Code, We’ll Help You Find the Road"
     btn="LOGIN"
    text="Don’t have an account yet?"
    Fields={[
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ]}
/>
  <SigninForm 
   title="Create New Account"
   para="If You’re Lost in the Code, We’ll Help You Find the Road"
   btn="Sign Up"
   text="Already have an account?"
   Fields={[
    { label: "Full Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" }
   ]}
  />
    </>
  );
  
}

export default App;
