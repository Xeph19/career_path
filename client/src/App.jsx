import CareerCard from "./components/CareerCard";
import LoginForm from "./components/LoginForm";
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
    <LoginForm 
        showEmailField={false}
        title="Welcome to Dalan"
        para="If You’re Lost in the Code, We’ll Help You Find the Road"
        btn="Login"
        text="Don’t have an account yet? Get started"
        Nameplaceholder="Enter your Username"
        Passwordplaceholder="Enter your Password"
      />

      <LoginForm 
        showEmailField={true}
        title="Create New Account"
        para="If You’re Lost in the Code, We’ll Help You Find the Road"
        btn="Sign up"
        text="Already have an account? Login Now"
        Nameplaceholder="Enter your Username"
        Emailplaceholder="Enter your Email"
        Passwordplaceholder="Enter your Password"
      />


    </>
  );
  
}
export default App;

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

